import { getData } from "@/components/api/firebase";
import GetSkillIcon from "@/components/project/GetSkillIcon";

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
  console.log(project);

  return (
    <div className="mx-auto w-3/5">
      <div className="w-full my-6 md:my-8 lg:my-12">
        <h2 className="text-center text-xl md:text-3xl">{project.name}</h2>
        <div>
          <span>使用技術</span>
          <div className="flex items-center gap-4">
            {project?.skill.map((s: string, index: number) => (
              <div
                key={index}
                className="flex gap-1 items-center text-lg lg:text-xl"
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
