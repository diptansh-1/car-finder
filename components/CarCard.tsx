'use client';
import { Car } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { useAppContext } from '@/app/providers';
import { useState } from 'react';

export default function CarCard({ car, isWishlisted }: { car: Car; isWishlisted: boolean }) {
  const { toggleWishlist } = useAppContext();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden hover-lift transition-all duration-300 animate-fade-in group border border-neutral-200 dark:border-neutral-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-56 overflow-hidden">
        <div className="absolute top-3 left-3 z-10">
          <div className="px-2.5 py-1.5 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md text-primary-600 dark:text-primary-400 rounded-lg text-xs font-semibold shadow-sm">
            {car.brand}
          </div>
        </div>
        <div className="absolute top-3 right-3 z-10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleWishlist(car.id);
            }}
            className="p-2.5 rounded-full bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md shadow-sm transition-all duration-300 hover:scale-110 focus:outline-none"
            aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill={isWishlisted ? 'currentColor' : 'none'}
              stroke={isWishlisted ? 'none' : 'currentColor'}
              className="w-5 h-5 text-red-500 dark:text-red-400"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
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

        <div className="relative">
          <Link
            href={`/cars/${car.id}`}
            className="group/btn relative overflow-hidden block w-full py-3 px-4 bg-primary-500 text-white text-center font-medium rounded-xl transition-all duration-300 hover:bg-primary-600 hover:shadow-md"
          >
            <span className="relative z-10 flex items-center justify-center">
              View Details
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-1.5 group-hover/btn:translate-x-1 transition-transform duration-300">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </span>
            <div className="absolute inset-0 h-full w-full scale-0 rounded-xl transition-all duration-300 group-hover/btn:scale-100 group-hover/btn:bg-primary-600/30"></div>
          </Link>
        </div>
      </div>
    </div>
  );
}