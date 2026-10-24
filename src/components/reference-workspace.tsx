"use client";
import Image from "next/image";
import { useState, type PointerEvent } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { WorkspacePoster } from "./little-art";
import { useMotionPreferences } from "./motion-preferences";
import styles from "./reference-workspace.module.css";

/** A cohesive rendered illustration. No rigged character motion is implied. */
export function ReferenceWorkspace() {
  const [failed, setFailed] = useState(false);
  const { reduced } = useMotionPreferences();
  const x = useMotionValue(0),
    y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 90, damping: 25 }),
    smoothY = useSpring(y, { stiffness: 90, damping: 25 });
  const reset = () => {
    x.set(0);
    y.set(0);
  };
  const follow = (event: PointerEvent<HTMLDivElement>) => {
    if (reduced || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    x.set(((event.clientX - bounds.left) / bounds.width - 0.5) * 5);
    y.set(((event.clientY - bounds.top) / bounds.height - 0.5) * 4);
  };
  return (
    <div
      className={styles.illustration}
      role="img"
      aria-label={
        failed
          ? "A pastel creative workspace with a laptop, notebooks, plants and an idea lightbulb."
          : "A detailed 3D-style illustration inspired by Riya: long flowing dark hair, black glasses and lavender headphones, resting her cheek on one hand while working at a laptop, surrounded by AI and design books, plants, a notebook and a warm desk lamp."
      }
      onPointerMove={follow}
      onPointerLeave={reset}
    >
      {failed ? (
        <WorkspacePoster />
      ) : (
        <motion.div
          className={styles.art}
          style={{ x: reduced ? 0 : smoothX, y: reduced ? 0 : smoothY }}
        >
          <Image
            src="/workspace/riya-creative-workspace-v2.webp"
            alt=""
            fill
            sizes="(max-width: 650px) 100vw, 50vw"
            preload
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRrAAAABXRUJQVlA4IKQAAACQBACdASoYABIAPxF+sVQsKCQjKAqpgCIJZACdAA3oSno6Xe8S120UMiMINgAA/sl2joTONE06pGuDX7zH2kKFqziLbNIcC0+jw2tpSwP4BK1otpUeW0dD15KKitvckyKy/BGFCCgGinzBIX2D850Mk4jMS+XOyIEVkyha0HwCJM7zxtxH8np3qIrw2fQZD2e0BcY8edGir9At2XEM1SNzU1AwAA=="
            onError={() => setFailed(true)}
            style={{ objectFit: "contain" }}
          />
          <span
            aria-hidden="true"
            className={`${styles.spark} ${styles.sparkOne}`}
            data-reduced={reduced}
          />
          <span
            aria-hidden="true"
            className={`${styles.spark} ${styles.sparkTwo}`}
            data-reduced={reduced}
          />
        </motion.div>
      )}
    </div>
  );
}
