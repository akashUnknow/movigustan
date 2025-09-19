import AnimeCard from "../components/AnimeCard";
import Sidebar from "../components/Sidebar";

const dummyData = [
  { id: 1, title: "Naruto", episodes: 220, image: "https://via.placeholder.com/200" },
  { id: 2, title: "One Piece", episodes: 1000, image: "https://via.placeholder.com/200" },
  { id: 3, title: "Attack on Titan", episodes: 75, image: "https://via.placeholder.com/200" },
  { id: 4, title: "Demon Slayer", episodes: 26, image: "https://via.placeholder.com/200" },
];

export default function Home() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="hidden md:block">
        <Sidebar/>
      </div>

      {/* Main content */}
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">Latest Anime</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {dummyData.map((anime) => (
            <AnimeCard key={anime.id} {...anime} />
          ))}
        </div>
      </main>
    </div>
  );
}
