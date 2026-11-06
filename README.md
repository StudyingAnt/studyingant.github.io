# Joon Hyun Song — personal academic website

A minimal, static Astro website hosted on GitHub Pages at
https://www.joonhyunsong.kr. No account, database, or server is required.

## Development

Use Node.js 24 (see `.node-version`).

```sh
npm ci
npm run dev
```

Before opening a pull request:

```sh
npm run check
npm run build
npx playwright install chromium
npm test
```

`npm run preview` serves the generated `dist/` directory. On a fresh Linux system,
Playwright may need `npx playwright install --with-deps chromium`.

## Content and languages

- `src/components/Home.astro`: homepage structure.
- `src/data/languages.ts`: English source copy and translations, in display order:
  English, Korean, Chinese (Simplified), Spanish, French, Russian, Arabic,
  Japanese, German, Persian.
- `src/layouts/Base.astro`: metadata, navigation, language selector, and footer.
- `src/styles/global.css`: responsive styles, including RTL support.
- `content/abm-backup/`: original English OAuth application information and privacy
  policy. These files are imported directly by the matching Astro routes.
- `public/CNAME`: preserved custom-domain value, `joonhyunsong.kr`. The configured
  canonical origin remains `https://www.joonhyunsong.kr`, as in the previous site.

English lives at `/`; other homepages use `/ko/`, `/zh/`, `/es/`, `/fr/`, `/ru/`,
`/ar/`, `/ja/`, `/de/`, and `/fa/`. Language switching preserves the section hash.
Every homepage is static and can be read without JavaScript; the select control
uses JavaScript for navigation. All translated homepages are labelled as AI
translations. Korean uses the owner's supplied motto; other Korean wording and
all other translations still need review. The backup and privacy pages remain
English, with `EN` labels on their footer links.

Translations are committed copy, not generated during visits or deployment.
Edit English as the editorial source, then deliberately update affected
translations. Never overwrite manually corrected text with bulk AI output.
No translation API, API key, scheduled translation job, or external font service
is used. The site does not include analytics or collect form submissions.

## Deployment and migration

Open a PR targeting `main`. GitHub Actions checks types, builds the site, and
runs browser tests on PRs without deploying. After review and merge, the same
workflow uploads `dist/` and deploys using the existing GitHub Pages environment.
It also supports manual runs. Preview locally for review; no Cloudflare service
or account is needed.

This replaces Quartz. The Quartz implementation, upstream documentation, and
upstream-only workflows were removed; they remain available in Git history.
The existing `/abm-backup/` and `/abm-backup/privacy/` addresses and original
Markdown contents are preserved. The website only documents the owner's local
rclone workflow; it neither executes backups nor handles OAuth credentials.
Local rclone configuration and Google OAuth console settings are outside this
repository and are not changed by deployment.

The site intentionally includes no unverified affiliations, degrees, publication
list, biography, or contact address. Add those only from owner-provided facts.
