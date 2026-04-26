import Image from "next/image";
import { headers } from "next/headers";
import { TwoColumnHeroSection } from "./components/home/HeroSection";
import { WhyChooseUs } from "./components/home/WhyChooseUs";
import { ServicesGrid } from "./components/home/ServicesGrid";
import { PortfolioSection } from "./components/home/PortfolioSection";
import { TestimonialsSection } from "./components/home/TestimonialsSection";
import { LogoSection } from "./components/home/LogoSection";
import { ContactSection } from "./components/home/ContactSectionHome";
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
      <ServicesGrid company={company} />
      <LogoSection company={company} />
      <WhyChooseUs company={company} />
      <section className="bg-gradient-to-b from-[#F8FAFC] via-[#EEF4FF] to-[#E7EEF8]">
        <PortfolioSection company={company} />
        <TestimonialsSection company={company} />
      </section>
      <ContactSection company={company} />
    </main>
  );
}
