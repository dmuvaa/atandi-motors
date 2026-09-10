import { Suspense } from "react";
import { Metadata } from "next";
import { CarsInventory } from "@/components/CarsInventory";

export const metadata: Metadata = {
  title: "Available Cars for Sale in Kenya | Atandi Motors Showroom",
  description:
    "Browse our complete inventory of inspected pre-owned vehicles and fresh imports in Nairobi. Filter by make, body type, fuel, and budget. Direct WhatsApp viewing appointments.",
};

export default function CarsPage() {
  return (
    <Suspense
      fallback={
        <div className="site-page min-h-screen bg-white py-20 flex items-center justify-center">
          <div className="text-center space-y-3">
            <div className="w-8 h-8 border-2 border-[#C89D5C] border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-xs text-neutral-400 font-mono">Loading Atandi Motors Showroom...</p>
          </div>
        </div>
      }
    >
      <CarsInventory />
    </Suspense>
  );
}
