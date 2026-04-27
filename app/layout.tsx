import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "./components//layout/navbar/Navbar";
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

  const title = company.seo?.title ?? `${company.name} | Contractor Services in ${company.city}`;
  const description =
    company.seo?.description ??
    `Reliable maintenance, renovations, networking, and fabrication services in ${company.city}, ${company.state}. Call ${company.phone}.`;

  return {
    title: {
      default: title,
      template: `%s | ${company.name}`,
    },
    description,
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: company.name,
      title,
      description,
      images: [
        {
          url: company.og?.image ?? "/companies/tso-texas/og/og-image.png",
          width: 1200,
          height: 630,
          alt: `${company.name} preview image`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [company.og?.image ?? "/companies/tso-texas/og/og-image.png"],
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
        <Navbar company={company} />
        {children}
        <Footer company={company} />
      </body>
    </html>
  );
}
