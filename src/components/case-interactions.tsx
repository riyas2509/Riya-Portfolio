"use client";
import { Fragment, useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
const featureDescriptions = [
  "Described area: audio-to-text transcription. Implementation evidence, language coverage and accuracy evaluation still need documentation.",
  "Described area: text-to-speech synthesis. Voice options, supported languages and functional evidence are awaiting documentation.",
  "Described area: project management alongside conversation knowledge. Implementation, permission and collaboration flows need supporting evidence.",
  "Described area: key decisions and decision intelligence. Extraction quality and human review workflows remain evaluation questions.",
  "Described area: action items connected to meeting knowledge. Assignment and tracking behavior require supporting product artifacts.",
  "Described area: meeting scheduling. Functional evidence and calendar integration details have not been supplied.",
];
export function FeatureExplorer({ features }: { features: string[] }) {
  const [active, setActive] = useState(0);
  return (
    <div className="feature-explorer">
      <div
        className="feature-options"
        aria-label="Explore owner-described product areas"
      >
        {features.map((feature, i) => (
          <button
            key={feature}
            onClick={() => setActive(i)}
            aria-pressed={i === active}
            className={i === active ? "active" : ""}
          >
            {feature}
            <ArrowUpRight size={14} />
          </button>
        ))}
      </div>
      <div className="feature-detail" aria-live="polite">
        <span>
          OWNER-DESCRIBED SCOPE · IMPLEMENTATION EVIDENCE PENDING / 0
          {active + 1}
        </span>
        <h3>{features[active]}</h3>
        <p>{featureDescriptions[active]}</p>
      </div>
    </div>
  );
}
const flow = [
  {
    name: "Conversation",
    note: "Start with organizational audio. Consent, recording permissions and supported input types need documented confirmation.",
  },
  {
    name: "Transcription",
    note: "Audio becomes text through the reported transcription capability. The service, model and data handling details are awaiting verification.",
  },
  {
    name: "Understanding",
    note: "Surface key decisions and action items. This diagram expresses the intended product flow, not a verified technical architecture.",
  },
  {
    name: "Follow-through",
    note: "Connect knowledge with project work and next steps. Human review, ownership and workflow validation remain important next questions.",
  },
];
export function Workflow() {
  const [active, setActive] = useState(0);
  return (
    <>
      <div
        className="workflow"
        aria-label="Illustrative EchoNote product workflow"
      >
        {flow.map((step, i) => (
          <Fragment key={step.name}>
            <button
              aria-pressed={active === i}
              className={active === i ? "active" : ""}
              onClick={() => setActive(i)}
            >
              <span>0{i + 1}</span>
              {step.name}
            </button>
            {i < flow.length - 1 && <ArrowRight size={16} aria-hidden="true" />}
          </Fragment>
        ))}
      </div>
      <p className="workflow-note" aria-live="polite">
        {flow[active].note}
      </p>
    </>
  );
}
