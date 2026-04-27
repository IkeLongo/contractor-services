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
import { getCompany } from "@/lib/get-company";

const FALLBACK_SLUG = "tso-texas";

export default async function Home() {
  const company = await getCompany();

  return (
    <main className="font-sans text-gray-900">
      <TwoColumnHeroSection company={company} />
      <ServicesGrid company={company} />
      <LogoSection company={company} />
      <WhyChooseUs company={company} />
      <section className="bg-[#F3F6FA]">
        <PortfolioSection company={company} />
        <TestimonialsSection company={company} />
      </section>
      <ContactSection company={company} />
    </main>
  );
}
