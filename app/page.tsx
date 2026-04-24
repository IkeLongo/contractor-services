import Image from "next/image";
import { headers } from "next/headers";
import { TwoColumnHeroSection } from "./components/sections/HeroSection";
import { WhyChooseUs } from "./components/sections/WhyChooseUs";
import { ServicesGrid } from "./components/sections/ServicesGrid";
import { PortfolioSection } from "./components/sections/PortfolioSection";
import { TestimonialsSection } from "./components/sections/TestimonialsSection";
import { LogoSection } from "./components/sections/LogoSection";
import { ContactSection } from "./components/sections/contact/ContactSectionHome";
import { companies, getCompanyBySlug } from "@/data/companies";

const FALLBACK_SLUG = "tso-texas";

async function getCompany() {
  const headersList = await headers();
  const slug = headersList.get("x-company-slug") ?? FALLBACK_SLUG;
  return getCompanyBySlug(slug) || getCompanyBySlug(FALLBACK_SLUG)!;
}

export default async function Home() {
  const company = await getCompany();

  return (
    <main className="font-sans text-gray-900">
      <TwoColumnHeroSection company={company} />
      <WhyChooseUs company={company} />
      <LogoSection company={company} />
      <ServicesGrid company={company} />
      <PortfolioSection company={company} />
      <TestimonialsSection company={company} />
      <ContactSection company={company} />
    </main>
  );
}
