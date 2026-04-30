export type ServiceItem = {
  title: string;
  slug?: string;
  description: string;
  image?: string;
  bullets?: string[];
  icon?: string;

  eyebrow?: string;
  heroTitle?: string;
  heroDescription?: string;

  overview?: {
    title: string;
    description: string;
    longDescription?: string;
    image?: string;
  };

  includes?: {
    title?: string;
    description?: string;
    items: (string | { title: string; icon?: string; color?: string })[];
  };

  process?: {
    title?: string;
    description?: string;
    steps: {
      title: string;
      description: string;
    }[];
  };

  whyItMatters?: {
    title: string;
    description: string;
    longDescription?: string;
  };

  cta?: {
    title?: string;
    description?: string;
    primaryLabel?: string;
    image?: string;
    primaryHref?: string;
  };

  gallery?: {
    image: string;
    alt?: string;
    title?: string;
    description?: string;
    className?: string;
  }[];
};

export type PortfolioStyles = {
  background?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  cardBackground?: string;
  cardBorder?: string;
  cardTitle?: string;
  cardDescription?: string;
  icon?: string;
  iconBackground?: string;
  categoryBackground?: string;
  categoryText?: string;
  accent?: string;
  link?: string;
  ctaBackground?: string;
};

export type SnapshotItem = {
  label: string;
  value: string;
  icon?: string;
};

export type CaseStudyCard = {
  label: string;
  title: string;
  description: string;
  icon?: string;
};

export type CaseStudyContent = {
  eyebrow?: string;
  title: string;
  description?: string;
  challenge: CaseStudyCard;
  solution: CaseStudyCard;
  result: CaseStudyCard;
  gallery?: {
    image: string;
    alt: string;
    caption?: string;
  }[];
};

export type PortfolioItem = {
  slug?: string;
  title: string;
  projectName?: string;
  description: string;
  image: string;
  category?: string;
  href?: string;
  icon?: string;
  snapshot?: SnapshotItem[];
  caseStudy?: CaseStudyContent;
  layout?: {
    colSpan?: 1 | 2 | 3;
    rowSpan?: 1 | 2 | 3;
    colStart?: 1 | 2 | 3;
    rowStart?: 1 | 2 | 3;
  };
};

export type TestimonialItem = {
  name: string;
  role?: string;
  company?: string;
  quote: string;
  rating?: number;
  image?: string;
};

export type HeroStyles = {
  overlay?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
};

// ServicesStyles has moved to lib/types/services.ts
export type { ServicesStyles } from "./services";