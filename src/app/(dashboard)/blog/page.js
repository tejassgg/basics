import Link from 'next/link';

export default function BlogIndex() {
  const posts = ['my-first-post', 'hello-world'];
  return (
    <div className="min-h-screen p-6">
      <h1>Blog</h1>
      <ul>
        {posts.map((p) => (
          <li key={p}>
            <Link href={`/blog/${p}`}>{p.replace(/-/g, ' ')}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
