import type { Hero, ServicesGrid, LogoSection, WhySection } from "./sections";

export type HomePage = {
  hero: Hero;
  services: ServicesGrid;
  logoSection?: LogoSection;
  whySection?: WhySection;
};