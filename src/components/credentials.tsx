"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { featuredBadgeIds, skillBadges, youngTurks } from "@/data/credentials";

/** Reuses existing skill charms and native disclosures; no new visual or motion system. */
export function Credentials() {
  const [allOpen, setAllOpen] = useState(false);
  const [achievementOpen, setAchievementOpen] = useState(false);
  useEffect(() => {
    const sync = () => {
      if (location.hash === "#young-turks-evidence") setAchievementOpen(true);
      if (location.hash === "#all-badges") setAllOpen(true);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);
  const featured = featuredBadgeIds.map((id) =>
    skillBadges.find((badge) => badge.id === id)!,
  );
  return (
    <section id="credentials" aria-labelledby="credentials-title">
      <div className="lens-intro">
        <div>
          <h2 id="credentials-title">
            {skillBadges.length} Google Cloud skill badges
          </h2>
          <p>
            Learning across generative AI, Gemini APIs, speech, prototyping and
            cloud technologies.
          </p>
        </div>
      </div>
      <div className="skill-charms">
        {featured.map((badge) => (
          <a key={badge.id} href="#all-badges" onClick={() => setAllOpen(true)}>
            <Image
              src={badge.image!}
              alt="Supplied Google Cloud skill badge artwork"
              width={240}
              height={160}
              className="badge-art"
            />
            <strong>{badge.name}</strong>
            <small>{badge.level} skill badge</small>
            <small>View badge details ↗</small>
          </a>
        ))}
        <a
          href="#young-turks-evidence"
          onClick={() => setAchievementOpen(true)}
        >
          <span className="charm-icon charm-3" aria-hidden="true">
            ✦
          </span>
          <strong>{youngTurks.title}</strong>
          <strong>{youngTurks.percentile} percentile</strong>
          <small>{youngTurks.summary}</small>
        </a>
      </div>
      <details
        id="all-badges"
        className="additional-work"
        open={allOpen}
        onToggle={(event) => setAllOpen(event.currentTarget.open)}
      >
        <summary>
          View all badges <span>1 intermediate · 9 introductory</span>
          <ChevronDown size={16} />
        </summary>
        <p>
          Earned skill badges confirmed by Riya, not professional
          certifications. Supplied badge graphics confirm titles and levels.
          Public issuer verification links have not yet been supplied.
        </p>
        <ul className="badge-collection">
          {skillBadges.map((badge) => (
            <li key={badge.id}>
              {badge.image && (
                <Image
                  src={badge.image}
                  alt="Google Cloud skill badge artwork"
                  width={180}
                  height={120}
                  className="badge-art"
                />
              )}
              <strong>{badge.name}</strong> — {badge.level}
              {badge.verificationUrl && (
                <>
                  {" "}
                  ·{" "}
                  <a
                    href={badge.verificationUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Verify skill badge <ArrowUpRight size={13} />
                  </a>
                </>
              )}
            </li>
          ))}
        </ul>
      </details>
      <details
        id="young-turks-evidence"
        className="additional-work"
        open={achievementOpen}
        onToggle={(event) => setAchievementOpen(event.currentTarget.open)}
      >
        <summary>
          Young Turks evidence <span>{youngTurks.date}</span>
          <ChevronDown size={16} />
        </summary>
        <p>
          <strong>
            {youngTurks.presenter} · {youngTurks.percentile} percentile
          </strong>
        </p>
        <p>{youngTurks.selection}</p>
        <p>{youngTurks.evidence}</p>
        <Image
          className="certificate-preview"
          src={youngTurks.certificateImage}
          alt="Certificate of Merit for Riya Shah, 98.47 percentile, dated 19 October 2026"
          width={1355}
          height={956}
        />
        {youngTurks.certificate ? (
          <a
            className="text-link"
            href={youngTurks.certificate}
            target="_blank"
            rel="noreferrer"
          >
            View certificate <ArrowUpRight size={15} />
          </a>
        ) : (
          <p>
            Certificate-view action will appear when the approved certificate
            file is supplied.
          </p>
        )}
      </details>
    </section>
  );
}
