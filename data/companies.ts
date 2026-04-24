// data/companies.ts

export type NavItem = {
  label: string;
  href: string;
  children?: {
    label: string;
    href: string;
  }[];
};

export type ServiceItem = {
  title: string;
  description: string;
  image?: string;
  bullets?: string[];
  icon?: string;
};

export type PortfolioItem = {
  title: string;
  description: string;
  image: string;
  category?: string;
  href?: string;
  icon?: string;
};

export type TestimonialItem = {
  name: string;
  role?: string;
  company?: string;
  quote: string;
};

export type CompanyTheme = {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  mutedText: string;
  border: string;
};

export type Company = {
  slug: string;
  subdomain: string;
  name: string;
  legalName?: string;
  tagline: string;
  phone: string;
  email: string;
  city: string;
  state: string;

  branding: {
    logo: string;
    navLogo: string;
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
  };

  theme: CompanyTheme;

  seo: {
    title: string;
    description: string;
  };

  navigation: NavItem[];

  hero: {
    eyebrow?: string;
    title: string;
    subtitle: string;
    primaryCta: {
      label: string;
      href: string;
    };
    secondaryCta: {
      label: string;
      href: string;
    };
    highlights: string[];
    images?: string[];
  };

  differentiators: {
    eyebrow?: string;
    title: string;
    description?: string;
    items: {
      title: string;
      description: string;
      icon?: string;
    }[];
  };

  services: {
    eyebrow?: string;
    title: string;
    description?: string;
    columns?: 2 | 3 | 4;
    items: ServiceItem[];
  };

  portfolio: {
    eyebrow?: string;
    title: string;
    description?: string;
    items: PortfolioItem[];
  };

  testimonials: {
    title: string;
    description?: string;
    items: TestimonialItem[];
  };

  about: {
    title: string;
    description: string;
    stats?: string[];
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
  };

  footer: {
    shortDescription: string;
    serviceArea: string;
  };
};

