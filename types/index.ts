export type Car = {
    id: number;
    name: string;
    brand: string;
    price: number;
    fuelType: string;
    seating: number;
    image: string;
  };
  
  export type Filters = {
    search: string;
    brand: string;
    priceRange: [number, number];
    fuelType: string;
    seating: string;
  };