"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function QuickSearch() {
  const router = useRouter();
  const [make, setMake] = useState("");
  const [bodyType, setBodyType] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  function search(event: React.FormEvent) {
    event.preventDefault();
    const query = new URLSearchParams();
    if (make) query.set("make", make);
    if (bodyType) query.set("bodyType", bodyType);
    if (maxPrice) query.set("maxPrice", maxPrice);
    router.push(`/cars${query.size ? `?${query}` : ""}`);
  }

  const selectClass = "w-full appearance-none bg-transparent py-2 text-sm font-semibold text-[#111815] outline-none";

  return (
    <form onSubmit={search} className="rounded-2xl border border-[#c9e8e1] bg-white p-3 shadow-[0_20px_50px_-25px_rgba(0,70,60,.35)] sm:p-4">
      <div className="grid gap-2 md:grid-cols-[1fr_1fr_1fr_auto]">
        <label className="rounded-xl border border-[#dfebe8] px-4"><span className="block pt-2 text-[10px] font-bold uppercase tracking-[.14em] text-[#77918a]">Make</span><select value={make} onChange={(event) => setMake(event.target.value)} className={selectClass}><option value="">Any make</option><option>Peugeot</option><option>Hyundai</option><option>Toyota</option></select></label>
        <label className="rounded-xl border border-[#dfebe8] px-4"><span className="block pt-2 text-[10px] font-bold uppercase tracking-[.14em] text-[#77918a]">Style</span><select value={bodyType} onChange={(event) => setBodyType(event.target.value)} className={selectClass}><option value="">Any body style</option><option value="SUV">SUV</option><option value="Crossover">Crossover</option><option value="Sedan">Sedan</option><option value="Hatchback">Hatchback</option></select></label>
        <label className="rounded-xl border border-[#dfebe8] px-4"><span className="block pt-2 text-[10px] font-bold uppercase tracking-[.14em] text-[#77918a]">Budget</span><select value={maxPrice} onChange={(event) => setMaxPrice(event.target.value)} className={selectClass}><option value="">Any budget</option><option value="3000000">Under KSh 3M</option><option value="5000000">Under KSh 5M</option><option value="10000000">Under KSh 10M</option></select></label>
        <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#087968] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#066b5d]"><Search className="h-4 w-4" /> Find cars</button>
      </div>
    </form>
  );
}
