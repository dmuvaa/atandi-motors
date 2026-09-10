import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Terms and Conditions of Sale | Atandi Motors Kenya",
  description: "Terms and conditions of sale and vehicle reservations at Atandi Motors.",
};

export default function TermsPage() {
  return (
    <div className="site-page min-h-screen bg-white py-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="space-y-2 border-b border-[#212938] pb-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#C89D5C] uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Customer Protection</span>
          </div>
          <h1 className="text-3xl font-extrabold text-white">Terms of Sale & Reservations</h1>
          <p className="text-xs text-neutral-400 font-mono">
            Atandi Motors Limited • Kiambu Road Showroom, Nairobi
          </p>
        </div>

        <div className="space-y-6 text-sm text-neutral-300 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">1. Vehicle Availability & Physical Inspection</h2>
            <p>
              All vehicles listed on our showroom website are physical units present at our Kiambu Road yard unless designated as &quot;Importation on Order&quot; or &quot;Sold&quot;. Buyers are strongly encouraged to undertake a physical test drive and independent mechanical inspection prior to executing a sale agreement.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">2. Vehicle Pricing & Currency</h2>
            <p>
              All prices quoted on the website and showroom floor are denominated in <strong>Kenyan Shillings (KSh)</strong>. Prices reflect duty-paid status and verified logbooks, unless explicitly negotiated otherwise.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">3. Logbook Transfer & Ownership</h2>
            <p>
              Upon receipt of cleared payment or receipt of an irrevocable Letter of Undertaking from an approved commercial bank, Atandi Motors initiates immediate logbook transfer to the buyer via the NTSA TIMS portal.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">4. Importation on Order</h2>
            <p>
              Vehicle sourcing agreements for units imported from Japan or the UK are governed by a formal Sale and Importation Contract stipulating agreed CIF parameters, estimated shipping transit timelines, and verified auction grade documentation.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
