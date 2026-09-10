import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Privacy Policy | Atandi Motors Kenya",
  description: "Privacy policy and data handling practices for Atandi Motors Limited.",
};

export default function PrivacyPage() {
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
            <Shield className="w-4 h-4" />
            <span>Legal Documentation</span>
          </div>
          <h1 className="text-3xl font-extrabold text-white">Privacy Policy</h1>
          <p className="text-xs text-neutral-400 font-mono">
            Last Updated: {new Date().toLocaleDateString("en-KE", { month: "long", year: "numeric" })}
          </p>
        </div>

        <div className="space-y-6 text-sm text-neutral-300 leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">1. Introduction</h2>
            <p>
              Atandi Motors Limited (&quot;Atandi Motors&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is dedicated to respecting and protecting the privacy of individuals who interact with our website, visit our showroom, or submit inquiries regarding our vehicle inventory.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">2. Information We Collect</h2>
            <p>When you use our website to inquire about vehicles or request car sourcing, we may collect:</p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-neutral-400">
              <li>Contact details such as your name, telephone number, and email address.</li>
              <li>Vehicle preferences, budget constraints, and financing requirements.</li>
              <li>Communications exchanged via our website enquiry forms, email, or WhatsApp.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">3. How We Use Your Information</h2>
            <p>
              Your personal information is used exclusively to facilitate your vehicle purchase, arrange showroom viewings and test drives, calculate asset financing estimates with partner banks, or update you regarding sourced vehicles from Japanese or UK auctions.
            </p>
            <p className="text-xs text-emerald-400">
              We never sell, rent, or trade your personal information to external marketers or third-party lead brokers.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold text-white">4. Contact Us</h2>
            <p>
              If you have any questions regarding your data, reach out to our compliance officer at:{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-[#C89D5C] hover:underline">
                {siteConfig.email}
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
