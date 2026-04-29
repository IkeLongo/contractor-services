import type { Theme } from "./design";
import type { HomePage } from "./pages";
import type { Layout } from "./layout";

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
};