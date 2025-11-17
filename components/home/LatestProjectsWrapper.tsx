import { ProjectProps } from "@/utils/type"
import ProjectCard from "../project/ProjectCard"
import LatestProjectsSection from "./LatestProjectsSection"

export default function LatestProjectsWrapper({ projects }: { projects: ProjectProps[] }) {
  return (
    <LatestProjectsSection>
      {projects.map((p) => (
        <ProjectCard key={p.id} project={p} />
      ))}
    </LatestProjectsSection>
  )
}
