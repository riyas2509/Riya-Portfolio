"use client";
import Link from "next/link";
import { useState, type CSSProperties } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import {
  achievements,
  contact,
  interests,
  resumes,
  skillGroups,
  stages,
} from "@/data/portfolio";
import { AtlasMark, ProcessMark } from "./atlas-art";
import { SelectionFeedback } from "./selection-feedback";
const coordinates = [
  [11, 29],
  [43, 10],
  [76, 26],
  [90, 60],
  [65, 85],
  [31, 75],
  [9, 60],
];
export function CuriosityLab() {
  const [active, setActive] = useState(0);
  const interest = interests[active];
  return (
    <section id="lab" className="lab-section section-pad">
      <div className="shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span className="section-no">03</span> THE QUESTION MAP
            </p>
            <h2>
              Where my
              <br />
              <em>attention goes.</em>
            </h2>
          </div>
          <p className="section-description">
            Select a point to trace an interest
            <br />
            to a real piece of work.
          </p>
        </div>
        <div className="lab-layout">
          <div className="question-map" aria-label="Select an interest">
            <svg
              className="question-paths"
              viewBox="0 0 600 440"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M66 128 258 44 456 114 540 264 390 374 186 330 54 264Z" />
              <path
                d="M66 128 390 374M258 44 186 330M456 114 54 264"
                strokeDasharray="2 7"
              />
              <ellipse cx="300" cy="220" rx="240" ry="170" />
            </svg>
            <div className="map-center" aria-hidden="true">
              <span>THE STARTING POINT</span>
              <p>
                What would
                <br />
                make this useful?
              </p>
              <AtlasMark />
            </div>
            {interests.map((item, i) => (
              <button
                key={item.name}
                className={`question-node ${active === i ? "active" : ""}`}
                style={
                  {
                    "--node-x": `${coordinates[i][0]}%`,
                    "--node-y": `${coordinates[i][1]}%`,
                    "--node-color": stages[i % 5].color,
                  } as CSSProperties
                }
                aria-pressed={active === i}
                onClick={() => setActive(i)}
              >
                <span className="question-dot" aria-hidden="true" />
                <span className="node-index">Q.0{i + 1}</span>
                <strong>{item.name}</strong>
              </button>
            ))}
          </div>
          <div className="lab-detail" aria-live="polite">
            <span className="lab-index">OBSERVATION / Q.0{active + 1}</span>

            <SelectionFeedback identity={active} duration={0.14}>
              <h3>{interest.name}</h3>
              <p>{interest.why}</p>
              <div className="example-note">
                <span>CONNECTED WORK</span>
                <p>{interest.example}</p>
              </div>
              <Link className="text-link" href={interest.href}>
                Follow the evidence <ArrowUpRight size={16} />
              </Link>
            </SelectionFeedback>
          </div>
        </div>
      </div>
    </section>
  );
}
export function Skills() {
  const [active, setActive] = useState(0);
  const group = skillGroups[active];
  return (
    <section id="skills" className="skills-section section-pad">
      <div className="shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span className="section-no">04</span> INSTRUMENT REGISTER
            </p>
            <h2>
              What I use.
              <br />
              <em>What it connects to.</em>
            </h2>
          </div>
          <p className="section-description">
            A tool is part of a process.
            <br />
            Every thread leads back to the work.
          </p>
        </div>
        <div className="skills-layout">
          <div className="skill-categories" aria-label="Skill categories">
            {skillGroups.map((item, i) => (
              <button
                key={item.name}
                aria-pressed={active === i}
                className={active === i ? "active" : ""}
                onClick={() => setActive(i)}
              >
                <ProcessMark index={[0, 2, 3, 1, 4][i]} />
                <span>0{i + 1}</span>
                {item.name}
                <ArrowUpRight size={16} />
              </button>
            ))}
          </div>
          <div className="instrument-register">
            <div className="register-caption">
              <span>INSTRUMENTS / 0{active + 1}</span>
              <span>CONNECTED FILE ↘</span>
            </div>
            <div className="register-links" aria-live="polite">
              {group.skills.map((skill, i) => (
                <Link
                  href={`/work/${group.project}#${active === 3 ? "research" : active === 2 ? "integrations" : "role"}`}
                  key={skill}
                >
                  <span className="register-coordinate">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{skill}</span>
                  <span className="register-thread" aria-hidden="true" />
                  <ArrowUpRight size={14} />
                </Link>
              ))}
            </div>
            <Link className="register-project" href={`/work/${group.project}`}>
              <span>TRACE TO PROJECT</span>
              {group.project === "ama-research"
                ? "AMA Industry Research"
                : group.project === "echonote"
                  ? "EchoNote"
                  : group.project === "echoos"
                    ? "EchoOS"
                    : "LifeCapital"}
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
        <details className="verification-drawer">
          <summary>
            Unverified records{" "}
            <span>Achievement archive · held for review</span>
            <ChevronDown size={16} />
          </summary>
          <p>
            Prepared entries awaiting evidence. These are not verified
            credentials.
          </p>
          {achievements.map((item) => (
            <div key={item.name}>
              {item.name}
              <span>Verification required</span>
            </div>
          ))}
        </details>
      </div>
    </section>
  );
}
export function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="shell">
        <div className="contact-coordinate">
          <span className="section-no">05</span>
          <span>OPEN CHANNEL / THE NEXT CONNECTION</span>
          <span className="channel-indicator">READY FOR A QUESTION</span>
        </div>
        <div className="contact-layout">
          <div>
            <h2>
              Have an
              <br />
              <em>interesting problem?</em>
              <br />
              Let’s explore it.
            </h2>
            <a href={contact.email} className="contact-email">
              riyamshah2509@gmail.com
              <ArrowUpRight size={26} />
            </a>
          </div>
          <div className="contact-terminal" aria-hidden="true">
            <svg viewBox="0 0 300 300" fill="none">
              <circle cx="150" cy="150" r="105" />
              <circle cx="150" cy="150" r="74" strokeDasharray="2 7" />
              <path d="M0 150h113m74 0h113M150 0v113m0 74v113" />
              <path d="M150 150 224 76" />
              <circle cx="150" cy="150" r="8" />
              <circle className="contact-endpoint" cx="224" cy="76" r="7" />
            </svg>
            <span>A QUESTION → A CONVERSATION</span>
          </div>
        </div>
        <div className="contact-bottom">
          <div>
            <a href={contact.linkedin} target="_blank" rel="noreferrer">
              01 / LinkedIn
              <ArrowUpRight size={14} />
            </a>
            <a href={contact.github} target="_blank" rel="noreferrer">
              02 / GitHub
              <ArrowUpRight size={14} />
            </a>
            <a href={contact.domain} target="_blank" rel="noreferrer">
              03 / riyas25.vercel.app
              <ArrowUpRight size={14} />
            </a>
          </div>
          <div className="resume-links">
            {resumes.some((item) => item.file) ? (
              resumes
                .filter((item) => item.file)
                .map((item) => (
                  <a key={item.lens} href={item.file!} download>
                    {item.label} resume ↓
                  </a>
                ))
            ) : (
              <span>Resume files / awaiting approved PDFs</span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
