import type { ServiceItem } from "./old-types";

export type ServicesHeroCta = {
  label: string;
  href: string;
};

export type ServicesHeroForm = {
  title?: string;
  description?: string;
  submitLabel?: string;
  defaultServicePlaceholder?: string;
};

export type ServicesHero = {
  eyebrow?: string;
  title: string;
  description?: string;
  backgroundImage?: string;
  primaryCta?: ServicesHeroCta;
  secondaryCta?: ServicesHeroCta;
  form?: ServicesHeroForm;
};

export type ServicesStyles = {
  background?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryCtaButtonBg?: string;
  primaryCtaButtonText?: string;
  secondaryCtaButtonText?: string;
  cardBackground?: string;
  cardBorder?: string;
  cardTitle?: string;
  cardDescription?: string;
  accent?: string;
  imageOverlay?: string;
  gallery?: {
    cardBackground?: string;
    cardBorder?: string;
    titleColor?: string;
    descriptionColor?: string;
    overlay?: string;
  };
  narrative?: {
    background?: string;
    eyebrow?: string;
    title?: string;
    text?: string;
    accent?: string;
    scopeCardBg?: string;
    scopeCardBorder?: string;
    scopeCardColors?: string[];
    scopeCardText?: string;
    scopeCardIcon?: string;
  };
};

export type ServicesPage = {
  hero?: ServicesHero;
  columns?: 2 | 3 | 4;
  styles?: ServicesStyles;
  items: ServiceItem[];
};
