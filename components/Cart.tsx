import React from 'react';

type CartProps = {
  open: boolean;
  onClose: () => void;
};

export default function Cart({ open, onClose }: CartProps) {
  return (
    <aside
      className={`fixed top-0 right-0 h-full w-72 bg-white dark:bg-gray-800 shadow-lg transition-transform duration-300 z-40 ${
        open ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="p-4 flex justify-between items-center border-b dark:border-gray-700">
        <h2 className="font-heading text-xl text-primary dark:text-yellow-400">Cart</h2>
        <button onClick={onClose} className="text-sm text-gray-500 hover:text-red-500">
          Close
        </button>
      </div>
      <div className="p-4 text-gray-700 dark:text-gray-300">Your cart is empty.</div>
    </aside>
  );
}
