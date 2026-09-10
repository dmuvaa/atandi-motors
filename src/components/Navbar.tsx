"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { getWhatsAppUrl } from "@/data/siteConfig";
import { vehicles } from "@/data/vehicles";

const links = [
  { name: "All Cars", href: "/cars" },
  { name: "Sourcing", href: "/car-sourcing" },
  { name: "Services", href: "/services" },
  { name: "Our story", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const inventoryCount = vehicles.filter((vehicle) => vehicle.status === "Available").length;

  return (
    <header className="sticky top-0 z-50 border-b border-[#dce8e5] bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center" onClick={() => setOpen(false)}>
          <Image src="/atandi-motors-logo.svg" alt="Atandi Motors" width={159} height={36} priority className="h-10 w-auto transition-transform group-hover:scale-[1.02]" />
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => <Link key={link.href} href={link.href} className={`rounded-full px-3.5 py-2 text-sm font-semibold transition ${pathname === link.href ? "bg-[#e7f8f4] text-[#087968]" : "text-[#52645e] hover:bg-[#f3faf8] hover:text-[#111815]"}`}>{link.name}{link.href === "/cars" && <span className="ml-1.5 text-xs text-[#0b9ca1]">{inventoryCount}</span>}</Link>)}
        </nav>
        <div className="hidden lg:block"><a href={getWhatsAppUrl("Hello Atandi Motors, I would like to speak with the team.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#087968] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#066b5d]"><MessageCircle className="h-4 w-4" /> Talk to us</a></div>
        <button className="rounded-lg p-2 text-[#111815] lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
      </div>
      {open && <div className="border-t border-[#dce8e5] bg-white px-4 py-4 lg:hidden"><nav className="mx-auto grid max-w-7xl gap-1">{links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className={`rounded-xl px-4 py-3 text-sm font-bold ${pathname === link.href ? "bg-[#e7f8f4] text-[#087968]" : "text-[#33453f]"}`}>{link.name}</Link>)}<a href={getWhatsAppUrl("Hello Atandi Motors, I would like to speak with the team.")} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-[#087968] px-4 py-3 text-sm font-bold text-white"><MessageCircle className="h-4 w-4" /> Talk to us</a></nav></div>}
    </header>
  );
}
