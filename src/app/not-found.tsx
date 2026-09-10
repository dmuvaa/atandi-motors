import Link from "next/link";
import { Car, Home, Phone, ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function NotFound() {
  return (
    <div className="site-page min-h-[75vh] flex items-center justify-center bg-white px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-[#161c27] border border-[#273347] text-[#C89D5C] flex items-center justify-center mx-auto text-2xl font-bold font-mono">
          404
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Page Not Found
          </h1>
          <p className="text-sm text-neutral-400">
            The vehicle listing or showroom page you are looking for may have been moved, sold, or is temporarily unavailable.
          </p>
        </div>

        <div className="pt-2 flex flex-col gap-3">
          <Link
            href="/cars"
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#C89D5C] hover:bg-[#b88c4b] text-neutral-950 font-bold text-sm transition-all"
          >
            <Car className="w-4 h-4" />
            <span>Browse Available Showroom Cars</span>
          </Link>

          <Link
            href="/"
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#181f2b] hover:bg-[#232c3d] text-white border border-[#2a374b] text-sm font-medium transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/contact"
            className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs text-neutral-400 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#C89D5C]" />
            <span>Contact Showroom ({siteConfig.phoneDisplay})</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
