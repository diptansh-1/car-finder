'use client';
import { useAppContext } from '@/app/providers';
import { useState, useEffect } from 'react';

export default function WishlistButton({ 
  carId, 
  variant = 'icon',
  className = ''
}: { 
  carId: number;
  variant?: 'icon' | 'button' | 'large-button';
  className?: string;
}) {
  const { wishlist, toggleWishlist } = useAppContext();
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isClient, setIsClient] = useState(false);
  
  // Check if the car is in the wishlist
  useEffect(() => {
    setIsClient(true);
    setIsWishlisted(wishlist.includes(carId));
  }, [wishlist, carId]);
  
  // Don't render anything on the server to prevent hydration mismatch
  if (!isClient) return null;
  
  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(carId);
  };
  
  // Icon-only variant (for top-right corner of cards)
  if (variant === 'icon') {
    return (
      <button
        onClick={handleToggleWishlist}
        className={`p-2.5 rounded-full bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md shadow-sm transition-all duration-300 hover:scale-110 focus:outline-none ${className}`}
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
    );
  }
  
  // Button variant (for action buttons)
  if (variant === 'button') {
    return (
      <button
        onClick={handleToggleWishlist}
        className={`py-3 px-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center ${
          isWishlisted 
            ? 'bg-red-50 dark:bg-red-900/10 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900/30 hover:bg-red-100 dark:hover:bg-red-900/20' 
            : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-700'
        } ${className}`}
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill={isWishlisted ? 'currentColor' : 'none'}
          stroke="currentColor"
          className="w-5 h-5 mr-2"
          strokeWidth={isWishlisted ? '0' : '2'}
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" 
          />
        </svg>
        {isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
      </button>
    );
  }
  
  // Large button variant (for detail pages)
  return (
    <button
      onClick={handleToggleWishlist}
      className={`w-full py-3.5 px-4 font-medium rounded-xl transition-all duration-300 hover-lift shadow-sm flex items-center justify-center ${
        isWishlisted 
          ? 'bg-red-500 hover:bg-red-600 text-white' 
          : 'bg-white dark:bg-neutral-800 text-red-500 dark:text-red-400 border border-red-200 dark:border-red-900/30 hover:bg-red-50 dark:hover:bg-red-900/10'
      } ${className}`}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill={isWishlisted ? 'currentColor' : 'none'}
        stroke={isWishlisted ? 'none' : 'currentColor'}
        className="w-5 h-5 mr-2"
        strokeWidth="2"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" 
        />
      </svg>
      {isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
    </button>
  );
}
