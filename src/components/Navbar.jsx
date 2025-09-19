export default function Navbar() {
  return (
    <header className="bg-gray-900 text-white  flex justify-between items-center">
      <div className="p-4 text-2xl font-bold">MoviGustan</div>
      <div className="p-4">
        <input
        type="text"
        placeholder="Search Anime..."
        className="rounded-2xl text-white w-xl bg-transparent border border-white p-2"
      />
      </div>
    </header>
  );
}
