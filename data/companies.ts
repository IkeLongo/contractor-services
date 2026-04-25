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
  primaryCtaBg?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
  highlightBg?: string;
  highlightBorder?: string;
  highlightText?: string;
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

export type DifferentiatorStyles = {
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
  hoverBorder?: string;
};

export type ServicesStyles = {
  background?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  cardBackground?: string;
  cardBorder?: string;
  cardTitle?: string;
  cardDescription?: string;
  accent?: string;
  imageOverlay?: string;
};

export type LogoSectionStyles = {
  background?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
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
  googlePlaceId?: string;
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
    styles?: HeroStyles;
  };
  differentiators: {
    eyebrow?: string;
    title: string;
    description?: string;
    styles?: DifferentiatorStyles;
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
    };
    items?: TestimonialItem[];
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
  contact: {
    backgroundImage: string;
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
      sectionBg?: string;
      formBg?: string;
      text?: string;
      mutedText?: string;
      buttonBg?: string;
      buttonText?: string;
      overlayGradient?: string;
    };
  };
  logoSection?: {
    eyebrow?: string;
    title: string;
    description?: string;
    styles?: LogoSectionStyles;
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
      { label: "Reviews", href: "#testimonials" },
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
        label: "View Our Work",
        href: "#portfolio",
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
      styles: {
        primaryCtaBg: "linear-gradient(to bottom, #6c98f8, #2563eb)",
      }
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
      styles: {
        background: "#e0e4e7",
      },
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
      styles: {
        cardBackground: "#eff3fa",
      }
    },

    portfolio: {
      eyebrow: "Our Work",
      title: "Featured Projects",
      description:
        "A sample of the work TSO Texas delivers across maintenance, renovations, networking, and fabrication.",
      items: [
        {
          slug: "office-renovation",
          title: "Office Renovation & Repairs",
          projectName: "Downtown Office Build-Out",
          description:
            "Interior updates, repairs, and finishing work for a cleaner, more functional workspace.",
          image: "/companies/tso-texas/hero-images/office-renovation-modern-workspace.jpeg",
          category: "Renovation",
          icon: "Hammer",
          href: "/case-studies/office-renovation",
          snapshot: [
            { label: "Service", value: "Renovation", icon: "Hammer" },
            { label: "Location", value: "San Antonio, TX", icon: "MapPin" },
            { label: "Timeline", value: "Demo Project", icon: "Clock" },
            { label: "Scope", value: "Multi-trade support", icon: "Layers" },
          ],
          caseStudy: {
            eyebrow: "Case Study",
            title: "How We Transformed a Dated Office Into a Functional Workspace",
            description: "A downtown client needed their office updated quickly without disrupting ongoing operations.",
            challenge: {
              label: "Challenge",
              title: "Aging Space, Tight Timeline",
              description: "The office had outdated finishes, damaged drywall, and worn hardware — all needing replacement while the team continued working on-site.",
              icon: "AlertTriangle",
            },
            solution: {
              label: "Solution",
              title: "Phased Multi-Trade Execution",
              description: "TSO Texas coordinated repairs, paint, and hardware replacement in phases to minimize downtime, completing each zone before moving to the next.",
              icon: "Wrench",
            },
            result: {
              label: "Result",
              title: "Refreshed Space, Zero Disruption",
              description: "The office was fully updated on schedule. Staff experienced no interruptions and the client reported a noticeably improved working environment.",
              icon: "CheckCircle",
            },
          },
          layout: { colStart: 1, rowStart: 1, colSpan: 2, rowSpan: 2 },
        },
        {
          slug: "structured-cabling",
          title: "Structured Cabling Upgrade",
          projectName: "Westside Commercial Cabling Overhaul",
          description:
            "Improved network organization with data drops, cabling, and rack cleanup across a commercial facility.",
          image: "/companies/tso-texas/hero-images/cat6-cable-installation-commercial-building.webp",
          category: "Low Voltage",
          icon: "Network",
          href: "/case-studies/structured-cabling",
          snapshot: [
            { label: "Service", value: "Low Voltage", icon: "Network" },
            { label: "Location", value: "San Antonio, TX", icon: "MapPin" },
            { label: "Timeline", value: "Demo Project", icon: "Clock" },
            { label: "Scope", value: "Cabling & infrastructure", icon: "Layers" },
          ],
          caseStudy: {
            eyebrow: "Case Study",
            title: "Bringing Order to a Tangled Network Infrastructure",
            description: "A commercial facility needed a full cabling overhaul to support growing network demands.",
            challenge: {
              label: "Challenge",
              title: "Disorganized, Unreliable Cabling",
              description: "Years of ad-hoc additions left the facility with unlabeled runs, poor rack organization, and frequent connectivity failures across departments.",
              icon: "AlertTriangle",
            },
            solution: {
              label: "Solution",
              title: "Structured Cabling Overhaul",
              description: "TSO Texas replaced and organized all runs with Cat6 cabling, installed proper rack management, and labeled every data drop for easy future maintenance.",
              icon: "Network",
            },
            result: {
              label: "Result",
              title: "Stable Network, Clean Infrastructure",
              description: "Connectivity issues were eliminated. The facility now has a fully documented, organized network that supports current operations and future growth.",
              icon: "CheckCircle",
            },
          },
          layout: { colSpan: 1 },
        },
        {
          slug: "commercial-build-out",
          title: "Commercial Build-Out",
          projectName: "Northside Retail Space Build-Out",
          description:
            "Multi-trade interior build-out from framing and drywall to finish work and paint.",
          image: "/companies/tso-texas/hero-images/commercial-interior-build-out-construction.png",
          category: "Renovation",
          icon: "Layers",
          href: "/case-studies/commercial-build-out",
          snapshot: [
            { label: "Service", value: "Renovation", icon: "Layers" },
            { label: "Location", value: "San Antonio, TX", icon: "MapPin" },
            { label: "Timeline", value: "Demo Project", icon: "Clock" },
            { label: "Scope", value: "Interior build-out", icon: "Hammer" },
          ],
          caseStudy: {
            eyebrow: "Case Study",
            title: "Turning an Empty Shell Into a Move-In-Ready Retail Space",
            description: "A retail tenant needed a full interior build-out completed before their lease start date.",
            challenge: {
              label: "Challenge",
              title: "Raw Space, Hard Deadline",
              description: "The space was an unfinished shell requiring framing, drywall, paint, and finish work — all within a fixed move-in window.",
              icon: "AlertTriangle",
            },
            solution: {
              label: "Solution",
              title: "Single-Vendor Multi-Trade Execution",
              description: "TSO Texas handled framing, drywall, texture, paint, and finish carpentry under one contract, coordinating all trades internally to hit the deadline.",
              icon: "Layers",
            },
            result: {
              label: "Result",
              title: "On-Time, Move-In Ready",
              description: "The tenant moved in on schedule with a fully finished, professional space ready for business from day one.",
              icon: "CheckCircle",
            },
          },
          layout: { colSpan: 1 },
        },
        {
          slug: "custom-fabrication",
          title: "Custom Fabrication Installation",
          projectName: "Industrial Equipment Mounting System",
          description:
            "Fabricated mounting and support solutions designed and installed entirely in-house.",
          image: "/companies/tso-texas/hero-images/photo-metal-fabrication-shop-with-welding-equipment-sparks-flying.png",
          category: "Fabrication",
          icon: "Wrench",
          href: "/case-studies/custom-fabrication",
          snapshot: [
            { label: "Service", value: "Fabrication", icon: "Wrench" },
            { label: "Location", value: "San Antonio, TX", icon: "MapPin" },
            { label: "Timeline", value: "Demo Project", icon: "Clock" },
            { label: "Scope", value: "Custom metalwork", icon: "Layers" },
          ],
          caseStudy: {
            eyebrow: "Case Study",
            title: "Building a Custom Mounting Solution No Off-the-Shelf Product Could Match",
            description: "An industrial client needed secure, custom mounting for oversized equipment in a non-standard facility layout.",
            challenge: {
              label: "Challenge",
              title: "No Standard Solution Available",
              description: "The facility's equipment dimensions and anchor points didn't match any available commercial mounting products, requiring a fully custom approach.",
              icon: "AlertTriangle",
            },
            solution: {
              label: "Solution",
              title: "In-House Design and Fabrication",
              description: "TSO Texas designed, fabricated, and installed a custom steel mounting system built to the exact specifications of the client's equipment and facility.",
              icon: "Wrench",
            },
            result: {
              label: "Result",
              title: "Secure Fit, Long-Term Stability",
              description: "The equipment is securely mounted and has operated without issue since installation. The client has since requested additional fabrication work.",
              icon: "CheckCircle",
            },
          },
          layout: { colSpan: 1 },
        },
        {
          slug: "drywall-patching",
          title: "Drywall & Patching",
          projectName: "Multi-Unit Residential Wall Restoration",
          description:
            "Patch, texture, and paint for commercial and residential walls after repairs or renovations.",
          image: "/companies/tso-texas/hero-images/commercial-drywall-and-construction.png",
          category: "Maintenance",
          icon: "Hammer",
          snapshot: [
            { label: "Service", value: "Maintenance", icon: "Hammer" },
            { label: "Location", value: "San Antonio, TX", icon: "MapPin" },
            { label: "Timeline", value: "Demo Project", icon: "Clock" },
            { label: "Scope", value: "Patch, texture & paint", icon: "Layers" },
          ],
          caseStudy: {
            eyebrow: "Case Study",
            title: "Restoring Walls Across a Multi-Unit Residential Property",
            description: "A property management company needed wall repairs completed across multiple units to prepare for new tenants.",
            challenge: {
              label: "Challenge",
              title: "Damage Across Multiple Units",
              description: "Walls across several units had holes, cracks, and inconsistent texture from previous repairs — all requiring matching and repainting.",
              icon: "AlertTriangle",
            },
            solution: {
              label: "Solution",
              title: "Systematic Unit-by-Unit Restoration",
              description: "TSO Texas worked through each unit methodically, patching, matching texture, and repainting to a consistent finish across the entire property.",
              icon: "Hammer",
            },
            result: {
              label: "Result",
              title: "Tenant-Ready Units, On Budget",
              description: "All units were completed within the turnaround window and passed inspection. The property manager has since retained TSO Texas for ongoing maintenance.",
              icon: "CheckCircle",
            },
          },
          layout: { colSpan: 2 },
        },
      ],
      styles: {
        background: "transparent",
        title: "#0B1F4D",
        description: "#475569",
      }
    },

    testimonials: {
      eyebrow: "Trusted by Real Clients",
      title: "What Clients Value",
      description:
        "Feedback from clients who have relied on TSO Texas to handle repairs, renovations, and specialized work without the hassle of managing multiple vendors.",
      styles: {
        background: "transparent",
        cardBorder: "#0B1F4D",
      },
    },

    logoSection: {
      eyebrow: "Trusted Capability",
      title: "Built to Support Residential and Commercial Projects",
      description:
        "One team. Multiple trades. Done right.",
      styles: {
        background: "#081636",
        title: "#eff0f3",
        description: "#99a3b1",
      },
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

    contact: {
      backgroundImage:
        "/companies/tso-texas/contact/tso-texas-truck-at-site-at-sunrise.png",
      testimonial: {
        quote:
          "TSO Texas handled our office renovation and low voltage work at the same time. One call, one team, zero headaches.",
        name: "Marcus R.",
        title: "Facilities Manager",
        avatar: "https://assets.aceternity.com/avatars/manu.webp",
      },
      form: {
        title: "Contact Us",
        description:
          "We\u2019re here to help with any questions. Email us at",
        email: "tsotservices@gmail.com",
        services: [
          { label: "Facility Maintenance & Repairs", value: "maintenance" },
          { label: "Renovations & Improvements", value: "renovations" },
          { label: "Low Voltage & Networking", value: "networking" },
          { label: "Welding & Fabrication", value: "fabrication" },
          { label: "Other", value: "other" },
        ],
      },
      styles: {
        formBg: "rgba(250, 250, 250, 1)",
        text: "#0B1F4D",
        mutedText: "#1d2838",
      }
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