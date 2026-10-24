import { PortraitIntro } from "@/components/destination";
import { LittleStory } from "@/components/little-universe";
import { ThinkingJourney } from "@/components/thinking-journey";
import { thinkingStages, teamStrengths } from "@/data/recruiter-content";
export const metadata = {
  title: "Meet Riya",
  description: "My journey through AI, research and product building.",
  openGraph: {
    title: "Meet Riya · Riya Shah",
    description: "My journey through AI, research and product building.",
    url: "/about",
  },
  alternates: { canonical: "/about" },
};
export default function Page() {
  return (
    <>
      <PortraitIntro />
      <ThinkingJourney stages={thinkingStages} strengths={teamStrengths} />
      <LittleStory />
    </>
  );
}
