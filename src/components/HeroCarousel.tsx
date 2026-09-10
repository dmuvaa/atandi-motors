"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  { title: "Find New Cars", detail: "Fresh choices, clear details and a showroom visit on your terms.", image: "/peugeot-2008.jpeg", alt: "Peugeot 2008", href: "/cars?status=Available" },
  { title: "Find Used Cars", detail: "Thoughtfully selected vehicles ready for a proper walkaround and road test.", image: "/peugeot-308.jpeg", alt: "Peugeot 308", href: "/cars" },
  { title: "Do a Trade-in", detail: "Bring your current car and let’s put its value towards the next one.", image: "/toyota-allion.jpeg", alt: "Toyota Allion", href: "/services#trade-ins" },
  { title: "Ask for Shipping", detail: "From our Kiambu Road showroom to your doorstep, anywhere in Kenya.", image: "/hyundai-tuscon.jpeg", alt: "Hyundai Tucson", href: "/services#delivery" },
  { title: "Request Quote", detail: "Tell us what you want and get straightforward options from our team.", image: "/peugeot-208-gti.jpeg", alt: "Peugeot 208 GTi", href: "/contact" },
];

export function HeroCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActive((current) => (current + 1) % slides.length), 5000);
    return () => window.clearInterval(timer);
  }, []);

  const slide = slides[active];
  return (
    <section className="overflow-hidden border-b border-[#e1eee2] bg-white">
      <div className="mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8 lg:py-10">
        <div className="relative aspect-[16/8] min-h-[330px] overflow-hidden rounded-[1.5rem] bg-[#f1f8ed] sm:min-h-[480px]">
          {slides.map((item, index) => <Image key={item.title} src={item.image} alt={item.alt} fill priority={index === 0} sizes="(max-width: 1280px) 100vw, 1280px" className={`object-cover object-center transition-all duration-700 ${index === active ? "scale-100 opacity-100" : "scale-[1.03] opacity-0"}`} />)}
        </div>
        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><h1 className="text-4xl font-bold tracking-[-.05em] text-[#111815] sm:text-6xl">{slide.title}</h1><p className="mt-2 max-w-2xl text-base leading-7 text-[#111815]">{slide.detail} <Link href={slide.href} className="font-bold text-[#2f8f28] underline decoration-[#B6FF00] decoration-2 underline-offset-4">Explore</Link></p></div><div className="flex gap-2 pb-1" aria-label="Hero carousel controls">{slides.map((item, index) => <button key={item.title} onClick={() => setActive(index)} aria-label={`Show ${item.title}`} className={`h-2.5 rounded-full transition-all ${index === active ? "w-8 bg-[#39a629]" : "w-2.5 bg-[#b9cfb6] hover:bg-[#7CFC00]"}`} />)}</div></div>
      </div>
    </section>
  );
}
