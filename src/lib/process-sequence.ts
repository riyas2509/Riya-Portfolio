// One ordered route drives the mobile map, desktop path and HTML controls.
export const processNodes = [
  { world: [-2.6, 0.25, 0], map: [15, 39] },
  { world: [-1.25, 1.55, -0.2], map: [38, 17] },
  { world: [0.8, 1.05, 0.4], map: [77, 27] },
  { world: [2.25, -0.45, 0], map: [84, 68] },
  { world: [0.05, -1.4, 0.7], map: [51, 84] },
] as const;
export const handoffs = [
  "A useful question gives the research a direction.",
  "Research gives the design its context and constraints.",
  "A designed experience becomes something people can try.",
  "A working version creates new questions to evaluate.",
  "What I learn becomes the starting point for another question.",
] as const;
export const sequenceEase = [0.22, 1, 0.36, 1] as const;
export function clampProgress(value: number) {
  return Math.max(0, Math.min(4, Number.isFinite(value) ? value : 0));
}
export function transitionDuration(from: number, to: number, reduced: boolean) {
  if (reduced || from === to) return 0;
  return Math.min(
    0.96,
    0.38 + Math.abs(clampProgress(to) - clampProgress(from)) * 0.15,
  );
}
export function pointOnRoute(
  progress: number,
  space: "map" | "world",
): number[] {
  const value = clampProgress(progress);
  if (Number.isInteger(value)) return [...processNodes[value][space]];
  const index = Math.min(3, Math.floor(value));
  const fraction = value - index;
  return processNodes[index][space].map(
    (coordinate, axis) =>
      coordinate +
      (processNodes[index + 1][space][axis] - coordinate) * fraction,
  );
}
// A small dead band prevents scroll-boundary jitter from repeatedly changing stage.
export function stageAtScroll(offset: number, height: number, current: number) {
  const progress = clampProgress(
    Math.max(0, offset) / Math.max(1, height * 0.16),
  );
  if (progress >= 3.98) return 4;
  if (progress >= current + 1.08 || progress < current - 0.08)
    return Math.floor(progress);
  return current;
}
