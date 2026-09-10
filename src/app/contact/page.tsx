"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  MessageSquare,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Shield,
  Navigation,
} from "lucide-react";
import { siteConfig, getWhatsAppUrl } from "@/data/siteConfig";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("Showroom Viewing");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 600);
  };

  return (
    <div className="site-page min-h-screen bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C89D5C]">
            <MapPin className="w-4 h-4" />
            <span>Nairobi Showroom</span>
            <span className="text-neutral-500">•</span>
            <span>Kiambu Road</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Contact Atandi Motors
          </h1>
          <p className="text-base text-neutral-300 leading-relaxed">
            Visit our physical car yard on Kiambu Road or reach out via WhatsApp and phone for immediate vehicle inquiries, test drive bookings, and trade-in appraisals.
          </p>
        </div>

        {/* Quick Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Card 1: WhatsApp */}
          <a
            href={getWhatsAppUrl("Hello Atandi Motors, I would like to make an enquiry.")}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-[#131720] border border-[#232b3b] hover:border-emerald-500/50 flex flex-col justify-between transition-all group"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center mb-4">
                <MessageSquare className="w-5 h-5" />
              </div>
              <span className="text-xs uppercase tracking-wider font-semibold text-emerald-400">
                Instant Chat
              </span>
              <h3 className="text-base font-bold text-white mt-1">WhatsApp Desk</h3>
              <p className="text-xs text-neutral-400 mt-1">+{siteConfig.whatsappNumber}</p>
            </div>
            <span className="text-xs font-semibold text-emerald-400 mt-4 group-hover:underline flex items-center gap-1">
              Start WhatsApp Chat →
            </span>
          </a>

          {/* Card 2: Phone */}
          <a
            href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
            className="p-6 rounded-2xl bg-[#131720] border border-[#232b3b] hover:border-[#C89D5C]/50 flex flex-col justify-between transition-all group"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#1e2533] text-[#C89D5C] flex items-center justify-center mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-xs uppercase tracking-wider font-semibold text-[#C89D5C]">
                Direct Hotline
              </span>
              <h3 className="text-base font-bold text-white mt-1">Call Showroom</h3>
              <p className="text-xs text-neutral-400 mt-1">{siteConfig.phoneDisplay}</p>
            </div>
            <span className="text-xs font-semibold text-[#C89D5C] mt-4 group-hover:underline flex items-center gap-1">
              Call Now →
            </span>
          </a>

          {/* Card 3: Location */}
          <div className="p-6 rounded-2xl bg-[#131720] border border-[#232b3b] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#1e2533] text-[#C89D5C] flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-xs uppercase tracking-wider font-semibold text-neutral-400">
                Physical Yard
              </span>
              <h3 className="text-base font-bold text-white mt-1">Kiambu Road</h3>
              <p className="text-xs text-neutral-400 mt-1">Opposite Ridgeways Mall, Nairobi</p>
            </div>
            <span className="text-xs text-neutral-500 mt-4">Safe customer parking available</span>
          </div>

          {/* Card 4: Hours */}
          <div className="p-6 rounded-2xl bg-[#131720] border border-[#232b3b] flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#1e2533] text-[#C89D5C] flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <span className="text-xs uppercase tracking-wider font-semibold text-neutral-400">
                Showroom Hours
              </span>
              <h3 className="text-base font-bold text-white mt-1">Mon - Sat</h3>
              <p className="text-xs text-neutral-400 mt-1">8:00 AM – 6:00 PM</p>
            </div>
            <span className="text-xs text-neutral-500 mt-4">Sunday by appointment</span>
          </div>
        </div>

        {/* Contact Form and Showroom Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form */}
          <div className="lg:col-span-7 bg-[#131720] border border-[#242c3d] p-6 sm:p-8 rounded-3xl shadow-xl">
            <div className="pb-6 border-b border-[#212938] mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C89D5C]">
                Send a Message
              </span>
              <h2 className="text-2xl font-bold text-white mt-1">
                How Can Atandi Motors Help You?
              </h2>
            </div>

            {isSuccess ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Dispatched!</h3>
                <p className="text-sm text-neutral-300 max-w-md mx-auto">
                  Thank you, <span className="text-white font-semibold">{name}</span>. Your inquiry has been routed to our showroom managers. We will reach out promptly.
                </p>

                <div className="pt-4">
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="text-xs text-[#C89D5C] hover:underline"
                  >
                    Send another inquiry
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
                      placeholder="e.g. Kelvin Kariuki"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-[#181f2b] border border-[#283549] text-white focus:outline-none focus:border-[#C89D5C]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">
                      Phone Number / WhatsApp <span className="text-red-400">*</span>
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="name@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-[#181f2b] border border-[#283549] text-white focus:outline-none focus:border-[#C89D5C]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">
                      Nature of Inquiry
                    </label>
                    <select
                      value={interest}
                      onChange={(e) => setInterest(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-[#181f2b] border border-[#283549] text-white focus:outline-none focus:border-[#C89D5C]"
                    >
                      <option value="Showroom Viewing">Book Showroom Test Drive</option>
                      <option value="Vehicle Purchase">Vehicle Purchase & Pricing</option>
                      <option value="Trade-In">Trade-In My Current Car</option>
                      <option value="Asset Financing">Bank Asset Financing</option>
                      <option value="Japan Sourcing">Japan / UK Import Sourcing</option>
                      <option value="General">General Question</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Your Message / Car of Interest <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us what you're looking for or which car in our inventory you want to view..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-[#181f2b] border border-[#283549] text-white focus:outline-none focus:border-[#C89D5C]"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-[#C89D5C] hover:bg-[#ba8d4c] text-neutral-950 font-bold text-sm transition-all shadow-lg flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>Submitting...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message to Atandi Motors</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Showroom Map & Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-[#131720] border border-[#242c3d] space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#212938]">
                <div className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-[#C89D5C]" />
                  <h3 className="text-sm font-bold text-white">Kiambu Road Location</h3>
                </div>
                <span className="text-xs text-neutral-400">Nairobi</span>
              </div>

              {/* Embedded Google Maps iFrame */}
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-[#263144]">
                <iframe
                  src={siteConfig.location.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Atandi Motors Location"
                ></iframe>
              </div>

              <div className="space-y-2 text-xs text-neutral-300 pt-2">
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#C89D5C] shrink-0 mt-0.5" />
                  <span>
                    <strong>Address:</strong> {siteConfig.location.address}, Nairobi, Kenya (Opposite Ridgeways Mall entrance)
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#C89D5C] shrink-0" />
                  <span>
                    <strong>Email:</strong> {siteConfig.email}
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#C89D5C] shrink-0" />
                  <span>
                    <strong>Hotline:</strong> {siteConfig.phoneDisplay}
                  </span>
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent("Kiambu Road Nairobi Atandi Motors")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#19202c] hover:bg-[#232c3d] text-white border border-[#2b3749] text-xs font-semibold transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#C89D5C]" />
                  <span>Get Driving Directions on Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
