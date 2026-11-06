import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';

export default defineConfig({
  site: 'https://www.joonhyunsong.kr',
  output: 'static',
  trailingSlash: 'always',
  markdown: { processor: satteri({ features: { smartPunctuation: false } }) },
});
