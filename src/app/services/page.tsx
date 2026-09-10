import { Metadata } from "next";
import Link from "next/link";
import {
  Car,
  Ship,
  RefreshCw,
  Coins,
  ShieldCheck,
  Truck,
  ArrowRight,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Dealership Services | Atandi Motors Nairobi",
  description:
    "Explore our complete automotive services: verified pre-owned sales, Japan & UK car sourcing, trade-in valuations, bank asset financing, and 150-point vehicle inspections.",
};

const services = [
  {
    id: "sales",
    title: "Direct Vehicle Sales",
    icon: Car,
    subtitle: "Showroom-Ready, Inspected Units",
    description:
      "Browse handpicked SUVs, sedans, and double cab pickups physically present at our Kiambu Road showroom. All vehicles are duty paid, mechanically certified, and ready for instant drive-away.",
    highlights: [
      "Immediate NTSA TIMS logbook transfer",
      "Full 150-point diagnostic inspection certificate",
      "Complimentary professional interior/exterior detailing",
      "Drive away within 24 hours of payment",
    ],
    ctaText: "Browse Current Stock",
    ctaLink: "/cars",
  },
  {
    id: "sourcing",
    title: "Bespoke Car Sourcing & Importation",
    icon: Ship,
    subtitle: "Direct from Japan, the UK & Thailand",
    description:
      "If you have a specific grade, color, or trim in mind, we bid directly on verified auctions (USS Japan, BCA UK). We handle marine shipping, Mombasa port clearance, KRA duty assessment, and transport.",
    highlights: [
      "Access to 100,000+ live auction listings weekly",
      "Pre-bid inspection report with translated grading sheets",
      "Transparent breakdown of CIF, KRA duty, and port fees",
      "Estimated delivery in 21 to 35 days",
    ],
    ctaText: "Request Vehicle Sourcing",
    ctaLink: "/car-sourcing",
  },
  {
    id: "trade-ins",
    title: "Vehicle Trade-In & Valuation",
    icon: RefreshCw,
    subtitle: "Upgrade to Your Next Car Effortlessly",
    description:
      "Trade in your current vehicle against any car in our showroom. We provide a swift, fair physical valuation based on current market dynamics and deduct the value directly from your purchase price.",
    highlights: [
      "Rapid 30-minute physical appraisal on site",
      "Competitive valuation reflecting true Kenyan market value",
      "Zero hassle of finding a private buyer on your own",
      "Balance can be paid via cash or bank financing",
    ],
    ctaText: "Book a Trade-In Appraisal",
    ctaLink: "/contact",
  },
  {
    id: "financing",
    title: "Bank Asset Financing Assistance",
    icon: Coins,
    subtitle: "Up to 80% Financing with Tier-1 Kenyan Banks",
    description:
      "We partner with NCBA, Stanbic Bank, Co-op Bank, Absa, and I&M Bank to facilitate quick asset financing approvals. Our relationship managers streamline the paperwork to get you on the road.",
    highlights: [
      "Financing up to 80% of vehicle value",
      "Repayment periods extending up to 48 or 60 months",
      "Competitive interest rates starting from 13.5% p.a.",
      "Approval turnaround within 3 to 5 business days",
    ],
    ctaText: "Inquire About Financing",
    ctaLink: "/contact",
  },
  {
    id: "inspection",
    title: "Pre-Purchase Vehicle Inspection",
    icon: ShieldCheck,
    subtitle: "Independent Comprehensive Diagnostic",
    description:
      "Buying a car from an external private seller or another dealership? Bring it to Atandi Motors for an unbiased, forensic 150-point diagnostic inspection to protect yourself against expensive surprises.",
    highlights: [
      "Engine compression and turbo boost diagnostics",
      "Suspension, bushing, and undercarriage lift check",
      "Paint thickness gauge scan for concealed accident repair",
      "Computerized OBD-II system health printout",
    ],
    ctaText: "Schedule an Inspection",
    ctaLink: "/contact",
  },
  {
    id: "delivery",
    title: "Countrywide Flatbed Delivery",
    icon: Truck,
    subtitle: "Safe, Insured Transit Across Kenya",
    description:
      "Whether you reside in Mombasa, Nakuru, Eldoret, Kisumu, Nanyuki, or Malindi, we transport your purchased car on an insured flatbed carrier right to your home or office with full handover documentation.",
    highlights: [
      "Fully insured carrier transit against road damage",
      "Zero added mileage onto your odometer",
      "Real-time GPS tracking during journey",
      "Handover ceremony and paperwork at your doorstep",
    ],
    ctaText: "Speak to Delivery Desk",
    ctaLink: "/contact",
  },
];

export default function ServicesPage() {
  return (
    <div className="site-page min-h-screen bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C89D5C]">
            <span>Automotive Solutions</span>
            <span className="text-neutral-500">•</span>
            <span>Atandi Motors</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Complete Vehicle Solutions Tailored for Kenyan Drivers
          </h1>
          <p className="text-base text-neutral-300 leading-relaxed">
            From verified showroom sales to overseas auction imports and bank financing facilitation, we handle every stage of your car ownership journey with transparency.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                id={svc.id}
                className="p-7 rounded-2xl bg-[#131720] border border-[#232b3b] flex flex-col justify-between hover:border-[#38455c] transition-all group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#1a202c] border border-[#2d394d] text-[#C89D5C] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[11px] font-mono text-[#C89D5C] uppercase tracking-wider font-semibold block mb-1">
                    {svc.subtitle}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-3">
                    {svc.title}
                  </h3>
                  <p className="text-xs text-neutral-300 leading-relaxed mb-6">
                    {svc.description}
                  </p>

                  {/* Highlights checklist */}
                  <div className="space-y-2 mb-6">
                    {svc.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-neutral-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#1f2635] flex items-center justify-between">
                  <Link
                    href={svc.ctaLink}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C89D5C] hover:text-[#e0b472] transition-colors"
                  >
                    <span>{svc.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={getWhatsAppUrl(`Hello Atandi Motors, I would like to enquire about your ${svc.title} service.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600/30 transition-colors"
                    aria-label={`WhatsApp regarding ${svc.title}`}
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banking Partners Strip */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#10141c] border border-[#21293a] text-center space-y-6">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#C89D5C]">
              Financing Facilitation
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Approved Banking & Asset Finance Partners
            </h3>
            <p className="text-xs text-neutral-400 max-w-lg mx-auto">
              We work directly with asset finance officers from major financial institutions in Kenya to secure pre-approvals quickly.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 pt-2">
            {siteConfig.financingPartners.map((bank, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-xl bg-[#161a24] border border-[#262f40] text-neutral-200 text-xs font-semibold tracking-wide"
              >
                {bank}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
