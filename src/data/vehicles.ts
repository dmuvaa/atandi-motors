import { Vehicle } from "@/types/vehicle";

const showroom = "Showroom, Kiambu Road, Nairobi";

export const vehicles: Vehicle[] = [
  {
    id: "peugeot-308", slug: "peugeot-308", make: "Peugeot", model: "308", variant: "Hatchback", year: 2018, price: 2250000, mileage: 58200, fuelType: "Petrol", transmission: "Automatic", engineCapacity: "1,200 cc", bodyType: "Hatchback", driveType: "FWD", exteriorColour: "Grey", interiorColour: "Black", seatingCapacity: 5, registrationStatus: "Duty Paid · Ready for transfer", dutyPaid: true, location: showroom, status: "Available", isFeatured: true, isLatestArrival: true,
    headline: "A sharp, practical Peugeot 308 with an effortless city-ready automatic drive.",
    description: "This Peugeot 308 is a practical hatchback with the kind of compact footprint that makes Nairobi traffic and parking easier, while still giving passengers a comfortable, well-shaped cabin. The automatic transmission keeps the daily drive relaxed, and the car’s clean presentation makes it easy to assess on a proper walkaround. Visit the Kiambu Road showroom to inspect the bodywork, cabin, tyres and equipment at your own pace, then arrange a road test before deciding.",
    features: ["Automatic transmission", "Touchscreen infotainment", "Climate control", "Alloy wheels", "Parking sensors", "Bluetooth connectivity"],
    specs: { horsepower: "130 hp", fuelEconomy: "17 km/L", doors: 5, keysCount: 2 },
    images: [{ url: "/peugeot-308.jpeg", alt: "Peugeot 308", isPrimary: true }, { url: "/peugeot-308s.jpeg", alt: "Peugeot 308 alternate view" }],
  },
  {
    id: "hyundai-tucson", slug: "hyundai-tucson", make: "Hyundai", model: "Tucson", variant: "SUV", year: 2019, price: 3350000, mileage: 64000, fuelType: "Petrol", transmission: "Automatic", engineCapacity: "2,000 cc", bodyType: "SUV", driveType: "2WD", exteriorColour: "Blue", interiorColour: "Black", seatingCapacity: 5, registrationStatus: "Duty Paid · Ready for transfer", dutyPaid: true, location: showroom, status: "Available", isFeatured: true, isLatestArrival: true,
    headline: "A roomy Hyundai Tucson SUV made for city comfort and weekend escapes.",
    description: "The Hyundai Tucson brings the elevated driving position, easy access and useful luggage room that make an SUV such a strong everyday choice. Its automatic gearbox and composed road manners suit the school run, the commute and longer trips out of town, while the cabin gives passengers room to settle in. This unit is available for a detailed showroom inspection, so you can look through the exterior, interior and key features before taking it for a road test.",
    features: ["Automatic transmission", "Reverse camera", "Steering controls", "Climate control", "Alloy wheels", "Spacious luggage area"],
    specs: { horsepower: "155 hp", fuelEconomy: "12 km/L", doors: 5, keysCount: 2 },
    images: [{ url: "/hyundai-tuscon.jpeg", alt: "Hyundai Tucson", isPrimary: true }, { url: "/hyundai-tuscon2.jpeg", alt: "Hyundai Tucson alternate view" }],
  },
  {
    id: "peugeot-2008", slug: "peugeot-2008", make: "Peugeot", model: "2008", variant: "Crossover", year: 2019, price: 2850000, mileage: 53400, fuelType: "Petrol", transmission: "Automatic", engineCapacity: "1,200 cc", bodyType: "Crossover", driveType: "FWD", exteriorColour: "White", interiorColour: "Black", seatingCapacity: 5, registrationStatus: "Duty Paid · Ready for transfer", dutyPaid: true, location: showroom, status: "Available", isFeatured: true, isLatestArrival: true,
    headline: "A compact Peugeot 2008 crossover with a raised driving position and real personality.",
    description: "The Peugeot 2008 is a compact crossover that feels at home in the city without giving up the confidence of a raised seating position. It is easy to place in traffic, comfortable enough for longer drives and sized sensibly for everyday parking. This example has been selected as a clean, usable all-rounder; come to the showroom for an unhurried walkaround, ask your questions and arrange a test drive to see how it fits your routine.",
    features: ["Automatic transmission", "Cruise control", "Touchscreen infotainment", "Parking sensors", "Alloy wheels", "ISOFIX child-seat mounts"],
    specs: { horsepower: "130 hp", fuelEconomy: "16 km/L", doors: 5, keysCount: 2 },
    images: [{ url: "/peugeot-2008.jpeg", alt: "Peugeot 2008", isPrimary: true }, { url: "/peugeot-cars.jpeg", alt: "Peugeot showroom collection" }],
  },
  {
    id: "peugeot-208-gti", slug: "peugeot-208-gti", make: "Peugeot", model: "208 GTi", variant: "Performance Hatch", year: 2017, price: 2450000, mileage: 47800, fuelType: "Petrol", transmission: "Manual", engineCapacity: "1,600 cc Turbo", bodyType: "Hatchback", driveType: "FWD", exteriorColour: "Red", interiorColour: "Black", seatingCapacity: 5, registrationStatus: "Duty Paid · Ready for transfer", dutyPaid: true, location: showroom, status: "Available", isFeatured: false, isLatestArrival: true,
    headline: "A proper hot hatch: compact, turbocharged and brilliantly engaging to drive.",
    description: "The Peugeot 208 GTi is the energetic choice in the collection: a compact performance hatch with a turbocharged engine, a manual gearbox and a genuinely engaging character. It still offers the everyday usability of a hatchback, but gives a driver more connection and response than the usual city car. We welcome an enthusiast’s close inspection at the showroom, including a proper look at the cabin, wheels and exterior before arranging a considered road test.",
    features: ["Turbocharged petrol engine", "Manual transmission", "Sport seats", "Alloy wheels", "Bluetooth connectivity", "Front fog lamps"],
    specs: { horsepower: "200 hp", fuelEconomy: "14 km/L", doors: 5, keysCount: 2 },
    images: [{ url: "/peugeot-208-gti.jpeg", alt: "Peugeot 208 GTi", isPrimary: true }, { url: "/peugeot-cars.jpeg", alt: "Peugeot showroom collection" }],
  },
  {
    id: "toyota-allion", slug: "toyota-allion", make: "Toyota", model: "Allion", variant: "Sedan", year: 2017, price: 2150000, mileage: 69500, fuelType: "Petrol", transmission: "Automatic", engineCapacity: "1,800 cc", bodyType: "Sedan", driveType: "FWD", exteriorColour: "White", interiorColour: "Beige", seatingCapacity: 5, registrationStatus: "Duty Paid · Ready for transfer", dutyPaid: true, location: showroom, status: "Available", isFeatured: false, isLatestArrival: false,
    headline: "The dependable Toyota Allion sedan—comfortable, composed and built for daily ease.",
    description: "This Toyota Allion is a clean, elegant sedan for a buyer who values a calm drive, generous cabin space and straightforward everyday usability. The automatic transmission makes it an easy companion in traffic, while the conventional sedan shape provides a comfortable environment for both front and rear passengers. It is ready for a close inspection at the showroom, where you can spend time with the vehicle, review its condition and arrange a road test before moving forward.",
    features: ["Automatic transmission", "Push-button start", "Climate control", "Reverse camera", "Alloy wheels", "Spacious rear seating"],
    specs: { horsepower: "143 hp", fuelEconomy: "15 km/L", doors: 4, keysCount: 2 },
    images: [{ url: "/toyota-allion.jpeg", alt: "Toyota Allion", isPrimary: true }, { url: "/toyota-allion.jpeg", alt: "Toyota Allion showroom view" }],
  },
  {
    id: "peugeot-308-s", slug: "peugeot-308-s", make: "Peugeot", model: "308 S", variant: "Hatchback", year: 2016, price: 1950000, mileage: 74100, fuelType: "Petrol", transmission: "Automatic", engineCapacity: "1,200 cc", bodyType: "Hatchback", driveType: "FWD", exteriorColour: "White", interiorColour: "Black", seatingCapacity: 5, registrationStatus: "Duty Paid · Ready for transfer", dutyPaid: true, location: showroom, status: "Available", isFeatured: false, isLatestArrival: false,
    headline: "A smart Peugeot 308 S hatchback with easy everyday manners.",
    description: "The Peugeot 308 S is a stylish, useful hatchback with a refined cabin and an automatic driving experience that works well for everyday ownership. Its shape is easy to live with around town, yet it remains a comfortable option for regular longer journeys. This car is presented for a proper in-person viewing at our Kiambu Road showroom: take a full walkaround, inspect the seating and controls, and book a road test when you are ready.",
    features: ["Automatic transmission", "Touchscreen display", "Climate control", "Alloy wheels", "Parking sensors", "Split-fold rear seats"],
    specs: { horsepower: "130 hp", fuelEconomy: "17 km/L", doors: 5, keysCount: 2 },
    images: [{ url: "/peugeot-308s.jpeg", alt: "Peugeot 308 S", isPrimary: true }, { url: "/peugeot-308.jpeg", alt: "Peugeot 308 S alternate view" }],
  },
];

export function getAllVehicles(): Vehicle[] { return vehicles; }
export function getFeaturedVehicles(): Vehicle[] { return vehicles.filter((vehicle) => vehicle.isFeatured && vehicle.status === "Available"); }
export function getLatestVehicles(): Vehicle[] { return vehicles.filter((vehicle) => vehicle.status === "Available"); }
export function getVehicleBySlug(slug: string): Vehicle | undefined { return vehicles.find((vehicle) => vehicle.slug === slug); }
export function getRelatedVehicles(currentVehicle: Vehicle, limit = 3): Vehicle[] {
  return vehicles.filter((vehicle) => vehicle.id !== currentVehicle.id && vehicle.status === "Available" && (vehicle.bodyType === currentVehicle.bodyType || vehicle.make === currentVehicle.make)).slice(0, limit);
}
