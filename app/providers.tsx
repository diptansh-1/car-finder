'use client';
import { useState, createContext, useContext } from 'react';
import { ThemeProvider } from 'next-themes';

const AppContext = createContext({
  wishlist: [] as number[],
  toggleWishlist: (id: number) => {},
});

export function Providers({ children }: { children: React.ReactNode }) {
  const [wishlist, setWishlist] = useState<number[]>(() => {
    if (typeof window !== 'undefined') {
      return JSON.parse(localStorage.getItem('wishlist') || '[]');
    }
    return [];
  });

  const toggleWishlist = (id: number) => {
    const newWishlist = wishlist.includes(id)
      ? wishlist.filter(item => item !== id)
      : [...wishlist, id];
    localStorage.setItem('wishlist', JSON.stringify(newWishlist));
    setWishlist(newWishlist);
  };

  return (
    <ThemeProvider attribute="class">
      <AppContext.Provider value={{ wishlist, toggleWishlist }}>
        {children}
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export const useAppContext = () => useContext(AppContext);