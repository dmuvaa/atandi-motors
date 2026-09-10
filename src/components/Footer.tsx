import Image from "next/image";
import Link from "next/link";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import { getWhatsAppUrl, siteConfig } from "@/data/siteConfig";

const usedCars = [
  { label: "Used Toyota Cars", href: "/cars?make=Toyota" },
  { label: "Used Peugeot Cars", href: "/cars?make=Peugeot" },
  { label: "Used Hyundai Cars", href: "/cars?make=Hyundai" },
];

const newCars = [
  { label: "New Subaru Cars", href: "/car-sourcing?make=Subaru" },
  { label: "New Toyota Cars", href: "/car-sourcing?make=Toyota" },
  { label: "New Hyundai Cars", href: "/car-sourcing?make=Hyundai" },
];

export function Footer() {
  return (
    <footer className="border-t border-[#dce8e5] bg-[#f7fff0] text-[#111815]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.25fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <Link href="/" className="inline-flex" aria-label="Atandi Motors home">
            <Image src="/atandi-motors-logo.svg" alt="Atandi Motors" width={190} height={43} className="h-11 w-auto" />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-6">Cars picked with a sharp eye and sold with the straight answers buyers deserve.</p>
          <a href={getWhatsAppUrl("Hello Atandi Motors, I would like help finding a car.")} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#2f8f28]"><MessageCircle className="h-4 w-4" /> Ask the team</a>
        </div>
        <div>
          <h3 className="text-xs font-black uppercase tracking-[.14em] text-[#111815]">Used cars</h3>
          <nav className="mt-4 grid gap-3 text-sm font-semibold">{usedCars.map((link) => <Link key={link.label} href={link.href} className="hover:text-[#2f8f28]">{link.label}</Link>)}<Link href="/cars" className="text-[#2f8f28] hover:underline">All used cars</Link></nav>
        </div>
        <div>
          <h3 className="text-xs font-black uppercase tracking-[.14em] text-[#111815]">New & sourced cars</h3>
          <nav className="mt-4 grid gap-3 text-sm font-semibold">{newCars.map((link) => <Link key={link.label} href={link.href} className="hover:text-[#2f8f28]">{link.label}</Link>)}<Link href="/car-sourcing" className="text-[#2f8f28] hover:underline">Request a new car</Link></nav>
        </div>
        <div>
          <h3 className="text-xs font-black uppercase tracking-[.14em] text-[#111815]">Come say hello</h3>
          <div className="mt-4 grid gap-3 text-sm leading-5"><span className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 text-[#39FF14]" />{siteConfig.location.address}</span><a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="flex gap-2 font-semibold hover:text-[#2f8f28]"><Phone className="h-4 w-4 shrink-0 text-[#39FF14]" />{siteConfig.phoneDisplay}</a><a href={getWhatsAppUrl("Hello Atandi Motors, I would like to enquire about a vehicle.")} target="_blank" rel="noopener noreferrer" className="flex gap-2 font-semibold text-[#2f8f28]"><MessageCircle className="h-4 w-4 shrink-0" />Chat with the team</a></div>
        </div>
      </div>
      <div className="border-t border-[#dce8e5]"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-4 py-5 text-xs sm:flex-row sm:px-6 lg:px-8"><p>© {new Date().getFullYear()} Atandi Motors. Nairobi, Kenya.</p><div className="flex gap-5"><Link href="/privacy" className="hover:text-[#2f8f28]">Privacy</Link><Link href="/terms" className="hover:text-[#2f8f28]">Terms</Link></div></div></div>
    </footer>
  );
}
