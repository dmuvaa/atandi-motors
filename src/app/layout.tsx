import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppFloatingButton } from "@/components/WhatsAppFloatingButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://atandimotors.co.ke"),
  title: "Atandi Motors | Quality Used Cars & Luxury Imports in Nairobi, Kenya",
  description:
    "Explore certified pre-owned vehicles, 4x4 SUVs, double cab pickups, and luxury sedans in Nairobi. 150-point inspection, guaranteed NTSA logbooks, bank asset financing, and showroom viewing on Kiambu Road.",
  keywords: [
    "Used cars Kenya",
    "Car dealers Nairobi",
    "Peugeot 308 Kenya",
    "Hyundai Tucson for sale Kenya",
    "Toyota Allion Nairobi",
    "Kiambu Road car yards",
    "Atandi Motors",
    "Duty paid cars Kenya",
  ],
  icons: {
    icon: "/atandi-mark.svg",
    shortcut: "/atandi-mark.svg",
    apple: "/atandi-mark.svg",
  },
  openGraph: {
    title: "Atandi Motors | Nairobi Vehicle Showroom",
    description:
      "Handpicked quality vehicles with verified mileage and clean logbooks in Nairobi, Kenya. View available cars and chat directly on WhatsApp.",
    type: "website",
    locale: "en_KE",
    siteName: "Atandi Motors",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-[#111815] font-sans selection:bg-[#a5f3e0] selection:text-[#111815]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
