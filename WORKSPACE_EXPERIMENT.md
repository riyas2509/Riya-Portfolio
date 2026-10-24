# Riya’s Workspace — reversible character experiment

The original hero layout, styles, typography, content, routes, camera, lighting, object interactions and motion preferences are retained. No dependencies were added.

## Switch the experiment

In `src/data/workspace-experiment.ts`, set `workspaceVariant` to:

- `"riya"`: animated portrait-inspired character on desktop, matching rendered still on mobile.
- `"original"`: original desktop composition and original SVG mobile illustration.

Restart/rebuild after changing the flag. There is no visitor-facing switch.

Before editing, original component copies were saved in `.private/workspace-original/` with `.original` extensions. These are excluded from Git/Vercel. `little-art.tsx` is unchanged.

## Implementation

`riya-workspace-character.tsx` builds a local procedural clay character from rounded geometry and curved outlines. Long dark hair, warm-brown skin, black-framed glasses and a friendly expression loosely reference `reference-materials/Professional Pic - Riya.png`. Mint headphones and a lavender sweater match the existing scene. It is an original stylized interpretation, not a scan or an exact likeness. The photograph was not modified.

The laptop moves 0.3 scene units right; the notebook moves slightly left/forward. The original positions return automatically when the experiment is disabled. The character sits on a blush chair at the left of the keyboard; the screen remains unobscured. Clicking her connects to the existing Build stage. The existing keyboard-accessible Build control provides the equivalent action.

Separate hand groups move by 0.012 units for calm typing; the head makes a small listening motion, the torso breathes subtly, and the eyes blink briefly about every 6.4 seconds. These are real geometry transforms, not whole-image movement. Existing pointer parallax, bulb motion and scene visibility behavior are retained. Reduced motion restores a fixed, open-eyed rest pose and stops these motions. Offscreen rendering uses the existing demand mode.

`hero-workspace-poster.tsx` uses the same scene rendered at rest for phones, loading/error fallback and unavailable WebGL. `public/workspace/riya-workspace.webp` is 584 × 430, transparent, 20,512 bytes. It was exported from this actual Three.js scene, not composited from a different illustration. It has no character animation on mobile, intentionally avoiding the 3D bundle. The scene container supplies a descriptive accessible label; the fallback image is decorative inside that description.

A temporary development renderer was used to export the still and removed afterward. No export endpoint, drawing-buffer preservation or public experiment toggle remains. The lossless source render is private at `.private/workspace-original/riya-render.png`.

## Changed files

- `src/components/creative-workspace.tsx`: conditional character and two conditional object positions.
- `src/components/little-universe.tsx`: experiment-aware fallback and accessible scene description.
- `src/components/riya-workspace-character.tsx`: new procedural character and animation.
- `src/components/hero-workspace-poster.tsx`: lightweight matching still/original fallback.
- `src/data/workspace-experiment.ts`: single rollback flag.
- `public/workspace/riya-workspace.webp`: optimized rendered mobile asset.

Local development: `npm run dev -- --port 3100`. Production review: `npm run build`, then `npm run start -- --port 3100`. No deployment was performed.

## Validation — 24 October 2026

ESLint, Prettier, standalone TypeScript and the production build pass. Existing route checks pass for 14 pages, 111 fragment targets, legacy redirects, metadata and private-source boundaries. The temporary export route is absent from the build.

Browser review confirmed the original/character flag in both modes, the character click selecting Build, the descriptive scene label, loaded mobile still and no mobile canvas or horizontal overflow at 320px and 390px. Two successive reduced-motion screenshots were pixel-identical. Normal motion is restored for the local review. The original clay-art source is byte-for-byte unchanged from its backup; a source comparison confirms no non-workspace changes in the hero component.

Preview: http://localhost:3100/. No deployment.
