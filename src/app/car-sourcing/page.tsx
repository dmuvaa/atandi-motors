"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Ship,
  Search,
  CheckCircle2,
  FileCheck,
  Truck,
  Send,
  MessageSquare,
  ShieldCheck,
  Clock,
  Coins,
} from "lucide-react";
import { getWhatsAppUrl, siteConfig } from "@/data/siteConfig";

export default function CarSourcingPage() {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [budget, setBudget] = useState("");
  const [transmission, setTransmission] = useState("Automatic");
  const [fuel, setFuel] = useState("Petrol");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 700);
  };

  const whatsappSourcingMsg = `Hello Atandi Motors, I would like to request car sourcing for a ${year || "recent"} ${make || "vehicle"} ${model || ""}. My budget is approximately ${budget || "flexible"}. Please share auction options.`;

  return (
    <div className="site-page min-h-screen bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C89D5C]">
            <Ship className="w-4 h-4" />
            <span>Importation On Order</span>
            <span className="text-neutral-500">•</span>
            <span>Japan & UK</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Source Your Next Car
          </h1>
          <p className="text-base text-neutral-300 leading-relaxed">
            Tell us the make, model and budget you have in mind. We will help you source a suitable vehicle from Japan or the UK and guide the process through to handover in Nairobi.
          </p>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#f7fff0] border border-[#d8ead4] space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#C89D5C]">
              Transparent 5-Step Journey
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              How Sourcing With Atandi Motors Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 pt-4">
            <div className="p-4 rounded-xl bg-[#151a24] border border-[#242d3d] flex flex-col justify-between">
              <div>
                <span className="text-2xl font-extrabold font-mono text-[#C89D5C]">01</span>
                <h3 className="text-sm font-bold text-white mt-2 mb-1">Brief & Budget</h3>
                <p className="text-xs text-neutral-400">
                  You specify the desired make, year, color, package options, and maximum budget.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#151a24] border border-[#242d3d] flex flex-col justify-between">
              <div>
                <span className="text-2xl font-extrabold font-mono text-[#C89D5C]">02</span>
                <h3 className="text-sm font-bold text-white mt-2 mb-1">Live Auction Bids</h3>
                <p className="text-xs text-neutral-400">
                  We inspect live Japanese/UK auction units and translate grading sheets with high-res photos.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#151a24] border border-[#242d3d] flex flex-col justify-between">
              <div>
                <span className="text-2xl font-extrabold font-mono text-[#C89D5C]">03</span>
                <h3 className="text-sm font-bold text-white mt-2 mb-1">Marine Shipping</h3>
                <p className="text-xs text-neutral-400">
                  Secured RoRo shipping with marine insurance coverage from Yokohama/Southampton to Mombasa.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#151a24] border border-[#242d3d] flex flex-col justify-between">
              <div>
                <span className="text-2xl font-extrabold font-mono text-[#C89D5C]">04</span>
                <h3 className="text-sm font-bold text-white mt-2 mb-1">Port & KRA Duty</h3>
                <p className="text-xs text-neutral-400">
                  Our licensed clearing agents handle KRA duty assessment, Kebs inspection, and registration.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#151a24] border border-[#242d3d] flex flex-col justify-between">
              <div>
                <span className="text-2xl font-extrabold font-mono text-[#C89D5C]">05</span>
                <h3 className="text-sm font-bold text-white mt-2 mb-1">Valet & Handover</h3>
                <p className="text-xs text-neutral-400">
                  Final mechanical valet, full tank of fuel, and logbook handover at our Kiambu Road yard.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form and Why Sourcing Side-by-Side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Sourcing Form */}
          <div className="lg:col-span-7 bg-white border border-[#d8ead4] p-6 sm:p-8 rounded-3xl shadow-[0_20px_50px_-40px_rgba(17,24,21,.45)]">
            <div className="pb-6 border-b border-[#212938] mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C89D5C]">
                Vehicle Request Form
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Tell Us What You Want To Drive
              </h2>
              <p className="text-xs text-neutral-400 mt-1">
                Our sourcing specialists in Nairobi and Tokyo will review your requirements within 2 hours.
              </p>
            </div>

            {isSuccess ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bold text-white">Sourcing Request Submitted!</h3>
                <p className="text-sm text-neutral-300 max-w-md mx-auto">
                  Thank you, <span className="text-white font-semibold">{name}</span>. We have logged your request for a <strong className="text-[#C89D5C]">{year} {make} {model}</strong>. Our import desk will contact you via WhatsApp with matching auction candidates.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={getWhatsAppUrl(whatsappSourcingMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Send Directly via WhatsApp Now
                  </a>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="text-xs text-neutral-400 hover:text-white underline"
                  >
                    Submit another request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">
                      Preferred Make <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Peugeot, Hyundai, Toyota"
                      value={make}
                      onChange={(e) => setMake(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-[#181f2b] border border-[#283549] text-white focus:outline-none focus:border-[#C89D5C]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">
                      Model & Preferred Trim <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Peugeot 2008 or Hyundai Tucson"
                      value={model}
                      onChange={(e) => setModel(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-[#181f2b] border border-[#283549] text-white focus:outline-none focus:border-[#C89D5C]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">
                      Year Range <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 2018 - 2021"
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-[#181f2b] border border-[#283549] text-white focus:outline-none focus:border-[#C89D5C]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">
                      Estimated Budget (in KSh) <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. KSh 5,500,000"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-[#181f2b] border border-[#283549] text-white focus:outline-none focus:border-[#C89D5C]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">
                      Transmission
                    </label>
                    <select
                      value={transmission}
                      onChange={(e) => setTransmission(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-[#181f2b] border border-[#283549] text-white focus:outline-none focus:border-[#C89D5C]"
                    >
                      <option value="Automatic">Automatic</option>
                      <option value="Manual">Manual</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">
                      Fuel Preference
                    </label>
                    <select
                      value={fuel}
                      onChange={(e) => setFuel(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-[#181f2b] border border-[#283549] text-white focus:outline-none focus:border-[#C89D5C]"
                    >
                      <option value="Petrol">Petrol</option>
                      <option value="Diesel">Diesel</option>
                      <option value="Hybrid">Hybrid</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2 border-t border-[#212938]">
                  <span className="text-xs font-semibold text-neutral-300 block mb-3">
                    Your Contact Details
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-neutral-400 mb-1">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-[#181f2b] border border-[#283549] text-white focus:outline-none focus:border-[#C89D5C]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-neutral-400 mb-1">
                        WhatsApp / Phone <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 0712 345 678"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-[#181f2b] border border-[#283549] text-white focus:outline-none focus:border-[#C89D5C]"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-400 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@company.co.ke"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-[#181f2b] border border-[#283549] text-white focus:outline-none focus:border-[#C89D5C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-400 mb-1">
                    Specific Features or Color Preferences
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Sunroof, 360 camera, Pearl white only, leather interior, under 50,000 km..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-[#181f2b] border border-[#283549] text-white focus:outline-none focus:border-[#C89D5C]"
                  ></textarea>
                </div>

                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-[#C89D5C] hover:bg-[#ba8d4c] text-neutral-950 font-bold text-sm transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Sending Request...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Sourcing Request</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Sourcing Benefits Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-[#f7fff0] border border-[#d8ead4] space-y-5">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#C89D5C]">
                Why Import Through Us
              </span>
              <h3 className="text-xl font-bold text-white">
                The Safest Way to Import to Kenya
              </h3>

              <div className="space-y-4 text-xs text-neutral-300">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white text-sm">Genuine Auction Verification</h4>
                    <p className="text-neutral-400 mt-0.5">
                      We share the unedited Japanese auction sheet before bidding. No fake grades or hidden repairs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Coins className="w-5 h-5 text-[#C89D5C] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white text-sm">Fixed Cost Guarantee</h4>
                    <p className="text-neutral-400 mt-0.5">
                      You receive a binding quote for vehicle purchase, marine freight, insurance, and KRA duty. No surprise port demurrage.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#C89D5C] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-white text-sm">Speedy Clearance</h4>
                    <p className="text-neutral-400 mt-0.5">
                      Average turnaround of 4–5 business days from vessel docking at Kilindini Harbour to carrier departure for Nairobi.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#212938]">
                <a
                  href={getWhatsAppUrl("Hello Atandi Motors, I would like to consult on vehicle importation.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#39FF14] hover:bg-[#B6FF00] text-[#111815] border border-[#2f8f28] text-xs font-bold transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Talk with an Import Specialist</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
