"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Phone,
  MessageSquare,
  FileText,
  Calendar,
  Gauge,
  Cog,
  Fuel,
  MapPin,
  Car,
  Award,
  ChevronRight,
  Share2,
  Calculator,
  ArrowRight,
} from "lucide-react";
import { Vehicle } from "@/types/vehicle";
import { formatKsh, formatKm, getVehicleWhatsAppUrl, siteConfig } from "@/data/siteConfig";
import { VehicleCard } from "@/components/VehicleCard";
import { EnquiryModal } from "@/components/EnquiryModal";

interface VehicleDetailClientProps {
  vehicle: Vehicle;
  relatedVehicles: Vehicle[];
}

export function VehicleDetailClient({
  vehicle,
  relatedVehicles,
}: VehicleDetailClientProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquiryType, setEnquiryType] = useState<"viewing" | "financing">("viewing");
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"overview" | "features" | "specs">("overview");

  // Asset financing calculation estimate: 20% deposit, 36 months, ~14% per annum
  const depositPercent = 0.2;
  const deposit = Math.round(vehicle.price * depositPercent);
  const loanAmount = vehicle.price - deposit;
  const monthlyEst = Math.round((loanAmount * 1.35) / 36);

  const isSold = vehicle.status === "Sold";
  const currentImg = vehicle.images[activeImageIndex] || vehicle.images[0];

  const handleShare = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="site-page min-h-screen bg-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-neutral-400 mb-6 font-medium">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-neutral-600" />
          <Link href="/cars" className="hover:text-white transition-colors">
            Inventory
          </Link>
          <ChevronRight className="w-3 h-3 text-neutral-600" />
          <span className="text-[#C89D5C] truncate">
            {vehicle.year} {vehicle.make} {vehicle.model}
          </span>
        </nav>

        {/* Sold Alert Banner (if applicable) */}
        {isSold && (
          <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-red-950/40 border border-red-800/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded bg-red-800 text-white font-bold text-xs uppercase tracking-wider">
                SOLD UNIT
              </span>
              <p className="text-sm text-neutral-200">
                This {vehicle.year} {vehicle.make} {vehicle.model} has been sold. We keep this page active for market price transparency.
              </p>
            </div>
            <Link
              href="/car-sourcing"
              className="px-4 py-2 rounded-xl bg-[#C89D5C] hover:bg-[#b58b4b] text-neutral-950 font-bold text-xs tracking-wide transition-all shrink-0"
            >
              Source a Similar Car →
            </Link>
          </div>
        )}

        {/* Vehicle Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 border-b border-[#1f2635] gap-4">
          <div className="space-y-1.5">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              {vehicle.make} {vehicle.model}{" "}
              {vehicle.variant && (
                <span className="font-normal text-neutral-300 text-xl sm:text-2xl ml-1">
                  {vehicle.variant}
                </span>
              )}
            </h1>

            <p className="text-sm text-neutral-400 max-w-2xl">{vehicle.headline}</p>
          </div>

          <button
              onClick={handleShare}
              className="text-xs font-semibold text-[#111815] hover:text-[#2f8f28] flex items-center gap-1 transition-colors self-start sm:self-auto"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copied ? "Link Copied!" : "Share Vehicle"}</span>
          </button>
        </div>

        {/* Gallery & Conversion Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-8">
          {/* Left 2 Cols: Interactive Image Gallery */}
          <div className="lg:col-span-2 space-y-4">
            {/* Main Stage Image */}
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[#11141c] border border-[#232b3b]">
              <Image
                src={currentImg.url}
                alt={currentImg.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 66vw"
                className="object-cover"
              />

              {/* Status pill overlay */}
              <div className="absolute top-4 left-4 z-10 flex gap-2">
                {isSold ? (
                  <span className="px-3 py-1 rounded bg-red-900/90 border border-red-700 text-white text-xs font-bold uppercase">
                    Sold
                  </span>
                ) : (
                  <span className="px-3 py-1 rounded bg-[#B6FF00]/95 backdrop-blur-md border border-[#a4df22] text-[#25331f] text-xs font-semibold flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#2f8f28]" />
                    Verified Unit
                  </span>
                )}
              </div>

              {/* Image counter indicator */}
              <div className="absolute bottom-4 right-4 z-10">
                <span className="px-3 py-1 rounded-md bg-white/95 backdrop-blur-md text-xs font-mono text-[#25331f] border border-[#d8ead4]">
                  {activeImageIndex + 1} / {vehicle.images.length} Photos
                </span>
              </div>
            </div>

            {/* Thumbnails Row */}
            <div className="grid grid-cols-4 gap-3">
              {vehicle.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative aspect-[16/10] rounded-xl overflow-hidden border-2 transition-all ${
                    activeImageIndex === idx
                      ? "border-[#C89D5C] scale-[1.02] shadow-lg shadow-black/50"
                      : "border-[#222a3a] opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img.url}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 25vw, 15vw"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Quick Specs Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              <div className="p-3.5 rounded-xl bg-[#131720] border border-[#212938] flex items-center gap-3">
                <Gauge className="w-5 h-5 text-[#C89D5C]" />
                <div>
                  <span className="text-[11px] text-neutral-400 uppercase tracking-wider block">
                    Mileage
                  </span>
                  <span className="text-sm font-bold font-mono text-white">
                    {formatKm(vehicle.mileage)}
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#131720] border border-[#212938] flex items-center gap-3">
                <Cog className="w-5 h-5 text-[#C89D5C]" />
                <div>
                  <span className="text-[11px] text-neutral-400 uppercase tracking-wider block">
                    Transmission
                  </span>
                  <span className="text-sm font-bold text-white">
                    {vehicle.transmission}
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#131720] border border-[#212938] flex items-center gap-3">
                <Fuel className="w-5 h-5 text-[#C89D5C]" />
                <div>
                  <span className="text-[11px] text-neutral-400 uppercase tracking-wider block">
                    Fuel Type
                  </span>
                  <span className="text-sm font-bold text-white">
                    {vehicle.fuelType}
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#131720] border border-[#212938] flex items-center gap-3">
                <Car className="w-5 h-5 text-[#C89D5C]" />
                <div>
                  <span className="text-[11px] text-neutral-400 uppercase tracking-wider block">
                    Drive & CC
                  </span>
                  <span className="text-sm font-bold text-white">
                    {vehicle.driveType} • {vehicle.engineCapacity}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 border-b border-[#d8ead4] pb-3">
              {(["overview", "features", "specs"] as const).map((tab) => <button key={tab} onClick={() => setActiveTab(tab)} className={`rounded-full px-4 py-2 text-xs font-bold capitalize transition ${activeTab === tab ? "bg-[#B6FF00] text-[#25331f]" : "bg-white text-[#60746c] hover:bg-[#f0f8ea]"}`}>{tab === "specs" ? "Specifications" : tab}</button>)}
            </div>

            {/* Vehicle Overview / Description */}
            <div className={`${activeTab === "overview" ? "block" : "hidden"} mt-5 space-y-5 rounded-2xl border border-[#d9e9dc] bg-white p-6`}>
              <h3 className="text-lg font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#C89D5C]" />
                Vehicle Overview
              </h3>
              <p className="max-w-3xl text-base leading-7 text-[#111815]">
                {vehicle.description}
              </p>
            </div>

            {/* Full Technical Specifications Grid */}
            <div className={`${activeTab === "specs" ? "block" : "hidden"} mt-5 rounded-2xl border border-[#d9e9dc] bg-white p-6`}>
              <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                Full Technical Specifications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-xs border-t border-[#212938] pt-4">
                <div className="flex justify-between py-2 border-b border-[#1b212e]">
                  <span className="text-neutral-400">Make & Model</span>
                  <span className="font-semibold text-white">{vehicle.make} {vehicle.model}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#1b212e]">
                  <span className="text-neutral-400">Year of Manufacture</span>
                  <span className="font-semibold text-white">{vehicle.year}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#1b212e]">
                  <span className="text-neutral-400">Engine Capacity</span>
                  <span className="font-semibold text-white">{vehicle.engineCapacity}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#1b212e]">
                  <span className="text-neutral-400">Horsepower</span>
                  <span className="font-semibold text-white">{vehicle.specs.horsepower || "N/A"}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#1b212e]">
                  <span className="text-neutral-400">Drive Type</span>
                  <span className="font-semibold text-white">{vehicle.driveType}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#1b212e]">
                  <span className="text-neutral-400">Transmission</span>
                  <span className="font-semibold text-white">{vehicle.transmission}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#1b212e]">
                  <span className="text-neutral-400">Exterior Colour</span>
                  <span className="font-semibold text-white">{vehicle.exteriorColour}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#1b212e]">
                  <span className="text-neutral-400">Interior Upholstery</span>
                  <span className="font-semibold text-white">{vehicle.interiorColour}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#1b212e]">
                  <span className="text-neutral-400">Seating Capacity</span>
                  <span className="font-semibold text-white">{vehicle.seatingCapacity} Seats</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#1b212e]">
                  <span className="text-neutral-400">Fuel Economy (Est.)</span>
                  <span className="font-semibold text-white">{vehicle.specs.fuelEconomy || "Verified"}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#1b212e]">
                  <span className="text-neutral-400">VIN / Chassis Last 4</span>
                  <span className="font-mono font-semibold text-[#C89D5C]">{vehicle.specs.vinLastFour || "Available upon viewing"}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#1b212e]">
                  <span className="text-neutral-400">Logbook / Duty Status</span>
                  <span className="font-semibold text-emerald-400">{vehicle.registrationStatus}</span>
                </div>
              </div>
            </div>

            {/* Installed Features Checklist */}
            <div className={`${activeTab === "features" ? "block" : "hidden"} mt-5 rounded-2xl border border-[#d9e9dc] bg-white p-6`}>
              <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                Installed Features & Equipment
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {vehicle.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#151a24] border border-[#222a3a] text-xs text-neutral-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Col: High-Converting Lead Box & Showroom Details */}
          <div className="lg:col-span-1 space-y-6">
            {/* Main Conversion Card */}
            <div className="sticky top-24 space-y-5 rounded-2xl border border-[#d8ead4] bg-white p-6 shadow-[0_18px_42px_-34px_rgba(17,24,21,.45)]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[.14em] text-[#2f8f28]">Listing price</span>
                  <span className="mt-1 block text-3xl font-extrabold font-mono text-[#111815]">
                    {formatKsh(vehicle.price)}
                  </span>
                </div>
                <span className="rounded-full bg-[#B6FF00] px-3 py-1 text-xs font-bold text-[#111815]">Duty Paid</span>
              </div>
              <p className="text-sm leading-6 text-[#111815]">Available to inspect at our Kiambu Road showroom. Ask us about a viewing, payment options or a trade-in.</p>
              <div className="space-y-3">
                <a
                  href={getVehicleWhatsAppUrl(
                    `${vehicle.make} ${vehicle.model} ${vehicle.variant || ""}`.trim(),
                    vehicle.year,
                    vehicle.price
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3.5 text-sm font-bold text-[#111815] transition hover:bg-[#39FF14]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enquire via WhatsApp</span>
                </a>
                <div className="grid grid-cols-2 gap-3">
                  <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="flex items-center justify-center gap-2 rounded-xl border border-[#cfeacb] bg-[#f3ffeb] px-3 py-3 text-xs font-bold text-[#111815] transition hover:bg-[#e1f8d4]"><Phone className="w-4 h-4 text-[#2f8f28]" />Call us</a>
                  <button onClick={() => { setEnquiryType("viewing"); setIsEnquiryOpen(true); }} className="flex items-center justify-center gap-2 rounded-xl border border-[#cfeacb] bg-[#f3ffeb] px-3 py-3 text-xs font-bold text-[#111815] transition hover:bg-[#e1f8d4]"><Calendar className="w-4 h-4 text-[#2f8f28]" />Book viewing</button>
                </div>
              </div>
              <button onClick={() => { setEnquiryType("financing"); setIsEnquiryOpen(true); }} className="flex w-full items-center justify-between border-y border-[#d8ead4] py-3 text-left text-sm font-bold text-[#111815] transition hover:text-[#2f8f28]"><span className="flex items-center gap-2"><Calculator className="h-4 w-4 text-[#2f8f28]" />Asset financing available</span><span className="font-mono text-xs">From {formatKsh(monthlyEst)}/mo</span></button>
              <div className="flex items-center gap-2 text-xs font-medium text-[#111815]"><ShieldCheck className="h-4 w-4 shrink-0 text-[#2f8f28]" />Verified vehicle · Logbook transfer ready</div>
            </div>
          </div>
        </div>

        {/* Similar / Related Vehicles Section */}
        {relatedVehicles.length > 0 && (
          <div className="pt-16 border-t border-[#1f2635]">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#C89D5C]">
                  Similar Options
                </span>
                <h3 className="text-2xl font-bold text-white tracking-tight mt-1">
                  You Might Also Consider
                </h3>
              </div>
              <Link
                href="/cars"
                className="text-xs font-semibold text-[#C89D5C] hover:underline flex items-center gap-1"
              >
                <span>View Full Showroom</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedVehicles.map((relCar) => (
                <VehicleCard key={relCar.id} vehicle={relCar} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Enquiry and Viewing Modal */}
      <EnquiryModal
        vehicle={vehicle}
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        defaultType={enquiryType}
      />
    </div>
  );
}
