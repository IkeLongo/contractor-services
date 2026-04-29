
import { AboutHero } from "@/app/components/about/AboutHero";
import { AboutStorySection } from "@/app/components/about/AboutStorySection";
import { AboutProcessSection } from "@/app/components/about/AboutProcessSection";
import { AboutStatsSection } from "../components/about/AboutStatsSection";
import { TeamSectionWithSmallAvatars } from "../components/about/TeamSectionSmallAvitars";
import { AboutDifferentiators } from "../components/about/AboutDifferentiators";
import { AboutCtaSection } from "../components/about/AboutContactCta";
import { getCompany } from "@/lib/get-company";

export default async function AboutPage() {
  const company = await getCompany();

  return (
    <main>
      <AboutHero company={company} />
      <TeamSectionWithSmallAvatars company={company} />
      <AboutStorySection company={company} />
      <AboutStatsSection company={company} />
      <AboutProcessSection company={company} />
      <AboutDifferentiators company={company} />
      <AboutCtaSection company={company} />
    </main>
  );
}
