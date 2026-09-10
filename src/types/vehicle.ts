export type FuelType = "Petrol" | "Diesel" | "Hybrid" | "Electric";
export type TransmissionType = "Automatic" | "Manual" | "CVT";
export type BodyType = "SUV" | "Sedan" | "Hatchback" | "Pickup" | "Station Wagon" | "Crossover";
export type DriveType = "2WD" | "4WD" | "AWD" | "RWD" | "FWD";
export type VehicleStatus = "Available" | "Reserved" | "Sold";

export interface VehicleImage {
  url: string;
  alt: string;
  isPrimary?: boolean;
}

export interface Vehicle {
  id: string;
  slug: string;
  make: string;
  model: string;
  variant?: string;
  year: number;
  price: number; // in Kenyan Shillings (KSh)
  originalPrice?: number; // for strike-through or special offer
  mileage: number; // in Kilometers
  fuelType: FuelType;
  transmission: TransmissionType;
  engineCapacity: string; // e.g. "2,000 cc"
  bodyType: BodyType;
  driveType: DriveType;
  exteriorColour: string;
  interiorColour: string;
  seatingCapacity: number;
  registrationStatus: string; // e.g. "Duty Paid - KDF 452X" or "Fresh Import - Unregistered"
  dutyPaid: boolean;
  location: string;
  status: VehicleStatus;
  isFeatured: boolean;
  isLatestArrival?: boolean;
  images: VehicleImage[];
  headline: string;
  description: string;
  features: string[];
  specs: {
    vinLastFour?: string;
    horsepower?: string;
    fuelEconomy?: string;
    doors?: number;
    keysCount?: number;
  };
}

export interface FilterState {
  searchQuery: string;
  make: string;
  bodyType: string;
  fuelType: string;
  transmission: string;
  minPrice: number;
  maxPrice: number;
  minYear: number;
  maxYear: number;
  status: string;
  sortBy: "featured" | "price-asc" | "price-desc" | "year-desc" | "mileage-asc";
}
