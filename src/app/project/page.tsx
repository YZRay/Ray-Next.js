"use client";
import { getData } from "@/components/api/firebase";
import { useQuery } from "@tanstack/react-query";
import ProjectCard from "@/components/project/ProjectCard";
import ProjectSkeletonCard from "@/components/project/ProjectSkeletonCard";

const ProjectPage = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["project"],
    queryFn: () => getData(),
  });

  let content;
  if (data) {
    content = data.map((project: any) => (
      <ProjectCard
        key={project.id}
        title={project.title}
        description={project.description}
        imageUrl={project.imageUrl}
        name={project.name}
        skill={project.skill}
        url={project.url}
      />
    ));
  }

  if (isLoading) {
    content = Array.from({ length: 2 }).map((_, index) => (
      <ProjectSkeletonCard key={index} />
    ));
  }

  if (isError) {
    content = <h4 className="text-2xl text-center">Something went wrong</h4>;
  }

  return (
    <div className="flex flex-col gap-4 w-10/12 md:w-3/4 lg:w-3/5 mx-auto my-8 lg:my-12">
      {content}
    </div>
  );
};

export default ProjectPage;
