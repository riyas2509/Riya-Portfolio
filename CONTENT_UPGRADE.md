# Content-only upgrade — 24 October 2026

## Audit and implementation plan

The existing pastel design is retained. No stylesheets, artwork, 3D scenes, transition infrastructure, navigation or contact layout need changing.

| Area | Existing source | Content change |
| --- | --- | --- |
| Hero and identity | `src/components/little-universe.tsx`, `src/data/portfolio.ts` | Concise design/strategy/innovation positioning; student/founder context |
| Project cards and filters | `src/components/portfolio.tsx`, `src/data/portfolio.ts` | Short introductions, accurate statuses, per-project evidence destinations; preserve filtering and URL behavior |
| Case studies | `src/app/projects/[slug]/page.tsx` | Enrich EchoNote and AMA using existing sections and disclosures |
| Capability explorer | `src/components/case-interactions.tsx` | Product-area wording; distinguish reported scope from verified implementation |
| Story and skills | `src/components/little-universe.tsx`, `src/data/portfolio.ts` | Keep five illustrated milestones; enrich the final learning reflection; three focused skill groups |
| Credentials | `src/data/credentials.ts`, `src/components/credentials.tsx` (new) | Ten skill badges, three featured; Young Turks percentile and explicitly self-reported rank; existing card/disclosure styling |
| Metadata | `src/app/layout.tsx`, `src/app/opengraph-image.tsx` | Copy only; retain metadata structure and image styling |

Contact email, LinkedIn, GitHub and portfolio-domain URLs remain as supplied. Five resume slots are null; no PDFs are present. All eight project routes remain. Unverified legacy achievements stay unpublished. The animation, artwork and stylesheet files were hashed before edits for comparison afterward.

## Evidence comparison before edits

- Hero previously emphasized broad AI product building. The new primary direction is AI Product Design & UX Strategy, with adjacent product management and innovation interests and supporting solutions/research directions.
- EchoNote already lists six owner-reported implemented capabilities. This repository contains the portfolio, not EchoNote's product implementation. No independent functional evidence or product screenshots were found. Preserve all six areas but label them as owner-described scope requiring implementation evidence; do not promote them as verified built features. Deck creation remains planned.
- AMA previously said “surveys & interviews” and “contribution to a research paper.” The newer, more precise account confirms survey/interview design and contributions toward a broader research paper, without claiming sole authorship, publication or conducted interview counts. Broader industry collection scope is not personal authorship.
- Existing EchoOS and LifeCapital concepts remain concepts; no live marketplace or financial advice service is inferred.
- RailQ, Instagram Feature Redesign, OCR Model and Stock Market Prediction remain unchanged and pending verification.

## Evidence available and missing

The user's current message explicitly confirms the education, founder role, internship contributions and credential details. Ten Google Cloud skill badges are owner-confirmed, with one intermediate and nine introductory levels. Young Turks percentile 98.47 is described by the owner as certificate-verified, dated 19 October 2026; rank 6,111 and Round 2 selection are explicitly self-reported. No certificate was inspected in this workspace, so no independent-verification claim is made.

No AMA ZIP, older portfolio, credential URLs, badge images, Young Turks certificate, product screenshots or resume PDFs were found. No confidential files were copied to `public/`. The confidential collection is not published or treated as evidence of personal authorship or independently verified projections.

No additional approval is needed for the personal statements explicitly confirmed in the user's request. Before adding public supporting assets: supply badge URLs/images and the Young Turks certificate; independently verify EchoNote implementation claims; obtain explicit permission for any AMA artifact. Older unverified achievements and project results still require evidence before promotion. No deployment is authorized or performed.

## Validation

- Full lint, standalone TypeScript check, formatting and production build passed.
- Existing six route-math tests passed; these are retained legacy tests, not credential-verification tests.
- Route smoke check: nine primary pages, 181 internal fragment links, metadata assets and unknown-project 404 passed.
- Browser checked hero copy, featured credentials, all ten badge names/levels, keyboard opening of the badge disclosure, Young Turks attribution, AMA's four-theme framework and nine contribution statements.
- All five career lenses were rechecked for URL state, project ordering and per-project evidence destinations. EchoNote's Action items control retains the scope/evidence distinction; presentation deck creation remains explicitly planned. The new Gemini API learning link reaches the credentials collection using a native in-page anchor.
- Mobile hero, credentials and AMA content were checked at 320px with no horizontal overflow observed.
- Byte hashes match the pre-edit baseline for all CSS, shared artwork, 3D scenes, motion preference/feedback helpers, route-transition template and process-animation infrastructure. No files were added to `public/`.

Modified source files are exactly those named in the table above (nine files), plus this audit report. The local preview remains at `http://localhost:3100/`.
