"use client";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Component, useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useScroll } from "motion/react";
import { ArrowRight, ArrowUpRight, Sparkles, Heart } from "lucide-react";
import {
  chapters,
  contact,
  interests,
  profile,
  resumes,
  skillGroups,
  stages,
} from "@/data/portfolio";
import { ClayToy, type ToyKind } from "./little-art";
import { HeroWorkspacePoster } from "./hero-workspace-poster";
import {
  workspaceHasCharacter,
  workspaceUsesIllustration,
} from "@/data/workspace-experiment";
import { ReferenceWorkspace } from "./reference-workspace";
import workspaceStyles from "./reference-workspace.module.css";
import { MotionToggle, useMotionPreferences } from "./motion-preferences";
import { SelectionFeedback } from "./selection-feedback";
import { learningChapter } from "@/data/credentials";

const Workspace = dynamic(() => import("./creative-workspace"), {
  ssr: false,
  loading: () => <HeroWorkspacePoster />,
});
class WorkspaceBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? <HeroWorkspacePoster /> : this.props.children;
  }
}
const processToys: ToyKind[] = [
  "bulb",
  "notebook",
  "pencil",
  "laptop",
  "plant",
];
function SoftHeading({ children }: { children: ReactNode }) {
  const { reduced } = useMotionPreferences();
  return (
    <motion.div
      className="little-section-heading"
      initial={false}
      whileInView={
        reduced ? { y: 0, opacity: 1 } : { y: [12, 0], opacity: [0.85, 1] }
      }
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: reduced ? 0 : 0.4, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
export function LittleHero({ compact = false }: { compact?: boolean }) {
  const { reduced } = useMotionPreferences();
  const [active, setActive] = useState(0);
  const [supported, setSupported] = useState(false);
  const [processOpen, setProcessOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const artRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const media = matchMedia("(min-width: 900px)");
    const check = () => {
      if (!media.matches) {
        setSupported(false);
        return;
      }
      try {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("webgl2");
        setSupported(!!context);
        context?.getExtension("WEBGL_lose_context")?.loseContext();
      } catch {
        setSupported(false);
      }
    };
    if (workspaceUsesIllustration) return;
    check();
    media.addEventListener("change", check);
    const observer = new IntersectionObserver(([entry]) =>
      setVisible(entry.isIntersecting),
    );
    if (artRef.current) observer.observe(artRef.current);
    return () => {
      media.removeEventListener("change", check);
      observer.disconnect();
    };
  }, []);
  return (
    <section className="little-hero shell" aria-labelledby="little-hero-title">
      <div className="little-hero-main">
        <div className="little-hero-copy">
          <p className="hello-sticker">
            <Sparkles size={15} /> {profile.role}
          </p>
          <h1 id="little-hero-title">
            {profile.headline.lead}{" "}
            <span className="name-swish">{profile.headline.focus}</span>{" "}
            {profile.headline.bridge} <em>{profile.headline.emphasis}</em>{" "}
            {profile.headline.ending}
            <span className="pink-period">.</span>
          </h1>
          <p className="little-subheading">{profile.supporting}</p>
          <div className="hero-person">
            <Image
              src="/portrait/riya-shah.png"
              alt="Riya Shah wearing glasses and a navy blazer"
              width={132}
              height={162}
              priority
              sizes="(max-width: 650px) 100px, 132px"
            />
            <p className="little-education">
              <strong>Hi, I’m Riya Shah.</strong>
              <br />
              {profile.identity}
              <br />
              {profile.education}
            </p>
          </div>
          <div className="little-actions">
            <Link className="candy-button" href="/work">
              Explore My Work <ArrowUpRight size={17} />
            </Link>
            <Link className="soft-button" href="/about">
              Meet Me <ArrowRight size={16} />
            </Link>
            <Link className="little-connect" href="/contact">
              Let’s Connect ↗
            </Link>
          </div>
        </div>
        <div className="workspace-composition">
          <div
            className={`workspace-room ${workspaceUsesIllustration ? workspaceStyles.room : ""}`}
            ref={artRef}
            role={workspaceUsesIllustration ? undefined : "img"}
            aria-label={
              workspaceUsesIllustration
                ? undefined
                : workspaceHasCharacter
                  ? "A stylized clay miniature inspired by Riya, with long dark hair, black glasses and mint headphones, seated at a lavender laptop among notebooks, a plant, pencils and an idea lightbulb."
                  : "A pastel creative workspace with a laptop, notebooks, a plant, pencils and an idea lightbulb."
            }
          >
            {workspaceUsesIllustration ? (
              <ReferenceWorkspace />
            ) : (
              <>
                <div className="room-arch" />
                <div className="workspace-canvas" aria-hidden="true">
                  {supported ? (
                    <WorkspaceBoundary>
                      <Workspace
                        active={active}
                        onSelect={(index) => {
                          setActive(index);
                          if (compact) setProcessOpen(true);
                        }}
                        running={visible}
                        reduced={reduced}
                      />
                    </WorkspaceBoundary>
                  ) : (
                    <HeroWorkspacePoster />
                  )}
                </div>
                <span className="workspace-note">
                  a tiny workspace,
                  <br />
                  for big “what ifs” ♡
                </span>
                <span className="room-sparkle one">✦</span>
                <span className="room-sparkle two">✧</span>
              </>
            )}
            <span className="scene-caption">
              Original conceptual workspace · illustrative interface
            </span>
          </div>
          <Link className="hero-product-note" href="/work/echonote">
            <span className="note-icon">✦</span>
            <span>
              <small>MEET MY FLAGSHIP PRODUCT</small>
              <strong>
                EchoNote <ArrowUpRight size={17} />
              </strong>
              <span>From conversations to clarity and action.</span>
              <span className="note-status">
                Website launched · Product development ongoing
              </span>
            </span>
          </Link>
        </div>
      </div>
      {!compact && (
        <>
          {" "}
          <div className="little-strengths">
            <span className="strengths-label">
              Where I connect
              <br />
              <em>the dots</em> ↗
            </span>
            {profile.competencies.map((item, i) => (
              <Link href={item.href} key={item.name}>
                <span className={`strength-icon strength-${i}`}>
                  {["✧", "✳", "⌕"][i]}
                </span>
                <span>
                  <strong>{item.name}</strong>
                  <small>{item.proof}</small>
                </span>
                <ArrowUpRight size={15} />
              </Link>
            ))}
          </div>
        </>
      )}
      {compact ? (
        <details
          className="hero-process-disclosure"
          open={processOpen}
          onToggle={(event) => setProcessOpen(event.currentTarget.open)}
        >
          <summary>
            Peek inside my creative process <ArrowRight size={14} />
          </summary>
          <ProcessControls active={active} setActive={setActive} />
        </details>
      ) : (
        <ProcessControls active={active} setActive={setActive} />
      )}
    </section>
  );
}

function ProcessControls({
  active,
  setActive,
}: {
  active: number;
  setActive: (index: number) => void;
}) {
  return (
    <div className="little-process">
      <p>
        How an idea grows <span>Pick an object & peek inside my process.</span>
      </p>
      <div
        className="little-process-buttons"
        aria-label="Creative process stages"
      >
        {stages.map((stage, i) => (
          <button
            key={stage.name}
            aria-pressed={active === i}
            aria-controls="little-process-detail"
            onClick={() => setActive(i)}
          >
            <ClayToy kind={processToys[i]} />
            <span>{stage.name}</span>
          </button>
        ))}
      </div>
      <div
        id="little-process-detail"
        className="little-process-detail"
        aria-live="polite"
      >
        <SelectionFeedback identity={active} duration={0.16}>
          <strong>{stages[active].title}</strong>
          <p>{stages[active].detail}</p>
          <Link href={stages[active].evidence}>
            See it in the work <ArrowUpRight size={13} />
          </Link>
        </SelectionFeedback>
      </div>
    </div>
  );
}
export function ProcessExplorer() {
  const [active, setActive] = useState(0);
  return (
    <section
      id="process"
      className="shell section-pad"
      aria-label="My creative process"
    >
      <ProcessControls active={active} setActive={setActive} />
    </section>
  );
}

export function LittleStory() {
  const [active, setActive] = useState(0);
  const { reduced } = useMotionPreferences();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 70%"],
  });
  const journey = [...chapters, learningChapter];
  const toys: ToyKind[] = ["notebook", "lens", "laptop", "ai", "bulb"];
  const links = [
    "/curiosity-lab#skills",
    "/work/ama-research",
    "/work/echonote",
    "/work/echoos",
    "/achievements#credentials",
  ];
  return (
    <section className="little-story section-pad" id="story" ref={ref}>
      <div className="shell">
        <SoftHeading>
          <div>
            <p className="petal-eyebrow">A LITTLE ABOUT ME</p>
            <h2>
              A curious mind.
              <br />
              <em>An unfolding story.</em>
            </h2>
          </div>
          <p>
            I’m a student, a founder, and someone who likes asking what could
            work better. This is the journey I’m building, one thoughtful step
            at a time.
          </p>
        </SoftHeading>
        <div className="journey-world">
          <svg
            className="journey-trail journey-trail-wide"
            viewBox="0 0 1100 260"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M80 155C180-50 300 340 410 145S640 15 700 145 890 300 1030 115"
              stroke="#c4afd9"
              strokeWidth="3"
              strokeDasharray="5 9"
              fill="none"
            />
            <motion.path
              d="M80 155C180-50 300 340 410 145S640 15 700 145 890 300 1030 115"
              stroke="#a785c5"
              strokeWidth="4"
              fill="none"
              style={{ pathLength: reduced ? 1 : scrollYProgress }}
            />
          </svg>
          <svg
            className="journey-trail journey-trail-small"
            viewBox="0 0 360 600"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M90 65C160 0 215 60 270 100S300 200 90 270 180 390 270 305 225 500 90 475"
              stroke="#c4afd9"
              strokeWidth="3"
              strokeDasharray="5 9"
              fill="none"
            />
            <motion.path
              d="M90 65C160 0 215 60 270 100S300 200 90 270 180 390 270 305 225 500 90 475"
              stroke="#a785c5"
              strokeWidth="4"
              fill="none"
              style={{ pathLength: reduced ? 1 : scrollYProgress }}
            />
          </svg>
          <div className="journey-stops">
            {journey.map((item, i) => (
              <button
                key={item.name}
                className={active === i ? "active" : ""}
                onClick={() => setActive(i)}
                aria-pressed={active === i}
                aria-controls="journey-reflection"
              >
                <span className="journey-object">
                  <ClayToy kind={toys[i]} />
                </span>
                <small>
                  {i === 0
                    ? "EXPECTED 2028"
                    : i === 1
                      ? "APR–JUN 2026"
                      : i === 2
                        ? "21 OCT 2026"
                        : i === 3
                          ? "EXPLORING"
                          : "ONGOING LEARNING"}
                </small>
                <strong>
                  {
                    [
                      "AI & ML at JG University",
                      "Research at AMA",
                      "EchoTech & EchoNote",
                      "EchoOS & LifeCapital",
                      "Learning & milestones",
                    ][i]
                  }
                </strong>
              </button>
            ))}
          </div>
        </div>
        <div
          className="journey-reflection"
          id="journey-reflection"
          aria-live="polite"
        >
          <span className="handwritten">a note from this chapter ♡</span>
          <SelectionFeedback identity={active} duration={0.16}>
            <h3>{journey[active].name}</h3>
            <p>{journey[active].text}</p>
            <Link href={links[active]}>
              Explore this chapter <ArrowUpRight size={16} />
            </Link>
          </SelectionFeedback>
        </div>
      </div>
    </section>
  );
}

