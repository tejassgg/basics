export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  return (
    <div className="min-h-screen p-6">
      <h1>Blog post: {slug}</h1>
      <p>Dynamic route content for {slug}.</p>
    </div>
  );
}
