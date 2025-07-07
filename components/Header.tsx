
type HeaderProps = {
  onCartClick: () => void;
};

export default function Header({ onCartClick }: HeaderProps) {
  return (
    <header className="fixed w-full top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="font-heading text-2xl text-primary dark:text-yellow-400">Futdrop</h1>
        <div className="flex items-center gap-4">
          <select className="bg-transparent border px-2 py-1 rounded text-sm dark:text-white">
            <option>EN</option><option>FR</option><option>DE</option><option>PT</option>
          </select>
          <select className="bg-transparent border px-2 py-1 rounded text-sm dark:text-white">
            <option>€</option><option>$</option>
          </select>
          <button onClick={onCartClick} className="relative">
            <span className="material-icons text-2xl text-primary dark:text-yellow-400">shopping_cart</span>
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1.5 rounded-full">1</span>
          </button>
        </div>
      </div>
    </header>
  );
}
