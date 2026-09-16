import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "MUHAS Review",
  description:
    "The magazine of Muhimbili University of Health and Allied Sciences. Issue 01, September 2026. Elimu · Tiba · Utafiti.",
  icons: { icon: "/assets/logo-muhas.png" },
  openGraph: {
    title: "MUHAS Review — Issue 01",
    description:
      "Tanzania's premier in health training, research and consultancy services. Vision, leadership, culture and work in the field.",
    images: ["/assets/cover-students.jpg"],
    type: "article",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbf8f3" },
    { media: "(prefers-color-scheme: dark)", color: "#0e1419" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="text-[clamp(1rem,1.02rem,1.1rem)] antialiased">{children}</body>
    </html>
  );
}
