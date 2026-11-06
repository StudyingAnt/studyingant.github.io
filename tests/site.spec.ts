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
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('select option')).toHaveText(languages.map((entry) => entry.name));
    await expect(page.locator('link[rel="alternate"]')).toHaveCount(11);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    for (const id of ['philosophy', 'research', 'contact']) {
      await expect(page.locator(`#${id}`)).toHaveCount(1);
    }
  }
});

test('language switching keeps the current section and English remains the default', async ({ page }) => {
  await page.goto('/#research');
  await expect(page.locator('h1')).toHaveText('Humanity in Science, Science for Humanity.');
  await page.selectOption('#language', '/ko/');
  await expect(page).toHaveURL(/\/ko\/#research$/);
  await expect(page.locator('h1')).toHaveText('사람이 담긴 과학, 사람을 향한 과학.');
  await page.selectOption('#language', '/ar/');
  await expect(page).toHaveURL(/\/ar\/#research$/);
  await page.selectOption('#language', '/');
  await expect(page).toHaveURL(/\/#research$/);
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
