'use client';
import { useEffect, useState } from 'react';
import { Car } from '@/types';
import Spinner from '@/components/Spinner';
import Link from 'next/link';
import WishlistCard from '@/components/WishlistCard';
import { useAppContext } from '@/app/providers';
import { JSON_BIN_URL } from '@/constants';

export default function WishlistPage() {
  const [wishlistCars, setWishlistCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);

  const { wishlist } = useAppContext();

  // Use JSON Bin URL from constants

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const res = await fetch(JSON_BIN_URL, {
          headers: {
            'X-Bin-Meta': 'false'
          }
        });

        if (!res.ok) throw new Error('Failed to fetch cars');

        const data = await res.json();
        const cars = data.record || data;

        setWishlistCars(cars.filter(car => wishlist.includes(car.id)));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchWishlist();
  }, [wishlist]);

  if (loading) return <Spinner />;

  return (
    <main className="container mx-auto px-4 py-8 animate-fade-in">
      <div className="relative overflow-hidden mb-10 rounded-2xl bg-gradient-to-r from-secondary-500 to-secondary-600 dark:from-secondary-600 dark:to-secondary-700">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20"></div>
        <div className="relative z-10 px-6 py-10 md:py-12 md:px-12 text-white">
          <div className="max-w-3xl">
            <div className="flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 mr-3">
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
              </svg>
              <h1 className="text-3xl md:text-4xl font-bold">Your Wishlist</h1>
            </div>
            <p className="text-lg opacity-90">Cars you've saved for future consideration.</p>
          </div>
        </div>
      </div>

      {wishlistCars.length > 0 ? (
        <>
          <div className="bg-white dark:bg-neutral-900 px-4 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-sm mb-8 inline-block">
            <p className="text-neutral-600 dark:text-neutral-400 flex items-center">
              <span className="font-medium text-neutral-900 dark:text-white mr-1">{wishlistCars.length}</span>
              {wishlistCars.length === 1 ? 'car' : 'cars'} in your wishlist
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wishlistCars.map((car, index) => (
              <div key={car.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.05}s` }}>
                <WishlistCard car={car} />
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="text-center py-16 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-sm animate-fade-in">
          <div className="w-20 h-20 mx-auto bg-secondary-100 dark:bg-secondary-900/30 rounded-full flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-secondary-500 dark:text-secondary-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3">Your wishlist is empty</h3>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6 max-w-md mx-auto">Start exploring our collection and add cars to your wishlist by clicking the heart icon.</p>
          <Link
            href="/"
            className="px-6 py-3 bg-secondary-500 hover:bg-secondary-600 text-white font-medium rounded-xl transition-all duration-300 inline-flex items-center shadow-sm hover-lift"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2">
              <path fillRule="evenodd" d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L10 4.414l6.293 6.293a1 1 0 001.414-1.414l-7-7z" clipRule="evenodd" />
            </svg>
            Explore Cars
          </Link>
        </div>
      )}
    </main>
  );
}