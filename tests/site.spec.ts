import { test, expect } from '@playwright/test';
import { readFileSync } from 'node:fs';
import { languages, homePath } from '../src/data/languages';

test('all languages render, have reciprocal links, and fit mobile screens', async ({ page }) => {
  for (const language of languages) {
    await page.setViewportSize({ width: 375, height: 812 });
    const response = await page.goto(homePath(language.code));
    expect(response?.status()).toBe(200);
    await expect(page.locator('html')).toHaveAttribute('lang', language.code === 'zh' ? 'zh-CN' : language.code);
    await expect(page.locator('html')).toHaveAttribute('dir', ['ar', 'fa'].includes(language.code) ? 'rtl' : 'ltr');
    await expect(page.locator('h1')).toHaveText('Joon-Hyun Song');
    await expect(page.locator('.hero .research-focus')).toBeVisible();
    await expect(page.locator('select option')).toHaveText(languages.map((entry) => entry.name));
    await expect(page.locator('link[rel="alternate"]')).toHaveCount(11);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    for (const id of ['philosophy', 'research', 'about', 'writing', 'interests', 'contact']) {
      await expect(page.locator(`#${id}`)).toHaveCount(1);
    }
  }
});

test('language switching keeps the current section and English remains the default', async ({ page }) => {
  await page.goto('/#research');
  await expect(page.locator('#motto')).toHaveText('Humanity in Science, Science for Humanity.');
  await page.selectOption('#language', '/ko/');
  await expect(page).toHaveURL(/\/ko\/#research$/);
  await expect(page.locator('#motto')).toHaveText('사람이 담긴 과학, 사람을 향한 과학.');
  await page.selectOption('#language', '/ar/');
  await expect(page).toHaveURL(/\/ar\/#research$/);
  await page.selectOption('#language', '/');
  await expect(page).toHaveURL(/\/#research$/);
});

test('research leads the homepage and notes switch to the same translated article', async ({ page }) => {
  await page.goto('/');
  const research = await page.locator('#research').boundingBox();
  const philosophy = await page.locator('#philosophy').boundingBox();
  expect(research!.y).toBeLessThan(philosophy!.y);
  await expect(page.locator('.career dl > div')).toHaveCount(3);
  await expect(page.locator('.position')).toContainText('Ph.D. student');
  await expect(page.locator('.position')).toContainText('Stony Brook University');
  await expect(page.locator('#research')).toContainText('Single-nucleus multiome analysis');
  await expect(page.locator('#research')).toContainText('Agent-based modeling');
  await expect(page.locator('a[href="https://www.khartllan.com/"]')).toHaveCount(1);
  await expect(page.locator('.publications a')).toHaveCount(2);
  await expect(page.locator('a[href$=".pdf"]')).toHaveCount(0);
  for (const language of languages) {
    await page.goto(homePath(language.code));
    await page.locator('.note-card').click();
    await expect(page).toHaveURL(new RegExp(`${homePath(language.code)}writing/humanity-in-science/$`));
    await expect(page.locator('article p')).toHaveCount(3);
    await expect(page.locator('link[rel="alternate"]')).toHaveCount(11);
    for (const href of await page.locator('link[rel="alternate"]').evaluateAll((links) => links.map((link) => (link as HTMLLinkElement).href))) {
      expect(href).toContain('/writing/humanity-in-science/');
    }
    await expect(page.locator('.back-link')).toHaveAttribute('href', `${homePath(language.code)}#writing`);
  }
  await page.selectOption('#language', '/ko/writing/humanity-in-science/');
  await expect(page).toHaveURL(/\/ko\/writing\/humanity-in-science\/$/);
  await expect(page.locator('h1')).toHaveText('사람이 담긴 과학, 사람을 향한 과학.');
});

test('Noto fonts load from this site for every script, on headings and body', async ({ page }) => {
  for (const [path, family] of [
    ['/', 'Noto Sans'], ['/ko/', 'Noto Sans KR'], ['/zh/', 'Noto Sans SC'],
    ['/ja/', 'Noto Sans JP'], ['/ar/', 'Noto Sans Arabic'], ['/fa/', 'Noto Sans Arabic'], ['/ru/', 'Noto Sans'],
  ]) {
    const failedFonts: string[] = [];
    const watchFonts = (response: import('@playwright/test').Response) => {
      if (response.url().includes('.woff2') && !response.ok()) failedFonts.push(response.url());
    };
    page.on('response', watchFonts);
    await page.goto(path);
    await page.evaluate(() => document.fonts.ready);
    const session = await page.context().newCDPSession(page);
    await session.send('DOM.enable');
    await session.send('CSS.enable');
    const { root } = await session.send('DOM.getDocument');
    for (const selector of ['.research-focus', '.intro']) {
      const { nodeId } = await session.send('DOM.querySelector', { nodeId: root.nodeId, selector });
      const { fonts } = await session.send('CSS.getPlatformFontsForNode', { nodeId });
      expect(fonts.some((font) => font.isCustomFont && font.familyName.includes(family))).toBe(true);
    }
    await session.detach();
    expect(failedFonts).toEqual([]);
    const fontURLs = await page.evaluate(() => performance.getEntriesByType('resource').map((entry) => entry.name).filter((url) => url.includes('.woff2')));
    expect(fontURLs.length).toBeGreaterThan(0);
    expect(fontURLs.every((url) => new URL(url).origin === new URL(page.url()).origin)).toBe(true);
    await expect(page.locator('h1')).toHaveCSS('font-family', /Noto Sans/);
    await expect(page.locator('body')).toHaveCSS('font-family', /Noto Sans/);
    await expect(page.locator('html')).toHaveCSS('background-color', 'rgb(255, 255, 255)');
    page.off('response', watchFonts);
  }
});

test('protected backup pages keep every original paragraph and link', async ({ page }) => {
  for (const path of ['abm-backup', 'abm-backup/privacy']) {
    const response = await page.goto(`/${path}/`);
    expect(response?.status()).toBe(200);
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    const markdown = readFileSync(`content/${path}/index.md`, 'utf8').replace(/^---[\s\S]*?---\s*/, '');
    for (const paragraph of markdown.split(/\n\s*\n/)) {
      const plain = paragraph.replace(/^#{1,6} /, '').replace(/`/g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\s+/g, ' ').trim();
      if (plain) await expect(page.locator('article')).toContainText(plain);
    }
    const links = [...markdown.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)].map((match) => match[1]);
    for (const href of links) await expect(page.locator(`article a[href="${href}"]`)).toHaveCount(1);
    await expect(page.locator('h1')).toHaveCount(1);
  }
  expect(readFileSync('dist/CNAME', 'utf8').trim()).toBe('joonhyunsong.kr');
});

test('desktop layout, keyboard navigation, and unknown routes', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto('/');
  await page.keyboard.press('Tab');
  await expect(page.locator('.skip-link')).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('#main')).toBeFocused();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  const response = await page.goto('/not-a-page/');
  expect(response?.status()).toBe(404);
  await expect(page.locator('h1')).toHaveText('Page not found');
});
