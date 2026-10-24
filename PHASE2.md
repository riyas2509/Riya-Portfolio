# Phase 2 — page structure and evidence

The existing pastel palette, type, clay SVGs, procedural 3D workspace, illustrated story, lab interactions, project art, buttons and motion preferences are retained. New styles only support route layouts, portraits, compact previews and evidence diagrams.

## Page map

- `/`: concise introduction, real portrait, original workspace, flagship and three selected projects, three linked themes, two recognition previews, contact invitation.
- `/work`: the same dataset and five shareable career filters.
- `/work/[slug]`: eight case-study routes. EchoNote has an interactive feature explorer, conceptual journey, workflow and expandable decisions. AMA separates personal contributions from collection scope and uses explicitly labeled portfolio summaries. EchoOS and LifeCapital remain concepts. Four historical projects remain verification pending.
- `/about`: real portrait and existing illustrated journey.
- `/curiosity-lab`: full desk, process and evidence-linked toolbox.
- `/achievements`: ten supplied badge graphics, levels, expandable collection and approved Young Turks certificate preview/PDF.
- `/contact`: existing envelope experience and working professional links.

Old `/projects/[slug]` links permanently redirect to `/work/[slug]`, preserving queries. Root fragment links and old root career-filter URLs are translated to the relevant new page in the browser.

## Evidence review

All 45 reference files were inventoried. The private review lives in `.private/evidence/REVIEW.md`; extracted source text and previews remain private. Both `.private/` and `reference-materials/` are excluded from Git and Vercel upload. No AMA files are in `public/`.

The certificate supports the name, 98.47 percentile and 19 October 2026 date. Rank 6,111 and Round 2 selection are explicitly self-reported. Public certificate display was approved in this conversation.

Badge artwork supports the titles and levels, not named earned ownership. Ownership is owner-confirmed; issuer verification URLs are missing. No professional-certification claim is made.

The older portfolio is an image-only DOCX with 32 portfolio-page screenshots. It provides historical context for RailQ, Instagram redesign, OCR and stock trend exploration, but no working implementation proof or authentic product screenshots. The old EchoOS LIVE console claim conflicts with the newer marketplace concept and was not imported. Unsupported old counts and awards remain unpublished.

The 31 AMA DOCX reports were text-extracted. The 25-page image-only Oil & Gas PDF was visually reviewed; reliable OCR was unavailable. The wider collection spans eight sectors and does not establish personal authorship across them. Company-specific findings, confidential material and modeled numeric results were not published.

## Missing evidence

Actual product screenshots, prototype/demo links, EchoNote implementation evidence, public badge verification URLs and approved resume PDFs remain unavailable. Conceptual visuals are clearly labeled. Resume slots remain prepared in `src/data/portfolio.ts`; no broken downloads are displayed.

## Files and local review

Routes: `src/app/(universe)/`; legacy redirect: `src/app/projects/[slug]/page.tsx`.
Content: `src/data/portfolio.ts`, `credentials.ts`, `case-stories.ts`.
Shared UI: `portfolio.tsx`, `little-universe.tsx`, `credentials.tsx`, `site-frame.tsx`, `legacy-anchors.tsx`, `destination.tsx`, `case-visuals.tsx`, `project-case-study.tsx`.
Layout extension: `src/app/multipage.css`, imported by `globals.css`. Discovery: `sitemap.ts`.
Privacy exclusions: `.gitignore`, `.vercelignore`, `eslint.config.mjs`.
Assets: `public/portrait/` and `public/credentials/` only approved portrait, badge art and certificate.

Run `npm run dev -- --port 3100` and visit http://localhost:3100. Production: `npm run build`, then `npm run start -- --port 3100`. Run `npm test -- http://localhost:3100` against either server. Do not run development and production servers on the same port.

No deployment was initiated.

Validation: ESLint, standalone TypeScript, production build and six existing motion tests pass. Production smoke tests pass for 14 pages, 111 fragment targets, legacy redirects with query preservation, public assets and private-source boundaries. See QA.md for browser coverage.
