"use client";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { CatmullRomCurve3, Vector3, Quaternion, type Group } from "three";

type Point = [number, number, number];
const clay = {
  skin: "#b97b55",
  nose: "#c58a62",
  hair: "#292022",
  hairLight: "#39292a",
  sweater: "#c6ace1",
  mint: "#b7d5c5",
  frame: "#27222b",
  cream: "#fff0dd",
};
function Pebble({
  at = [0, 0, 0],
  scale = [1, 1, 1],
  color,
  rotation = [0, 0, 0],
}: {
  at?: Point;
  scale?: Point;
  color: string;
  rotation?: Point;
}) {
  return (
    <mesh position={at} scale={scale} rotation={rotation} castShadow>
      <sphereGeometry args={[1, 24, 16]} />
      <meshStandardMaterial color={color} roughness={0.65} />
    </mesh>
  );
}
function Thread({
  points,
  color,
  radius = 0.02,
  closed = false,
}: {
  points: Point[];
  color: string;
  radius?: number;
  closed?: boolean;
}) {
  const curve = useMemo(
    () =>
      new CatmullRomCurve3(
        points.map((p) => new Vector3(...p)),
        closed,
      ),
    [points, closed],
  );
  return (
    <mesh castShadow>
      <tubeGeometry args={[curve, 32, radius, 6, closed]} />
      <meshStandardMaterial color={color} roughness={0.65} />
    </mesh>
  );
}
function Limb({
  from,
  to,
  radius,
  color,
}: {
  from: Point;
  to: Point;
  radius: number;
  color: string;
}) {
  const midpoint = new Vector3(...from)
    .add(new Vector3(...to))
    .multiplyScalar(0.5);
  const direction = new Vector3(...to).sub(new Vector3(...from));
  const quaternion = new Quaternion().setFromUnitVectors(
    new Vector3(0, 1, 0),
    direction.clone().normalize(),
  );
  return (
    <mesh position={midpoint} quaternion={quaternion} castShadow>
      <capsuleGeometry
        args={[radius, Math.max(0.01, direction.length() - radius * 2), 4, 12]}
      />
      <meshStandardMaterial color={color} roughness={0.7} />
    </mesh>
  );
}
/** A portrait-inspired miniature, not a scan or an exact likeness. All geometry is local. */
export function RiyaWorkspaceCharacter({ reduced }: { reduced: boolean }) {
  const torso = useRef<Group>(null),
    head = useRef<Group>(null),
    leftHand = useRef<Group>(null),
    rightHand = useRef<Group>(null),
    eyes = useRef<Group>(null);
  const elapsed = useRef(0);
  useFrame((_, delta) => {
    // Local clock prevents a jump after the scene resumes from being offscreen.
    elapsed.current += reduced ? 0 : Math.min(delta, 0.05);
    const t = elapsed.current;
    if (torso.current)
      torso.current.position.y = reduced ? 0 : Math.sin(t * 1.3) * 0.009;
    if (head.current) {
      head.current.rotation.z = reduced
        ? -0.035
        : -0.035 + Math.sin(t * 0.65) * 0.012;
      head.current.rotation.x = reduced
        ? 0.045
        : 0.045 + Math.sin(t * 0.8) * 0.009;
    }
    if (leftHand.current)
      leftHand.current.position.y = reduced ? 0 : Math.sin(t * 3.3) * 0.012;
    if (rightHand.current)
      rightHand.current.position.y = reduced
        ? 0
        : Math.sin(t * 3.3 + 1.8) * 0.012;
    // One brief blink every ~6 seconds; no random timers or React state per frame.
    if (eyes.current) {
      const phase = t % 6.4;
      eyes.current.scale.y = reduced
        ? 1
        : phase > 5.9 && phase < 6.08
          ? Math.max(0.08, Math.abs(phase - 5.99) / 0.09)
          : 1;
    }
  });
  return (
    <group position={[-1.65, -0.43, 0.65]} rotation={[0, 1.28, 0]}>
      {/* Blush chair and bent, seated legs sit below the existing desktop. */}
      <Pebble
        at={[0, -0.57, -0.12]}
        scale={[0.53, 0.14, 0.48]}
        color="#e7b3c7"
      />
      <Pebble
        at={[0, -0.1, -0.43]}
        scale={[0.49, 0.65, 0.13]}
        color="#edc4d4"
      />
      <Limb
        from={[0, -0.63, -0.12]}
        to={[0, -1.2, -0.12]}
        radius={0.07}
        color="#a78cbb"
      />
      {[-1, 1].map((side) => (
        <group key={side}>
          <Limb
            from={[side * 0.2, -0.41, 0]}
            to={[side * 0.24, -0.49, 0.58]}
            radius={0.18}
            color="#8fae9d"
          />
          <Limb
            from={[side * 0.24, -0.49, 0.58]}
            to={[side * 0.25, -1.03, 0.62]}
            radius={0.13}
            color="#8fae9d"
          />
          <Pebble
            at={[side * 0.25, -1.1, 0.75]}
            scale={[0.16, 0.12, 0.28]}
            color={clay.cream}
          />
          <Limb
            from={[0, -1.15, -0.12]}
            to={[side * 0.47, -1.19, 0.28]}
            radius={0.035}
            color="#a78cbb"
          />
        </group>
      ))}
      <group ref={torso}>
        <Pebble
          at={[0, 0.3, 0]}
          scale={[0.43, 0.66, 0.3]}
          color={clay.sweater}
        />
        <Pebble
          at={[0, 0.9, 0.015]}
          scale={[0.16, 0.26, 0.16]}
          color={clay.skin}
        />
        <Pebble
          at={[0, 0.81, 0.16]}
          scale={[0.24, 0.09, 0.14]}
          color={clay.cream}
        />
        <Thread
          color="#b494d2"
          radius={0.012}
          points={[
            [-0.22, -0.15, 0.23],
            [0, -0.18, 0.29],
            [0.22, -0.15, 0.23],
          ]}
        />
        {[-1, 1].map((side) => (
          <group key={side}>
            <Limb
              from={[side * 0.34, 0.68, 0.03]}
              to={[side * 0.43, 0.21, 0.34]}
              radius={0.16}
              color={clay.sweater}
            />
            <Limb
              from={[side * 0.43, 0.21, 0.34]}
              to={[side * 0.29, 0.29, 0.83]}
              radius={0.125}
              color={clay.sweater}
            />
            <group ref={side === -1 ? leftHand : rightHand}>
              <Pebble
                at={[side * 0.28, 0.29, 0.94]}
                scale={[0.135, 0.065, 0.18]}
                rotation={[-0.05, side * 0.1, 0]}
                color={clay.skin}
              />
              {[0, 1, 2].map((i) => (
                <Pebble
                  key={i}
                  at={[side * 0.28 - 0.07 + i * 0.065, 0.275, 1.065]}
                  scale={[0.027, 0.036, 0.09]}
                  color={clay.skin}
                />
              ))}
            </group>
          </group>
        ))}
        <group ref={head} position={[0, 1.38, 0]}>
          {/* Layered dark hair frames a warm clay face; no photographic texture. */}
          <Pebble
            at={[0, -0.17, -0.2]}
            scale={[0.51, 0.77, 0.32]}
            color={clay.hair}
          />
          <Pebble
            at={[0, 0, 0.04]}
            scale={[0.43, 0.54, 0.38]}
            color={clay.skin}
          />
          {[-1, 1].map((side) => (
            <group key={side}>
              <Pebble
                at={[side * 0.41, -0.035, 0.05]}
                scale={[0.09, 0.14, 0.1]}
                color={clay.skin}
              />
              <Pebble
                at={[side * 0.39, -0.39, -0.06]}
                scale={[0.17, 0.59, 0.22]}
                rotation={[0.08, 0, side * 0.13]}
                color={clay.hair}
              />
              <Pebble
                at={[side * 0.24, 0.34, 0.04]}
                scale={[0.28, 0.25, 0.32]}
                rotation={[0, 0, side * -0.4]}
                color={clay.hair}
              />
              <Thread
                color={clay.hairLight}
                radius={0.012}
                points={[
                  [side * 0.32, 0.39, 0.22],
                  [side * 0.45, 0.12, 0.19],
                  [side * 0.45, -0.28, 0.13],
                  [side * 0.39, -0.72, 0.1],
                ]}
              />
              <Thread
                color={clay.hairLight}
                radius={0.009}
                points={[
                  [side * 0.23, 0.46, 0.19],
                  [side * 0.4, 0.19, 0.23],
                  [side * 0.46, -0.16, 0.15],
                ]}
              />
            </group>
          ))}
          <Pebble
            at={[0, -0.065, 0.415]}
            scale={[0.065, 0.09, 0.07]}
            color={clay.nose}
          />
          <group ref={eyes} position={[0, 0.04, 0.383]}>
            {[-1, 1].map((side) => (
              <group key={side} position={[side * 0.192, 0, 0]}>
                <Pebble scale={[0.09, 0.055, 0.022]} color="#fff4e4" />
                <Pebble
                  at={[0.008, -0.008, 0.022]}
                  scale={[0.039, 0.043, 0.017]}
                  color="#352524"
                />
                <Pebble
                  at={[0.018, 0.008, 0.037]}
                  scale={[0.012, 0.012, 0.006]}
                  color="#fff9f0"
                />
              </group>
            ))}
          </group>
          {[-1, 1].map((side) => (
            <group key={side}>
              <Thread
                color={clay.frame}
                radius={0.018}
                closed
                points={[
                  [side * 0.192 - 0.145, 0.13, 0.408],
                  [side * 0.192 + 0.145, 0.13, 0.408],
                  [side * 0.192 + 0.16, 0.035, 0.415],
                  [side * 0.192 + 0.12, -0.095, 0.409],
                  [side * 0.192 - 0.1, -0.095, 0.409],
                  [side * 0.192 - 0.16, 0.035, 0.415],
                ]}
              />
              <Thread
                color={clay.hair}
                radius={0.015}
                points={[
                  [side * 0.192 - 0.085, 0.205, 0.35],
                  [side * 0.192, 0.22, 0.37],
                  [side * 0.192 + 0.085, 0.19, 0.35],
                ]}
              />
              <Thread
                color={clay.frame}
                radius={0.017}
                points={[
                  [side * 0.36, 0.09, 0.39],
                  [side * 0.46, 0.09, 0.14],
                  [side * 0.45, 0.03, -0.02],
                ]}
              />
              <Pebble
                at={[side * 0.26, -0.16, 0.35]}
                scale={[0.065, 0.025, 0.015]}
                color="#c78770"
              />
            </group>
          ))}
          <Thread
            color={clay.frame}
            radius={0.017}
            points={[
              [-0.05, 0.075, 0.414],
              [0, 0.1, 0.43],
              [0.05, 0.075, 0.414],
            ]}
          />
          <Thread
            color="#8d4b45"
            radius={0.016}
            points={[
              [-0.105, -0.22, 0.36],
              [-0.05, -0.25, 0.387],
              [0.02, -0.255, 0.392],
              [0.09, -0.225, 0.367],
            ]}
          />
          {/* Padded mint headphones. Half torus stays above the crown. */}
          <mesh position={[0, 0.065, -0.055]} castShadow>
            <torusGeometry args={[0.56, 0.055, 8, 32, Math.PI]} />
            <meshStandardMaterial color={clay.mint} roughness={0.7} />
          </mesh>
          {[-1, 1].map((side) => (
            <group key={side}>
              <Pebble
                at={[side * 0.51, 0.035, -0.035]}
                scale={[0.11, 0.23, 0.21]}
                color="#a18ab8"
              />
              <Pebble
                at={[side * 0.565, 0.035, -0.035]}
                scale={[0.09, 0.195, 0.175]}
                color={clay.mint}
              />
              <Pebble
                at={[side * 0.625, 0.035, -0.035]}
                scale={[0.025, 0.115, 0.105]}
                color="#d6e9dc"
              />
            </group>
          ))}
        </group>
      </group>
    </group>
  );
}
