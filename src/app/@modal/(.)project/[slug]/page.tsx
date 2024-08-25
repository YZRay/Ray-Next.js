import { PageModal } from "./modal";
import CarouselImage from "@/components/Project/CarouselImage";
import GetSkillIcon from "@/components/Project/GetSkill";
import Data from "@/components/data/data.json";
import { notFound } from "next/navigation";
export const generateStaticParams = async () =>
  Data.project.map((project) => ({ slug: project.slug }));

const Page = ({ params }: { params: { slug: string } }) => {
  const project = Data.project.find((project) => project.slug === params.slug);

  if (!project) notFound();

  const paragraphs = project.description.split(/[\n]/);
  const content = paragraphs.map((content: string, index: number) => {
    return <p key={index}>{content}</p>;
  });

  return (
    <PageModal title={project?.name as string}>
      <div className="w-full my-6 md:my-8 lg:my-12">
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
        <article className="prose lg:prose-xl">{content}</article>
      </div>
    </PageModal>
  );
};

export default Page;
