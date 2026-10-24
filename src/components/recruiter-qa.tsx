"use client";
import { useState } from "react";
import Link from "next/link";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import type { RecruiterQuestion } from "@/data/recruiter-content";
import styles from "./recruiter-sections.module.css";
export function RecruiterQA({ questions }: { questions: RecruiterQuestion[] }) {
  const [expanded, setExpanded] = useState<Set<string>>(() => new Set());
  const toggle = (id: string) =>
    setExpanded((previous) => {
      const next = new Set(previous);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  return (
    <section
      id="recruiter-qa"
      className={`shell ${styles.qa}`}
      aria-labelledby="qa-title"
    >
      <div className="little-section-heading">
        <div>
          <p className="petal-eyebrow">A LITTLE MORE CONTEXT</p>
          <h2 id="qa-title">
            Before You Ask… <em>♡</em>
          </h2>
        </div>
        <p>A few things you might be wondering.</p>
      </div>
      <div className={styles.questions}>
        {questions.map((question) => {
          const open = expanded.has(question.id),
            panelId = `qa-panel-${question.id}`,
            buttonId = `qa-question-${question.id}`;
          return (
            <div className={styles.question} key={question.id}>
              <h3>
                <button
                  id={buttonId}
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => toggle(question.id)}
                >
                  <span>{question.question}</span>
                  {open ? (
                    <Minus size={18} aria-hidden="true" />
                  ) : (
                    <Plus size={18} aria-hidden="true" />
                  )}
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                aria-hidden={!open}
                inert={!open}
                className={`${styles.answer} ${open ? styles.answerOpen : ""}`}
              >
                <div>
                  <div className={styles.answerContent}>
                    <p>{question.answer}</p>
                    {question.link &&
                      (question.link.href.startsWith("https://") ? (
                        <a
                          href={question.link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {question.link.label}
                          <ArrowUpRight size={14} aria-hidden="true" />
                        </a>
                      ) : (
                        <Link href={question.link.href}>
                          {question.link.label}
                          <ArrowUpRight size={14} aria-hidden="true" />
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <p className={styles.qaFootnote}>
        Curious about my process?{" "}
        <Link href="/about#how-i-work">
          See how I think & work <ArrowUpRight size={14} aria-hidden="true" />
        </Link>
      </p>
    </section>
  );
}
