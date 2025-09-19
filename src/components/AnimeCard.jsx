export default function AnimeCard({ title, episodes, image }) {
  return (
    <div className="bg-white rounded-lg shadow p-3 hover:scale-105 transition">
      <img src={image} alt={title} className="rounded mb-2 w-full h-48 object-cover" />
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-sm text-gray-600">Episodes: {episodes}</p>
      <button className="mt-2 w-full bg-blue-600 text-white px-3 py-2 rounded">
        Watch Now
      </button>
    </div>
  );
}
