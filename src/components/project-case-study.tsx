import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, ChevronDown } from "lucide-react";
import { projects } from "@/data/portfolio";
import { amaResearch } from "@/data/credentials";
import { caseStories } from "@/data/case-stories";
import { GardenArt } from "./little-art";
import { FeatureExplorer, Workflow } from "./case-interactions";
import { ConceptGallery, HumanAiSummary, JourneyDiagram } from "./case-visuals";
import { ContactInvite } from "./destination";
export function caseMetadata(slug: string): Metadata {
  const project = projects.find((p) => p.slug === slug);
  return {
    title: project
      ? `${project.caseTitle || project.name} — Case study`
      : "Project not found",
    description: project?.description,
    alternates: { canonical: `/work/${slug}` },
    openGraph: {
      title: project
        ? `${project.caseTitle || project.name} · Riya Shah`
        : "Project not found",
      description: project?.description,
    },
  };
}
export function ProjectCaseStudy({ slug }: { slug: string }) {
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  const echo = slug === "echonote",
    ama = slug === "ama-research",
    pending = project.kind === "pending";
  const story = caseStories[slug];
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  const nav = [
    ["overview", "Overview"],
    ["problem", ama ? "Research context" : "Problem & concept"],
    ["user-flows", ama ? "Research process" : "User journey"],
    ["design", ama ? "Research synthesis" : "Design decisions"],
    ["integrations", ama ? "Methods" : "AI workflows & tools"],
    ["status", "Current progress"],
    ["next", "Next steps"],
  ];
  return (
    <div className="case-page">
      <div className="case-hero shell">
        <Link className="case-back" href="/work">
          <ArrowLeft size={14} />
          Back to the Idea Garden
        </Link>
        <p className="eyebrow">{project.category} / CASE STUDY</p>
        <div className="case-title-row">
          <div>
            <h1 className={ama ? "long-case-title" : ""}>
              {project.caseTitle || project.name}
            </h1>
            <p>
              {ama
                ? "Exploring how AI transforms workflows, industries and human work."
                : project.description}
            </p>
          </div>
        </div>
        <div className="case-meta">
          <div>
            <span>STATUS</span>
            <p>
              {project.status}
              {echo && " · Website launch: 21 October 2026"}
            </p>
          </div>
          <div>
            <span>MY CONTRIBUTION</span>
            <p>{project.contribution}</p>
          </div>
          <div>
            <span>CONTEXT</span>
            <p>
              {ama
                ? "Ahmedabad Management Association · April–June 2026"
                : echo
                  ? "EchoTech · Product development & validation ongoing"
                  : "Exploration & documentation"}
            </p>
          </div>
        </div>
      </div>
      <div className="case-atlas-figure shell">
        <GardenArt slug={slug} />
      </div>
      <div className="case-body shell">
        <nav className="case-nav" aria-label="Case study sections">
          <span>IN THIS CASE STUDY</span>
          {nav.map(([id, label]) => (
            <a href={`#${id}`} key={id}>
              {label}
            </a>
          ))}
        </nav>
        <article className="case-article">
          <section className="case-section" id="overview">
            <p className="eyebrow">01 / THE DIRECTION</p>
            <h2>
              {echo
                ? "From conversations to clarity and action."
                : ama
                  ? "Industry context. Human questions."
                  : "An idea worth exploring."}
            </h2>
            <p>{project.summary || project.description}</p>
            <div className="case-callout" id="vision">
              {project.vision}
            </div>
            <div id="role">
              <strong>My part</strong>
              <p>{project.contribution}.</p>
              {ama && (
                <details className="decision">
                  <summary>
                    <span>See my confirmed contributions</span>
                    <ChevronDown size={16} />
                  </summary>
                  <ul>
                    {amaResearch.contributions.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </details>
              )}
            </div>
            {ama && (
              <div className="case-tools" aria-label="Research themes">
                {amaResearch.themes.map((theme) => (
                  <span key={theme.title}>{theme.title}</span>
                ))}
              </div>
            )}
            {pending && (
              <div className="evidence-note">
                The older portfolio supplies a historical description, not
                independently verified implementation evidence. Scope, artifacts
                and results still need confirmation.
              </div>
            )}
          </section>
          <section className="case-section" id="problem">
            <p className="eyebrow">
              02 / {ama ? "RESEARCH CONTEXT" : "PROBLEM & CONCEPT"}
            </p>
            <h2>
              {ama
                ? "Understand the work before the technology."
                : "Start with the real question."}
            </h2>
            <p>{story?.problem || project.research}</p>
            {story && <p>{story.users}</p>}
            <details className="decision" id="research">
              <summary>
                <span>
                  {ama
                    ? "Research themes & evidence boundaries"
                    : "Research, assumptions & evidence"}
                </span>
                <ChevronDown size={16} />
              </summary>
              <p>{project.research}</p>
              {ama && (
                <>
                  <ul>
                    {amaResearch.themes.map((theme) => (
                      <li key={theme.title}>
                        <strong>{theme.title}:</strong> {theme.detail}
                      </li>
                    ))}
                  </ul>
                  <p>{amaResearch.boundary}</p>
                  <p>
                    The supplied collection contains eight sectors of reports.
                    This is collection scope, not a claim of personal authorship
                    across all eight.
                  </p>
                </>
              )}
              {project.evidenceNote && (
                <p>
                  {project.evidenceLevel} · {project.evidenceNote}
                </p>
              )}
            </details>
          </section>
          <section className="case-section" id="user-flows">
            <p className="eyebrow">
              03 / {ama ? "RESEARCH PROCESS" : "USER JOURNEY"}
            </p>
            <h2>
              {ama
                ? "From context to a better question."
                : "Make the next step understandable."}
            </h2>
            {story ? (
              <JourneyDiagram steps={story.flow} research={ama} />
            ) : (
              <p>A verified journey or prototype has not yet been supplied.</p>
            )}
            {ama && (
              <>
                <h3>Where AI assists. Where people decide.</h3>
                <HumanAiSummary />
              </>
            )}
          </section>
          <section className="case-section" id="design">
            <p className="eyebrow">
              04 / {ama ? "RESEARCH SYNTHESIS" : "DESIGN & DECISIONS"}
            </p>
            <h2>
              {ama
                ? "Turn a broad field into a clear narrative."
                : "The choices behind the experience."}
            </h2>
            <div id="decisions">
              {project.decisions.length ? (
                project.decisions.map((decision, i) => (
                  <details className="decision" key={decision}>
                    <summary>
                      <span>
                        0{i + 1} / {decision.split(":")[0]}
                      </span>
                      <ChevronDown size={16} />
                    </summary>
                    <p>{decision}</p>
                  </details>
                ))
              ) : (
                <p>Decision documentation is awaiting verification.</p>
              )}
            </div>
            {echo && (
              <>
                <h3>Interface evidence & product intent</h3>
                <ConceptGallery />
                <p className="evidence-note">
                  These are conceptual illustrations. No actual EchoNote
                  interface screenshots, prototype files or product
                  demonstration were found in the supplied materials; the older
                  DOCX contains portfolio-page screenshots.
                </p>
              </>
            )}
            {ama ? (
              <div className="evidence-note">
                Research was consolidated into a presentation and contributions
                toward a broader paper. Confidential reports, company-specific
                findings and full tables remain private. These portfolio
                diagrams are summaries, not official AMA figures.
              </div>
            ) : (
              !echo && (
                <div className="evidence-note">
                  Conceptual illustration and proposed flow only. Real product
                  screens and validated prototypes are not supplied.
                </div>
              )
            )}
          </section>
          <section className="case-section" id="integrations">
            <p className="eyebrow">
              05 / {ama ? "RESEARCH METHODS" : "AI WORKFLOWS & TOOLS"}
            </p>
            <h2>
              {ama ? "Methods with a purpose." : "Connect the useful pieces."}
            </h2>
            {project.tools.length ? (
              <div className="case-tools">
                {project.tools.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
            ) : (
              <p>The implementation stack remains to be documented.</p>
            )}
            {echo && (
              <>
                <Workflow />
                <p className="evidence-note">
                  Intended product workflow, not verified backend architecture.
                  The toolkit is owner-confirmed; models, providers, data
                  handling and operational safeguards need implementation
                  evidence.
                </p>
              </>
            )}
            {ama && (
              <div className="case-callout">
                Research reflection: industry context, workflow needs and human
                judgment belong in the same conversation. This is a qualitative
                portfolio interpretation, not a quantified research result.
              </div>
            )}
          </section>
          <section className="case-section" id="status">
            <p className="eyebrow">06 / CURRENT PROGRESS</p>
            <h2>{project.status}</h2>
            {echo ? (
              <p>
                The website launched on 21 October 2026. Product development and
                validation continue.
              </p>
            ) : ama ? (
              <p>
                The April–June 2026 internship is complete. Personal
                contributions are confirmed; publication and quantified outcomes
                are not asserted.
              </p>
            ) : (
              <p>
                {pending
                  ? "Historical context is available; working implementation and results remain unverified."
                  : "Concept exploration, without a claim of commercial availability or completed functionality."}
              </p>
            )}
            <div id="features">
              {echo ? (
                <>
                  <h3>Owner-described product areas</h3>
                  <FeatureExplorer
                    features={project.reportedCapabilities || []}
                  />
                </>
              ) : ama ? (
                <div className="case-tools">
                  {project.implemented.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              ) : null}
              {project.planned.length > 0 && (
                <p className="evidence-note">
                  <strong>Planned / exploration:</strong>{" "}
                  {project.planned.join(" · ")}. Not represented as completed
                  features.
                </p>
              )}
            </div>
          </section>
          <section className="case-section" id="next">
            <p className="eyebrow">07 / NEXT QUESTIONS</p>
            <h2>
              {ama
                ? "Carry the questions forward."
                : "Keep room for the next iteration."}
            </h2>
            <p>{project.next}</p>
            {story && (
              <details className="decision">
                <summary>
                  <span>Open questions</span>
                  <ChevronDown size={16} />
                </summary>
                <ul>
                  {story.questions.map((question) => (
                    <li key={question}>{question}</li>
                  ))}
                </ul>
              </details>
            )}
          </section>
          <Link className="case-next-project" href={`/work/${next.slug}`}>
            <div>
              <small>NEXT CASE STUDY</small>
              {next.name}
            </div>
            <ArrowUpRight size={24} />
          </Link>
        </article>
      </div>
      <ContactInvite />
    </div>
  );
}