export const companies: Company[] = [
  {
    slug: "tso-texas",
    subdomain: "tso-texas",
    name: "TSO Texas",
    legalName: "TSO Texas Residential & Commercial Services, LLC",
    tagline: "Residential & Commercial Services",
    phone: "210-465-5077",
    email: "tsotservices@gmail.com",
    city: "San Antonio",
    state: "TX",

    branding: {
      logo: "/companies/tso-texas/logos/tso-texas-logo.webp",
      navLogo: "/companies/tso-texas/logos/tso-texas-hor-logo.png",
      primaryColor: "#0B1F4D",
      secondaryColor: "#C62828",
      accentColor: "#F3F4F6",
    },

    theme: {
      primary: "#0B1F4D",
      secondary: "#C62828",
      accent: "#F8FAFC",
      background: "#F8FAFC",
      surface: "#FFFFFF",
      text: "#111827",
      mutedText: "#475569",
      border: "#E2E8F0",
    },

    seo: {
      title: "TSO Texas | Residential & Commercial Services in San Antonio",
      description:
        "TSO Texas provides facility maintenance, renovations, low voltage systems, and welding & fabrication services in San Antonio, Texas.",
    },

    navigation: [
      { label: "Home", href: "#" },
      {
        label: "Services",
        href: "#services",
        children: [
          { label: "Facility Maintenance", href: "#services" },
          { label: "Renovations", href: "#services" },
          { label: "Low Voltage", href: "#services" },
          { label: "Welding & Fabrication", href: "#services" },
        ],
      },
      {
        label: "Industries",
        href: "#industries",
        children: [
          { label: "Commercial Facilities", href: "#industries" },
          { label: "Offices", href: "#industries" },
          { label: "Property Managers", href: "#industries" },
          { label: "Residential Projects", href: "#industries" },
        ],
      },
      { label: "Projects", href: "#portfolio" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],

    hero: {
      eyebrow: "Fast Response • Reliable Service • Quality Workmanship",
      title: "One Team for Repairs, Renovations, and Low Voltage Work",
      subtitle:
        "TSO Texas helps residential and commercial clients solve more with one reliable vendor for maintenance, improvements, networking, and custom fabrication.",
      primaryCta: {
        label: "Request a Quote",
        href: "#contact",
      },
      secondaryCta: {
        label: "View Services",
        href: "#services",
      },
      highlights: [
        "Multi-Trade Single Vendor",
        "25+ Years Experience",
        "Residential & Commercial",
        "Fast-Response Service",
      ],
      images: [
        "/companies/tso-texas/hero-images/office-renovation-modern-workspace.jpeg",
        "/companies/tso-texas/hero-images/commercial-drywall-and-construction.png",
        "/companies/tso-texas/hero-images/office-remodeling-construction-workers-interior.jpg",
        "/companies/tso-texas/hero-images/cat6-cable-installation-commercial-building.webp",
        "/companies/tso-texas/hero-images/commercial-interior-build-out-construction.png",
        "/companies/tso-texas/hero-images/photo-metal-fabrication-shop-with-welding-equipment-sparks-flying.png",
      ],
    },

    differentiators: {
      eyebrow: "Why Choose TSO Texas",
      title: "Why Businesses Trust TSO Texas",
      description:
        "From repairs and renovations to networking and fabrication, TSO Texas handles multiple scopes under one reliable team.",
      items: [
        {
          title: "Multi-Trade Single Vendor",
          description:
            "Handle maintenance, renovations, networking, and fabrication through one reliable team — no vendor coordination headaches.",
          icon: "Layers",
        },
        {
          title: "25+ Years of Experience",
          description:
            "Decades of hands-on expertise in renovation, telecom, and project management ensures quality work from day one.",
          icon: "BadgeCheck",
        },
        {
          title: "In-House Welding & Fabrication",
          description:
            "Custom metal fabrication, structural supports, and equipment mounting solutions completed entirely in-house.",
          icon: "Hammer",
        },
        {
          title: "Low Voltage & Networking",
          description:
            "Structured cabling, fiber optic repair, and network infrastructure support from a certified in-house team.",
          icon: "Network",
        },
        {
          title: "Fast-Response Service",
          description:
            "Quick turnaround on repairs and urgent requests so your operations stay on schedule with minimal disruption.",
          icon: "Clock",
        },
        {
          title: "Military-Trained Professionalism",
          description:
            "Personnel with military backgrounds bring discipline, precision, and accountability to every project they execute.",
          icon: "ShieldCheck",
        },
      ],
    },

    services: {
      eyebrow: "What We Do",
      title: "Core Services",
      description:
        "Built to support both ongoing needs and one-time projects across residential and commercial properties.",
      columns: 2,
      items: [
        {
          title: "Facility Maintenance & Repairs",
          description:
            "Reliable repair and upkeep services to keep properties clean, functional, and presentable.",
          image: "/companies/tso-texas/service-cards/construction-workers-installing-drywall-in-a-new-building-photo.png",
          bullets: [
            "Drywall, patching, texture, and paint",
            "Doors, hardware, trim, and carpentry",
          ],
          icon: "wrench",
        },
        {
          title: "Renovations & Improvements",
          description:
            "Interior upgrades and multi-trade project support for offices and other spaces.",
          image: "/companies/tso-texas/service-cards/office-build-out-construction-modern-workspace-renovation.png",
          bullets: [
            "Office build-outs and upgrades",
            "Interior renovations and repairs",
            "Multi-trade project execution",
          ],
          icon: "hammer",
        },
        {
          title: "Low Voltage & Networking",
          description:
            "Structured cabling and network support for organized, functional infrastructure.",
          image: "/companies/tso-texas/service-cards/cat6-cable-installation-commercial-building-technician.png",
          bullets: [
            "Cat5e / Cat6 structured cabling",
            "Fiber optic repair & troubleshooting",
            "Rack organization and data drops",
          ],
          icon: "network",
        },
        {
          title: "Welding & Fabrication",
          description:
            "Custom fabrication and structural support solutions completed in-house.",
          image: "/companies/tso-texas/service-cards/metal-fabrication-welding-sparks-industrial-shop.webp",
          bullets: [
            "Custom metal fabrication",
            "Structural repairs and supports",
            "Equipment mounting solutions",
          ],
          icon: "shield",
        },
      ],
    },

    portfolio: {
      eyebrow: "Our Work",
      title: "Featured Projects",
      description:
        "A sample of the work TSO Texas delivers across maintenance, renovations, networking, and fabrication.",
      items: [
        {
          title: "Office Renovation & Repairs",
          description:
            "Interior updates, repairs, and finishing work for a cleaner, more functional workspace.",
          image: "/companies/tso-texas/hero-images/office-renovation-modern-workspace.jpeg",
          category: "Renovation",
          icon: "Hammer",
          href: "/case-studies/office-renovation",
        },
        {
          title: "Structured Cabling Upgrade",
          description:
            "Improved network organization with data drops, cabling, and rack cleanup across a commercial facility.",
          image: "/companies/tso-texas/hero-images/cat6-cable-installation-commercial-building.webp",
          category: "Low Voltage",
          icon: "Network",
          href: "/case-studies/structured-cabling",
        },
        {
          title: "Commercial Build-Out",
          description:
            "Multi-trade interior build-out from framing and drywall to finish work and paint.",
          image: "/companies/tso-texas/hero-images/commercial-interior-build-out-construction.png",
          category: "Renovation",
          icon: "Layers",
          href: "/case-studies/commercial-build-out",
        },
        {
          title: "Custom Fabrication Installation",
          description:
            "Fabricated mounting and support solutions designed and installed entirely in-house.",
          image: "/companies/tso-texas/hero-images/photo-metal-fabrication-shop-with-welding-equipment-sparks-flying.png",
          category: "Fabrication",
          icon: "Wrench",
          href: "/case-studies/custom-fabrication",
        },
      ],
    },

    testimonials: {
      title: "What Clients Value",
      description:
        "Demo testimonial content for presentation purposes until final client reviews are collected.",
      items: [
        {
          name: "Commercial Client",
          role: "Facility Manager",
          quote:
            "TSO Texas handled multiple scopes without us having to coordinate several different vendors.",
        },
        {
          name: "Property Representative",
          role: "Operations Lead",
          quote:
            "Fast response, professional communication, and quality work from start to finish.",
        },
        {
          name: "Project Contact",
          role: "Business Owner",
          quote:
            "Their team brought practical solutions and helped us keep the project moving.",
        },
      ],
    },

    about: {
      title: "Built on Experience",
      description:
        "TSO Texas brings together deep hands-on experience in renovations, telecom, networking, and fabrication. Their team includes low voltage expertise, certified welding experience, and a strong emphasis on reliable execution.",
      stats: [
        "25+ years renovation, telecom & project management experience",
        "12+ years low voltage experience",
        "Certified welding experience",
      ],
    },

    finalCta: {
      title: "Need a team that can handle more in one call?",
      description:
        "From repairs and renovations to networking and fabrication, TSO Texas is built to support a wide range of residential and commercial service needs.",
      primaryCta: {
        label: "Request a Quote",
        href: "#contact",
      },
      secondaryCta: {
        label: "Call Now",
        href: "tel:2104655077",
      },
    },

    footer: {
      shortDescription:
        "Multi-trade residential and commercial services for repairs, renovations, networking, and fabrication.",
      serviceArea: "San Antonio, TX",
    },
  },
];

export const defaultCompany = companies[0];

export function getCompanyBySubdomain(subdomain: string) {
  return companies.find((company) => company.subdomain === subdomain);
}

export function getCompanyBySlug(slug: string) {
  return companies.find((company) => company.slug === slug);
}