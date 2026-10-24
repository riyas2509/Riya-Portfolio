# Riya Shah — Little Universe of Big Ideas

A functioning Next.js portfolio redesigned around a warm, tactile creative world: a pastel 3D workspace, an Idea Garden, a clickable illustrated journey, a curiosity desk and an evidence-linked toolbox. The four supplied images in `design-references/` informed the palette, softness and clay styling. See `LITTLE_UNIVERSE_REDESIGN.md` for the current design and motion specification. Older atlas review documents describe the superseded design.

## Run locally

Use Node.js 20.9+ and npm.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. If that port is occupied, use `npm run dev -- --port 3100`.

```sh
npm run lint
npm run typecheck
npm run test:motion
npm run build
npm run start
```

No environment variables, email account, database or API credentials are required to run this portfolio. Product tools described in the case studies are content, not services this portfolio invokes. The scripts use Webpack for compatibility with this Windows environment.

## Multi-page update

See [PHASE2.md](PHASE2.md) for the current route map, evidence decisions, public certificate approval, source boundaries and review instructions. The reference review supersedes earlier missing-document notes below.

## Implemented phases

1. Foundation: Next.js App Router, TypeScript, Tailwind v4, content architecture and design tokens.
2. Homepage: cream, lavender, blush, peach and mint surfaces; personal introduction, flagship EchoNote note, competency links and responsive navigation.
3. 3D and story: procedural React Three Fiber/Drei creative desk with object selection, pointer parallax and gentle bulb motion; five clickable journey milestones and scroll-linked curved path drawing.
4. Explorer: five accessible pastel career lenses, relevant ordering, competencies, contextual evidence links and shareable `?lens=` URLs with back/forward support.
5. EchoNote: visual, seven-section case study with feature explorer, expandable framing decisions, illustrative interactive flow and sticky desktop index.
6. Personal sections: five-stop journey, seven Curiosity Lab desk objects, three skill categories and envelope contact composition. Unverified achievement data remains unpublished in the data file.
7. Refinement: phone-specific 2D hero, keyboard equivalents, skip links, focus styles, reduced-motion support, scene error fallback, lazy 3D and paused offscreen rendering.
8. Validation: lint, strict TypeScript and production build. Browser checks cover desktop 3D, URL lens changes, mobile layouts and case-study controls. See `QA.md` for the final record.
9. Handoff: this guide, project asset instructions, resume configuration and Vercel deployment steps.

## Content and source map

- `src/data/portfolio.ts`: all projects, process stages, career lenses, ordering, story chapters, interests, skills, achievement verification flags and resume slots.
- `src/components/portfolio.tsx`: shared navigation/footer and the preserved functional career-filter project explorer.
- `src/components/little-universe.tsx`: hero, story, curiosity desk, toolbox and contact.
- `src/components/little-art.tsx`: original clay-style SVG objects, mobile workspace and distinct project compositions.
- `src/components/creative-workspace.tsx`: interactive procedural 3D desk. No downloaded models or HDR environments.
- `src/components/motion-preferences.tsx`: live OS and manual reduced-motion preferences.
- `src/app/template.tsx`: short, reduced-motion-aware route entry transition.
- `src/components/atlas-art.tsx`: shared flower brand mark and retained earlier diagram helpers. Earlier atlas components and route-math tests are retained but are not the new homepage scene.
- `src/components/case-interactions.tsx`: feature selection and illustrative workflow.
- `src/app/(universe)/work/[slug]/page.tsx`: canonical project routes; all eight projects are generated at build time. The old projects route redirects.
- `src/app/globals.css`: stylesheet entry point; `universe.css` defines the current visual system and responsive layouts over the retained `atlas.css` and `case-study.css` foundation.
- `src/app/layout.tsx`, `opengraph-image.tsx`, `sitemap.ts`, `robots.ts`: metadata and discovery.

Available project files: `/work/echonote`, `/work/echoos`, `/work/lifecapital`, `/work/ama-research`, `/work/railq`, `/work/instagram-redesign`, `/work/ocr-model`, `/work/stock-market-prediction`.

Supported lenses: `design`, `product`, `innovation`, `solutions`, `research`. Example: `/work?lens=research`. Selection reorders existing projects; it does not duplicate them. Research puts AMA first; innovation puts EchoOS first.

