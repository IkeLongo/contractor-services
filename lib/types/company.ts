import type { Theme } from "./design";
import type { HomePage } from "./pages";
import type { Layout } from "./layout";
import { PortfolioItem, PortfolioStyles, ServiceItem, ServicesStyles, TestimonialItem } from "./old-types";

export type General = {
  slug: string;
  subdomain: string;
  name: string;
  legalName?: string;
  tagline: string;
  phone: string;
  email: string;
  city: string;
  state: string;
  googlePlaceId?: string;
};

export type Branding = {
  logo: string;
  navLogo: string;
  theme: Theme;
};

export type OgConfig = {
  image?: string;
  tintColor?: string;
  tintOpacity?: number;
  gradientDirection?: string;
  logo?: string;
  title?: string;
  description?: string;
};

export type SEO = {
  title: string;
  description: string;
  og: OgConfig;
};

export type Company = {
  general: General;
  branding: Branding;
  seo: SEO;
  layout: Layout;
  pages: {
    home: HomePage;
  };
  services: {
    eyebrow?: string;
    title: string;
    description?: string;
    styles?: ServicesStyles;
    columns?: 2 | 3 | 4;
    items: ServiceItem[];
  };
  portfolio: {
    eyebrow?: string;
    title: string;
    description?: string;
    styles?: PortfolioStyles;
    items: PortfolioItem[];
  };
  testimonials: {
    eyebrow?: string;
    title: string;
    description?: string;
    styles?: {
      background?: string;
      eyebrow?: string;
      title?: string;
      description?: string;
      cardBackground?: string;
      cardBorder?: string;
      quote?: string;
      name?: string;
      role?: string;
      star?: string;
      mutedStar?: string;
      quoteIcon?: string;
      ctaBackground?: string;
      ctaText?: string;
      modalBackground?: string;
      modalBorder?: string;
    };
    items?: TestimonialItem[];
  };
  about: {
    title: string;
    image: string;
    imageAlt?: string;
    storyTitle?: string;
    story?: string[];
    highlights?: {
      title: string;
      description: string;
    }[];
    quote?: {
      text: string;
      author?: string;
      avatar?: string; 
    };
    images?: {
      main: string;
      secondary: string[];
      tertiary: string[];
    };
    styles?: {
      background?: string;
      cardBackground?: string;
      border?: string;
      title?: string;
      gradientFrom?: string;
      gradientTo?: string;
      text?: string;
      mutedText?: string;
      gradientOverlay?: string;
    };
    process?: {
      eyebrow?: string;
      title: string;
      description: string;
      steps: {
        step: string;
        title: string;
        description: string;
        tag?: string;
        icon?: string;
      }[];
      styles?: {
        background?: string;
        eyebrow?: string;
        title?: string;
        description?: string;
        cardBackground?: string;
        cardBorder?: string;
        cardText?: string;
        cardMutedText?: string;
        accent?: string;
      };
    };
    stats?: {
      items: {
        value: number;
        label: string;
        suffix?: string;
        prefix?: string;
      }[];
      styles?: {
        background?: string;
        containerBg?: string;
        border?: string;
        numberColor?: string;
        labelColor?: string;
      };
    };
    team?: {
      members: {
        name: string;
        role: string;
        avatar: string;
      }[];
      styles?: {
        background?: string;
        nameColor?: string;
        roleColor?: string;
      };
    };
    differentiators?: {
      title?: string;
      description?: string;   
      items: {
        title: string;
        description: string;
        icon?: string;
      }[];
      styles?: {
        background?: string;
        sectionTitle?: string;
        sectionDescription?: string;
        icon?: string;
        title?: string;
        description?: string;
        border?: string;
        hoverGradientFrom?: string;
        accent?: string;
        spacing?: {
          titleMarginBottom?: string;
          descriptionMarginTop?: string;
          descriptionLineHeight?: string;
        };
      };
    };
  };
  finalCta: {
    title: string;
    description: string;
    primaryCta: {
      label: string;
      href: string;
    };
    secondaryCta?: {
      label: string;
      href: string;
    };
    image?: string;
    imageAlt?: string;
    styles?: {
      background?: string;
      title?: string;
      description?: string;
      buttonBg?: string;
      buttonText?: string;
    };
  };
  contact: {
    backgroundImage: string;
    title?: string;
    description?: string;
    testimonial: {
      quote: string;
      name: string;
      title: string;
      avatar?: string;
    };
    form: {
      title: string;
      description: string;
      email: string;
      services: {
        label: string;
        value: string;
      }[];
    };
    styles?: {
      home?: {
        background?: string;
        sectionBg?: string;
        formBg?: string;
        text?: string;
        mutedText?: string;
        buttonBg?: string;
        buttonText?: string;
        overlayGradient?: string;
      }
      contact?: {
        background?: string;
        sectionBg?: string;
        formBg?: string;
        text?: string;
        mutedText?: string;
        buttonBg?: string;
        buttonText?: string;
        overlayGradient?: string;
      }
    };
  };
  faq?: {
    eyebrow?: string;
    title: string;
    description?: string;
    items: {
      question: string;
      answer: string;
    }[];
    styles?: {
      background?: string;
      eyebrow?: string;
      title?: string;
      description?: string;
      itemBackground?: string;
      itemBorder?: string;
      question?: string;
      answer?: string;
      icon?: string;
      accent?: string;
    };
  };
  footer: {
    shortDescription: string;
    serviceArea: string;
    socials?: {
      platform: "facebook" | "instagram" | "linkedin" | "twitter" | "youtube";
      url: string;
    }[];
  };
};