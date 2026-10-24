# Hero character workspace — asset readiness and production brief

Audit date: 24 October 2026. Status: blocked at asset readiness; no scene implementation or website changes made for this request.

## References inspected

- `reference-materials/reference.png`: a large seated character dominates a frontal three-quarter workspace. Detailed layered dark hair, expressive brown eyes, fitted black glasses, lavender headphones and sweater, cheek supported by one hand, other hand near the keyboard. Blush chair and lamp, cream desk, books, plants and small stationery form a warm, softly lit setting. Depth comes from overlapping objects and modeled forms; character readability is the priority.
- `reference-materials/Professional Pic - Riya.png`: actual identity reference, with long dark hair, black glasses and warm medium-brown skin. This is a frontal portrait; unseen profile and body details need artistic interpretation, not a claim of exact reconstruction.

## Current implementation findings

Stack already includes Next.js, React Three Fiber, Drei, Three.js and Motion. No new rendering dependency is necessary.

`src/data/workspace-experiment.ts` selects `reference`. `reference-workspace.tsx` renders a WebP with pointer-driven translation. It is not a live 3D scene and does not satisfy the request.

`creative-workspace.tsx` contains a genuine geometry-based desk, laptop, plant, stationery and bulb. Its previous character in `riya-workspace-character.tsx` is assembled from spheres, capsules and tubes, with transform-based imitation of breathing/blinking. It is not the premium modeled and rigged character needed here. Increasing segment counts would not solve its anatomy, hair, expression or pose quality.

No GLB, glTF, Blender, FBX, OBJ or USDZ character/environment model was found outside dependencies/generated output. No supplied rig or animation clips were found. The two workspace WebPs and reference PNG are raster artwork, not model assets. Blender was not found on PATH; this does not establish that it is absent elsewhere on the computer.

## Asset inventory

| Item | Available now | Readiness / required work |
| --- | --- | --- |
| Character model | Procedural miniature only | Requires manual sculpt/model or an appropriately licensed artist-made base, personalized and reviewed against both references |
| Character rig | No production rig | Requires manual body, head, hand and facial setup |
| Hair | Procedural tubes/pebbles only | Requires layered modeled locks, silhouette detail and restrained surface texture; no single helmet shape |
| Headphones | Simple mint procedural forms | Requires modeled lavender ear cups, cushions, headband and fitted placement |
| Glasses | Simplified procedural geometry | Requires modeled black frames, bridge and temples fitted around the eyes/headphones |
| Clothing | Primitive sweater forms | Requires smooth sweater mesh, cuffs, neckline and believable folds in the seated pose |
| Eyes / expression | Primitive eye assembly | Requires sculpted eyelids, brown irises, eyebrows and friendly expression; blink morphs preferred |
| Hands / pose | Simplified transform-driven hands | Requires believable fingers and a posed hand supporting the cheek, plus keyboard-resting hand |
| Laptop | Existing real 3D geometry | Can be remodeled/refined locally with acceptable quality; separate screen mesh for emissive hover |
| Desk | Existing real 3D tabletop | Can be modeled/refined locally; adjust dimensions and occlusion around character |
| Chair / furniture | Primitive chair in old character | Can be modeled locally with rounded cushions and coherent proportions |
| Plants | Existing simple real 3D plant | Can be refined locally; use limited modeled leaf instances rather than flat illustration layers |
| Books / notebook / stationery | Notebook and pencils exist | Can be modeled locally; add AI, UX, product strategy and research books; do not claim these are personal possessions |
| Lamp / mug / board / decorations | No complete matching set | Can be modeled locally with rounded geometry; labels are surface detail, not replacements for 3D objects |
| Animation clips | No imported clips | Requires artist-authored Idle, Blink and optional Typing, or exported compatible facial morphs/bone controls |
| Sleeping cat | None | Optional modeled decoration; omit unless composition and performance justify it |
| Materials / textures | Flat code-defined materials | Character requires UVs, skin/hair/cloth material variation and optimized texture maps |

## Exact missing delivery

Provide a customized, web-ready `riya-character.glb` (or one cohesive `riya-workspace.glb`) plus editable `.blend` source and applicable license/usage permission. This is a requested asset specification, not a file already generated.

Character must be large enough for face, fingers and layered hair to read in the hero. Required visible details: dark flowing hair, medium-brown skin, brown eyes, black glasses, lavender headphones and sweater. Pose: naturally seated at a laptop, cheek resting on one hand. Deliver proper meshes, UVs and materials, not an image on a plane.

