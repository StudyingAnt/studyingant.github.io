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
- `src/data/profile.ts`: CV-backed name, education, published works, professional
  email, ORCID, and the external Khartllan link. Personal interests/hobbies belong
  here; only worldbuilding belongs off this site. Do not invent biographical facts.
- `src/data/academic.ts`: research interests, methods, degree labels, and personal
  interests in ten languages. Broad directions are based on owner-supplied
  sources; no unpublished results or report extracts are published.
- `src/data/introduction.ts`: Korean-source greeting, lab-profile-based biography,
  expanded research directions in ten languages.
  About leads the page; detailed research, background, writing, scientific
  philosophy, and personal interests follow.
- `public/images/joon-hyun-song.jpg`: the owner-approved 1080×1350 portrait,
  served locally at its natural 4:5 proportions. Original photo retrieved from
  the owner's [lab profile](https://renaissance.stonybrookmedicine.edu/damaghi-lab/research_team)
  and used unchanged. No AI image editing or external image hotlinking is used.
- The Ph.D. entry denotes a current student in Applied Mathematics and Statistics,
  with Computational Biology shown as a track. The full department name is
  Department of Applied Mathematics and Statistics. The track is verified in the
  [official program](https://www.stonybrook.edu/ams/academics/graduate/computational-biology.html).
- `src/data/sections.ts`: section labels and short-note descriptions.
- `src/data/translation.ts`: persistent AI-translation notices for the eight
  languages other than Korean and English, linked to matching reference pages.
- `src/data/writing.ts`: short notes with localized content. The first note uses
  the owner's existing two philosophical principles. Notes have static routes
  at `/writing/<slug>/` and `/<language>/writing/<slug>/`.
- `src/data/languages.ts`: Korean-source copy and translations, in display order:
  English, Korean, Chinese (Simplified), Spanish, French, Russian, Arabic,
  Japanese, German, Persian.
- `src/layouts/Base.astro`: metadata, navigation, language selector, and footer.
- `src/styles/global.css`: responsive styles, including RTL support.
- Noto Sans variable fonts are self-hosted through Fontsource packages. Noto Sans
  KR, SC, JP, and Arabic cover the site's other scripts. Browser requests load
  the needed Unicode subsets from this site; there is no Google Fonts request.
  Redistributed font licenses are under `public/fonts/licenses/`.
- `content/abm-backup/`: original English OAuth application information and privacy
  policy. These files are imported directly by the matching Astro routes.
- `public/CNAME`: preserved custom-domain value, `joonhyunsong.kr`. The configured
  canonical origin remains `https://www.joonhyunsong.kr`, as in the previous site.

English lives at `/`; other homepages use `/ko/`, `/zh/`, `/es/`, `/fr/`, `/ru/`,
`/ar/`, `/ja/`, `/de/`, and `/fa/`. Language switching preserves the current note
or homepage section hash. Reciprocal language metadata points to matching pages.
Every homepage is static and can be read without JavaScript; the select control
uses JavaScript for navigation. Korean and English are maintained by the owner
and display no AI labels. Other languages have a small fixed notice referring
readers to Korean or English, on homepages and notes alike. The notice reserves
its measured height to keep footer links accessible. Korean pages show the name
송준현. The backup and privacy pages retain their English originals, with `EN`
labels on their footer links.

Translations are committed copy, not generated during visits or deployment.
Use Korean as the editorial source, adapt natural English, and deliberately
update the other translations. The owner corrects Korean and English directly.
Never overwrite manually corrected text with bulk AI output.
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

Career and selected published citations follow the owner-supplied CV; current
Ph.D. student status and snMultiome/ABM interests were confirmed by the owner.
Private PDFs and extracted text remain outside the repository. Do not publish
the preliminary report, CV PDF, unpublished results, phone number, or referees’
contact details. The report informs broad research directions only.
