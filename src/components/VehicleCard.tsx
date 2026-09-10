import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { formatKsh } from "@/data/siteConfig";
import type { Vehicle } from "@/types/vehicle";

interface VehicleCardProps { vehicle: Vehicle; priority?: boolean }

export function VehicleCard({ vehicle, priority = false }: VehicleCardProps) {
  const primaryImage = vehicle.images.find((image) => image.isPrimary) ?? vehicle.images[0];
  const availability = vehicle.status === "Sold" ? "Sold" : "Available now";

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-[#e1e5df] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#99e257] hover:shadow-[0_24px_56px_-32px_rgba(57,255,20,.42)]">
      <Link href={`/cars/${vehicle.slug}`} className="relative block aspect-[16/9] overflow-hidden bg-[#f5f8f2]">
        {primaryImage && <Image src={primaryImage.url} alt={primaryImage.alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority={priority} className="object-cover transition duration-500 group-hover:scale-[1.04]" />}
      </Link>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <Link href={`/cars/${vehicle.slug}`} className="text-[1.65rem] font-bold leading-tight tracking-[-.035em] text-[#202221] transition hover:text-[#2f8f28] sm:text-[1.8rem]">{vehicle.make} {vehicle.model}</Link>
        <p className="mt-2 text-lg leading-6 text-[#686b68]">{vehicle.year} · {vehicle.variant || vehicle.bodyType} · {vehicle.engineCapacity} · {vehicle.transmission}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          <span className={`rounded-full px-3.5 py-1.5 text-sm font-bold ${vehicle.status === "Sold" ? "bg-[#303330] text-white" : "bg-[#7CFC00] text-[#1b3114]"}`}>{availability}</span>
          <span className="rounded-full bg-[#f1f2ef] px-3.5 py-1.5 text-sm font-semibold text-[#3b4240]">{vehicle.fuelType}</span>
          <span className="rounded-full bg-[#f1f2ef] px-3.5 py-1.5 text-sm font-semibold text-[#3b4240]">{vehicle.transmission}</span>
        </div>
        <div className="mt-auto pt-12">
          <p className="flex items-center gap-2 text-lg font-semibold text-[#326d2a]"><MapPin className="h-5 w-5 text-[#39FF14]" /> Kiambu Road, Nairobi</p>
          <div className="mt-5 flex items-end justify-between border-t border-[#ebeeea] pt-5"><p className="text-[2.05rem] font-bold tracking-[-.045em] text-[#202221]">{formatKsh(vehicle.price)}</p><Link href={`/cars/${vehicle.slug}`} className="rounded-full bg-[#39a629] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#2f8f28]">View car</Link></div>
        </div>
      </div>
    </article>
  );
}
