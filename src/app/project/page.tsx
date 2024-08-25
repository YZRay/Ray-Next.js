"use client";
import ProjectCard from "@/components/Project/ProjectCard";
import Data from "@/components/data/data.json";
interface Project {
  id: number;
  carousel: string[];
  description: string;
  imageUrl: string;
  name: string;
  skill: string[];
  slug: string;
  url: string;
  isShow: boolean;
}

const ProjectPage = () => {
  let content;
  const visibleProjects = (Data.project as Project[]).filter(
    (project: Project) => project.isShow
  );
  if (Data.project) {
    content = visibleProjects.map((project: Project) => (
      <ProjectCard
        key={project.id}
        description={project.description}
        imageUrl={project.imageUrl}
        name={project.name}
        skill={project.skill}
        url={project.url}
        slug={project.slug}
      />
    ));
  }

  return (
    <div className="flex flex-col gap-4 w-10/12 md:w-3/4 lg:w-3/5 mx-auto my-8 lg:my-12">
      {content}
    </div>
  );
};

export default ProjectPage;
