import { Newsreader, Albert_Sans } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AosProvider from "@/components/ui/AosProvider";
import GoToTop from "@/components/ui/GoToTop";
import { site } from "@/lib/site";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-newsreader",
});

const albert = Albert_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-albert",
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Breathing, Postures, Rejuvenation`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "yoga",
    "pranayama",
    "breathing techniques",
    "meditation",
    "wellness workshops",
    "Dehradun",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Breathing, Postures, Rejuvenation`,
    description: site.description,
    images: [{ url: "/images/hero/hero-namaste.jpg", width: 1184, height: 864 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Breathing, Postures, Rejuvenation`,
    description: site.description,
    images: ["/images/hero/hero-namaste.jpg"],
  },
  icons: {
    apple: "/apple-icon.png",
  },
};

export const viewport = {
  themeColor: "#4b6355",
  width: "device-width",
  initialScale: 1,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: site.name,
  description: site.description,
  url: site.url,
  email: site.email,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.locality,
    addressRegion: site.region,
    addressCountry: site.country,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${newsreader.variable} ${albert.variable}`}>
      <body>
        <a className="yc-skip-link" href="#main">
          Skip to content
        </a>
        <AosProvider />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <GoToTop />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
