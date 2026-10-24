import { projects } from "@/data/portfolio";
import {
  caseMetadata,
  ProjectCaseStudy,
} from "@/components/project-case-study";
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return caseMetadata((await params).slug);
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return <ProjectCaseStudy slug={(await params).slug} />;
}