const labToys: ToyKind[] = [
  "lens",
  "bulb",
  "pencil",
  "ai",
  "notebook",
  "laptop",
  "plant",
];
export function LittleLab() {
  const [active, setActive] = useState(1);
  const { reduced } = useMotionPreferences();
  return (
    <section id="lab" className="little-lab section-pad">
      <div className="shell">
        <SoftHeading>
          <div>
            <p className="petal-eyebrow">WELCOME TO MY CURIOSITY LAB</p>
            <h2>
              A desk full of
              <br />
              <em>“what if?”</em>
            </h2>
          </div>
          <p>
            These are the things I love thinking about.
            <br />
            Pick something up. There’s a real idea behind each one.
          </p>
        </SoftHeading>
        <div className="little-lab-layout">
          <div
            className="curiosity-desk"
            aria-label="Explore my professional interests"
          >
            <div className="desk-label handwritten">Ideas welcome here!</div>
            {interests.map((interest, i) => (
              <motion.button
                whileHover={
                  reduced ? undefined : { y: -5, rotate: i % 2 ? 2 : -2 }
                }
                transition={{ duration: 0.2 }}
                key={interest.name}
                className={`desk-interest interest-${i} ${active === i ? "active" : ""}`}
                onClick={() => setActive(i)}
                aria-pressed={active === i}
                aria-controls="curiosity-note"
              >
                <ClayToy kind={labToys[i]} />
                <span>{interest.name}</span>
              </motion.button>
            ))}
          </div>
          <div
            className="curiosity-note"
            id="curiosity-note"
            aria-live="polite"
          >
            <span className="note-tape" aria-hidden="true" />
            <span className="petal-eyebrow">A PEEK INSIDE MY MIND</span>
            <SelectionFeedback identity={active} duration={0.16}>
              <h3>{interests[active].name}</h3>
              <p>{interests[active].why}</p>
              <blockquote>{interests[active].note}</blockquote>
              <div className="curiosity-evidence">
                <strong>In my work</strong>
                <p>{interests[active].example}</p>
              </div>
              <Link href={interests[active].href}>
                Explore the connected project <ArrowUpRight size={16} />
              </Link>
            </SelectionFeedback>
          </div>
        </div>
      </div>
    </section>
  );
}

