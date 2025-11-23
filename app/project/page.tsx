import { fetchProject } from "@/actions/actions";
import FadeUpWhenVisible from "@/components/animations/FadeUpWhenVisible"
import ProjectList from "@/components/project/ProjectList"
import { ProjectProps } from "@/utils/type";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Krisapat Portfolio | Project",
  description: "Krisapat Portfolio Project Page",
};
const Project = async () => {
  const project: ProjectProps[] = await fetchProject();
    if (project.length === 0) {
        return <p className="text-center text-gray-500">No projects available</p>
    }
  return (
    <main>
      <FadeUpWhenVisible>
        <h1 className="font-extrabold text-3xl text-center text-primary mb-4">
          Explore my projects
        </h1>
      </FadeUpWhenVisible>
      <ProjectList project={project}/>
    </main>
  )
}
export default Project