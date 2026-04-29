import type { Text, CTA } from "./content";
import type { ImageGroup, LogoItem } from "./media";
import type { ClassicCard, SimpleHoverCard } from "./components"

export type HeroStyles = {
  background?: {
    type?: "color" | "image" | "gradient";
    value?: string;
    overlay?: string;
    overlayOpacity?: number;
  };
};

export type Hero = {
  eyebrow?: Text;
  title: Text;
  subtitle: Text;
  highlights: Text[];
  images?: ImageGroup;
  primaryCta: CTA;
  secondaryCta?: CTA;
  styles?: HeroStyles;
};

export type ServicesGrid = {
  eyebrow?: Text;
  title: Text;
  description?: Text;
  columns?: 2 | 3 | 4;
  items: ClassicCard[];
  styles?: {
    background?: string;
  };
};

export type LogoSection = {
  title: Text;
  description: Text;
  logos: LogoItem[];
  styles?: {
    background?: string;
  };
};

export type WhySection = {
  eyebrow?: Text;
  title: Text;
  description?: Text;
  cards: SimpleHoverCard[];
  styles?: {
    background?: string;
    overlayGradient?: string;
    patternColor?: string;
    patternOpacity?: number;
    glowColor?: string;
    glowOpacity?: number;
  };
}