"use client";
import { useEffect, useMemo, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Line, RoundedBox } from "@react-three/drei";
import {
  BufferAttribute,
  BufferGeometry,
  Color,
  Line as ThreeLine,
  LineBasicMaterial,
} from "three";
import type { MotionValue } from "motion/react";
import { stages } from "@/data/portfolio";
import {
  clampProgress,
  pointOnRoute,
  processNodes,
} from "@/lib/process-sequence";
const positions = processNodes.map(
  (node) => [...node.world] as [number, number, number],
);
const stageColors = stages.map((stage) => new Color(stage.color));
function Instrument({
  index,
  active,
  onSelect,
}: {
  index: number;
  active: boolean;
  onSelect: (index: number) => void;
}) {
  const [hover, setHover] = useState(false);
  const color = stages[index].color;
  const material = (
    <meshStandardMaterial
      color={color}
      metalness={0.48}
      roughness={0.24}
      emissive={color}
      emissiveIntensity={active ? 0.5 : hover ? 0.24 : 0.06}
    />
  );
  return (
    <group
      position={positions[index]}
      rotation={[0.2, -0.3, -0.15]}
      onClick={(e) => {
        e.stopPropagation();
        onSelect(index);
      }}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHover(true);
      }}
      onPointerOut={() => setHover(false)}
    >
      {index === 0 && (
        <>
          <mesh rotation={[0.25, 0.35, 0]}>
            <torusGeometry args={[0.55, 0.12, 16, 64]} />
            {material}
          </mesh>
          <mesh position={[0.49, -0.61, 0]} rotation={[0, 0, 0.65]}>
            <capsuleGeometry args={[0.08, 0.52, 4, 12]} />
            {material}
          </mesh>
          <mesh>
            <sphereGeometry args={[0.32, 24, 24]} />
            <meshStandardMaterial
              color="#d5c7ff"
              transparent
              opacity={0.25}
              metalness={0.8}
              roughness={0.08}
            />
          </mesh>
        </>
      )}
      {index === 1 &&
        [0, 1, 2, 3].map((i) => (
          <RoundedBox
            key={i}
            args={[0.9, 0.12, 0.75]}
            radius={0.04}
            position={[0, i * 0.22 - 0.35, 0]}
            rotation={[0, i * 0.13, 0]}
          >
            {material}
          </RoundedBox>
        ))}
      {index === 2 &&
        [0, 1, 2].map((i) => (
          <mesh key={i} position={[i * 0.1, i * 0.1, -i * 0.22]}>
            <boxGeometry args={[1.05, 0.78, 0.06]} />
            <meshStandardMaterial
              color={color}
              wireframe={i === 0}
              transparent
              opacity={i === 0 ? 1 : 0.35}
              metalness={0.4}
              roughness={0.2}
              emissive={color}
              emissiveIntensity={active ? 0.4 : hover ? 0.18 : 0.03}
            />
          </mesh>
        ))}
      {index === 3 &&
        [
          [-0.25, -0.25, 0],
          [0.3, -0.25, 0],
          [-0.25, 0.3, 0],
          [0.3, 0.3, 0.55],
        ].map((p, i) => (
          <RoundedBox
            key={i}
            args={[0.47, 0.47, 0.47]}
            radius={0.08}
            position={p as [number, number, number]}
          >
            {material}
          </RoundedBox>
        ))}
      {index === 4 && (
        <>
          {[
            [0, -0.45, 0],
            [-0.4, 0.05, 0],
            [0.4, 0.05, 0],
            [-0.7, 0.5, 0],
            [0.05, 0.5, 0],
            [0.7, 0.5, 0],
          ].map((p, i) => (
            <mesh key={i} position={p as [number, number, number]}>
              <sphereGeometry args={[i === 0 ? 0.19 : 0.12, 20, 20]} />
              {material}
            </mesh>
          ))}
          <Line
            points={[
              [0, -0.45, 0],
              [-0.4, 0.05, 0],
              [-0.7, 0.5, 0],
            ]}
            color={color}
            lineWidth={3}
          />
          <Line
            points={[
              [0, -0.45, 0],
              [0.4, 0.05, 0],
              [0.7, 0.5, 0],
            ]}
            color={color}
            lineWidth={3}
          />
          <Line
            points={[
              [0.4, 0.05, 0],
              [0.05, 0.5, 0],
            ]}
            color={color}
            lineWidth={3}
          />
        </>
      )}
    </group>
  );
}
function SequenceThread({
  progress,
  running,
}: {
  progress: MotionValue<number>;
  running: boolean;
}) {
  const invalidate = useThree((state) => state.invalidate);
  const thread = useMemo(() => {
    const geometry = new BufferGeometry();
    geometry.setAttribute(
      "position",
      new BufferAttribute(new Float32Array(15), 3),
    );
    return new ThreeLine(
      geometry,
      new LineBasicMaterial({
        color: stages[0].color,
        transparent: true,
        opacity: 0.95,
      }),
    );
  }, []);
  useEffect(() => {
    invalidate();
    return progress.on("change", () => {
      if (running) invalidate();
    });
  }, [progress, invalidate, running]);
  useEffect(
    () => () => {
      thread.geometry.dispose();
      thread.material.dispose();
    },
    [thread],
  );
  useFrame(() => {
    const value = clampProgress(progress.get());
    const edge = Math.min(3, Math.floor(value));
    const attribute = thread.geometry.getAttribute(
      "position",
    ) as BufferAttribute;
    positions.forEach((position, i) => attribute.setXYZ(i, ...position));
    attribute.setXYZ(
      edge + 1,
      ...(pointOnRoute(value, "world") as [number, number, number]),
    );
    attribute.needsUpdate = true;
    thread.geometry.setDrawRange(0, value === 0 ? 0 : edge + 2);
    thread.material.color
      .copy(stageColors[edge])
      .lerp(stageColors[edge + 1], value - edge);
  });
  return <primitive object={thread} frustumCulled={false} />;
}
function Scene({
  active,
  onSelect,
  progress,
  running,
}: {
  active: number;
  onSelect: (index: number) => void;
  progress: MotionValue<number>;
  running: boolean;
}) {
  return (
    <>
      <ambientLight intensity={1.3} />
      <directionalLight position={[2, 4, 5]} intensity={3} color="#eee1ff" />
      <pointLight position={[-4, 0, 2]} intensity={14} color="#7950ef" />
      <Line
        points={positions}
        color="#7f8393"
        lineWidth={1}
        transparent
        opacity={0.35}
      />
      <SequenceThread progress={progress} running={running} />
      {stages.map((_, i) => (
        <Instrument
          key={i}
          index={i}
          active={active === i}
          onSelect={onSelect}
        />
      ))}
    </>
  );
}
export default function IdeaScene(props: {
  active: number;
  onSelect: (index: number) => void;
  running: boolean;
  progress: MotionValue<number>;
}) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 8], fov: 47 }}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      frameloop="demand"
      fallback={null}
    >
      <Scene {...props} />
    </Canvas>
  );
}
