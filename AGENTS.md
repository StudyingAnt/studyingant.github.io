# Repository conventions

- This is a static Astro personal academic website. The owner explicitly approved
  migrating from Quartz. Use the checked-in Node version and npm lockfile; avoid
  framework or dependency upgrades unrelated to the task.
- Keep English at `/` and the default experience in English. Keep the language
  order in `src/data/languages.ts`: en, ko, zh, es, fr, ru, ar, ja, de, fa.
- Other languages use dedicated static paths. Preserve page and section targets
  during switching. Apply `lang` and RTL direction correctly for Arabic/Persian.
- Korean is the editorial source; English remains the default public route.
  The owner corrects both Korean and English, so neither language displays AI
  translation labels or original-language prompts. Preserve owner corrections.
  Other languages show a small persistent AI-translation notice with references
  to the matching Korean and English page. Keep it visible while scrolling and
  reserve its height so it does not hide the footer. Preserve the current article
  and section when following reference links. Translations are committed copy;
  never regenerate on visits or overwrite owner edits during builds.
- Scientific motto: **Humanity in Science, Science for Humanity.** Owner's Korean
  wording: **사람이 담긴 과학, 사람을 향한 과학.** Preserve both meanings: humanistic
  and ethical scientific practice respecting human dignity, and science serving
  people. Do not reframe this as technological solutionism, enhancement, or
  transhumanism.
- Keep the design minimal, professional, accessible, and responsive. Avoid
  invented biography, publications, affiliations, metrics, or contact details.
- Use a pure white (`#ffffff`) page background, as requested by the owner.
  Do not replace it with cream, ivory, or other warm off-white backgrounds.
- Use self-hosted Noto Sans throughout, including headings, navigation, and
  policy pages. Use Noto Sans KR/SC/JP and Noto Sans Arabic for the corresponding
  scripts; keep font license notices in `public/fonts/licenses/`.
- Lead with a brief About section adapted from the owner's lab-site introduction:
  computational biology, evolution, robustness/evolvability, cancer multiome
  analysis/modeling, scientific philosophy/writing, and learning languages.
  Use the owner-approved portrait at `public/images/joon-hyun-song.jpg`, preserving
  its natural 4:5 proportions on desktop and mobile without cropping or AI edits.
  Korean greeting: “안녕하세요, 과학하고 글쓰는 사람입니다.” Korean display name:
  “송준현”. Use the Korean name in the page title, header, hero, and footer on
  Korean pages; use Joon-Hyun Song elsewhere. About precedes detailed research;
  retain existing section anchors. Add only owner-supplied career facts to
  `src/data/profile.ts`; empty career data stays hidden.
- Personal interests and hobbies belong on this site, except worldbuilding.
  Worldbuilding is linked only through `profile.worldbuildingSite` to
  https://www.khartllan.com/; do not publish worldbuilding material here.
- The owner is currently a Ph.D. student, not a completed Ph.D. or an assumed
  doctoral candidate. Career and published citations come from the supplied CV.
  Show the Department of Applied Mathematics and Statistics and the Computational
  Biology track separately. Use "Ph.D. student" rather than "Ph.D. studies" or an
  awarded Ph.D.; no redundant "ongoing" suffix is needed. The owner confirmed
  their track, which is also listed in the department's official graduate program.
  The private preliminary report is reference-only for broad research interests;
  do not commit its PDF, extracted text, figures, unpublished findings, or detailed
  hypotheses. Do not publish the CV PDF, phone number, or referees' contact data.
- Protect `/abm-backup/` and `/abm-backup/privacy/`, their English original files
  under `content/abm-backup/`, policy links, application identity, and domain.
  These are OAuth documentation pages, not a public backup service. Do not alter
  their policy text or silently translate it without an explicit content request.
- Preserve `public/CNAME` and the canonical origin. No OAuth credentials,
  research materials, backup jobs, or local rclone configuration belong here.
- Keep GitHub Pages deployment after `main` merges. PRs must validate without
  deploying. All changes go through a reviewable PR. The owner has given standing
  authorization to merge and deploy requested website changes once the diff has
  been reviewed and required checks pass; do not ask for repeated confirmation.
  Complete PR creation, validation, merge, deployment monitoring, and live-page
  verification in the same task unless the owner explicitly requests a draft,
  review-only work, or no deployment.
- Run `npm ci`, `npm run check`, `npm run build`, and `npm test` for route,
  framework, content, or layout changes. Install Playwright Chromium if needed.
  Browser tests must cover protected policy content/links, all languages,
  language switching, RTL, mobile overflow, and keyboard access.
