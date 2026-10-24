# Riya Shah — Little Universe of Big Ideas

A personal portfolio for Riya Shah, an AI/ML undergraduate at JG University (expected graduation: 2028), founder of EchoTech and aspiring AI product design, strategy and innovation professional.

The website combines a pastel interactive workspace, project case studies, an illustrated story, a Curiosity Lab, credentials and recruiter Q&A. Content distinguishes personal experience, work in progress and concepts without inventing outcomes.

## Quick start

Use Node.js 20.9 or later and npm. Install the versions recorded in the lockfile:

```sh
npm ci
npm run dev -- --port 3100
```

Open [http://localhost:3100](http://localhost:3100). Keep the terminal running while reviewing the site. `npm run dev` without a port argument uses port 3000.

The portfolio itself requires no environment variables, database, API credentials or email service. Tools described in project case studies are content; this website does not invoke those product services.

### Review a production build locally

Stop any server already using port 3100, then run:

```sh
npm run build
npm run start -- --port 3100
```

A production server serves the last completed build. Rebuild and restart it after source changes. Do not run development and production servers on the same port.

If the browser shows **ERR_CONNECTION_REFUSED**, start the local server, wait for **Ready**, and reload. If a port is occupied, stop the existing project server or choose another port; do not stop unrelated processes.

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Short introduction, real portrait, original workspace, featured work and recognition previews |
| `/work` | Idea Garden with five career filters |
| `/work/[slug]` | Individual case studies and verification-pending project files |
| `/about` | Portrait, **How I Think & Work**, team strengths and illustrated professional journey |
| `/curiosity-lab` | Interactive interests, creative process and evidence-linked skills |
| `/achievements` | Google Cloud skill badges and approved Young Turks certificate |
| `/contact` | Existing envelope contact experience and **Before You Ask… ♡** recruiter Q&A |

Project slugs: `echonote`, `echoos`, `lifecapital`, `ama-research`, `railq`, `instagram-redesign`, `ocr-model`, `stock-market-prediction`.

Old `/projects/[slug]` URLs permanently redirect to `/work/[slug]`, preserving query parameters. Legacy root section fragments are routed to their corresponding destinations in the browser.

### Career lenses

The same project dataset supports all five lenses. A lens changes ordering, competencies and evidence destinations, not Riya's identity.

| URL value | Career lens |
| --- | --- |
| `design` | AI Product Design & UX Strategy |
| `product` | AI Product Management |
| `innovation` | AI Product Innovation & Technology Strategy |
| `solutions` | AI Solutions Consulting & Design |
| `research` | Applied AI Research & Evaluation |

Example: [http://localhost:3100/work?lens=research](http://localhost:3100/work?lens=research).

## New recruiter sections

**How I Think & Work** lives at `/about#how-i-work`, between the introduction and existing story. Its four connected stages are Get curious → Connect the dots → Make it tangible → Learn & refine. Each links to relevant work. Team strengths are presented as developing capabilities and interests.

**Before You Ask… ♡** lives at `/contact#recruiter-qa`, with a shortcut near the top of the contact page. Six questions cover roles, education, EchoTech, AMA experience, approach and relevant opportunities. Riya explicitly approved the sixth answer on 24 October 2026. The AMA answer describes contributions without implying authorship of the entire report collection.

The accordion supports multiple expanded answers, native button keyboard activation, named panels, expanded-state announcements and inaccessible collapsed content. Transitions respect both system and manual reduced-motion settings.

## Technology

Next.js App Router, React, TypeScript, Tailwind CSS, Motion for React, React Three Fiber, Drei, Three.js and Lucide icons. GSAP is also available in the existing project. No dependency was added for the recruiter sections.

The local scripts use Webpack. Before changing Next.js behavior, read the relevant bundled documentation under `node_modules/next/dist/docs/`, as required by [AGENTS.md](AGENTS.md).

## Editing content and components

| File or directory | Responsibility |
| --- | --- |
| `src/data/portfolio.ts` | Identity, projects, lenses, evidence mappings, story, interests, skills and resume slots |
| `src/data/credentials.ts` | Badge graphics and levels, Young Turks evidence and AMA contribution boundaries |
| `src/data/case-stories.ts` | Concise case-study problems, proposed journeys and open questions |
| `src/data/recruiter-content.ts` | Four thinking stages, team strengths and Q&A text/publishing flags |
| `src/data/workspace-experiment.ts` | Hero artwork selection; currently `original` |
| `src/app/(universe)/` | Shared site layout and main page routes |
| `src/components/portfolio.tsx` | Header, footer and filtered project explorer |
| `src/components/little-universe.tsx` | Existing hero, story, lab, skills and contact experience |
| `src/components/creative-workspace.tsx` | Original procedural desktop 3D workspace |
| `src/components/little-art.tsx` | Original clay-style SVGs and mobile workspace |
| `src/components/thinking-journey.tsx` | Reusable four-stage process section |
| `src/components/recruiter-qa.tsx` | Accessible recruiter accordion |
| `src/components/recruiter-sections.module.css` | Styles scoped to the two new sections and contact shortcut |
| `src/components/project-case-study.tsx` | Shared case-study presentation |
| `src/components/case-interactions.tsx` | Feature explorer and product workflow controls |
| `src/components/motion-preferences.tsx` | System and manual reduced-motion support |
| `src/app/globals.css` | Stylesheet entry point for the existing visual system |

Edit structured data first when changing wording. Preserve the current palette, typography, portrait, hero artwork and other verified content. Set a Q&A item's `published` flag to `false` to exclude it from the page.

### Original hero workspace

The approved setting is `workspaceVariant = "original"`. It renders the character-free pastel desk on desktop and the original lightweight SVG on mobile or WebGL failure. Laptop/notebook positions and original interactions return through this switch.

Earlier character implementations and image assets remain inactive for reversibility. Do not enable them or delete backups as part of routine content changes. Restoration backups are stored privately under `.private/`.

## Evidence and assets

- **EchoNote:** website launched 21 October 2026; product development and validation continue. Feature areas are owner-described pending implementation evidence. Presentation generation is planned.
- **EchoOS:** concept and development exploration.
- **LifeCapital:** concept exploration supporting human financial decision-making; not an investment advisory service.
- **AMA:** completed AI research internship, April–June 2026. Personal contributions are distinguished from the wider report collection.
- **Additional projects:** historical context is available, but implementation details and results remain verification pending.
- **Google Cloud:** ten supplied skill-badge graphics, one intermediate and nine introductory. Earned ownership is owner-confirmed; public issuer verification URLs remain missing. These are not described as professional certifications.
- **Young Turks:** the approved certificate supports 98.47 percentile and 19 October 2026. Rank 6,111 and Round 2 qualification remain explicitly self-reported.

Real product screenshots, verified prototype/demo links and approved resume PDFs are still missing. Conceptual product illustrations are labeled accordingly. Do not present generated interfaces as authentic screenshots or add unsupported metrics, clients, testimonials or achievements.

Public assets include the unchanged portrait in `public/portrait/` and supplied credential graphics/approved certificate in `public/credentials/`. Add new project assets only after checking their authenticity and permission for public display, then render them with responsive dimensions and meaningful alternative text.

For resumes, place approved files in `public/resumes/` and configure the `resumes` array in `src/data/portfolio.ts`. Null entries intentionally produce an availability note rather than broken downloads.

### Private materials

`reference-materials/` contains source documents, including potentially confidential AMA reports. `.private/` contains the internal evidence inventory, extracted text, previews and backups. Neither directory belongs in public assets. Both are excluded through `.gitignore` and `.vercelignore`; design references are also excluded from Vercel uploads.

Do not publish AMA reports, proprietary tables, company-specific findings or projections. The collection's eight-sector scope does not establish Riya's personal authorship across all sectors. Consult the private evidence review before changing claims. Check exclusions before manually packaging or uploading the project.

## Contact

The contact section retains email, LinkedIn and GitHub. Its business link is **EchoTech ↗**, pointing to [https://echotechai.in/](https://echotechai.in/) with `target="_blank"` and `rel="noopener noreferrer"`. The Q&A also links to EchoTech.

Email uses `mailto:riyamshah2509@gmail.com`; there is no simulated contact form. A future form needs a server-side email provider, server-side validation, durable abuse protection and accessible delivery states. Keep secrets out of client code and preserve the mailto fallback.

## Accessibility and performance

- Semantic headings, focus styles, skip navigation and keyboard-accessible controls.
- Collapsed Q&A panels are marked `aria-hidden` and `inert`; buttons reference their labeled regions through `aria-controls`.
- Short process reveals and restrained hover feedback; no scroll hijacking.
- OS and manual reduced-motion alternatives, including zero-duration accordion transitions.
- Lazy-loaded desktop WebGL, capped device-pixel ratio and offscreen/reduced-motion demand rendering.
- Original SVG fallback below 900px and when 3D cannot initialize.
- Responsive local images; system typography without remote font requests.

## Validation

```sh
npm run lint
npm run typecheck
npm run test:motion
npm run build
```

With the local server running, execute route checks in a second terminal:

```sh
npm test -- http://localhost:3100
```

Route checks cover 14 primary pages, internal fragment targets, legacy redirects, discovery assets, approved assets, private-source boundaries and unknown-project 404 behavior. The six motion tests exercise legacy route math; they are not full coverage of the current 3D workspace.

The latest recruiter-section review passed lint, standalone TypeScript, production build and route checks including 118 fragment targets. Browser review covered desktop and 320/390/768px layouts, Enter/Space activation, focus order, accessibility-tree states, multiple open answers and reduced motion. Recheck relevant behavior after changes; these results are a snapshot, not a guarantee for later edits.

Formatting scripts are available as `npm run format` and `npm run format:check`. The write command formats source files, scripts and Next config, so inspect its scope before using it for a small content-only edit.

## Optional Vercel deployment

Deployment is manual and requires Riya's approval; no automatic deployment was initiated for these updates.

1. Review source, evidence labels and private-file exclusions.
2. Connect the project repository to Vercel and select the Next.js framework preset.
3. Use `npm ci` to install and `npm run build` to build. Keep the output directory at its Next.js default.
4. No environment variables are required for the current portfolio.
5. If the production origin changes, update metadata, sitemap and robots configuration. Do not change the EchoTech business contact link when updating the portfolio's origin.
6. Review the preview's routes, filters, keyboard flow, mobile experience and social metadata before approving publication.

## Supporting documentation

- [PHASE2.md](PHASE2.md): multi-page structure and reference-evidence review.
- [QA.md](QA.md): earlier validation records.
- [LITTLE_UNIVERSE_REDESIGN.md](LITTLE_UNIVERSE_REDESIGN.md): pastel design and original workspace direction.
- [WORKSPACE_EXPERIMENT.md](WORKSPACE_EXPERIMENT.md) and [HERO_ARTWORK.md](HERO_ARTWORK.md): historical, inactive character experiments; the current selector is `original`.

Older atlas-era design documents are historical context, not the current visual specification.
