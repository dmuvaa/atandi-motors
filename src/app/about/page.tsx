import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Award, Users, CheckCircle2, ArrowRight, MapPin, Phone, MessageSquare } from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "About Atandi Motors | Trusted Car Dealership in Nairobi, Kenya",
  description:
    "Learn about Atandi Motors, Nairobi's premier pre-owned and import automotive dealership. Our commitment to verified mileage, clean NTSA logbooks, and 150-point inspections.",
};

export default function AboutPage() {
  return (
    <div className="site-page min-h-screen bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C89D5C]">
            <span>Est. Nairobi, Kenya</span>
            <span className="text-neutral-500">•</span>
            <span>Automotive Transparency</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Redefining Car Buying in Kenya Through Integrity
          </h1>
          <p className="text-base text-neutral-300 leading-relaxed">
            Atandi Motors was founded with a singular conviction: buying a pre-owned vehicle in Nairobi should be completely transparent, stress-free, and backed by undeniable mechanical proof.
          </p>
        </div>

        {/* Hero Visual Image */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-[#d8ead4] bg-[#f7fff0] shadow-[0_24px_56px_-42px_rgba(17,24,21,.5)] sm:aspect-[16/8]">
          <Image
            src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1600&q=80"
            alt="Atandi Motors Showroom Display"
            fill
            priority
            className="object-cover object-[center_55%]"
          />
          <div className="absolute bottom-4 left-4 z-10 rounded-2xl border border-[#d8ead4] bg-white/95 px-4 py-3 shadow-lg sm:bottom-8 sm:left-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#2f8f28]">
              Showroom Presence
            </span>
            <h2 className="mt-1 text-lg font-bold text-[#111815] sm:text-xl">
              Kiambu Road, Nairobi, Kenya
            </h2>
          </div>
        </div>

        {/* The Story & Principles */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#C89D5C]">
              <Award className="w-4 h-4" />
              <span>Our Dealership Ethos</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Why We Don&apos;t Cut Corners on Vehicle Health
            </h2>
            <p className="text-sm text-neutral-300 leading-relaxed">
              In a marketplace rife with rolled-back odometers, concealed salvage repairs, and fraudulent logbook encumbrances, Atandi Motors operates as an oasis of total transparency.
            </p>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Every unit displayed on our yard or sourced on behalf of our clients is thoroughly cross-examined through authentic Japanese auction grading sheets, KRA duty assessment portals, and our in-house 150-point diagnostic ramp check.
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-200">
              <div className="flex items-center gap-2 p-3 rounded-xl bg-[#141822] border border-[#222a38]">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Original Japanese Export Certificates</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-[#141822] border border-[#222a38]">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Accident Structural Guarantee</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-[#141822] border border-[#222a38]">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>NTSA TIMS Logbook Clearance</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-[#141822] border border-[#222a38]">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Nationwide Flatbed Delivery</span>
              </div>
            </div>
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-[#131720] border border-[#222a38] space-y-2">
              <span className="text-3xl sm:text-4xl font-extrabold font-mono text-white">500+</span>
              <p className="text-xs text-neutral-400">Happy drivers handed over clean vehicles across Kenya.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#131720] border border-[#222a38] space-y-2">
              <span className="text-3xl sm:text-4xl font-extrabold font-mono text-[#C89D5C]">100%</span>
              <p className="text-xs text-neutral-400">Clean title & NTSA logbook guarantee on all deliveries.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#131720] border border-[#222a38] space-y-2">
              <span className="text-3xl sm:text-4xl font-extrabold font-mono text-emerald-400">150</span>
              <p className="text-xs text-neutral-400">Point technical inspection checklist completed for every car.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#131720] border border-[#222a38] space-y-2">
              <span className="text-3xl sm:text-4xl font-extrabold font-mono text-white">4.9 / 5</span>
              <p className="text-xs text-neutral-400">Client satisfaction rating based on verified Kenyan buyers.</p>
            </div>
          </div>
        </div>

        {/* 150-Point Inspection Overview */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#11141c] border border-[#21293a] space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C89D5C]">
              Rigorous Quality Control
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Our 150-Point Pre-Purchase Standard
            </h3>
            <p className="text-sm text-neutral-400">
              Before a vehicle keys are handed over, our certified automotive engineers verify all critical systems:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-[#151a24] border border-[#242d3d] space-y-2">
              <h4 className="text-sm font-bold text-white">1. Powertrain & Diagnostics</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                OBD-II computer scan for hidden sensor trouble codes, engine compression check, turbocharger boost evaluation, transmission fluid quality, and cooling system pressure.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#151a24] border border-[#242d3d] space-y-2">
              <h4 className="text-sm font-bold text-white">2. Chassis & Suspension</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Undercarriage inspection on the hydraulic lift for rust, suspension bushings, steering rack play, shock absorbers, CV joints, and wheel bearing integrity.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#151a24] border border-[#242d3d] space-y-2">
              <h4 className="text-sm font-bold text-white">3. Electrical & Safety</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Complete evaluation of ABS pumps, airbag resistance modules, air conditioning gas and compressor performance, battery cranking health, and infotainment systems.
              </p>
            </div>
          </div>
        </div>

        {/* CTA to Showroom */}
        <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-[#d8ead4] bg-[#f7fff0] p-8 sm:p-12 md:flex-row">
          <div>
            <h3 className="text-2xl font-bold text-[#111815]">Ready to inspect our vehicles in person?</h3>
            <p className="mt-1 text-sm text-[#111815]">
              Visit our showroom opposite Ridgeways Mall, Kiambu Road, Nairobi.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/cars"
              className="rounded-xl bg-[#B6FF00] px-6 py-3 text-sm font-bold text-[#111815] transition-all hover:bg-[#39FF14]"
            >
              Browse Inventory
            </Link>
            <a
              href={getWhatsAppUrl("Hello Atandi Motors, I would like to schedule a visit to your Kiambu Road showroom.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-[#39a629] px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-[#2f8f28]"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
