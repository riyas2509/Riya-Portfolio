"use client";
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { RoundedBox, ContactShadows } from "@react-three/drei";
import type { Group } from "three";
import { MathUtils } from "three";
import { RiyaWorkspaceCharacter } from "./riya-workspace-character";
import { workspaceHasCharacter } from "@/data/workspace-experiment";

const palette = {
  lavender: "#b99cdd",
  blush: "#f2b3c3",
  cream: "#fff3df",
  mint: "#a9cfb5",
  yellow: "#f8d58a",
};
function Box({
  position = [0, 0, 0],
  size,
  color,
  radius = 0.08,
}: {
  position?: [number, number, number];
  size: [number, number, number];
  color: string;
  radius?: number;
}) {
  return (
    <RoundedBox
      args={size}
      position={position}
      radius={radius}
      smoothness={3}
      castShadow
      receiveShadow
    >
      <meshStandardMaterial color={color} roughness={0.62} />
    </RoundedBox>
  );
}
function Workspace({
  active,
  select,
  reduced,
}: {
  active: number;
  select: (index: number) => void;
  reduced: boolean;
}) {
  const world = useRef<Group>(null);
  const bulb = useRef<Group>(null);
  const [hover, setHover] = useState<number | null>(null);
  useFrame((state, delta) => {
    if (!world.current) return;
    const ease = 1 - Math.exp(-5 * Math.min(delta, 0.05));
    world.current.rotation.y = reduced
      ? 0
      : MathUtils.lerp(world.current.rotation.y, state.pointer.x * 0.07, ease);
    world.current.rotation.x = reduced
      ? 0
      : MathUtils.lerp(
          world.current.rotation.x,
          -state.pointer.y * 0.025,
          ease,
        );
    if (bulb.current)
      bulb.current.position.y =
        1.2 + (reduced ? 0 : Math.sin(state.clock.elapsedTime * 0.9) * 0.055);
  });
  const interactions = (index: number) => ({
    onClick: (event: { stopPropagation: () => void }) => {
      event.stopPropagation();
      select(index);
    },
    onPointerOver: (event: { stopPropagation: () => void }) => {
      event.stopPropagation();
      setHover(index);
    },
    onPointerOut: () => setHover(null),
  });
  return (
    <group ref={world} position={[0, -0.2, 0]}>
      <Box
        size={[7, 0.3, 3.8]}
        position={[0, -0.65, 0]}
        color="#e8c5a6"
        radius={0.14}
      />
      <Box size={[6.7, 0.12, 3.5]} position={[0, -0.46, 0]} color="#f7dec1" />
      <group
        position={[workspaceHasCharacter ? 0.3 : 0, -0.25, 0.3]}
        {...interactions(3)}
        scale={!reduced && hover === 3 ? 1.025 : 1}
      >
        <Box size={[2.65, 0.15, 1.7]} color={palette.lavender} />
        <Box
          size={[1.95, 0.035, 0.75]}
          position={[0, 0.09, -0.13]}
          color="#e6d6f1"
          radius={0.03}
        />
        {Array.from({ length: 24 }, (_, i) => (
          <Box
            key={i}
            size={[0.17, 0.035, 0.12]}
            position={[
              -0.8 + (i % 8) * 0.23,
              0.12,
              -0.35 + Math.floor(i / 8) * 0.22,
            ]}
            color="#bc9ad6"
            radius={0.018}
          />
        ))}
        <Box
          size={[0.7, 0.02, 0.3]}
          position={[0, 0.1, 0.54]}
          color="#ddcaeb"
          radius={0.03}
        />
        <group position={[0, 1, -0.65]} rotation={[-0.16, 0, 0]}>
          <Box size={[2.65, 1.85, 0.15]} color={palette.lavender} />
          <Box
            size={[2.42, 1.61, 0.03]}
            position={[0, 0, 0.095]}
            color="#fffbf2"
            radius={0.04}
          />
          <Box
            size={[0.45, 1.4, 0.035]}
            position={[-0.88, 0, 0.12]}
            color="#eadcf5"
            radius={0.03}
          />
          <Box
            size={[1.48, 0.25, 0.035]}
            position={[0.24, 0.53, 0.12]}
            color="#f5d1db"
            radius={0.04}
          />
          <Box
            size={[1.48, 0.53, 0.035]}
            position={[0.24, 0.05, 0.12]}
            color="#eee3f6"
            radius={0.04}
          />
          {[0.15, 0.28, 0.22, 0.4, 0.3, 0.21, 0.35, 0.17, 0.25].map((h, i) => (
            <Box
              key={i}
              size={[0.065, h, 0.04]}
              position={[-0.33 + i * 0.14, 0.05, 0.15]}
              color="#ab86c7"
              radius={0.02}
            />
          ))}
          <Box
            size={[0.69, 0.37, 0.035]}
            position={[-0.15, -0.51, 0.12]}
            color="#c5e1cf"
            radius={0.04}
          />
          <Box
            size={[0.69, 0.37, 0.035]}
            position={[0.65, -0.51, 0.12]}
            color="#f9dfb9"
            radius={0.04}
          />
        </group>
      </group>
      <group
        position={
          workspaceHasCharacter ? [-2.65, -0.28, 1.05] : [-2.15, -0.28, 0.7]
        }
        rotation={[0, 0.25, 0]}
        {...interactions(1)}
        scale={!reduced && hover === 1 ? 1.04 : 1}
      >
        <Box size={[1.13, 0.23, 1.55]} color={palette.blush} />
        <Box
          size={[0.99, 0.1, 1.4]}
          position={[0.02, 0, 0]}
          color={palette.cream}
        />
        <Box
          size={[1.13, 0.07, 1.55]}
          position={[0, 0.15, 0]}
          color={palette.blush}
        />
        <Box
          size={[0.6, 0.025, 0.6]}
          position={[0.08, 0.2, -0.17]}
          color="#fff5e4"
          radius={0.03}
        />
        {[0, 1, 2, 3, 4].map((i) => (
          <mesh
            key={i}
            position={[-0.54, 0.15, -0.6 + i * 0.29]}
            rotation={[Math.PI / 2, 0, 0]}
          >
            <torusGeometry args={[0.075, 0.018, 6, 14]} />
            <meshStandardMaterial color="#fff5df" roughness={0.5} />
          </mesh>
        ))}
      </group>
      <group ref={bulb} position={[2.1, 1.2, -0.55]} {...interactions(0)}>
        <mesh castShadow>
          <sphereGeometry args={[0.53, 24, 20]} />
          <meshStandardMaterial
            color={palette.yellow}
            roughness={0.38}
            emissive="#ffd98b"
            emissiveIntensity={active === 0 || hover === 0 ? 0.3 : 0.07}
          />
        </mesh>
        <Box
          size={[0.4, 0.3, 0.4]}
          position={[0, -0.58, 0]}
          color={palette.lavender}
        />
        <mesh position={[0, -0.76, 0]}>
          <sphereGeometry args={[0.15, 16, 12]} />
          <meshStandardMaterial color="#8b6cad" />
        </mesh>
        {[0, 1, 2, 3, 4].map((i) => (
          <mesh
            key={i}
            position={[
              Math.cos(i * Math.PI * 0.4) * 0.82,
              Math.sin(i * Math.PI * 0.4) * 0.82,
              0,
            ]}
            rotation={[0, 0, i * Math.PI * 0.4]}
          >
            <capsuleGeometry args={[0.025, 0.12, 3, 6]} />
            <meshStandardMaterial color="#e3b15e" />
          </mesh>
        ))}
      </group>
      <group
        position={[2.35, -0.15, 0.8]}
        {...interactions(2)}
        rotation={[0, 0, -0.14]}
      >
        <mesh castShadow>
          <cylinderGeometry args={[0.32, 0.26, 0.65, 24]} />
          <meshStandardMaterial color={palette.blush} />
        </mesh>
        {[-0.17, 0.04, 0.19].map((x, i) => (
          <group key={i} position={[x, 0.63, 0]} rotation={[0, 0, x * 0.6]}>
            <mesh castShadow>
              <cylinderGeometry args={[0.045, 0.045, 0.9, 6]} />
              <meshStandardMaterial
                color={[palette.lavender, palette.yellow, palette.mint][i]}
              />
            </mesh>
            <mesh position={[0, 0.52, 0]}>
              <coneGeometry args={[0.045, 0.14, 6]} />
              <meshStandardMaterial color="#ae8a72" />
            </mesh>
          </group>
        ))}
      </group>
      <group position={[-2.4, -0.05, -1.1]} {...interactions(4)}>
        <mesh castShadow>
          <cylinderGeometry args={[0.4, 0.29, 0.65, 24]} />
          <meshStandardMaterial color={palette.lavender} />
        </mesh>
        {[-1, 0, 1].map((x, i) => (
          <mesh
            key={i}
            position={[x * 0.23, 0.65 + (i % 2) * 0.2, 0]}
            rotation={[0, 0, -x * 0.5]}
            scale={[0.21, 0.55, 0.19]}
            castShadow
          >
            <sphereGeometry args={[1, 16, 16]} />
            <meshStandardMaterial color={i === 1 ? "#bad49c" : "#9ac3a7"} />
          </mesh>
        ))}
      </group>
      <group position={[-1.3, 1.45, -1.5]} {...interactions(4)}>
        {[
          [-0.48, 0, 0],
          [0.1, 0.45, 0],
          [0.65, 0.1, 0],
        ].map((p, i) => (
          <mesh key={i} position={p as [number, number, number]} castShadow>
            <sphereGeometry args={[i === 1 ? 0.22 : 0.17, 16, 16]} />
            <meshStandardMaterial
              color={[palette.mint, palette.blush, palette.lavender][i]}
            />
          </mesh>
        ))}
        <mesh position={[-0.18, 0.22, 0]} rotation={[0, 0, -0.92]}>
          <cylinderGeometry args={[0.025, 0.025, 0.72, 8]} />
          <meshStandardMaterial color="#c1a8d6" />
        </mesh>
        <mesh position={[0.38, 0.27, 0]} rotation={[0, 0, 1]}>
          <cylinderGeometry args={[0.025, 0.025, 0.65, 8]} />
          <meshStandardMaterial color="#c1a8d6" />
        </mesh>
      </group>
      {workspaceHasCharacter && (
        <group {...interactions(3)}>
          <RiyaWorkspaceCharacter reduced={reduced} />
        </group>
      )}
      <ContactShadows
        position={[0, -0.85, 0]}
        opacity={0.28}
        scale={12}
        blur={2.8}
        far={5}
        resolution={256}
        frames={1}
      />
    </group>
  );
}
export default function CreativeWorkspace({
  active,
  onSelect,
  running,
  reduced,
}: {
  active: number;
  onSelect: (i: number) => void;
  running: boolean;
  reduced: boolean;
}) {
  return (
    <Canvas
      orthographic
      camera={{ position: [6, 5.4, 8], zoom: 63, near: 0.1, far: 100 }}
      dpr={[1, 1.5]}
      frameloop={running && !reduced ? "always" : "demand"}
      gl={{
        alpha: true,
        antialias: true,
        powerPreference: "low-power",
      }}
      style={{ cursor: "pointer" }}
    >
      <ambientLight intensity={0.8} />
      <hemisphereLight args={["#fff7ec", "#baa4d1", 0.8]} />
      <directionalLight position={[-3, 8, 5]} intensity={2.1} />
      <directionalLight position={[5, 3, -3]} color="#f8d2e3" intensity={0.7} />
      <Workspace active={active} select={onSelect} reduced={reduced} />
    </Canvas>
  );
}
