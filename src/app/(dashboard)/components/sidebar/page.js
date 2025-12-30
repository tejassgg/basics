import Link from "next/link";
export default function Sidebar() {
  return (
    <aside className="h-full flex flex-col gap-4 bg-gray-100 px-4 py-4 text-xl shadow-md shadow-gray-200 ">
      <Link className="hover:text-blue-500 transition-all ml-2 mt-12" href="/">
        Home
      </Link>
      <Link
        className="hover:text-blue-500 transition-all ml-2"
        href="/all-components"
      >
        Components
      </Link>
      <Link className="hover:text-blue-500 transition-all ml-2" href="/blog">
        Blog
      </Link>
      <Link
        className="hover:text-blue-500 transition-all ml-2"
        href="/blog/zingur"
      >
        Dyna Blog
      </Link>
      <Link className="hover:text-blue-500 transition-all ml-2" href="/project">
        Project
      </Link>
    </aside>
  );
}
