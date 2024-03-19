import { getData } from "@/components/api/firebase";
export async function generateStaticParams() {
  const get = await getData()
    .then((res) => res)
    .catch((err) => console.error(err));
  return get.map((post: { slug: string }) => ({
    slug: post.slug,
  }));
}
const ProjectPage = ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;

  return <div>{slug}</div>;
};

export default ProjectPage;
