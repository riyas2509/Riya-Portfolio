"use client";
import Link from "next/link";
import { motion } from "motion/react";
import {
  Search,
  Sparkles,
  PencilRuler,
  Sprout,
  ArrowUpRight,
} from "lucide-react";
import { useMotionPreferences } from "./motion-preferences";
import type { ThinkingStage } from "@/data/recruiter-content";
import styles from "./recruiter-sections.module.css";
const icons = [Search, Sparkles, PencilRuler, Sprout];
export function ThinkingJourney({
  stages,
  strengths,
}: {
  stages: ThinkingStage[];
  strengths: string[];
}) {
  const { reduced } = useMotionPreferences();
  return (
    <section
      id="how-i-work"
      className={`shell ${styles.journey}`}
      aria-labelledby="thinking-title"
    >
      <div className="little-section-heading">
        <div>
          <p className="petal-eyebrow">A PEEK AT MY PROCESS</p>
          <h2 id="thinking-title">
            How I Think <em>& Work</em>
          </h2>
        </div>
        <p>From a tiny “what if?” to something meaningful.</p>
      </div>
      <ol className={styles.steps}>
        {stages.map((stage, i) => {
          const Icon = icons[i];
          return (
            <motion.li
              key={stage.id}
              className={styles.step}
              initial={false}
              whileInView={
                reduced ? undefined : { opacity: [0.9, 1], y: [10, 0] }
              }
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: reduced ? 0 : 0.35,
                delay: reduced ? 0 : i * 0.06,
                ease: "easeOut",
              }}
            >
              <div className={styles.stepTop}>
                <span className={styles.number}>{stage.id}</span>
                <span className={styles.toyIcon}>
                  <Icon size={23} aria-hidden="true" />
                </span>
              </div>
              <h3>{stage.title}</h3>
              <p>{stage.description}</p>
              <Link href={stage.evidence.href}>
                {stage.evidence.label}
                <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </motion.li>
          );
        })}
      </ol>
      <div className={styles.team}>
        <div>
          <h3>What I bring to a team</h3>
          <p>Strengths I’m developing, and ways I enjoy contributing.</p>
        </div>
        <ul>
          {strengths.map((strength) => (
            <li key={strength}>
              <Sparkles size={14} aria-hidden="true" />
              {strength}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
