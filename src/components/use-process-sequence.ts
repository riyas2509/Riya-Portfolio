"use client";
import { useCallback, useEffect, useState } from "react";
import { animate, useMotionValue } from "motion/react";
import {
  clampProgress,
  sequenceEase,
  transitionDuration,
} from "@/lib/process-sequence";

import { useMotionPreferences } from "./motion-preferences";
export function useProcessSequence(running: boolean) {
  const [selection, setSelection] = useState({
    index: 0,
    source: "user" as "user" | "scroll",
  });
  const { reduced } = useMotionPreferences();
  const progress = useMotionValue(0);
  useEffect(() => {
    // Interrupted inputs continue from the current rendered point; nothing is queued.
    if (reduced || !running) {
      progress.set(selection.index);
      return;
    }
    const animation = animate(progress, selection.index, {
      duration: transitionDuration(progress.get(), selection.index, false),
      ease: [...sequenceEase],
    });
    return () => animation.stop();
  }, [selection.index, progress, reduced, running]);
  const select = useCallback(
    (index: number, source: "user" | "scroll" = "user") =>
      setSelection({ index: Math.round(clampProgress(index)), source }),
    [],
  );
  return {
    active: selection.index,
    source: selection.source,
    select,
    progress,
    reduced: !!reduced,
  };
}
