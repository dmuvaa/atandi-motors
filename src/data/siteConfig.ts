export const siteConfig = {
  name: "Atandi Motors",
  shortName: "Atandi",
  legalName: "Atandi Motors Limited",
  tagline: "Quality Selected Pre-Owned & Import Vehicles in Kenya",
  description:
    "Premier automotive dealership in Nairobi, Kenya. Discover inspected, duty-paid pre-owned luxury SUVs, pickups, sedans, and custom imports with guaranteed logbooks and seamless bank asset financing.",
  url: "https://atandimotors.co.ke",
  phone: "+254 705 557 826",
  phoneDisplay: "+254 705 557 826",
  phoneSecondary: "+254 705 557 826",
  whatsappNumber: "254705557826",
  email: "sales@atandimotors.co.ke",
  location: {
    name: "Atandi Motors Showroom",
    address: "Kiambu Road, Opposite Ridgeways Mall",
    city: "Nairobi",
    country: "Kenya",
    postalCode: "00100",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.67914841123!2d36.837887550000004!3d-1.2160756!2m3!1f0!2f0!3f0!3m2!1i1024!2f768!4f13.1!3m3!1m2!1s0x182f1618a5e8e7c1%3A0x6a053c9e6d97c554!2sKiambu%20Rd%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske",
  },
  openingHours: [
    { days: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
    { days: "Saturday", hours: "8:30 AM - 5:30 PM" },
    { days: "Sunday & Public Holidays", hours: "11:00 AM - 4:00 PM (By Appointment)" },
  ],
  socials: {
    instagram: "https://instagram.com/atandimotors",
    facebook: "https://facebook.com/atandimotors",
    tiktok: "https://tiktok.com/@atandimotors",
    youtube: "https://youtube.com/@atandimotors",
  },
  financingPartners: [
    "NCBA Bank",
    "Stanbic Bank Kenya",
    "Co-operative Bank of Kenya",
    "Absa Bank Kenya",
    "I&M Bank",
  ],
  stats: [
    { value: "500+", label: "Vehicles Handed Over" },
    { value: "150-Point", label: "Pre-Sale Mechanical Inspection" },
    { value: "100%", label: "Clean NTSA Logbook Guarantee" },
    { value: "4.9 / 5", label: "Client Satisfaction Rating" },
  ],
};

export function formatKsh(amount: number): string {
  return new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency: "KES",
    maximumFractionDigits: 0,
  })
    .format(amount)
    .replace("KES", "KSh");
}

export function formatKm(km: number): string {
  return `${new Intl.NumberFormat("en-KE").format(km)} km`;
}

export function getWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export function getVehicleWhatsAppUrl(vehicleName: string, year: number, price: number): string {
  const formattedPrice = formatKsh(price);
  const msg = `Hello Atandi Motors, I saw the ${year} ${vehicleName} (${formattedPrice}) on your website. Is it still available for viewing at the Kiambu Road showroom?`;
  return getWhatsAppUrl(msg);
}
