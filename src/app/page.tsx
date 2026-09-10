import Link from "next/link";
import {
  ArrowRight,
  FileCheck2,
  Gauge,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import { getWhatsAppUrl } from "@/data/siteConfig";
import { getFeaturedVehicles, getLatestVehicles } from "@/data/vehicles";
import { customerReviews } from "@/data/reviews";
import { QuickSearch } from "@/components/QuickSearch";
import { VehicleCard } from "@/components/VehicleCard";
import { HeroCarousel } from "@/components/HeroCarousel";

const proofPoints = [
  { icon: ShieldCheck, title: "Verified before display", copy: "Mileage, logbook and a full mechanical report checked before every listing." },
  { icon: FileCheck2, title: "Paperwork made simple", copy: "Clear duty documents and a straightforward, guided NTSA transfer." },
  { icon: Gauge, title: "Ready to drive", copy: "Physical showroom units, professionally prepared for your road test." },
];

export default function HomePage() {
  const featured = getFeaturedVehicles().slice(0, 3);
  const featuredIds = new Set(featured.map((vehicle) => vehicle.id));
  const usedCars = getLatestVehicles().filter((vehicle) => !featuredIds.has(vehicle.id)).slice(0, 3);
  const reviews = customerReviews.filter((review) => review.isFeatured).slice(0, 3);

  return (
    <div className="bg-white text-[#111815]">
      <HeroCarousel />
      <div className="mx-auto -mt-2 max-w-7xl px-4 sm:px-6 lg:px-8"><QuickSearch /></div>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-xs font-bold uppercase tracking-[.16em] text-[#078a74]">The picks</p><h2 className="mt-2 text-4xl font-black tracking-[-.05em] text-[#111815] sm:text-5xl">Worth a closer look.</h2></div><Link href="/cars" className="group inline-flex items-center gap-2 text-sm font-bold text-[#087968]">Browse all inventory <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link></div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{featured.map((vehicle, index) => <VehicleCard key={vehicle.id} vehicle={vehicle} priority={index === 0} />)}</div>
      </section>

      <section className="border-y border-[#dce8e5] bg-[#f7fff0] py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[.16em] text-[#2f8f28]">The Atandi way</p><h2 className="mt-2 text-4xl font-black tracking-[-.05em] text-[#111815] sm:text-5xl">Why Choose Atandi Motors?</h2><p className="mt-4 text-base leading-7 text-[#111815]">The practical details matter: clear vehicle information, time to inspect, and a team that stays available after the handover.</p></div><div className="mt-12 grid gap-5 md:grid-cols-3">{proofPoints.map(({ icon: Icon, title, copy }, index) => <article key={title} className="rounded-2xl border border-[#d7ebe6] bg-white p-7"><div className="flex items-center justify-between"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#dff9f3] text-[#2f8f28]"><Icon className="h-5 w-5" /></span><span className="font-mono text-xs text-[#2f8f28]">0{index + 1}</span></div><h3 className="mt-7 text-xl font-extrabold tracking-tight text-[#111815]">{title}</h3><p className="mt-3 text-sm leading-6 text-[#111815]">{copy}</p></article>)}</div></div></section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"><div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-xs font-bold uppercase tracking-[.16em] text-[#0b9ca1]">View Used Cars</p><h2 className="mt-2 text-4xl font-black tracking-[-.05em] text-[#111815] sm:text-5xl">More cars to explore.</h2></div><Link href="/cars" className="inline-flex items-center gap-2 text-sm font-bold text-[#087968]">View all used cars <ArrowRight className="h-4 w-4" /></Link></div><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{usedCars.map((vehicle) => <VehicleCard key={vehicle.id} vehicle={vehicle} />)}</div></section>

      <section className="border-y border-[#dce8e5] bg-white py-20"><div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:px-8"><div><p className="text-xs font-bold uppercase tracking-[.16em] text-[#2f8f28]">Customer stories</p><h2 className="mt-3 text-4xl font-black tracking-[-.05em] text-[#111815] sm:text-5xl">Good cars make good stories.</h2><p className="mt-5 max-w-sm text-base leading-7 text-[#111815]">Straightforward help, honest walkarounds and a car buyers can feel good about taking home.</p><Link href="/reviews" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#2f8f28] underline decoration-[#B6FF00] decoration-2 underline-offset-4">Read buyer stories <ArrowRight className="h-4 w-4" /></Link></div><div className="grid gap-4 md:grid-cols-3">{reviews.map((review) => <article key={review.id} className="rounded-2xl border border-[#d7ebe6] bg-[#f7fff0] p-5"><div className="flex gap-1 text-[#2f8f28]">{Array.from({ length: review.rating }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}</div><p className="mt-5 text-sm leading-6 text-[#111815]">“{review.review}”</p><p className="mt-5 text-xs font-bold text-[#111815]">{review.customerName}</p><p className="mt-1 text-[11px] text-[#111815]">{review.vehiclePurchased}</p></article>)}</div></div></section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"><div className="relative overflow-hidden rounded-[2rem] bg-[#d9f8f1] p-8 sm:p-12 lg:p-16"><div className="absolute -right-12 -top-12 h-64 w-64 rounded-full border-[30px] border-[#69d9d1]/40" /><div className="relative max-w-2xl"><Sparkles className="h-6 w-6 text-[#087968]" /><h2 className="mt-5 text-4xl font-black tracking-[-.055em] text-[#111815] sm:text-5xl">Found the one? Let&apos;s make it yours.</h2><p className="mt-5 text-base leading-7 text-[#49635b]">Visit us, bring your questions, take a drive. The next move is yours.</p><a href={getWhatsAppUrl("Hello Atandi Motors, I would like to arrange a test drive.")} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#087968] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#066b5d]"><MessageCircle className="h-4 w-4" /> Arrange a test drive</a></div></div></section>
    </div>
  );
}
