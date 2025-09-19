export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white p-4 h-screen">
      <h2 className="text-xl font-semibold mb-4">Categories</h2>
      <nav className="flex flex-col gap-2">
        <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded">
          Action
        </a>
        <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded">
          Romance
        </a>
        <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded">
          Comedy
        </a>
      </nav>
    </aside>
  );
}
