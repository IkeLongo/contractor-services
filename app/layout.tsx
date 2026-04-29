import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NavbarRenderer } from "./components/layout/navbar/NavbarRenderer";
import { Footer } from "@/app/components/layout/footer/Footer";
import { getCompany } from "@/lib/get-company";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const company = await getCompany();

  const title = company.seo?.title ?? `${company.general.name} | Contractor Services in ${company.general.city}`;
  const description =
    company.seo?.description ??
    `Reliable maintenance, renovations, networking, and fabrication services in ${company.general.city}, ${company.general.state}. Call ${company.general.phone}.`;

  return {
    title: {
      default: title,
      template: `%s | ${company.general.name}`,
    },
    description,
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: company.general.name,
      title,
      description,
      images: [
        {
          url: company.seo.og?.image ?? "/companies/tso-texas/og/og-image.png",
          width: 1200,
          height: 630,
          alt: `${company.general.name} preview image`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [company.seo.og?.image ?? "/companies/tso-texas/og/og-image.png"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const company = await getCompany();
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NavbarRenderer company={company} />
        {children}
        {/* <Footer company={company} /> */}
      </body>
    </html>
  );
}
