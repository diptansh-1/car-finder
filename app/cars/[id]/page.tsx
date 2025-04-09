import { Car } from '@/types';
import { notFound } from 'next/navigation';
import ClientCarDetails from './ClientCarDetails';

async function getCar(id: number) {
  const res = await fetch(`/api/cars/${id}`, {
    next: { revalidate: 60 }
  });

  if (!res.ok) return undefined;
  return res.json();
}

async function getAllCars() {
  const res = await fetch('/api/cars', {
    next: { revalidate: 60 }
  });

  if (!res.ok) return [];
  return res.json();
}

export default async function CarPage({
  params,
}: {
  params: { id: string };
}) {
  const car: Car = await getCar(Number(params.id));
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
