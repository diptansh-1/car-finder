import { Car } from '@/types';
import { notFound } from 'next/navigation';
import ClientCarDetails from './ClientCarDetails';
import { JSON_BIN_URL } from '@/constants';

async function getCar(id: number) {
  try {
    const res = await fetch(JSON_BIN_URL, {
      headers: {
        'X-Bin-Meta': 'false'
      },
      next: { revalidate: 60 }
    });

    if (!res.ok) return undefined;

    const data = await res.json();
    const cars = data.record || data;
    return cars.find((car: Car) => car.id === id);
  } catch (error) {
    console.error('Error fetching car:', error);
    return undefined;
  }
}

async function getAllCars() {
  try {
    const res = await fetch(JSON_BIN_URL, {
      headers: {
        'X-Bin-Meta': 'false'
      },
      next: { revalidate: 60 }
    });

    if (!res.ok) return [];

    const data = await res.json();
    return data.record || data;
  } catch (error) {
    console.error('Error fetching cars:', error);
    return [];
  }
}

export default async function CarPage({
  params,
}: {
  params: { id: string };
}) {
  // Await params before using its properties
  const paramsData = await params;
  const car: Car = await getCar(Number(paramsData.id));
  const allCars: Car[] = await getAllCars();

  if (!car) notFound();

  // Get similar cars (same brand or fuel type, but not the current car)
  const similarCars = allCars
    .filter(c =>
      c.id !== car.id && (c.brand === car.brand || c.fuelType === car.fuelType)
    )
    .slice(0, 3); // Get up to 3 similar cars

  // If we don't have enough similar cars, add random cars
  if (similarCars.length < 3) {
    const randomCars = allCars
      .filter(c => c.id !== car.id && !similarCars.some(sc => sc.id === c.id))
      .sort(() => 0.5 - Math.random()) // Shuffle
      .slice(0, 3 - similarCars.length);

    similarCars.push(...randomCars);
  }

  return (
    <ClientCarDetails car={car} similarCars={similarCars} />
  );
}
