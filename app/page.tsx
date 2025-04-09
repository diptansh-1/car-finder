'use client';
import { useState, useEffect } from 'react';
import { Car, Filters } from '@/types';
import { useAppContext } from './providers';
import CarCard from '@/components/CarCard';
import FiltersComponent from '@/components/Filters';
import Spinner from '@/components/Spinner';
import Pagination from '@/components/Pagination';
import { JSON_BIN_URL } from '@/constants';

export default function Home() {
  const [cars, setCars] = useState<Car[]>([]);
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filters, setFilters] = useState<Filters>({
    search: '',
    brand: '',
    priceRange: [0, 100000],
    fuelType: '',
    seating: ''
  });
  const [sort, setSort] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const { wishlist } = useAppContext();

  const handleReset = () => {
    setFilters({
      search: '',
      brand: '',
      priceRange: [0, 100000],
      fuelType: '',
      seating: ''
    });
    setSort('');
  };

  // Use JSON Bin URL from constants

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await fetch(JSON_BIN_URL, {
          headers: {
            'X-Bin-Meta': 'false'
          }
        });

        if (!res.ok) throw new Error('Failed to fetch cars');

        const data = await res.json();
        const cars = data.record || data;

        setCars(cars);
        setFilteredCars(cars);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch cars');
      } finally {
        setLoading(false);
      }
    };
    fetchCars();
  }, []);

  useEffect(() => {
    let result = [...cars];

    // Filtering
    result = result.filter(car =>
      car.name.toLowerCase().includes(filters.search.toLowerCase()) &&
      (!filters.brand || car.brand === filters.brand) &&
      car.price >= filters.priceRange[0] &&
      car.price <= filters.priceRange[1] &&
      (!filters.fuelType || car.fuelType === filters.fuelType) &&
      (!filters.seating || car.seating === parseInt(filters.seating))
    );

    // Sorting
    if (sort === 'price_asc') result.sort((a, b) => a.price - b.price);
    if (sort === 'price_desc') result.sort((a, b) => b.price - a.price);

    setFilteredCars(result);
    setCurrentPage(1);
  }, [filters, sort, cars]);

  if (loading) return <Spinner />;
  if (error) return <div className="text-red-500 text-center mt-8">{error}</div>;

  return (
    <main className="container mx-auto px-4 py-6">
      <div className="relative overflow-hidden mb-12 rounded-2xl bg-gradient-to-r from-primary-600 to-primary-500 dark:from-primary-700 dark:to-primary-600">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20"></div>
        <div className="relative z-10 px-6 py-12 md:py-16 md:px-12 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Find Your Dream Car Today</h1>
            <p className="text-xl opacity-90 mb-8 animate-fade-in">Browse our extensive collection of quality vehicles to match your lifestyle and budget.</p>
          </div>
        </div>
      </div>

      <FiltersComponent filters={filters} setFilters={setFilters} brands={[...new Set(cars.map(c => c.brand))]} />

      <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="bg-white dark:bg-neutral-900 px-4 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-sm">
          <p className="text-neutral-600 dark:text-neutral-400 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 text-primary-500">
              <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
            </svg>
            <span className="font-medium text-neutral-900 dark:text-white mr-1">{filteredCars.length}</span> cars found
          </p>
        </div>
        <div className="flex items-center bg-white dark:bg-neutral-900 px-4 py-2 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-sm">
          <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mr-3">Sort by:</label>
          <div className="relative">
            <select
              className="appearance-none bg-transparent pr-8 py-1 focus:outline-none text-neutral-900 dark:text-white"
              onChange={(e) => setSort(e.target.value)}
              value={sort}
            >
              <option value="">Default</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-neutral-500 dark:text-neutral-400">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {filteredCars.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          {filteredCars
            .slice((currentPage - 1) * 10, currentPage * 10)
            .map((car, index) => (
              <div key={car.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.05}s` }}>
                <CarCard
                  car={car}
                  isWishlisted={wishlist.includes(car.id)}
                />
              </div>
            ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-sm animate-fade-in">
          <div className="w-20 h-20 mx-auto bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-neutral-500 dark:text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-3">No cars found</h3>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6 max-w-md mx-auto">We couldn't find any cars matching your current filters. Try adjusting your search criteria.</p>
          <button
            onClick={handleReset}
            className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-xl transition-all duration-300 shadow-sm hover-lift"
          >
            Reset All Filters
          </button>
        </div>
      )}

      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredCars.length / 10)}
        onPageChange={setCurrentPage}
      />
    </main>
  );
}