import { PageIntro } from "@/components/destination";
import {
  LittleLab,
  LittleSkills,
  ProcessExplorer,
} from "@/components/little-universe";
export const metadata = {
  title: "Curiosity Lab",
  description: "Explore my creative process, skills and evidence.",
  openGraph: {
    title: "Curiosity Lab · Riya Shah",
    description: "Explore my creative process, skills and evidence.",
    url: "/curiosity-lab",
  },
  alternates: { canonical: "/curiosity-lab" },
};
export default function Page() {
  return (
    <>
      <PageIntro
        eyebrow="THE CURIOSITY LAB"
        title="Small questions."
        emphasis="Big possibilities."
      >
        Explore the tools, interests and process behind my work.
      </PageIntro>
      <LittleLab />
      <ProcessExplorer />
      <LittleSkills />
    </>
  );
}
