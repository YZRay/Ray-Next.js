import { getData } from "@/components/api/firebase";
export async function generateStaticParams() {
  const data = await getData()
    .then((res) => res)
    .catch((err) => console.error(err));
  return data.map((post: { slug: string }) => ({
    slug: post.slug,
  }));
}
const ProjectPage = async ({ params }: { params: { slug: string } }) => {
  const data = await getData()
    .then((res) => res)
    .catch((err) => console.error(err));

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
