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
  bullets: string[];
  icon?: string;
};

export type PortfolioItem = {
  title: string;
  description: string;
  image: string;
  category?: string;
};

export type TestimonialItem = {
  name: string;
  role?: string;
  company?: string;
  quote: string;
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
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
  };

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
    backgroundImage?: string;
  };

  differentiators: {
    title: string;
    description?: string;
    items: string[];
  };

  services: {
    title: string;
    description?: string;
    items: ServiceItem[];
  };

  portfolio: {
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
      logo: "/companies/tso-texas/tso-texas-logo.webp",
      primaryColor: "#0B1F4D",
      secondaryColor: "#C62828",
      accentColor: "#F3F4F6",
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
      title: "One Team for Repairs, Renovations, Low Voltage, and Fabrication",
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
      backgroundImage: "/images/tso-hero.jpg",
    },

    differentiators: {
      title: "Why Businesses Choose TSO Texas",
      description:
        "A dependable partner for multiple scopes of work without the hassle of coordinating multiple vendors.",
      items: [
        "Multi-trade single vendor solution",
        "25+ years of renovation, telecom, and project management experience",
        "In-house welding & fabrication",
        "Low voltage & networking capability",
        "Fast-response service",
        "Military-trained personnel",
        "Clean, professional execution",
      ],
    },

    services: {
      title: "Core Services",
      description:
        "Built to support both ongoing needs and one-time projects across residential and commercial properties.",
      items: [
        {
          title: "Facility Maintenance & Repairs",
          description:
            "Reliable repair and upkeep services to keep properties clean, functional, and presentable.",
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
      title: "Featured Work",
      description:
        "Example project categories that show the range of work TSO Texas can support.",
      items: [
        {
          title: "Office Renovation & Repairs",
          description:
            "Interior updates, repairs, and finishing work for a cleaner, more functional workspace.",
          image: "/images/portfolio-office-renovation.jpg",
          category: "Renovation",
        },
        {
          title: "Structured Cabling Upgrade",
          description:
            "Improved network organization with data drops, cabling, and rack cleanup.",
          image: "/images/portfolio-cabling.jpg",
          category: "Low Voltage",
        },
        {
          title: "Custom Fabrication Installation",
          description:
            "Fabricated mounting and support solutions tailored to site needs.",
          image: "/images/portfolio-fabrication.jpg",
          category: "Fabrication",
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