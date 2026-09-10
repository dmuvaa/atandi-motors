"use client";

import { useState } from "react";
import { X, CheckCircle2, Send, Phone, MessageSquare, ShieldCheck } from "lucide-react";
import { Vehicle } from "@/types/vehicle";
import { formatKsh, getVehicleWhatsAppUrl } from "@/data/siteConfig";

interface EnquiryModalProps {
  vehicle?: Vehicle;
  isOpen: boolean;
  onClose: () => void;
  defaultType?: "viewing" | "financing" | "general";
}

export function EnquiryModal({
  vehicle,
  isOpen,
  onClose,
  defaultType = "viewing",
}: EnquiryModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [preferredMethod, setPreferredMethod] = useState<"whatsapp" | "phone" | "email">("whatsapp");
  const [preferredDate, setPreferredDate] = useState("");
  const [message, setMessage] = useState(
    vehicle
      ? `I would like to arrange a physical viewing and test drive for the ${vehicle.year} ${vehicle.make} ${vehicle.model} at your Kiambu Road showroom.`
      : "I have an inquiry regarding a vehicle from your showroom."
  );
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#121620] border border-[#273244] rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#222b3a] bg-[#151a26]">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#C89D5C]">
              {defaultType === "viewing"
                ? "Test Drive & Viewing Request"
                : defaultType === "financing"
                ? "Asset Financing Application"
                : "Vehicle Enquiry"}
            </span>
            <h3 className="text-lg font-bold text-white mt-0.5">
              {vehicle ? `${vehicle.year} ${vehicle.make} ${vehicle.model}` : "Atandi Motors Showroom"}
            </h3>
            {vehicle && (
              <p className="text-xs font-mono text-neutral-400 mt-0.5">
                Asking Price: <strong className="text-white">{formatKsh(vehicle.price)}</strong> • Kiambu Road
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body or Success State */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xl font-bold text-white">Enquiry Received!</h4>
                <p className="text-sm text-neutral-300 max-w-sm mx-auto">
                  Thank you, <span className="font-semibold text-white">{name}</span>. Our sales specialist has received your request and will contact you via{" "}
                  <span className="font-semibold text-emerald-400 uppercase">{preferredMethod}</span> shortly.
                </p>
              </div>

              {vehicle && (
                <div className="pt-2">
                  <a
                    href={getVehicleWhatsAppUrl(
                      `${vehicle.make} ${vehicle.model}`,
                      vehicle.year,
                      vehicle.price
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Chat on WhatsApp Immediately
                  </a>
                </div>
              )}

              <div className="pt-3">
                <button
                  onClick={handleReset}
                  className="text-xs text-neutral-400 hover:text-white underline"
                >
                  Close this window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Your Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dennis Kariuki"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg bg-[#181e2b] border border-[#283549] text-white focus:outline-none focus:border-[#C89D5C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Phone / WhatsApp Number <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 0712 345 678"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg bg-[#181e2b] border border-[#283549] text-white focus:outline-none focus:border-[#C89D5C]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="name@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg bg-[#181e2b] border border-[#283549] text-white focus:outline-none focus:border-[#C89D5C]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Preferred Viewing Date
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3 py-2 text-sm rounded-lg bg-[#181e2b] border border-[#283549] text-neutral-200 focus:outline-none focus:border-[#C89D5C]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                  Preferred Contact Method
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPreferredMethod("whatsapp")}
                    className={`py-2 px-3 text-xs font-medium rounded-lg border flex items-center justify-center gap-1.5 transition-colors ${
                      preferredMethod === "whatsapp"
                        ? "bg-emerald-500/20 border-emerald-500 text-emerald-300"
                        : "bg-[#181e2b] border-[#283549] text-neutral-400 hover:text-white"
                    }`}
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    WhatsApp
                  </button>

                  <button
                    type="button"
                    onClick={() => setPreferredMethod("phone")}
                    className={`py-2 px-3 text-xs font-medium rounded-lg border flex items-center justify-center gap-1.5 transition-colors ${
                      preferredMethod === "phone"
                        ? "bg-[#C89D5C]/20 border-[#C89D5C] text-[#C89D5C]"
                        : "bg-[#181e2b] border-[#283549] text-neutral-400 hover:text-white"
                    }`}
                  >
                    <Phone className="w-3.5 h-3.5" />
                    Phone Call
                  </button>

                  <button
                    type="button"
                    onClick={() => setPreferredMethod("email")}
                    className={`py-2 px-3 text-xs font-medium rounded-lg border flex items-center justify-center gap-1.5 transition-colors ${
                      preferredMethod === "email"
                        ? "bg-blue-500/20 border-blue-500 text-blue-300"
                        : "bg-[#181e2b] border-[#283549] text-neutral-400 hover:text-white"
                    }`}
                  >
                    Email
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1">
                  Message / Questions
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3 py-2 text-sm rounded-lg bg-[#181e2b] border border-[#283549] text-white focus:outline-none focus:border-[#C89D5C]"
                ></textarea>
              </div>

              <div className="flex items-center gap-2 text-xs text-neutral-400 pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Your contact details are strictly confidential and will never be shared.</span>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 rounded-xl bg-[#C89D5C] hover:bg-[#ba8d4c] text-neutral-950 font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg"
                >
                  {isSubmitting ? (
                    <span>Submitting Enquiry...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Vehicle Enquiry</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
