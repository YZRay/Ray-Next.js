import { getData } from "@/components/api/firebase";
import GetSkillIcon from "@/components/project/GetSkillIcon";
import CarouselImage from "@/components/project/CarouselImage";

async function fetchProject() {
  try {
    const data = await getData();
    return data;
  } catch (err) {
    console.error(err);
    return [];
  }
}

export async function generateStaticParams() {
  const data = await fetchProject();
  return data.map((post: { slug: string }) => ({
    slug: post.slug,
  }));
}
const ProjectPage = async ({ params }: { params: { slug: string } }) => {
  const data = await fetchProject();

  const project = data.find((item: { slug: string }) => {
    return item.slug === params.slug;
  });

  return (
    <div className="mx-auto w-11/12 md:w-3/5 lg:w-7/12">
      <div className="w-full my-6 md:my-8 lg:my-12">
        <h2 className="text-center text-xl md:text-3xl font-bold">
          {project.name}
        </h2>
        <hr className="my-6" />
        <CarouselImage img={project?.carousel} />
        <div className="my-6">
          <h3 className="text-lg md:text-2xl">使用技術</h3>
          <div className="flex items-center gap-4 flex-wrap">
            {project?.skill.map((s: string, index: number) => (
              <div
                key={index}
                className="flex gap-2 items-center text-md lg:text-lg"
              >
                {GetSkillIcon(s)}
                {s}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
