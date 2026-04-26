import { defaultCompany } from "@/data/companies";
import { AboutHero } from "@/app/components/about/about-hero";
import { AboutStorySection } from "@/app/components/about/about-story-section";
import { AboutProcessSection } from "@/app/components/about/about-process-section";

export default function AboutPage() {
  const company = defaultCompany;

  return (
    <main>
      <AboutHero company={company} />
      <AboutStorySection company={company} />
      <AboutProcessSection company={company} />
    </main>
  );
}
