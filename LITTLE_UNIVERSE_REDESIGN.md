# Riya's Little Universe of Big Ideas

This redesign supersedes the earlier Idea Atlas direction and its motion specification. The application, routes, project data and career-lens behavior were preserved.

## Reference review

All four supplied JPGs in `design-references/` were opened and visually inspected. Shared qualities: cream backgrounds, blush and lavender, rounded typography, clay objects, soft shadows, expressive handwritten notes and dimensional controls. The implementation uses these qualities without copying the layouts, people, screenshots, testimonials or metrics. No avatar or assumed likeness is used.

## Current visual system

- Warm cream foundation with lavender, blush, mint, peach and sky-blue chapters.
- Rounded system sans-serif, expressive Georgia italics and readable handwritten accents; no remote font dependency.
- Original flower brand mark and original reusable clay-style SVG objects.
- Live procedural Three.js workspace: desk, laptop with explicitly illustrative interface, research notebook, pencil cup, idea bulb, plant and connected AI objects. Equivalent native process buttons remain outside the decorative canvas.
- Idea Garden: flagship EchoNote horizontal composition; EchoOS wider mint composition; LifeCapital peach growing-idea composition; AMA blue research composition. All artwork is labeled conceptual, never presented as a real screenshot.
- Five clickable story milestones, seven curiosity objects, evidence-linked skill charms and a pastel envelope contact section.
- Case studies retain their full content and interactions with the new palette and artwork.

## Motion budget

- Workspace: pointer rotation up to 0.07 radians, subtle bulb float of 0.055 scene units. Render loop only while the scene is visible and motion is allowed. Reduced motion uses demand rendering and fixed object positions.
- Hover: small finite object lift/rotation; native selection remains available on touch and keyboard.
- Filters: preserved 320ms layout reorder; no animation in reduced motion.
- Detail changes: 160ms opacity feedback without delayed content availability.
- Story path: progress follows native scrolling, with a separate curved path for the mobile arrangement. Reduced motion displays the complete path.
- Contact envelope: slow 7-second drift; two slow hero sparkles. All CSS animation stops under OS or manual reduced motion.
- Route entry: 220ms, 7px settling transition on client navigation; immediate in reduced motion. Initial server content is readable without waiting for an entrance animation.
- Section headings: a one-time 400ms, 12px settling reveal. Server content remains readable; reduced motion displays headings immediately.

## Recruiter reading order

The opening names Riya, AI/ML study, JG University, expected graduation, EchoTech and product-building focus. EchoNote has a dedicated linked brief with launch date and ongoing development/validation. Three competencies link directly to supporting work. On mobile the EchoNote brief precedes the lightweight workspace illustration. Accurate statuses remain visible in every project composition.

## Content maintenance

Edit projects, lenses, interests, skills and resume file paths in `src/data/portfolio.ts`. Add approved screenshots and PDF resumes under `public/projects/` and `public/resumes/`. No screenshots or resume PDFs were supplied with the references. Four additional project routes remain flagged for verification; unverified achievements are not promoted as credentials. Email uses a real mailto link; there is no simulated contact form.

Run `npm run dev -- --port 3100` and review `http://localhost:3100/`. For a production preview, run `npm run build`, then `npm run start -- --port 3100` after stopping the development server using that port. Vercel configuration remains standard Next.js.
