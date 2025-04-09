'use client';
import { Filters } from '@/types';
import { useState } from 'react';

export default function Filters({
  filters,
  setFilters,
  brands
}: {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  brands: string[];
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleReset = () => {
    setFilters({
      search: '',
      brand: '',
      priceRange: [0, 100000],
      fuelType: '',
      seating: ''
    });
  };

  return (
    <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none p-6 mb-8 transition-all duration-300 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-1">Find Your Perfect Car</h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">Use the filters below to narrow down your search</p>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={handleReset}
            className="px-4 py-2.5 text-sm bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-xl transition-all duration-300 flex items-center font-medium"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mr-1.5">
              <path fillRule="evenodd" d="M10 4.5c1.215 0 2.417.055 3.604.162a.68.68 0 01.615.597c.124 1.038.208 2.088.25 3.15l-1.689-1.69a.75.75 0 00-1.06 1.061l2.999 3a.75.75 0 001.06 0l3.001-3a.75.75 0 10-1.06-1.06l-1.748 1.747a41.31 41.31 0 00-.264-3.386 2.18 2.18 0 00-1.97-1.913 41.512 41.512 0 00-7.477 0 2.18 2.18 0 00-1.969 1.913 41.16 41.16 0 00-.16 1.61.75.75 0 101.495.12c.041-.52.093-1.038.154-1.552a.68.68 0 01.615-.597A40.012 40.012 0 0110 4.5zM5.281 9.22a.75.75 0 00-1.06 0l-3.001 3a.75.75 0 101.06 1.06l1.748-1.747c.042 1.141.13 2.27.264 3.386a2.18 2.18 0 001.97 1.913 41.533 41.533 0 007.477 0 2.18 2.18 0 001.969-1.913c.064-.534.117-1.071.16-1.61a.75.75 0 10-1.495-.12c-.041.52-.093 1.037-.154 1.552a.68.68 0 01-.615.597 40.013 40.013 0 01-7.208 0 .68.68 0 01-.615-.597 39.785 39.785 0 01-.25-3.15l1.689 1.69a.75.75 0 001.06-1.061l-2.999-3z" clipRule="evenodd" />
            </svg>
            Reset Filters
          </button>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="md:hidden px-4 py-2.5 text-sm bg-primary-500 hover:bg-primary-600 text-white rounded-xl transition-all duration-300 flex items-center font-medium shadow-sm"
          >
            {isExpanded ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mr-1.5">
                  <path fillRule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clipRule="evenodd" />
                </svg>
                Hide Filters
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mr-1.5">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
                Show Filters
              </>
            )}
          </button>
        </div>
      </div>

      <div className={`${isExpanded ? 'block' : 'hidden md:block'} transition-all duration-300`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {/* Search Input */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <svg className="w-4 h-4 text-neutral-500 dark:text-neutral-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search cars..."
              className="w-full p-3.5 pl-11 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 placeholder:text-neutral-500 dark:placeholder:text-neutral-500"
              value={filters.search}
              onChange={(e) => setFilters(prev => ({ ...prev, search: e.target.value }))}
            />
          </div>

          {/* Brand Select */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-neutral-500 dark:text-neutral-400">
                <path fillRule="evenodd" d="M4.5 2A1.5 1.5 0 003 3.5v13A1.5 1.5 0 004.5 18h11a1.5 1.5 0 001.5-1.5V7.621a1.5 1.5 0 00-.44-1.06l-4.12-4.122A1.5 1.5 0 0011.378 2H4.5zm2.25 8.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zm0 3a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" clipRule="evenodd" />
              </svg>
            </div>
            <select
              className="w-full p-3.5 pl-11 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 appearance-none"
              value={filters.brand}
              onChange={(e) => setFilters(prev => ({ ...prev, brand: e.target.value }))}
            >
              <option value="">All Brands</option>
              {brands.map(brand => (
                <option key={brand} value={brand}>{brand}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-neutral-500 dark:text-neutral-400">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          {/* Fuel Type Select */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-neutral-500 dark:text-neutral-400">
                <path d="M15.98 1.804a1 1 0 00-1.96 0l-.24 1.192a1 1 0 01-.784.785l-1.192.238a1 1 0 000 1.962l1.192.238a1 1 0 01.785.785l.238 1.192a1 1 0 001.962 0l.238-1.192a1 1 0 01.785-.785l1.192-.238a1 1 0 000-1.962l-1.192-.238a1 1 0 01-.785-.785l-.238-1.192zM6.949 5.684a1 1 0 00-1.898 0l-.683 2.051a1 1 0 01-.633.633l-2.051.683a1 1 0 000 1.898l2.051.684a1 1 0 01.633.632l.683 2.051a1 1 0 001.898 0l.683-2.051a1 1 0 01.633-.633l2.051-.683a1 1 0 000-1.898l-2.051-.683a1 1 0 01-.633-.633L6.95 5.684z" />
              </svg>
            </div>
            <select
              className="w-full p-3.5 pl-11 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 appearance-none"
              value={filters.fuelType}
              onChange={(e) => setFilters(prev => ({ ...prev, fuelType: e.target.value }))}
            >
              <option value="">Fuel Type</option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="Electric">Electric</option>
              <option value="Hybrid">Hybrid</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-neutral-500 dark:text-neutral-400">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          {/* Seating Select */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-neutral-500 dark:text-neutral-400">
                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z" />
              </svg>
            </div>
            <select
              className="w-full p-3.5 pl-11 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 appearance-none"
              value={filters.seating}
              onChange={(e) => setFilters(prev => ({ ...prev, seating: e.target.value }))}
            >
              <option value="">Seating</option>
              <option value="2">2 Seater</option>
              <option value="4">4 Seater</option>
              <option value="5">5 Seater</option>
              <option value="7">7 Seater</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-neutral-500 dark:text-neutral-400">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          {/* Price Range Slider */}
          <div className="flex flex-col gap-3 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Price Range:</label>
              <div className="px-3 py-1.5 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                <span className="text-sm font-bold text-primary-600 dark:text-primary-400">
                  $0 - ${filters.priceRange[1].toLocaleString()}
                </span>
              </div>
            </div>
            <div className="relative pt-1">
              <div className="text-center text-lg font-bold bg-gradient-to-r from-primary-600 to-primary-500 dark:from-primary-400 dark:to-primary-300 bg-clip-text text-transparent mb-2">
                ${filters.priceRange[1].toLocaleString()}
              </div>
              <input
                type="range"
                min="0"
                max="100000"
                step="1000"
                value={filters.priceRange[1]}
                onChange={(e) => setFilters(prev => ({
                  ...prev,
                  priceRange: [0, parseInt(e.target.value)]
                }))}
                className="w-full h-2 bg-neutral-200 dark:bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-primary-500"
              />
              <div className="flex justify-between text-xs text-neutral-500 dark:text-neutral-400 mt-2">
                <span>$0</span>
                <span>$100,000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
