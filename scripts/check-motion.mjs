import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import ts from "typescript";

// Exercise the same TypeScript route math used by both renderers on Node 20.
const source = readFileSync(
  new URL("../src/lib/process-sequence.ts", import.meta.url),
  "utf8",
);
const { outputText } = ts.transpileModule(source, {
  compilerOptions: {
    module: ts.ModuleKind.ESNext,
    target: ts.ScriptTarget.ES2020,
  },
});
const {
  processNodes,
  pointOnRoute,
  transitionDuration,
  stageAtScroll,
  clampProgress,
} = await import(
  `data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`
);

test("both renderers arrive at all five stage coordinates", () => {
  for (let index = 0; index < 5; index++) {
    assert.deepEqual(pointOnRoute(index, "map"), [...processNodes[index].map]);
    assert.deepEqual(pointOnRoute(index, "world"), [
      ...processNodes[index].world,
    ]);
  }
});
test("interrupting a transition preserves a continuous point on the route", () => {
  for (const space of ["map", "world"]) {
    const before = pointOnRoute(1.999999, space);
    const after = pointOnRoute(2.000001, space);
    assert.ok(
      before.every(
        (coordinate, index) => Math.abs(coordinate - after[index]) < 0.001,
      ),
    );
    const point = pointOnRoute(2.5, space);
    assert.deepEqual(
      point,
      processNodes[2][space].map(
        (coordinate, index) => (coordinate + processNodes[3][space][index]) / 2,
      ),
    );
  }
});
test("reduced motion and an unchanged target never introduce a duration", () => {
  for (let from = 0; from <= 4; from++)
    for (let to = 0; to <= 4; to++)
      assert.equal(transitionDuration(from, to, true), 0);
  assert.equal(transitionDuration(2, 2, false), 0);
});
test("long jumps are bounded; a short interrupted journey does not inherit a full-length delay", () => {
  assert.ok(transitionDuration(0, 4, false) < 1);
  assert.ok(
    transitionDuration(3.8, 4, false) < transitionDuration(0, 4, false),
  );
  assert.equal(
    transitionDuration(0, 4, false),
    transitionDuration(4, 0, false),
  );
});
test("scrolling uses a dead band and can still reach the final stage", () => {
  const height = 1000;
  assert.equal(stageAtScroll(1.02 * 160, height, 0), 0);
  assert.equal(stageAtScroll(1.09 * 160, height, 0), 1);
  assert.equal(stageAtScroll(0.98 * 160, height, 1), 1);
  assert.equal(stageAtScroll(0.9 * 160, height, 1), 0);
  assert.equal(stageAtScroll(4 * 160, height, 3), 4);
  assert.equal(stageAtScroll(3000, height, 0), 4);
});
test("out-of-range route input cannot move a renderer beyond its endpoints", () => {
  assert.equal(clampProgress(NaN), 0);
  assert.deepEqual(pointOnRoute(-10, "world"), [...processNodes[0].world]);
  assert.deepEqual(pointOnRoute(100, "map"), [...processNodes[4].map]);
});
