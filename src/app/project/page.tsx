"use client";
import ProjectCard from "@/components/Project/ProjectCard";
import Data from "@/components/data/data.json";
const ProjectPage = () => {
  let content;

  const visibleProjects = Data.project.filter((project) => project.isShow);

  if (Data.project) {
    content = visibleProjects.map((project) => (
      <ProjectCard key={project.id} {...project} />
    ));
  }

  return (
    <div className="flex flex-col gap-4 w-10/12 md:w-3/4 lg:w-3/5 mx-auto my-8 lg:my-12">
      {content}
    </div>
  );
};

export default ProjectPage;
