// app/api/cars/route.ts
import { NextResponse } from 'next/server';
import carsData from '@/data/cars.json';

export async function GET() {
  try {
    return NextResponse.json(carsData);
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}