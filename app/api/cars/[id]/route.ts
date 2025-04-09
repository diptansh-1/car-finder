import { NextResponse } from "next/server";
import carsData from "@/data/cars.json";

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
  ) {
    try {
      // Extract id from params
      const { id } = params;
      const car = carsData.find(c => c.id === Number(id));

      if (!car) {
        return NextResponse.json(
          { error: 'Car not found' },
          { status: 404 }
        );
      }

      return NextResponse.json(car);
    } catch (error) {
      return NextResponse.json(
        { error: 'Internal Server Error' },
        { status: 500 }
      );
    }
  }