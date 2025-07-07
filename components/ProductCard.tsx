
type ProductCardProps = {
  id: number;
};

export default function ProductCard({ id }: ProductCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 shadow rounded-lg transition hover:scale-105">
      <img src="https://via.placeholder.com/300x300?text=Kit+" className="w-full h-64 object-cover rounded" alt="Kit" />
      <div className="mt-2">
        <h2 className="font-heading text-lg text-primary dark:text-yellow-400">Team Kit #{id + 1}</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">€69.99</p>
        <button className="mt-2 bg-primary text-white px-3 py-1 rounded hover:bg-blue-900">Add to Cart</button>
      </div>
    </div>
  );
}
