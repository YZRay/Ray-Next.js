import { getData } from "@/components/api/firebase";

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
    <div>
      <h2>{project.name}</h2>
    </div>
  );
};

export default ProjectPage;
