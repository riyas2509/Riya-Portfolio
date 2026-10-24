import { LittleHero } from "@/components/little-universe";
import { ProjectExplorer } from "@/components/portfolio";
import {
  ExploreThemes,
  RecognitionPreview,
  ContactInvite,
} from "@/components/destination";
export default function Home() {
  return (
    <>
      <LittleHero compact />
      <ProjectExplorer preview />
      <ExploreThemes />
      <RecognitionPreview />
      <ContactInvite />
    </>
  );
}
