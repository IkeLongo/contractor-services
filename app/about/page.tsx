import { defaultCompany } from "@/data/companies";
import { AboutHero } from "@/app/components/about/about-hero";

export default function AboutPage() {
  const company = defaultCompany;

  return (
    <main>
      <AboutHero company={company} />
    </main>
  );
}
