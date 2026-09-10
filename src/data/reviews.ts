export interface CustomerReview {
  id: string;
  customerName: string;
  location: string;
  rating: number;
  review: string;
  vehiclePurchased: string;
  purchaseDate: string;
  isFeatured?: boolean;
}

export const customerReviews: CustomerReview[] = [
  {
    id: "rev-1",
    customerName: "Eng. Brian Mutua",
    location: "Kilimani, Nairobi",
    rating: 5,
    review:
      "I bought a Peugeot 308 from Atandi Motors after looking around Kiambu Road for weeks. What set them apart was the clear walkaround, simple answers, and the time they gave me to inspect the car properly. Truly professional team.",
    vehiclePurchased: "2018 Peugeot 308",
    purchaseDate: "August 2026",
    isFeatured: true,
  },
  {
    id: "rev-2",
    customerName: "Dr. Catherine Wambui",
    location: "Runda, Nairobi",
    rating: 5,
    review:
      "My husband and I needed a comfortable SUV for family trips to Nyeri and Meru. Atandi Motors handled everything, including the NTSA TIMS logbook transfer. Zero drama, no hidden surprises. Would 100% recommend them.",
    vehiclePurchased: "2019 Hyundai Tucson",
    purchaseDate: "July 2026",
    isFeatured: true,
  },
  {
    id: "rev-3",
    customerName: "David Ochieng",
    location: "Kisumu / Milimani",
    rating: 5,
    review:
      "I was hesitant buying a vehicle remotely while based in Kisumu. They did a detailed live video walkaround on WhatsApp showing every body panel and the full diagnostic scan. The Peugeot 2008 was delivered on a flatbed in pristine condition.",
    vehiclePurchased: "2019 Peugeot 2008",
    purchaseDate: "September 2026",
    isFeatured: true,
  },
  {
    id: "rev-4",
    customerName: "Faith Kiprop",
    location: "Eldoret",
    rating: 5,
    review:
      "The asset financing team connected me directly with NCBA Bank. The approval took just 4 business days. The car condition matched every photo on the website. Fair pricing and transparent customer care.",
    vehiclePurchased: "2017 Peugeot 208 GTi",
    purchaseDate: "June 2026",
    isFeatured: false,
  },
  {
    id: "rev-5",
    customerName: "Samson K. Mwangi",
    location: "Nakuru",
    rating: 5,
    review:
      "Purchased the Toyota Allion for daily work and family travel. The car was in excellent condition, exactly as shown, and the team made the handover painless. Atandi Motors sets a high bar for Kenyan car yards.",
    vehiclePurchased: "2017 Toyota Allion",
    purchaseDate: "May 2026",
    isFeatured: false,
  },
];