export function LittleSkills() {
  const [active, setActive] = useState(1);
  const group = skillGroups[active];
  return (
    <section id="skills" className="little-skills section-pad">
      <div className="shell">
        <SoftHeading>
          <div>
            <p className="petal-eyebrow">MY CREATIVE TOOLBOX</p>
            <h2>
              A little strategy.
              <br />
              <em>A little making magic.</em>
            </h2>
          </div>
          <p>
            Tools, methods and a willingness to learn.
            <br />
            Every skill here connects to a piece of work.
          </p>
        </SoftHeading>
        <div className="toolbox-layout">
          <div className="toolbox-categories" aria-label="Skill categories">
            {skillGroups.map((item, i) => (
              <button
                key={item.name}
                aria-pressed={active === i}
                onClick={() => setActive(i)}
                className={active === i ? "active" : ""}
              >
                <span>{["✦", "✎", "✳", "⌕", "↗"][i]}</span>
                {item.name}
                <ArrowRight size={15} />
              </button>
            ))}
          </div>
          <div className="toolbox-content">
            <div className="toolbox-sticker handwritten">
              tools → possibilities
            </div>
            <h3>{group.name}</h3>
            <div className="skill-charms" aria-live="polite">
              {group.skills.map((skill, i) => {
                const href =
                  group.skillEvidence?.[skill] ||
                  `/work/${group.project}#${group.evidence}`;
                const SkillLink = href.startsWith("#") ? "a" : Link;
                return (
                  <SkillLink href={href} key={skill}>
                    <span className={`charm-icon charm-${i % 4}`}>
                      {skill === "Firebase"
                        ? "♨"
                        : skill === "Figma"
                          ? "F"
                          : skill === "Google AI Studio"
                            ? "✦"
                            : skill === "Antigravity"
                              ? "A"
                              : skill === "API integration"
                                ? "↔"
                                : ["✧", "✳", "◇", "↗"][i % 4]}
                    </span>
                    <strong>{skill}</strong>
                    <small>See in the work ↗</small>
                  </SkillLink>
                );
              })}
            </div>
            <Link className="toolbox-proof" href={`/work/${group.project}`}>
              Connected project:{" "}
              {group.project === "ama-research"
                ? "AMA Industry Research"
                : group.project === "echonote"
                  ? "EchoNote"
                  : group.project === "echoos"
                    ? "EchoOS"
                    : "LifeCapital"}
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function LittleContact({ page = false }: { page?: boolean }) {
  const Heading = page ? "h1" : "h2";
  return (
    <section id="contact" className="little-contact">
      <div className="shell">
        <div className="contact-cloud">
          <div className="letter-illustration">
            <ClayToy kind="envelope" />
            <span className="handwritten">
              your next idea
              <br />
              could start here ♡
            </span>
          </div>
          <div className="little-contact-copy">
            <p className="petal-eyebrow">LET’S CONNECT THE DOTS</p>
            <Heading>
              Have an interesting idea?
              <br />
              <em>Let’s make something meaningful.</em>
            </Heading>
            <a className="candy-button" href={contact.email}>
              Say hello <ArrowUpRight size={17} />
            </a>
            <a className="little-email" href={contact.email}>
              riyamshah2509@gmail.com
            </a>
          </div>
          <span className="contact-sparkle" aria-hidden="true">
            ✦
          </span>
        </div>
        <div className="little-contact-links">
          <div>
            <a href={contact.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <ArrowUpRight size={15} />
            </a>
            <a href={contact.github} target="_blank" rel="noreferrer">
              GitHub <ArrowUpRight size={15} />
            </a>
            <a href="https://echotechai.in/" target="_blank" rel="noopener noreferrer">
              EchoTech <ArrowUpRight size={15} />
            </a>
          </div>
          <div className="little-resumes">
            {resumes.some((item) => item.file) ? (
              resumes
                .filter((item) => item.file)
                .map((item) => (
                  <a key={item.lens} href={item.file!} download>
                    {item.label} resume ↓
                  </a>
                ))
            ) : (
              <span>
                Resume downloads will appear when approved PDFs are added.
              </span>
            )}
          </div>
        </div>
        <div className="motion-setting">
          <Heart size={14} />
          <span>Made with curiosity & thoughtful tools.</span>
          <MotionToggle />
        </div>
      </div>
    </section>
  );
}
