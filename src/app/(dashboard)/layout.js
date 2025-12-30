import Link from "next/link";
import Sidebar from "./components/sidebar/page";

export default function DashboardLayout({ children }) {
  return (
    <div className="w-full flex">
      <div className="w-1/10 sticky top-0 flex flex-col justify-between border-r rounded-xl border-gray-300">
        <Sidebar/>
      </div>
      <main className="w-9/10">
        <div className="py-3 px-4 bg-gray-200">
          <h1 className="text-4xl font-bold">NavBar</h1>
        </div>
        {children}
      </main>
    </div>
  );
}
