"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Check, ChevronDown, Menu, X } from "lucide-react";
import {
  lenses,
  lensProjectOrder,
  projects,
  projectLensEvidence,
  type LensId,
} from "@/data/portfolio";
import { AtlasMark } from "./atlas-art";
import { GardenArt } from "./little-art";
import { sequenceEase } from "@/lib/process-sequence";
import { useMotionPreferences } from "./motion-preferences";
export function Header() {
  const pathname = usePathname();
  const navigation = [
    ["Work", "/work"],
    ["My story", "/about"],
    ["Curiosity lab", "/curiosity-lab"],
    ["Achievements", "/achievements"],
  ];
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="wordmark" href="/" aria-label="Riya Shah home">
          <AtlasMark />
          <span className="brand-name">Riya Shah</span>
          <span className="brand-descriptor">little universe ♡</span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              aria-current={
                pathname === href || pathname.startsWith(href + "/")
                  ? "page"
                  : undefined
              }
            >
              {label}
            </Link>
          ))}
        </nav>
        <Link
          className="header-contact"
          href="/contact"
          aria-current={pathname === "/contact" ? "page" : undefined}
        >
          Let’s connect <ArrowUpRight size={15} />
        </Link>
        <button
          ref={toggleRef}
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        {open && (
          <nav
            className="mobile-nav"
            id="mobile-menu"
            aria-label="Mobile navigation"
          >
            {[...navigation, ["Let’s connect", "/contact"]].map(
              ([label, href]) => (
                <Link
                  href={href}
                  key={href}
                  aria-current={
                    pathname === href || pathname.startsWith(href + "/")
                      ? "page"
                      : undefined
                  }
                  onClick={() => setOpen(false)}
                >
                  {label}
                  <ArrowUpRight size={17} />
                </Link>
              ),
            )}
          </nav>
        )}
      </div>
    </header>
  );
}
export function ProjectExplorer({ preview = false }: { preview?: boolean }) {
  const { reduced } = useMotionPreferences();
  const [lens, setLens] = useState<LensId | null>(null);
  useEffect(() => {
    const sync = () => {
      const value = new URLSearchParams(window.location.search).get("lens");
      setLens(lenses.some((l) => l.id === value) ? (value as LensId) : null);
    };
    sync();
    window.addEventListener("popstate", sync);
    return () => window.removeEventListener("popstate", sync);
  }, []);
  const selected = lenses.find((l) => l.id === lens);
  const change = (value: LensId | null) => {
    setLens(value);
    const url = new URL(window.location.href);
    if (value) url.searchParams.set("lens", value);
    else url.searchParams.delete("lens");
    window.history.pushState({}, "", url);
  };
  const sorted = [...projects.filter((p) => p.kind !== "pending")].sort(
    (a, b) =>
      lens && !preview
        ? lensProjectOrder[lens].indexOf(a.slug) -
          lensProjectOrder[lens].indexOf(b.slug)
        : 0,
  );
  return (
    <section
      className={`work-section section-pad ${preview ? "home-garden" : ""}`}
      id="work"
    >
      <div className="shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span className="section-no">01</span> SELECTED WORK
            </p>
            <h2>
              Welcome to my
              <br />
              <em>Idea Garden.</em>
            </h2>
          </div>
          <div className="section-aside">
            <span className="handnote">
              A launch. Two concepts.
              <br />
              An industry research chapter.
            </span>
            <p>
              A few ideas I’m bringing to life, and the research that helps them
              grow. Status and evidence stay visible.
            </p>
          </div>
        </div>
        {!preview && (
          <>
            <div className="lens-heading">
              <span>EXPLORE THROUGH A CAREER LENS</span>
              <button
                onClick={() => change(null)}
                aria-pressed={!lens}
                className={!lens ? "reset active" : "reset"}
              >
                All perspectives <ArrowUpRight size={13} />
              </button>
            </div>
            <div className="lens-filters" aria-label="Career lens filters">
              {lenses.map((l) => (
                <button
                  key={l.id}
                  aria-pressed={lens === l.id}
                  onClick={() => change(l.id)}
                  className={lens === l.id ? "active" : ""}
                  title={l.name}
                >
                  {l.short}
                </button>
              ))}
            </div>
            <div className="lens-intro" aria-live="polite">
              <div>
                <span className="eyebrow">
                  {selected?.name ||
                    "AI PRODUCT DESIGN & UX STRATEGY · MY PRIMARY DIRECTION"}
                </span>
                <p>
                  {selected?.intro ||
                    "Design-led product building, with related interests in product management and innovation. Choose a lens to explore the supporting work."}
                </p>
              </div>
              {selected && (
                <div className="competencies">
                  {selected.skills.map((s) => (
                    <span key={s}>
                      <Check size={12} />
                      {s}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
        <div className="project-list atlas-records">
          {sorted.map((project) => (
            <motion.article
              layout={reduced ? false : "position"}
              whileHover={
                reduced
                  ? undefined
                  : { y: -3, rotate: project.slug === "echoos" ? -0.4 : 0.3 }
              }
              transition={{
                duration: reduced ? 0 : 0.32,
                ease: [...sequenceEase],
              }}
              key={project.slug}
              data-project={project.slug}
              className={`project-card ${project.color} ${project.slug === "echonote" ? "flagship" : ""}`}
            >
              <span className="record-coordinate" aria-hidden="true">
                {project.category.slice(0, 2)}
                <i />
              </span>
              <div className="project-copy">
                <div className="project-kicker">
                  <span>{project.category}</span>
                  <span className="status">
                    <i
                      className={project.kind === "launched" ? "live-dot" : ""}
                    />
                    {project.status}
                  </span>
                </div>
                <h3>
                  <Link href={`/work/${project.slug}`}>
                    {project.name}
                    <ArrowUpRight size={28} />
                  </Link>
                </h3>
                <p className="project-description">{project.description}</p>
                {(!preview || project.slug === "echonote") && (
                  <p className="contribution">{project.contribution}</p>
                )}
                {!preview && (
                  <div className="tag-row">
                    {[...project.skills]
                      .sort(
                        (a, b) =>
                          Number(
                            selected?.skills.includes(b as never) || false,
                          ) -
                          Number(
                            selected?.skills.includes(a as never) || false,
                          ),
                      )
                      .slice(0, 3)
                      .map((skill) => (
                        <span
                          className={
                            selected?.skills.some((s) => s === skill)
                              ? "highlight"
                              : ""
                          }
                          key={skill}
                        >
                          {skill}
                        </span>
                      ))}
                  </div>
                )}
                <Link
                  className="text-link"
                  href={`/work/${project.slug}#${lens && !preview ? projectLensEvidence[project.slug]?.[lens] || selected?.evidence || "overview" : "overview"}`}
                >
                  {!preview && selected && project.roles.includes(selected.id)
                    ? "Explore relevant evidence"
                    : "Explore the case study"}
                  <ArrowUpRight size={16} />
                </Link>
              </div>
              <GardenArt slug={project.slug} />
            </motion.article>
          ))}
        </div>
        {preview ? (
          <Link className="candy-button garden-all" href="/work">
            Explore the full Idea Garden <ArrowUpRight size={16} />
          </Link>
        ) : (
          <>
            <details className="additional-work">
              <summary>
                Open notebook{" "}
                <span>04 projects awaiting verified documentation</span>
                <ChevronDown size={18} />
              </summary>
              <div className="pending-projects">
                {projects
                  .filter((p) => p.kind === "pending")
                  .map((p) => (
                    <Link href={`/work/${p.slug}`} key={p.slug}>
                      <span>{p.name}</span>
                      <span>{p.status}</span>
                      <ArrowUpRight size={17} />
                    </Link>
                  ))}
              </div>
            </details>{" "}
          </>
        )}
      </div>
    </section>
  );
}
export function Footer() {
  return (
    <footer className="site-footer shell">
      <Link className="wordmark" href="/">
        <AtlasMark />
        <span className="brand-name">Riya Shah</span>
      </Link>
      <span>Riya’s Little Universe of Big Ideas · 2026</span>
      <nav aria-label="Footer navigation">
        <Link href="/work">Work</Link>
        <Link href="/about">About</Link>
        <Link href="/achievements">Achievements</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <a href="#main">Back to the beginning ↑</a>
    </footer>
  );
}
