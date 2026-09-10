"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
  Search,
  SlidersHorizontal,
  X,
  RotateCcw,
  LayoutGrid,
  List,
  Sparkles,
  ArrowRight,
  MessageSquare,
  HelpCircle,
} from "lucide-react";
import { Vehicle, BodyType, FuelType } from "@/types/vehicle";
import { vehicles } from "@/data/vehicles";
import { VehicleCard } from "@/components/VehicleCard";
import { formatKsh, getWhatsAppUrl } from "@/data/siteConfig";

const allMakes = ["Peugeot", "Hyundai", "Toyota"];
const allBodyTypes: BodyType[] = ["SUV", "Sedan", "Crossover", "Hatchback"];
const allFuelTypes: FuelType[] = ["Petrol", "Diesel", "Hybrid"];

export function CarsInventory() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // State from URL params or defaults
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const [selectedMake, setSelectedMake] = useState(searchParams.get("make") || "");
  const [selectedBodyType, setSelectedBodyType] = useState(searchParams.get("bodyType") || "");
  const [selectedFuelType, setSelectedFuelType] = useState(searchParams.get("fuelType") || "");
  const [selectedTransmission, setSelectedTransmission] = useState(searchParams.get("transmission") || "");
  const [maxPrice, setMaxPrice] = useState(searchParams.get("maxPrice") || "");
  const [minYear, setMinYear] = useState(searchParams.get("minYear") || "");
  const [statusFilter, setStatusFilter] = useState(searchParams.get("status") || "All"); // "All", "Available", "Sold"
  const [sortBy, setSortBy] = useState<"newest" | "price-asc" | "price-desc" | "year-desc" | "mileage-asc">("newest");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Sync state if URL query changes
  useEffect(() => {
    const make = searchParams.get("make");
    const body = searchParams.get("bodyType");
    const price = searchParams.get("maxPrice");
    const year = searchParams.get("minYear");
    if (make) setSelectedMake(make);
    if (body) setSelectedBodyType(body);
    if (price) setMaxPrice(price);
    if (year) setMinYear(year);
  }, [searchParams]);

  // Filtering Logic
  const filteredVehicles = useMemo(() => {
    return vehicles.filter((car) => {
      // Status filter
      if (statusFilter === "Available" && car.status !== "Available") return false;
      if (statusFilter === "Sold" && car.status !== "Sold") return false;

      // Text search
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchTitle = `${car.year} ${car.make} ${car.model} ${car.variant || ""}`.toLowerCase();
        const matchFeatures = car.features.join(" ").toLowerCase();
        if (!matchTitle.includes(query) && !matchFeatures.includes(query)) {
          return false;
        }
      }

      // Make
      if (selectedMake && car.make.toLowerCase() !== selectedMake.toLowerCase()) {
        return false;
      }

      // Body Type
      if (selectedBodyType && car.bodyType.toLowerCase() !== selectedBodyType.toLowerCase()) {
        return false;
      }

      // Fuel Type
      if (selectedFuelType && car.fuelType.toLowerCase() !== selectedFuelType.toLowerCase()) {
        return false;
      }

      // Transmission
      if (selectedTransmission && car.transmission.toLowerCase() !== selectedTransmission.toLowerCase()) {
        return false;
      }

      // Max Price
      if (maxPrice) {
        const parsedMax = parseInt(maxPrice, 10);
        if (car.price > parsedMax) return false;
      }

      // Min Year
      if (minYear) {
        const parsedYear = parseInt(minYear, 10);
        if (car.year < parsedYear) return false;
      }

      return true;
    });
  }, [
    searchQuery,
    selectedMake,
    selectedBodyType,
    selectedFuelType,
    selectedTransmission,
    maxPrice,
    minYear,
    statusFilter,
  ]);

  // Sorting Logic
  const sortedVehicles = useMemo(() => {
    const result = [...filteredVehicles];
    switch (sortBy) {
      case "price-asc":
        return result.sort((a, b) => a.price - b.price);
      case "price-desc":
        return result.sort((a, b) => b.price - a.price);
      case "year-desc":
        return result.sort((a, b) => b.year - a.year);
      case "mileage-asc":
        return result.sort((a, b) => a.mileage - b.mileage);
      case "newest":
      default:
        // Available first, then featured
        return result.sort((a, b) => {
          if (a.status === "Available" && b.status === "Sold") return -1;
          if (a.status === "Sold" && b.status === "Available") return 1;
          return b.isFeatured ? 1 : -1;
        });
    }
  }, [filteredVehicles, sortBy]);

  const activeFilterCount = [
    selectedMake,
    selectedBodyType,
    selectedFuelType,
    selectedTransmission,
    maxPrice,
    minYear,
    statusFilter !== "All",
    searchQuery,
  ].filter(Boolean).length;

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedMake("");
    setSelectedBodyType("");
    setSelectedFuelType("");
    setSelectedTransmission("");
    setMaxPrice("");
    setMinYear("");
    setStatusFilter("All");
    router.push("/cars");
  };

  return (
    <div className="legacy-inventory min-h-screen bg-white py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-[#1f2635] gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C89D5C] mb-2">
              <span>Verified Showroom Stock</span>
              <span className="text-neutral-500">•</span>
              <span>Kiambu Road, Nairobi</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Vehicle Inventory
            </h1>
            <p className="text-sm text-neutral-400 mt-1 max-w-xl">
              Browse thoroughly inspected, duty-paid pre-owned vehicles. Instant WhatsApp viewing appointments and bank asset financing assistance.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-neutral-400 font-mono">
              Showing <strong className="text-white">{sortedVehicles.length}</strong> of {vehicles.length} listings
            </span>
          </div>
        </div>

        {/* Search Bar & Fast Filter Strip */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search make, model, features..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-9 py-2.5 bg-[#141822] border border-[#262f40] rounded-xl text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#C89D5C] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Quick status tabs & Sorting */}
          <div className="w-full md:w-auto flex items-center justify-between md:justify-end gap-3 flex-wrap">
            {/* Status pills */}
            <div className="flex items-center bg-[#141822] p-1 rounded-xl border border-[#242c3d] text-xs">
              <button
                onClick={() => setStatusFilter("All")}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                  statusFilter === "All"
                    ? "bg-[#C89D5C] text-neutral-950 font-semibold"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                All ({vehicles.length})
              </button>
              <button
                onClick={() => setStatusFilter("Available")}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                  statusFilter === "Available"
                    ? "bg-[#C89D5C] text-neutral-950 font-semibold"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                Available ({vehicles.filter((v) => v.status === "Available").length})
              </button>
              <button
                onClick={() => setStatusFilter("Sold")}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                  statusFilter === "Sold"
                    ? "bg-[#C89D5C] text-neutral-950 font-semibold"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                Sold ({vehicles.filter((v) => v.status === "Sold").length})
              </button>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                aria-label="Sort vehicles"
                className="bg-[#141822] border border-[#242c3d] text-white text-xs rounded-xl px-3 py-2 focus:outline-none focus:border-[#C89D5C] cursor-pointer"
              >
                <option value="newest">Sort: Featured First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="year-desc">Year: Newest First</option>
                <option value="mileage-asc">Mileage: Lowest First</option>
              </select>

              {/* Mobile filter button */}
              <button
                onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
                className="lg:hidden flex items-center gap-1.5 px-3 py-2 bg-[#141822] border border-[#242c3d] rounded-xl text-xs text-neutral-200"
              >
                <SlidersHorizontal className="w-3.5 h-3.5 text-[#C89D5C]" />
                <span>Filters {activeFilterCount > 0 && `(${activeFilterCount})`}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Active Filter Badges */}
        {activeFilterCount > 0 && (
          <div className="flex items-center flex-wrap gap-2 pb-5">
            <span className="text-xs text-neutral-400 font-medium">Active filters:</span>
            {selectedMake && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#1d2433] text-xs text-white border border-[#2e3b52]">
                Make: {selectedMake}
                <button onClick={() => setSelectedMake("")} className="hover:text-red-400">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {selectedBodyType && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#1d2433] text-xs text-white border border-[#2e3b52]">
                Body: {selectedBodyType}
                <button onClick={() => setSelectedBodyType("")} className="hover:text-red-400">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {selectedFuelType && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#1d2433] text-xs text-white border border-[#2e3b52]">
                Fuel: {selectedFuelType}
                <button onClick={() => setSelectedFuelType("")} className="hover:text-red-400">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {maxPrice && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#1d2433] text-xs text-white border border-[#2e3b52]">
                Max: {formatKsh(parseInt(maxPrice, 10))}
                <button onClick={() => setMaxPrice("")} className="hover:text-red-400">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {minYear && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#1d2433] text-xs text-white border border-[#2e3b52]">
                Year: {minYear}+
                <button onClick={() => setMinYear("")} className="hover:text-red-400">
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}

            <button
              onClick={handleResetFilters}
              className="inline-flex items-center gap-1 text-xs text-[#C89D5C] hover:underline ml-2"
            >
              <RotateCcw className="w-3 h-3" />
              Reset All
            </button>
          </div>
        )}

        {/* Advanced filter studio */}
        <div className="space-y-8">
          <aside
            className={`advanced-filter-panel grid grid-cols-1 gap-5 rounded-[1.5rem] border border-[#d7ebc9] bg-[#f7fff0] p-5 shadow-[0_16px_45px_-36px_rgba(57,255,20,.7)] md:grid-cols-2 xl:grid-cols-5 ${
              mobileFilterOpen ? "grid" : "hidden"
            } lg:grid`}
          >
            <div className="flex flex-col justify-between border-b border-[#d8ead4] pb-4 xl:col-span-5 xl:flex-row xl:items-center">
              <div className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#B6FF00] text-[#263525]"><SlidersHorizontal className="w-4 h-4" /></span>
                <div><h3 className="text-base font-bold text-[#202221]">Build your shortlist</h3><p className="mt-0.5 text-xs text-[#5b6b58]">Mix filters to find the car that fits your drive.</p></div>
              </div>
              {activeFilterCount > 0 && (
                <button
                  onClick={handleResetFilters}
                  className="mt-3 text-left text-xs font-bold text-[#2f8f28] hover:text-[#1c5e1a] xl:mt-0"
                >
                  Reset all filters
                </button>
              )}
            </div>

            {/* Make */}
            <div className="space-y-2">
              <label className="text-[11px] font-bold uppercase tracking-wider text-[#54714d]">
                Make
              </label>
              <div className="flex flex-col gap-1">
                <button
                  onClick={() => setSelectedMake("")}
                  className={`text-left px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    selectedMake === ""
                      ? "bg-[#7CFC00] text-[#20301e] font-bold"
                      : "text-[#51604e] hover:bg-white"
                  }`}
                >
                  All Makes
                </button>
                {allMakes.map((m) => {
                  const count = vehicles.filter((v) => v.make === m).length;
                  return (
                    <button
                      key={m}
                      onClick={() => setSelectedMake(selectedMake === m ? "" : m)}
                      className={`text-left px-3 py-1.5 rounded-lg text-xs font-medium flex items-center justify-between transition-colors ${
                        selectedMake === m
                          ? "bg-[#7CFC00] text-[#20301e] font-bold"
                          : "text-[#51604e] hover:bg-white"
                      }`}
                    >
                      <span>{m}</span>
                      <span className="font-mono text-[11px] opacity-70">({count})</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Body Type */}
            <div className="space-y-2 border-t border-[#d8ead4] pt-4 md:border-t-0 md:pt-0">
              <label className="text-[11px] font-bold uppercase tracking-wider text-[#54714d]">
                Body Style
              </label>
              <div className="flex flex-wrap gap-1.5">
                {allBodyTypes.map((body) => (
                  <button
                    key={body}
                    onClick={() => setSelectedBodyType(selectedBodyType === body ? "" : body)}
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      selectedBodyType === body
                        ? "bg-[#7CFC00] text-[#20301e] font-bold"
                        : "border border-[#dce9d7] bg-white text-[#51604e] hover:border-[#92de65]"
                    }`}
                  >
                    {body}
                  </button>
                ))}
              </div>
            </div>

            {/* Budget */}
            <div className="space-y-2 border-t border-[#d8ead4] pt-4 xl:border-t-0 xl:pt-0">
              <label className="text-[11px] font-bold uppercase tracking-wider text-[#54714d]">
                Max Budget (KSh)
              </label>
              <select
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                aria-label="Filter by maximum budget"
                className="w-full rounded-xl border border-[#dce9d7] bg-white px-3 py-2.5 text-xs font-semibold text-[#3e4b3b] outline-none focus:border-[#39FF14]"
              >
                <option value="">Any Budget</option>
                <option value="2500000">Under KSh 2.5M</option>
                <option value="4000000">Under KSh 4.0M</option>
                <option value="6000000">Under KSh 6.0M</option>
                <option value="9000000">Under KSh 9.0M</option>
              </select>
            </div>

            {/* Fuel Type */}
            <div className="space-y-2 border-t border-[#d8ead4] pt-4 xl:border-t-0 xl:pt-0">
              <label className="text-[11px] font-bold uppercase tracking-wider text-[#54714d]">
                Fuel Type
              </label>
              <div className="flex flex-wrap gap-1.5">
                {allFuelTypes.map((fuel) => (
                  <button
                    key={fuel}
                    onClick={() => setSelectedFuelType(selectedFuelType === fuel ? "" : fuel)}
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      selectedFuelType === fuel
                        ? "bg-[#7CFC00] text-[#20301e] font-bold"
                        : "border border-[#dce9d7] bg-white text-[#51604e] hover:border-[#92de65]"
                    }`}
                  >
                    {fuel}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2 border-t border-[#d8ead4] pt-4 md:border-t-0 md:pt-0">
              <label className="text-[11px] font-bold uppercase tracking-wider text-[#54714d]">Transmission</label>
              <div className="flex flex-wrap gap-1.5">{["Automatic", "Manual", "CVT"].map((transmission) => <button key={transmission} onClick={() => setSelectedTransmission(selectedTransmission === transmission ? "" : transmission)} className={`rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-colors ${selectedTransmission === transmission ? "bg-[#7CFC00] text-[#20301e]" : "border border-[#dce9d7] bg-white text-[#51604e] hover:border-[#92de65]"}`}>{transmission}</button>)}</div>
            </div>

            {/* Year */}
            <div className="space-y-2 border-t border-[#d8ead4] pt-4 xl:border-t-0 xl:pt-0">
              <label className="text-[11px] font-bold uppercase tracking-wider text-[#54714d]">
                Minimum Year
              </label>
              <select
                value={minYear}
                onChange={(e) => setMinYear(e.target.value)}
                aria-label="Filter by minimum year"
                className="w-full rounded-xl border border-[#dce9d7] bg-white px-3 py-2.5 text-xs font-semibold text-[#3e4b3b] outline-none focus:border-[#39FF14]"
              >
                <option value="">Any Year</option>
                <option value="2021">2021 or newer</option>
                <option value="2019">2019 or newer</option>
                <option value="2018">2018 or newer</option>
                <option value="2016">2016 or newer</option>
              </select>
            </div>
          </aside>

          {/* Vehicle Listings Result Column */}
          <div>
            {sortedVehicles.length === 0 ? (
              /* Empty State (PRD §37) */
              <div className="p-12 text-center rounded-2xl bg-[#121620] border border-[#232b3b] space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#1c2230] text-[#C89D5C] flex items-center justify-center mx-auto">
                  <HelpCircle className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white">No vehicles found</h3>
                  <p className="text-sm text-neutral-400 max-w-md mx-auto">
                    Try adjusting your filters, or contact Atandi Motors directly. We can source your desired specification directly from Japan or the UK.
                  </p>
                </div>

                <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={handleResetFilters}
                    className="px-5 py-2.5 rounded-lg bg-[#1a202d] hover:bg-[#252f42] text-white text-xs font-semibold border border-[#2e3b52] transition-colors"
                  >
                    Clear Search Filters
                  </button>

                  <Link
                    href="/car-sourcing"
                    className="px-5 py-2.5 rounded-lg bg-[#C89D5C] hover:bg-[#b88c4b] text-neutral-950 text-xs font-bold transition-all"
                  >
                    Request Custom Car Sourcing →
                  </Link>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {sortedVehicles.map((vehicle, idx) => (
                  <VehicleCard key={vehicle.id} vehicle={vehicle} priority={idx < 4} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
