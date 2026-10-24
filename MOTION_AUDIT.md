# Animation audit and process-sequence specification

The animation policy is: movement must explain a relationship, preserve orientation after a user action, or indicate the reader's position. Nothing moves merely to make the page appear active.

## Complete inventory

| Animation or transition                                                          | Decision                   | Current behavior and purpose                                                                                                                                                                                      |
| -------------------------------------------------------------------------------- | -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Three.js idle floating and rotations                                             | Removed                    | Instruments remain fixed so the five stages read as one stable map.                                                                                                                                               |
| Pointer-based scene tilt                                                         | Removed                    | Pointer position no longer shifts the entire universe or competes with the selected stage.                                                                                                                        |
| Repeated 3D hover scaling                                                        | Removed                    | Hover and selection use material emphasis. There is no scale interpolation or movement loop.                                                                                                                      |
| Staggered hero entrance and text translations                                    | Removed                    | Identity, headline, description and actions are visible on first render, with no presentation delay.                                                                                                              |
| Work-heading scroll reveal                                                       | Removed                    | The heading is always visible.                                                                                                                                                                                    |
| Story-chapter scroll fades and vertical movement                                 | Removed                    | All factual chapter content is readable without animation or intersection detection.                                                                                                                              |
| Contact endpoint pulse                                                           | Removed                    | “Ready” is a static state, not an endlessly blinking or pulsing notification.                                                                                                                                     |
| Five-stage connecting path                                                       | Rebuilt                    | A shared numeric progress value drives the mobile SVG route, the 3D route and the HTML stage rail. A finite path traversal communicates how one stage connects to the next.                                       |
| Process selection feedback                                                       | Kept, shortened and scoped | Only an actual selection change gets a 160ms opacity emphasis. The new content is immediately present; no exit queue, sliding text or blank interval. Initial rendering and preference changes do not trigger it. |
| Curiosity Lab selection feedback                                                 | Kept, shortened and scoped | A 140ms opacity emphasis identifies newly selected content. No vertical motion or outgoing-content delay.                                                                                                         |
| Role-filter project reordering                                                   | Kept, refined              | A 320ms position-only transition preserves the identity and destination of existing records. Text and diagrams do not scale.                                                                                      |
| Story connecting line                                                            | Kept, synchronized         | The GSAP line tracks document progress directly, without the previous one-second catch-up lag. It communicates position, while all chapters remain visible.                                                       |
| Hover and focus feedback                                                         | Kept                       | Short color/background changes communicate affordance. Focus outlines and selected indicators are visible independently of movement.                                                                              |
| Anchor navigation                                                                | Kept                       | Native smooth scrolling maintains spatial orientation. Reduced motion uses immediate navigation. There is no scroll hijacking, pinning or forced dwell.                                                           |
| Case-study feature/workflow selectors, skill register and navigation disclosures | Static state changes       | These do not simulate loading or perform decorative movement. The selected labels and available evidence remain explicit.                                                                                         |

## Discover → Research → Design → Build → Evolve

One route links five fixed instruments. The same `progress` value updates both visual renderers and the stage rail; they do not run independent timers. Adjacent handoffs take about 530ms. Long jumps are capped at 960ms. The easing decelerates into the chosen stage without bounce or overshoot.

A new input stops the preceding animation and continues from its current rendered position. There is no queue and no automatic carousel. The selected stage, its explanation, evidence link and next-stage handoff update immediately. The route provides continuity while traveling to that selection.

Each stage explains its connection to the next:

1. Discover → Research: a useful question gives research a direction.
2. Research → Design: research provides context and constraints.
3. Design → Build: a designed experience becomes something people can try.
4. Build → Evolve: a working version creates questions to evaluate.
5. Evolve → Discover: learning becomes the starting point for another question.

Users can select any stage, use the explicit Previous/Continue controls, or press Left/Right, Home and End within the stage controls. Enter and Space retain native button behavior. The current stage has a visible ring, `aria-current="step"`, `aria-pressed`, a numbered readout and an evidence link.

Scroll progression is secondary. It reacts to wheel, touch-scroll or page-scroll key intent, with a small threshold dead band to avoid flicker. Anchor navigation and browser scroll-to-focus do not skip the sequence. Once someone focuses or selects the process controls, their choice takes precedence over scrolling. Scroll-origin changes do not produce live-region announcements.

## Reduced-motion alternatives

The root preference layer subscribes to the live OS media query and also offers an explicit **Reduce motion** control beside the sequence. A user can opt into reduced motion even when the OS has not requested it. The control never overrides an OS request to reduce motion. The manual choice lasts for the current app session and carries across client-side route navigation; it is not stored persistently.

Under reduced motion:

- Paths, stage rail and highlights snap to the selected stage.
- Descriptions change immediately at full opacity.
- Existing selection fades are stopped and restored to full opacity.
- Projects reorder without a position animation.
- The timeline is a complete, static connecting line; its ScrollTrigger is removed.
- Native anchor navigation is immediate.
- All stage controls, handoff text, diagrams and evidence links remain available.
- Scroll does not change the selected hero stage automatically.

The server begins with a conservative static presentation. Per-consumer external-store snapshots keep preference-dependent sections consistent during selective hydration. Changes to the OS preference or manual control cancel the relevant animations rather than merely hiding their CSS effects.

## Performance and cleanup

The WebGL canvas now always renders on demand. It redraws when a stage path, material interaction or layout changes; there is no idle animation loop. The route reuses a small geometry buffer and color objects. When the hero leaves the viewport, its finite transition is stopped and settled, avoiding unseen motion. Animation controls, media-query listeners, scroll listeners, requestAnimationFrame callbacks, GSAP contexts and geometry resources are cleaned up.

No dependencies or extra canvases were added. The 1.5 DPR cap, lazy import, mobile SVG alternative and scene error boundary remain.

## Verification

`npm run test:motion` exercises six behavioral cases: both renderer endpoints, continuity across a stage boundary, reduced-motion zero duration, bounded and interruptible timing, scroll hysteresis including Evolve, and out-of-range input.

Browser regression covers next-stage handoffs, the Evolve-to-Discover return, Home/End navigation, interrupted choices, the mobile route endpoint, the reduced-motion control and its full-opacity alternative, the desktop 3D path and browser console errors. Physical-device frame rates and an OS-level setting change are not claimed as measured tests; the shared manual preference path is exercised directly.

Final lint, type, production-build and route-smoke results are recorded in `QA.md`.
