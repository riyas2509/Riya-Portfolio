import { LittleContact } from "@/components/little-universe";
import Link from "next/link";
import { RecruiterQA } from "@/components/recruiter-qa";
import { recruiterQuestions } from "@/data/recruiter-content";
import styles from "@/components/recruiter-sections.module.css";
export const metadata = {
  title: "Let’s connect",
  description: "Have an interesting idea? Connect with Riya Shah.",
  openGraph: {
    title: "Let’s connect · Riya Shah",
    description: "Have an interesting idea? Connect with Riya Shah.",
    url: "/contact",
  },
  alternates: { canonical: "/contact" },
};
export default function Page() {
  return (
    <div className="contact-page">
      <nav
        className={`shell ${styles.jump}`}
        aria-label="Contact page shortcuts"
      >
        <Link href="#recruiter-qa">Before you ask… · Recruiter Q&A ↓</Link>
      </nav>
      <LittleContact page />
      <RecruiterQA
        questions={recruiterQuestions.filter((question) => question.published)}
      />
    </div>
  );
}
