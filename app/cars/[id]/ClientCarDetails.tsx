'use client';
import { Car } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import CarCard from '@/components/CarCard';
import WishlistButton from '@/components/WishlistButton';
import { useAppContext } from '@/app/providers';

export default function ClientCarDetails({ car, similarCars }: { car: Car; similarCars: Car[] }) {
  const { wishlist } = useAppContext();

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center px-4 py-2 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl shadow-sm text-primary-600 dark:text-primary-400 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Cars
        </Link>
      </div>

      <div className="max-w-6xl mx-auto bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2 relative h-96 md:h-auto animate-slide-in-right">
            <Image
              src={car.image}
              alt={car.name}
              fill
              className="object-cover md:object-cover w-full h-full"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden"></div>
            <div className="absolute top-4 left-4 z-10">
              <div className="px-3 py-1.5 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md text-primary-600 dark:text-primary-400 rounded-lg text-sm font-semibold shadow-sm">
                {car.brand}
              </div>
            </div>
            <div className="absolute top-4 right-4 z-10">
              <WishlistButton carId={car.id} variant="icon" />
            </div>
          </div>

          <div className="md:w-1/2 p-6 md:p-8 animate-slide-up">
            <div className="flex flex-col h-full justify-between">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">{car.name}</h1>

                <div className="flex items-center mb-6">
                  <div className="px-4 py-2 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                    <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                      ${car.price.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">Specifications</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center p-4 bg-neutral-50 dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700">
                      <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-primary-600 dark:text-primary-400">
                          <path d="M15.98 1.804a1 1 0 00-1.96 0l-.24 1.192a1 1 0 01-.784.785l-1.192.238a1 1 0 000 1.962l1.192.238a1 1 0 01.785.785l.238 1.192a1 1 0 001.962 0l.238-1.192a1 1 0 01.785-.785l1.192-.238a1 1 0 000-1.962l-1.192-.238a1 1 0 01-.785-.785l-.238-1.192zM6.949 5.684a1 1 0 00-1.898 0l-.683 2.051a1 1 0 01-.633.633l-2.051.683a1 1 0 000 1.898l2.051.684a1 1 0 01.633.632l.683 2.051a1 1 0 001.898 0l.683-2.051a1 1 0 01.633-.633l2.051-.683a1 1 0 000-1.898l-2.051-.683a1 1 0 01-.633-.633L6.95 5.684z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400">Fuel Type</p>
                        <p className="font-medium text-neutral-900 dark:text-white">{car.fuelType}</p>
                      </div>
                    </div>

                    <div className="flex items-center p-4 bg-neutral-50 dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700">
                      <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-primary-600 dark:text-primary-400">
                          <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-neutral-500 dark:text-neutral-400">Seating</p>
                        <p className="font-medium text-neutral-900 dark:text-white">{car.seating} Seats</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">Description</h2>
                  <div className="p-5 bg-neutral-50 dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700">
                    <p className="text-neutral-600 dark:text-neutral-400">
                      The {car.name} is a reliable and efficient vehicle from {car.brand}, offering excellent performance and comfort.
                      With its {car.fuelType} engine and spacious interior that seats up to {car.seating} passengers,
                      it's perfect for both daily commutes and longer journeys.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <button className="w-full py-3.5 px-4 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-xl transition-all duration-300 hover-lift shadow-sm flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                    <path d="M4.5 4.5a3 3 0 00-3 3v9a3 3 0 003 3h8.25a3 3 0 003-3v-9a3 3 0 00-3-3H4.5zM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06z" />
                  </svg>
                  Book a Test Drive
                </button>
                <button className="w-full py-3.5 px-4 bg-white dark:bg-neutral-800 text-primary-600 dark:text-primary-400 font-medium rounded-xl border border-primary-200 dark:border-primary-900/30 hover:bg-primary-50 dark:hover:bg-primary-900/10 transition-all duration-300 hover-lift shadow-sm flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                  </svg>
                  Contact Dealer
                </button>
              </div>
              <div className="mt-4">
                <WishlistButton carId={car.id} variant="large-button" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">Similar Cars You Might Like</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {similarCars.map((similarCar) => (
            <div key={similarCar.id} className="animate-slide-up">
              <CarCard
                car={similarCar}
                isWishlisted={wishlist.includes(similarCar.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
