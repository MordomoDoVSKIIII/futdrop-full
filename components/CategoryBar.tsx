import HeroCarousel from './HeroCarousel'; // ✅ Adjusted path since it's in the same folder

const categories = ['La Liga', 'Premier League', 'Serie A', 'Bundesliga', 'Ligue 1'];

export default function CategoryBar() {
  return (
    <div>
      {/* 🧭 Category Buttons */}
      <nav className="flex gap-4 px-4 py-3 bg-white dark:bg-gray-800 overflow-x-auto sticky top-14 z-30 shadow">
        {categories.map((cat) => (
          <button
            key={cat}
            className="whitespace-nowrap bg-gray-200 dark:bg-gray-700 text-sm px-4 py-2 rounded-full hover:bg-primary hover:text-white transition"
          >
            {cat}
          </button>
        ))}
      </nav>

      {/* 🖼️ Hero Carousel Appears Below */}
      <HeroCarousel />
    </div>
  );
}
