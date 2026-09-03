import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.spiritfountainglobalchurch.com"),

  title: {
    default: "Spirit Fountain Global Church | Pretoria",
    template: "%s | Spirit Fountain Global Church",
  },

  description:
    "Spirit Fountain Global Church is a Spirit-filled church in Pretoria, Gauteng, committed to helping people grow in faith, purpose and kingdom impact.",

  keywords: [
    "Spirit Fountain Global Church",
    "church in Pretoria",
    "church in Hatfield",
    "Pretoria church",
    "Gauteng church",
    "Christian church Pretoria",
    "Spirit-filled church Pretoria",
  ],

  openGraph: {
    title: "Spirit Fountain Global Church | Pretoria",
    description:
      "A Spirit-filled church community in Pretoria, Gauteng.",
    url: "https://www.spiritfountainglobalchurch.com",
    siteName: "Spirit Fountain Global Church",
    locale: "en_ZA",
    type: "website",
  },

  alternates: {
    canonical: "https://www.spiritfountainglobalchurch.com",
  },
};