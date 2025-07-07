export default function Newsletter() {
  return (
    <section className="bg-white dark:bg-gray-900 py-12 text-center">
      <h2 className="font-heading text-xl mb-2">Get 10% Off Your First Order</h2>
      <p className="mb-4 text-gray-600 dark:text-gray-300">
        Join our newsletter for kit drops and discounts
      </p>
      <div className="flex justify-center gap-0">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 border rounded-l-md w-64 dark:bg-gray-800 dark:text-white"
        />
        <button className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-blue-800">
          Subscribe
        </button>
      </div>
    </section>
  );
}
