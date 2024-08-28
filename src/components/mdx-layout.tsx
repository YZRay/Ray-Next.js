export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-11/12 md:max-w-3xl mx-auto xl:max-w-6xl">
      <article className="w-full mx-auto py-6 mt-0 prose lg:prose-md xl:prose-lg 2xl:prose-xl">
        {children}
      </article>
    </div>
  );
}
