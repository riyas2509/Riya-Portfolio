import { ProjectExplorer } from "@/components/portfolio";
export const metadata = {
  title: "The Idea Garden",
  description: "Explore my work through five career lenses.",
  openGraph: {
    title: "The Idea Garden · Riya Shah",
    description: "Explore my work through five career lenses.",
    url: "/work",
  },
  alternates: { canonical: "/work" },
};
export default function Page() {
  return (
    <>
      <h1 className="sr-only">Project gallery — The Idea Garden</h1>
      <ProjectExplorer />
    </>
  );
}
