"use client";
import { getData } from "@/components/api/firebase";
import { useQuery } from "@tanstack/react-query";
import ProjectCard from "@/components/project/ProjectCard";
import ProjectSkeletonCard from "@/components/project/ProjectSkeletonCard";
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
  const { data, isLoading, isError } = useQuery({
    queryKey: ["project"],
    queryFn: () => getData(),
  });

  let content;
  if (data) {
    const visibleProjects = data.filter((project: Project) => project.isShow);

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
