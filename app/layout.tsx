import type { Metadata, Viewport } from "next";
import { CustomCursor } from "@/components/CustomCursor";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "BELVO - Engineering Growth. Designing Dominance.",
    template: "%s | BELVO"
  },
  description:
    "BELVO builds elite digital systems, campaigns, AI workflows, and premium brand experiences for ambitious companies.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  openGraph: {
    title: "BELVO - Engineering Growth. Designing Dominance.",
    description: "Premium growth engineering, AI automation, brand, media, and technology systems.",
    images: ["/assets/belvo-logo.jpeg"],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "BELVO",
    description: "Engineering Growth. Designing Dominance."
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "BELVO",
    slogan: "Engineering Growth. Designing Dominance.",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
    logo: "/assets/belvo-logo.jpeg",
    sameAs: []
  };

  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <SmoothScroll>
          <CustomCursor />
          <Navigation />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
