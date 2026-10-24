"use client";
import {
  motion,
  useMotionValue,
  useTransform,
  type MotionValue,
} from "motion/react";
import { stages } from "@/data/portfolio";
import { pointOnRoute, processNodes } from "@/lib/process-sequence";
import { ProcessMark } from "./atlas-art";
function Edge({
  index,
  progress,
}: {
  index: number;
  progress: MotionValue<number>;
}) {
  const length = useTransform(progress, (value) =>
    Math.max(0, Math.min(1, value - index)),
  );
  const [x, y] = processNodes[index].map;
  const [nextX, nextY] = processNodes[index + 1].map;
  return (
    <motion.path
      className="sequence-edge"
      d={`M${x} ${y}L${nextX} ${nextY}`}
      style={{ pathLength: length, stroke: stages[index + 1].color }}
      vectorEffect="non-scaling-stroke"
    />
  );
}
export function FlatUniverse({ progress }: { progress?: MotionValue<number> }) {
  const origin = useMotionValue(0);
  const position = progress ?? origin;
  const x = useTransform(position, (value) => pointOnRoute(value, "map")[0]);
  const y = useTransform(position, (value) => pointOnRoute(value, "map")[1]);
  return (
    <div className="flat-universe" aria-hidden="true">
      <svg
        className="sequence-map"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          className="sequence-guide"
          d={processNodes
            .map((node, i) => `${i ? "L" : "M"}${node.map.join(" ")}`)
            .join(" ")}
          vectorEffect="non-scaling-stroke"
        />
        {processNodes.slice(0, -1).map((_, i) => (
          <Edge key={i} index={i} progress={position} />
        ))}
        <motion.circle className="sequence-cursor" cx={x} cy={y} r="1" />
      </svg>
      {stages.map((stage, i) => (
        <span
          key={stage.name}
          className={`flat-object flat-${i}`}
          style={{
            color: stage.color,
            left: `${processNodes[i].map[0]}%`,
            top: `${processNodes[i].map[1]}%`,
          }}
        >
          <ProcessMark index={i} />
        </span>
      ))}
    </div>
  );
}
