
import Head from 'next/head';
import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Cart from '../components/Cart';
import CategoryBar from '../components/CategoryBar';
import HeroCarousel from '../components/HeroCarousel';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';

export default function Home() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Futdrop – Retro & 2025/26 Football Kits</title>
        <meta
          name="description"
          content="Buy retro and latest season football kits. Futdrop offers unique styles for fans of every club."
        />
        <meta property="og:title" content="Futdrop Football Kits" />
        <meta
          property="og:description"
          content="Retro and modern football shirts for fans around the world."
        />
        <meta property="og:image" content="/futdrop-preview.png" />
      </Head>

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-all">
        {/* Top navigation */}
        <Header onCartClick={() => setCartOpen(!cartOpen)} />

        {/* 🧩 NEW: Category Buttons */}
        <CategoryBar />

        {/* 🧩 NEW: Hero Kit Carousel */}
        <HeroCarousel />

        {/* Products */}
        <main className="p-4 pt-12 max-w-7xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[...Array(8)].map((_, i) => (
            <ProductCard key={i} id={i} />
          ))}
        </main>

        {/* 🧩 NEW: Testimonials */}
        <Testimonials />

        {/* 🧩 NEW: Newsletter Signup */}
        <Newsletter />

        {/* Footer and cart */}
        <Footer />
        <Cart open={cartOpen} onClose={() => setCartOpen(false)} />
      </div>
    </>
  );
}