## Replace assets and verify content

All visual project artwork is illustrative. It is not a product screenshot. No screenshots, resume PDFs, prototype URLs or demo videos were present at implementation time.

1. Put verified, permission-cleared project assets in `public/work/<slug>/`.
2. Replace the labeled asset slot in the project route with `next/image`, preserving aspect ratio and providing meaningful alt text and responsive `sizes`. Add per-project asset metadata to the data file when introducing multiple screenshots.
3. Embed only a supplied, verified prototype/video. Provide an iframe title, lazy loading, keyboard-accessible external link, and captions/transcript for video. Do not add a before/after comparison without both real assets.
4. Add approved PDFs to `public/resumes/` and configure the `resumes` array with paths such as `/resumes/design-ux.pdf`. Configured entries become real download links. Null entries display a single honest availability note.
5. Keep unknown project scope and results marked for verification. EchoNote features are owner-reported. Its website launched 21 October 2026; product development and validation are ongoing. Presentation deck creation is planned. EchoOS and LifeCapital remain explorations.
6. Ten badge graphics and an approved Young Turks certificate are supplied. Public issuer badge URLs remain missing. Other older achievement claims are withheld. Do not add metrics, testimonials, commercial traction or security claims without supporting evidence.

The case-study decision notes and workflow are labeled interpretations of the supplied product vision. They are not fabricated user research or verified technical architecture.

## Contact and a future email provider

The email action opens `mailto:riyamshah2509@gmail.com`. LinkedIn, GitHub and the supplied portfolio domain are direct links. There is no simulated form submission.

To add a production form, implement a server-side App Router route handler with an email provider's SDK, place the provider key in Vercel environment variables (never a `NEXT_PUBLIC_` variable), validate and length-limit every field on the server, use a fixed verified sender and validated reply-to, apply origin checks and durable rate limits, and add a honeypot or verified anti-abuse challenge. Return accessible success/error states only after the provider confirms delivery. Keep the mailto link available if delivery fails. Do not collect messages until that service and abuse protection are configured.

## Accessibility and performance

The scene is an enhancement. The same process information is available through ordinary HTML buttons and links. Screens below 900px use an original lightweight SVG workspace. WebGL initialization is feature-detected; an error boundary preserves that fallback. The 3D bundle is dynamically imported, capped at 1.5 DPR and renders continuously only while visible and motion is allowed. It switches to demand rendering offscreen and in reduced-motion mode. Geometry is procedural and intentionally small; contact shadows are baked for one frame.

A shared preference layer honors the live OS setting and the explicit Reduce motion control in the contact section. Parallax, bulb float, sparkles, envelope drift, object hover, route entry, path drawing and filter movement have static alternatives. See `LITTLE_UNIVERSE_REDESIGN.md` for the current motion inventory. Keyboard users can select every stage, filter, journey stop, lab note, skill and feature; native disclosures support Enter/Space. Mobile navigation closes with Escape and returns focus to its toggle. There is no scroll interception.

No remote fonts, analytics, tracking, image services or browser storage are needed. System sans-serif and Georgia keep rendering reliable without external font requests.

## Deploy to Vercel

This project is prepared for Vercel; it has not been deployed or assigned the supplied domain.

1. Push this folder to your Git provider, excluding `.next`, `node_modules`, environment files and build info.
2. Import that repository into Vercel and choose **Next.js**. Keep the project root at this folder and the output directory at its default.
3. Install with `npm ci` and build with `npm run build`. No environment variables are needed for the current portfolio.
4. Check the preview deployment: every case-study route, shared lens URLs, keyboard flow, phone layouts, social links and Open Graph image.
5. Configure `riyas25.vercel.app` if it is available to your Vercel account. If using a different domain, update `metadataBase`, the sitemap, robots sitemap URL and `contact.domain`.
6. Add real assets and verified resumes when ready, then publish the reviewed source.

The lockfile is committed-ready. The production-only dependency audit reported zero advisories on 23 October 2026. The full dependency tree reports five high-severity advisories in development tooling; inspect `npm audit` and use compatible fixes when available instead of a forced framework downgrade. No zero-risk claim is made for future dependency changes.
