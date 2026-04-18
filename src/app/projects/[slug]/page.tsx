import ProjectPage from "@/components/ProjectPage";
import { getProjectBySlug } from "@/data/projects";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) return notFound();

  return <ProjectPage project={project} />;
}