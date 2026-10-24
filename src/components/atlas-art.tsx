import type { CSSProperties } from "react";

export function AtlasMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M24 15C9-5 0 18 15 24 0 31 10 52 24 34c14 18 24-3 9-10 15-6 6-29-9-9Z"
        fill="#d9c4ee"
        stroke="#9b73b6"
        strokeWidth="1.5"
      />
      <circle
        cx="24"
        cy="24"
        r="7"
        fill="#ffe6a9"
        stroke="#b48a65"
        strokeWidth="1.2"
      />
      <path d="M21 25q3 3 6 0" stroke="#87627b" strokeWidth="1.3" />
    </svg>
  );
}
export function ProcessMark({ index }: { index: number }) {
  return (
    <svg viewBox="0 0 60 60" fill="none" aria-hidden="true">
      {index === 0 ? (
        <>
          <circle cx="26" cy="25" r="16" />
          <circle cx="26" cy="25" r="10" />
          <path d="m38 38 13 13M26 4v7M5 25h7" />
        </>
      ) : index === 1 ? (
        <>
          <path d="m9 16 22-9 20 10-22 9ZM9 26l20 10 22-10M9 36l20 10 22-10M9 46l20 10 22-10" />
          <path d="M29 26v30" strokeDasharray="2 4" />
        </>
      ) : index === 2 ? (
        <>
          <rect x="9" y="9" width="37" height="29" />
          <path d="M9 17h37M17 9v8M19 46h33V22M27 54h31V31" />
          <circle cx="16" cy="13" r="1" fill="currentColor" />
        </>
      ) : index === 3 ? (
        <>
          <path d="M7 14h19v19H7zM34 26h19v19H34zM14 41h12v12H14zM34 7h12v12H34zM26 24h8M20 33v8M40 19v7" />
        </>
      ) : (
        <>
          <path d="M30 53V32L14 18M30 32l17-15M14 18V7M14 18H4M47 17V5M47 17h10" />
          <circle cx="30" cy="53" r="3" />
          <circle cx="30" cy="32" r="3" />
        </>
      )}
    </svg>
  );
}
const diagrams: Record<string, { accent: string; caption: string }> = {
  echonote: {
    accent: "#815cb0",
    caption: "Product vision / conversation → decisions → follow-through",
  },
  echoos: {
    accent: "#397c65",
    caption: "Marketplace concept / creators ↔ reusable AI ↔ people",
  },
  lifecapital: {
    accent: "#aa6243",
    caption: "Concept / understand options, keep the decision human",
  },
  "ama-research": {
    accent: "#427a9a",
    caption: "Research scope / industry, technology and human work",
  },
};
export function ProjectDiagram({ slug }: { slug: string }) {
  const spec = diagrams[slug];
  if (!spec)
    return (
      <figure className="atlas-diagram uncharted-diagram">
        <AtlasMark />
        <figcaption>
          Uncharted / verified artifacts awaiting documentation
        </figcaption>
      </figure>
    );
  return (
    <figure
      className={`atlas-diagram diagram-${slug}`}
      style={{ "--diagram-accent": spec.accent } as CSSProperties}
    >
      <svg viewBox="0 0 480 280" fill="none" aria-hidden="true">
        <g className="diagram-grid">
          <path d="M0 70h480M0 140h480M0 210h480M80 0v280M160 0v280M240 0v280M320 0v280M400 0v280" />
        </g>
        <g className="diagram-ink">
          {slug === "echonote" ? (
            <>
              <path d="M30 140h18m7-12v24m9-42v60m10-83v106m10-67v30m10-57v86m10-104v122m10-81v40m10-33v26m10-6h50" />
              <circle cx="204" cy="140" r="28" />
              <circle cx="204" cy="140" r="38" strokeDasharray="2 6" />
              <path d="M204 127v26m-13-13h26M242 140h44l35-63h89M286 140l35 63h89M321 77v126" />
              <circle cx="321" cy="77" r="5" />
              <circle cx="321" cy="203" r="5" />
              <path d="M342 70h63m-63 14h40M342 196h63m-63 14h40" />
              <text x="28" y="239">
                01 / CONVERSATION
              </text>
              <text x="168" y="239">
                02 / CONTEXT
              </text>
              <text x="320" y="45">
                DECISIONS
              </text>
              <text x="320" y="255">
                NEXT STEPS
              </text>
            </>
          ) : slug === "echoos" ? (
            <>
              <path d="M63 67 171 140 63 213M171 140h137M308 140l108-73M308 140l108 73" />
              <circle cx="63" cy="67" r="17" />
              <circle cx="63" cy="213" r="17" />
              <circle cx="416" cy="67" r="17" />
              <circle cx="416" cy="213" r="17" />
              <rect x="183" y="80" width="112" height="120" />
              <path d="M183 120h112m-112 40h112M197 100h25m-25 40h42m-42 40h32" />
              <text x="196" y="105">
                AGENTS
              </text>
              <text x="196" y="145">
                WORKFLOWS
              </text>
              <text x="196" y="185">
                TEMPLATES
              </text>
              <text x="30" y="252">
                CREATORS
              </text>
              <text x="370" y="252">
                PEOPLE
              </text>
              <path d="M78 67h67m190 146h64" strokeDasharray="3 5" />
            </>
          ) : slug === "lifecapital" ? (
            <>
              <path d="M30 140h112M160 140l77-78h158M160 140h235M160 140l77 78h158" />
              <circle cx="150" cy="140" r="12" />
              <circle cx="264" cy="140" r="39" />
              <circle cx="264" cy="140" r="47" strokeDasharray="2 6" />
              <path d="M247 140h34m-17-17v34M395 51v22m-11-11h22M395 129v22m-11-11h22M395 207v22m-11-11h22" />
              <text x="29" y="117">
                A LIFE DECISION
              </text>
              <text x="236" y="145">
                YOU
              </text>
              <text x="290" y="48">
                UNDERSTAND
              </text>
              <text x="322" y="126">
                COMPARE
              </text>
              <text x="297" y="244">
                CHOOSE
              </text>
            </>
          ) : (
            <>
              <circle cx="240" cy="140" r="93" />
              <ellipse
                cx="240"
                cy="140"
                rx="145"
                ry="55"
                transform="rotate(-25 240 140)"
              />
              <path d="M40 140h400M240 20v240" strokeDasharray="3 5" />
              <circle cx="160" cy="90" r="9" />
              <circle cx="328" cy="111" r="9" />
              <circle cx="236" cy="231" r="9" />
              <path d="M160 90 328 111 236 231Z" />
              <text x="47" y="65">
                INDUSTRY
              </text>
              <text x="330" y="73">
                TECHNOLOGY
              </text>
              <text x="278" y="259">
                HUMAN WORK
              </text>
              <text x="188" y="146">
                RESEARCH
              </text>
            </>
          )}
        </g>
        <g className="diagram-registration">
          <path d="M5 14V5h9m452 0h9v9M5 266v9h9m452 0h9v-9" />
        </g>
      </svg>
      <figcaption>
        {spec.caption}
        <span>Illustrative diagram</span>
      </figcaption>
    </figure>
  );
}
