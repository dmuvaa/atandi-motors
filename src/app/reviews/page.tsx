"use client";

import { useState } from "react";
import Link from "next/link";
import { Star, MessageSquare, CheckCircle2, ShieldCheck, ThumbsUp, ArrowRight } from "lucide-react";
import { customerReviews } from "@/data/reviews";
import { getWhatsAppUrl } from "@/data/siteConfig";

export default function ReviewsPage() {
  const [filterRating, setFilterRating] = useState<number | "all">("all");

  const filtered = filterRating === "all"
    ? customerReviews
    : customerReviews.filter((r) => r.rating === filterRating);

  return (
    <div className="site-page min-h-screen bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C89D5C]">
            <ShieldCheck className="w-4 h-4" />
            <span>Verified Kenyan Buyers</span>
            <span className="text-neutral-500">•</span>
            <span>4.9 / 5.0 Star Rating</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Customer Experiences & Reviews
          </h1>
          <p className="text-base text-neutral-300 leading-relaxed">
            Read unedited stories from vehicle owners who bought their SUVs, sedans, and double cab pickups from Atandi Motors in Nairobi and across the country.
          </p>
        </div>

        {/* Rating Scoreboard Banner */}
        <div className="p-8 rounded-3xl bg-[#121620] border border-[#232b3b] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-[#181f2c] border border-[#273449] min-w-[140px]">
              <span className="text-4xl sm:text-5xl font-extrabold font-mono text-white">4.9</span>
              <div className="flex items-center gap-1 text-[#C89D5C] my-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-[11px] text-neutral-400 font-medium">Based on 500+ sales</span>
            </div>

            <div className="space-y-1">
              <h3 className="text-xl font-bold text-white">100% Satisfaction Guarantee</h3>
              <p className="text-xs text-neutral-300 max-w-md leading-relaxed">
                Every vehicle comes backed by mechanical inspection certificates, authentic logbooks, and continuous aftersales support.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a
              href={getWhatsAppUrl("Hello Atandi Motors, I would like to share feedback regarding my recent vehicle purchase.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-[#1a212e] hover:bg-[#252f42] text-white border border-[#2d394d] text-xs font-semibold transition-all flex items-center gap-2"
            >
              <ThumbsUp className="w-4 h-4 text-[#C89D5C]" />
              <span>Submit Your Review</span>
            </a>

            <Link
              href="/cars"
              className="px-6 py-3 rounded-xl bg-[#C89D5C] hover:bg-[#b88c4b] text-neutral-950 font-bold text-xs transition-all flex items-center gap-1.5"
            >
              <span>Explore Available Stock</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-[#131720] border border-[#232b3b] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#C89D5C]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-neutral-500">
                    {item.purchaseDate}
                  </span>
                </div>

                <p className="text-sm text-neutral-300 leading-relaxed italic mb-6">
                  &ldquo;{item.review}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#1f2635] space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-white">{item.customerName}</h4>
                  <span className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Verified Buyer
                  </span>
                </div>
                <p className="text-xs text-neutral-400">{item.location}</p>
                <p className="text-xs font-mono text-[#C89D5C] pt-1">
                  Car: {item.vehiclePurchased}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
