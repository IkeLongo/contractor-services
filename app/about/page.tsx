import { defaultCompany } from "@/data/companies";
import { AboutHero } from "@/app/components/about/about-hero";
import { AboutStorySection } from "@/app/components/about/about-story-section";

export default function AboutPage() {
  const company = defaultCompany;

  return (
    <main>
      <AboutHero company={company} />
      <AboutStorySection company={company} />
    </main>
  );
}
