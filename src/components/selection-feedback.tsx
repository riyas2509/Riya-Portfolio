"use client";
import { useEffect, useRef, type ReactNode } from "react";
import { animate } from "motion/react";
import { useMotionPreferences } from "./motion-preferences";

// Feedback belongs to an actual selection change, never initial page entry.
export function SelectionFeedback({
  identity,
  duration,
  children,
}: {
  identity: number;
  duration: number;
  children: ReactNode;
}) {
  const scope = useRef<HTMLDivElement>(null);
  const previous = useRef(identity);
  const { reduced } = useMotionPreferences();
  useEffect(() => {
    const node = scope.current;
    const changed = previous.current !== identity;
    previous.current = identity;
    if (!node) return;
    if (reduced || !changed) {
      node.style.opacity = "1";
      return;
    }
    const animation = animate(
      node,
      { opacity: [0.65, 1] },
      { duration, ease: "easeOut" },
    );
    return () => {
      animation.stop();
      node.style.opacity = "1";
    };
  }, [identity, reduced, scope, duration]);
  return <div ref={scope}>{children}</div>;
}
