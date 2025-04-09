'use client';
import { Car } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useAppContext } from '@/app/providers';

export default function WishlistCard({ car }: { car: Car }) {
  const { toggleWishlist } = useAppContext();
  const [isHovered, setIsHovered] = useState(false);
  const [isRemoving, setIsRemoving] = useState(false);

  const handleRemove = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsRemoving(true);

    // Add a small delay to show the removing animation
    setTimeout(() => {
      toggleWishlist(car.id);
    }, 300);
  };

  return (
    <div
      className={`bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden transition-all duration-300 group border border-neutral-200 dark:border-neutral-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] ${isRemoving ? 'scale-95 opacity-0' : 'animate-fade-in'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-56 overflow-hidden">
        <div className="absolute top-3 left-3 z-10">
          <div className="px-2.5 py-1.5 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md text-primary-600 dark:text-primary-400 rounded-lg text-xs font-semibold shadow-sm">
            {car.brand}
          </div>
        </div>

        {/* Remove button */}
        <div className="absolute top-3 right-3 z-10">
          <button
            onClick={handleRemove}
            className="p-2.5 rounded-full bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md shadow-sm transition-all duration-300 hover:scale-110 focus:outline-none group/btn"
            aria-label="Remove from wishlist"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-red-500 dark:text-red-400 group-hover/btn:text-red-600 dark:group-hover/btn:text-red-500"
            >
              <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg>
          </button>
        </div>

        <Image
          src={car.image}
          alt={car.name}
          fill
          className={`object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-neutral-900 dark:text-white">{car.name}</h3>
          <div className="flex flex-col items-end">
            <div className="px-3 py-1.5 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
              <span className="text-lg font-bold text-primary-600 dark:text-primary-400">
                ${car.price.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4 mb-4 text-neutral-600 dark:text-neutral-400 text-sm">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-1.5 text-neutral-500 dark:text-neutral-400">
              <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 116 0h3a.75.75 0 00.75-.75V15z" />
            </svg>
            {car.fuelType}
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-1.5 text-neutral-500 dark:text-neutral-400">
              <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
            </svg>
            {car.seating} Seats
          </div>
        </div>

        <div className="flex gap-3">
          <Link
            href={`/cars/${car.id}`}
            className="group/btn relative overflow-hidden flex-1 block py-3 px-4 bg-primary-500 text-white text-center font-medium rounded-xl transition-all duration-300 hover:bg-primary-600 hover:shadow-md"
          >
            <span className="relative z-10 flex items-center justify-center">
              View Details
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-1.5 group-hover/btn:translate-x-1 transition-transform duration-300">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </span>
            <div className="absolute inset-0 h-full w-full scale-0 rounded-xl transition-all duration-300 group-hover/btn:scale-100 group-hover/btn:bg-primary-600/30"></div>
          </Link>

          <button
            onClick={handleRemove}
            className="py-3 px-4 bg-white text-red-500 border border-red-200 dark:border-red-900/30 dark:bg-neutral-800 dark:text-red-400 font-medium rounded-xl transition-all duration-300 hover:bg-red-50 dark:hover:bg-red-900/20 hover:border-red-300 dark:hover:border-red-800/30 flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-1.5">
              <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clipRule="evenodd" />
            </svg>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