Prefer named separate meshes/materials for `Character`, `Hair`, `Glasses`, `Headphones`, `Sweater`, `Laptop`, `LaptopScreen`, `Books`, `Lamp` and environment props. Equivalent documented names are fine. Include skeleton/bind pose, eyelid blink morphs or controls, a restrained idle clip and optional typing clip. A high-quality static posed mesh can support camera parallax, but cannot fulfill animated character behavior without additional rig work.

Deliver uncompressed source export alongside optimized GLB, local texture maps and an asset manifest documenting source, ownership/license, dimensions, mesh names, clips and morph names. Do not supply a rendered image as the model. No reference portrait should be uploaded to an outside service without specific authorization.

## Real asset creation workflow

1. A character artist works in Blender using the portrait for identity cues and reference.png for stylization, pose, lighting and composition. Obtain a front/three-quarter gray-model review before detailing. Match the warm skin, flowing hair and black frames; do not copy a different person's face.
2. Sculpt/model facial planes and eyelids, realistic stylized hands, layered hair locks, sweater and accessories. Retopologize, UV unwrap and develop exportable PBR materials. High-detail source renders are review aids only, never the browser hero.
3. Pose the seated body and preserve cheek-to-hand contact. Rig breathing, minimal head movement and blinking; keep typing optional and subtle. Bake/export motions that survive glTF export; verify the exported result rather than only the Blender viewport.
4. Model the cohesive environment with the character in place. Keep laptop below the face, lamp and foliage outside the facial silhouette, and clear foreground/background separation. Omit the cat if it crowds the hero.
5. Export actual meshes, skeleton, morphs, materials and clips as GLB. Optimize geometry/material count and textures; verify compression retains skinning, hair detail, fingers and expressions. Review in Three.js before integration.
6. Approve the model and composition against the ten fidelity criteria below, then implement only the right-side workspace.

## Integration plan once assets are ready

- Retain the existing lazy-loaded client R3F boundary, design tokens, left-side portrait/text/CTAs and flagship link card. Replace only the right workspace branch. Use a perspective camera rather than relying on the current orthographic miniature framing.
- Load the approved GLB with Drei/useGLTF. Use a narrow pointer-driven camera translation/look target with a damped settle, centered around the character's face. Disable pointer parallax for reduced motion and coarse touch input; preserve normal page scrolling.
- Use distinct desktop/tablet/mobile camera distances and targets, prioritizing face and laptop on small screens. Remove the current 900px-only WebGL gate: supported mobile devices should receive real 3D with a lower quality setting, not a default raster replacement.
- Laptop hover adjusts its screen's emissive intensity; click navigates to `/work/echonote`. Provide a matching HTML link for keyboard/touch access. Books get accessible HTML labels/tooltips; lamp/bulb hover can brighten its own material. Limit hotspots.
- Play only supplied/verified rig clips and morphs. Freeze ambient animations and camera drift for reduced motion. Stop continuous rendering while offscreen or the tab is hidden; invalidate on interaction when rendering on demand.
- Short opacity/camera entrance without delaying text. Fixed canvas dimensions prevent layout shift. A poster is allowed only during loading, WebGL failure or a genuine capability failure, and must be replaced by the live model when ready.
- Starting optimization targets, subject to measurement: roughly 60–120k visible triangles for the whole scene, limited materials/draw calls, 1K textures by default with 2K only where face/hair benefits, an optimized initial asset download ideally under 8 MB. These are targets, not current measured results. Cap DPR around 1–1.5 and use one modest shadow map without costly post-processing. Verify compression against the installed loaders before enabling it.

Three.js GLTFLoader supports model loading, animation clips and relevant mesh/texture compression integration: https://threejs.org/docs/pages/GLTFLoader.html . The installed Next.js lazy-loading guide was read; `ssr:false` stays inside a Client Component.

## Acceptance before completion

Compare rendered browser views to reference.png for character prominence, hair detail, expressive face, glasses/headphones, relaxed working posture, cozy setting, materials, lighting/shadows, composition and atmosphere. Require views after pointer movement to establish real spatial depth; wireframe/mesh inspection confirms geometry rather than a painted plane.

Test desktop/tablet/mobile cameras, touch scrolling, laptop and book interactions, keyboard equivalents, loading/error states, reduced motion, WebGL fallback, offscreen/hidden-tab pause and console errors. Measure asset transfer and frame performance on representative hardware. Test the exported rig for hand/cheek contact and clipping before approving idle motion.

## Current limitation

Asset readiness is not met. No replacement model, scene or fidelity claim has been fabricated. The website remains unchanged and no deployment was initiated. Supply the modeled character or commission the above Blender workflow before scene implementation resumes.
