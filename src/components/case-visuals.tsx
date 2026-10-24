"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { ClayToy } from "./little-art";
export function JourneyDiagram({
  steps,
  research = false,
}: {
  steps: string[];
  research?: boolean;
}) {
  const [active, setActive] = useState(0);
  return (
    <figure className="journey-diagram">
      <div
        className="workflow"
        aria-label={
          research
            ? "Portfolio summary of the research process"
            : "Conceptual user journey"
        }
      >
        {steps.map((step, i) => (
          <button
            key={step}
            onClick={() => setActive(i)}
            className={active === i ? "active" : ""}
            aria-pressed={active === i}
          >
            <span>0{i + 1}</span>
            {step}
            {i < steps.length - 1 && (
              <ArrowRight size={13} aria-hidden="true" />
            )}
          </button>
        ))}
      </div>
      <p className="workflow-note" aria-live="polite">
        {
          (research
            ? [
                "Start with sector context and credible secondary sources.",
                "Look at tasks, constraints and potential areas of AI assistance.",
                "Keep human judgment, skill needs and workflow implications visible.",
                "Bring the research together into a presentation and questions for further work.",
              ]
            : [
                "Clarify the need and the information a person brings into the experience.",
                "Make the next action and its expected result understandable.",
                "Keep context visible so a person can review what the system proposes.",
                "Support a considered next step, with the person retaining control.",
              ])[active]
        }
      </p>
      <figcaption>
        {research
          ? "Portfolio summary of research themes · not an official AMA figure"
          : "Conceptual journey · not a tested user flow or completed product feature"}
      </figcaption>
    </figure>
  );
}
export function HumanAiSummary() {
  return (
    <figure className="human-ai-summary">
      <div className="human-ai-row human-ai-header">
        <span>Workflow question</span>
        <span>AI can assist with</span>
        <span>Human judgment</span>
      </div>
      {[
        [
          "Organize information",
          "Draft structure & summaries",
          "Check source & context",
        ],
        [
          "Explore opportunities",
          "Suggest patterns & possibilities",
          "Prioritize needs & tradeoffs",
        ],
        [
          "Make a decision",
          "Present options for review",
          "Own the decision & its impact",
        ],
      ].map((row) => (
        <div className="human-ai-row" key={row[0]}>
          {row.map((text) => (
            <span key={text}>{text}</span>
          ))}
        </div>
      ))}
      <figcaption>
        Qualitative portfolio interpretation · not an AMA benchmark, deployment
        result or official figure
      </figcaption>
    </figure>
  );
}
export function ConceptGallery() {
  return (
    <div className="concept-gallery">
      {(
        [
          { kind: "laptop", title: "Conversation workspace" },
          { kind: "notebook", title: "Context worth keeping" },
          { kind: "ai", title: "Connected next steps" },
        ] as const
      ).map((item) => (
        <figure key={item.kind}>
          <ClayToy kind={item.kind} />
          <figcaption>
            {item.title}
            <small>Conceptual illustration</small>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
