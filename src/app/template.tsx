"use client";
import { motion } from "motion/react";
import { useMotionPreferences } from "@/components/motion-preferences";

export default function Template({ children }: { children: React.ReactNode }) {
  const { reduced } = useMotionPreferences();
  return (
    <motion.div
      initial={{ opacity: reduced ? 1 : 0.96, y: reduced ? 0 : 7 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduced ? 0 : 0.22, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
