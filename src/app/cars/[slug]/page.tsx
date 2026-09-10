import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getAllVehicles, getVehicleBySlug, getRelatedVehicles } from "@/data/vehicles";
import { formatKsh } from "@/data/siteConfig";
import { VehicleDetailClient } from "./VehicleDetailClient";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const allCars = getAllVehicles();
  return allCars.map((car) => ({
    slug: car.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);

  if (!vehicle) {
    return {
      title: "Vehicle Not Found | Atandi Motors",
    };
  }

  const title = `${vehicle.year} ${vehicle.make} ${vehicle.model} for Sale in Kenya | Atandi Motors`;
  const description = `${vehicle.headline}. Price: ${formatKsh(vehicle.price)}. Mileage: ${vehicle.mileage} km. Inspected with clean logbook at Kiambu Road showroom.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: vehicle.images[0]?.url ? [{ url: vehicle.images[0].url }] : [],
    },
  };
}

export default async function VehiclePage({ params }: PageProps) {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);

  if (!vehicle) {
    notFound();
  }

  const related = getRelatedVehicles(vehicle, 3);

  return <VehicleDetailClient vehicle={vehicle} relatedVehicles={related} />;
}
