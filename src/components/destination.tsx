import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ClayToy } from "./little-art";
import { projects } from "@/data/portfolio";

export function PageIntro({
  eyebrow,
  title,
  emphasis,
  children,
}: {
  eyebrow: string;
  title: string;
  emphasis: string;
  children: React.ReactNode;
}) {
  return (
    <section className="destination-intro shell">
      <p className="petal-eyebrow">{eyebrow}</p>
      <h1>
        {title}
        <br />
        <em>{emphasis}</em>
      </h1>
      <p>{children}</p>
    </section>
  );
}
export function PortraitIntro() {
  return (
    <section className="about-portrait shell">
      <div>
        <p className="petal-eyebrow">MEET RIYA SHAH</p>
        <h1>
          A curious mind.
          <br />
          <em>A thoughtful maker.</em>
        </h1>
        <p>
          I’m an AI/ML undergraduate at JG University, graduating in 2028, and
          the founder of EchoTech.
        </p>
        <p>
          I enjoy finding the friction in everyday workflows, imagining useful
          AI products and giving those ideas a clear, human experience.
        </p>
        <Link className="soft-button" href="/curiosity-lab">
          Explore how I think <ArrowUpRight size={16} />
        </Link>
      </div>
      <figure>
        <Image
          src="/portrait/riya-shah.png"
          alt="Professional portrait of Riya Shah in glasses and a navy blazer"
          width={450}
          height={560}
          priority
          sizes="(max-width: 650px) 85vw, 380px"
        />
        <figcaption>
          Hi, I’m Riya. Always room for another question ♡
        </figcaption>
      </figure>
    </section>
  );
}
export function ExploreThemes() {
  const themes = [
    {
      name: "AI Product Design & UX",
      note: "EchoNote · journeys & UX planning",
      href: "/work/echonote#user-flows",
      icon: "✧",
    },
    {
      name: "Product Thinking & Strategy",
      note: "EchoNote · product decisions",
      href: "/work/echonote#decisions",
      icon: "✳",
    },
    {
      name: "AI Innovation & Research",
      note: "AMA · industry research",
      href: "/work/ama-research#research",
      icon: "⌕",
    },
  ];
  return (
    <section className="shell home-themes" aria-labelledby="explore-themes">
      <p className="petal-eyebrow" id="explore-themes">
        WHAT I EXPLORE
      </p>
      <div className="little-strengths">
        <span className="strengths-label">
          Where I connect
          <br />
          <em>the dots</em> ↗
        </span>
        {themes.map((theme, i) => (
          <Link href={theme.href} key={theme.name}>
            <span className={`strength-icon strength-${i}`}>{theme.icon}</span>
            <span>
              <strong>{theme.name}</strong>
              <small>{theme.note}</small>
            </span>
            <ArrowUpRight size={15} />
          </Link>
        ))}
      </div>
    </section>
  );
}
export function RecognitionPreview() {
  return (
    <section
      className="shell recognition-preview"
      aria-labelledby="recognition-preview"
    >
      <div className="little-section-heading">
        <div>
          <p className="petal-eyebrow">LITTLE MILESTONES</p>
          <h2 id="recognition-preview">
            Learning, with
            <br />
            <em>something to show.</em>
          </h2>
        </div>
        <Link className="soft-button" href="/achievements">
          Explore achievements <ArrowUpRight size={16} />
        </Link>
      </div>
      <div className="recognition-pair">
        <Link href="/achievements#credentials">
          <Image
            src="/credentials/explore-generative-ai-with-the-vertex-ai-gemini-api.png"
            alt="Intermediate Google Cloud skill badge artwork for the Vertex AI Gemini API"
            width={250}
            height={160}
          />
          <div>
            <h3>10 Google Cloud skill badges</h3>
            <p>Generative AI, speech, prototyping & cloud learning.</p>
            <span>1 intermediate · 9 introductory ↗</span>
          </div>
        </Link>
        <Link href="/achievements#young-turks-evidence">
          <Image
            src="/credentials/young-turks-2026.png"
            alt="Young Turks Certificate of Merit recording Riya Shah’s 98.47 percentile"
            width={250}
            height={176}
          />
          <div>
            <h3>98.47 percentile</h3>
            <p>Naukri Campus Young Turks 2026</p>
            <span>Certificate of Merit · 19 October 2026 ↗</span>
          </div>
        </Link>
      </div>
    </section>
  );
}
export function ContactInvite() {
  return (
    <section className="shell contact-invitation">
      <ClayToy kind="envelope" />
      <div>
        <p className="petal-eyebrow">THE NEXT CONNECTION</p>
        <h2>
          Have an interesting idea?
          <br />
          <em>Let’s explore it.</em>
        </h2>
        <Link className="candy-button" href="/contact">
          Let’s connect <ArrowUpRight size={16} />
        </Link>
      </div>
    </section>
  );
}
export function WorkPreviewNote() {
  return (
    <p>
      {projects.filter((project) => project.kind !== "pending").length}{" "}
      documented project directions, each with its own question, current status
      and next step.
    </p>
  );
}
