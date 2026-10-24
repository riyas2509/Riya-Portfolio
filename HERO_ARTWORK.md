# Reference-matched hero artwork

Only the right-side hero illustration was replaced. The shared palette, typography, navigation, left hero/profile photo, buttons, EchoNote note, other pages, project data, filters and existing animations are unchanged. The obsolete handwritten scene caption/sparkles are hidden in this variant because the new art already contains the environment and stars. The small conceptual-illustration caption remains.

## Asset and generation

Built-in **imagegen** tool, using `reference-materials/reference.png` as primary style/composition reference and `Professional Pic - Riya.png` for a stylized interpretation. No photo editing or realistic identity reconstruction. The character and environment were generated together.

- Web asset: `public/workspace/riya-creative-workspace-v2.webp` — 1200 × 900, 104,906 bytes.
- Full-resolution source: `.private/reference-workspace/hero-source.png`.
- Exact final generation prompt: `.private/reference-workspace/prompt.txt`.
- Original generated output remains in Codex generated_images; the website uses the workspace-local asset.

The illustration has detailed flowing hair, black glasses, lavender headphones, warm medium-brown skin, a cheek-supported pose, knit sweater, laptop, lamp, plants, books, notebook and mug. The supplied reference was directly compared with the generated output and its placement in the website. The character is the focal point, with no second hero heading or wall slogan.

## Implementation and motion

`reference-workspace.tsx` uses responsive Next Image and an accessible scene description. Its size is reserved before loading. Desktop retains the original 430px container; phones use a scoped 4:3 frame to avoid unnecessary blank space or cropping. Only this illustration's mobile frame changes.

Motion is limited to pointer-responsive whole-image parallax (maximum 2.5px horizontal / 2px vertical) and two faint glows aligned with illustrated stars. There is no typing, blinking or rigged character animation. OS/manual reduced motion disables parallax and glow animation. Mobile needs no WebGL. No dependencies were added.

The prior procedural scene and mobile SVG remain intact. A load error displays the original SVG workspace. Change `workspaceVariant` in `src/data/workspace-experiment.ts` to `"original"` to restore the original scene, `"riya"` for the previous character experiment, or `"reference"` for this illustration. No visitor-facing switch exists.

## Files

- `src/components/little-universe.tsx`: selects the new hero artwork only; no non-workspace content edits.
- `src/components/reference-workspace.tsx`: image, parallax, fallback and accessible description.
- `src/components/reference-workspace.module.css`: scoped illustration styling and mobile frame.
- `src/data/workspace-experiment.ts`: artwork selector.
- `public/workspace/riya-creative-workspace-v2.webp`: optimized art.

Before-change copies are in `.private/reference-workspace/` with `.original` extensions. No source references are exposed publicly.

Local review: `npm run dev -- --port 3100`, or `npm run build` then `npm run start -- --port 3100`. No deployment was initiated.

## Review and validation — 24 October 2026

Compared the generated asset directly with `reference.png`: large expressive character, detailed flowing hair and glasses, oversized lavender headphones, natural hand-to-cheek/keyboard pose, soft knitted clothing, warm light, pastel desk objects and cohesive background. The result is a rendered illustration, not a procedural avatar.

Browser checks at 320, 390, 768, 1280 and 1440px show no horizontal overflow. Desktop container remains 430px tall and the EchoNote card remains in its original position. The whole artwork is visible on phones. No canvas is created in illustration mode. Pointer movement produces the bounded parallax; reduced motion produces `transform: none` and `animation: none` on both glows. A 184-byte embedded blur preview fills the fixed frame while the optimized image loads.

ESLint, formatting, standalone TypeScript and production build checks pass. Existing regression checks pass for 14 pages, 111 fragment targets, legacy redirects, metadata and private-source boundaries. No unrelated source content or shared stylesheet edits. No deployment.
