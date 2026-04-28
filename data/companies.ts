// data/companies.ts

export type NavItem = {
  label: string;
  href: string;
  children?: {
    label: string;
    href: string;
  }[];
  viewAllHref?: string;
};

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
  primaryCtaBg?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
  highlightBg?: string;
  highlightBorder?: string;
  highlightText?: string;
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
    scopeCardColors?: string[];
    scopeCardText?: string;
    scopeCardIcon?: string;
  };
};

export type LogoSectionStyles = {
  background?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
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

export type Company = {
  general: General;
  branding: Branding;
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
  logoSection?: {
    eyebrow?: string;
    title: string;
    description?: string;
    styles?: LogoSectionStyles;
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
  og?: OgConfig;
};

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

export type Theme = {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  text: string;
  mutedText: string;
  border: string;
};

const tsoTexasCompany: Company = {
  general: {
    slug: "tso-texas",
    subdomain: "tso-texas",
    name: "TSO Texas",
    legalName: "TSO Texas Residential & Commercial Services, LLC",
    tagline: "Residential & Commercial Services",
    phone: "210-465-5077",
    email: "tsotservices@gmail.com",
    city: "San Antonio",
    state: "TX",
  },

  branding: {
    logo: "/companies/tso-texas/logos/tso-texas-logo.webp",
    navLogo: "/companies/tso-texas/logos/tso-texas-hor-logo.png",

    theme: {
      primary: "#0B1F4D",
      secondary: "#C62828",
      accent: "#F8FAFC",
      background: "#F3F6FA",
      surface: "#FFFFFF",
      text: "#111827",
      mutedText: "#475569",
      border: "#E2E8F0",
    },
  },

  seo: {
    title: "TSO Texas | Residential & Commercial Services in San Antonio",
    description:
      "TSO Texas provides facility maintenance, renovations, low voltage systems, and welding & fabrication services in San Antonio, Texas.",
  },

  navigation: [
    { label: "Reviews", href: "/#testimonials" },
    {
      label: "Services",
      href: "/#services",
      children: [
        { label: "Facility Maintenance", href: "/services/facility-maintenance-repairs" },
        { label: "Renovations", href: "/services/renovations-improvements" },
        { label: "Low Voltage", href: "/services/low-voltage-networking" },
        { label: "Welding & Fabrication", href: "/services/welding-fabrication" },
      ],
    },
    { label: "Projects", href: "/#portfolio" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  hero: {
    eyebrow: "Fast Response • Reliable Service • Quality Workmanship",
    title: "One Team for Repairs, Renovations, and Low Voltage Work",
    subtitle:
      "TSO Texas helps residential and commercial clients solve more with one reliable vendor for maintenance, improvements, networking, and custom fabrication.",
    primaryCta: {
      label: "View Our Work",
      href: "/#portfolio",
    },
    secondaryCta: {
      label: "View Services",
      href: "/services",
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
        slug: "facility-maintenance-repairs",
        eyebrow: "Multi-Trade Maintenance",
        heroTitle: "Facility Maintenance & Repair Services",
        heroDescription:
          "Keep your property safe, functional, and presentable with reliable maintenance and repair services from a single, experienced crew.",
        description:
          "Reliable repair and upkeep services to keep properties clean, functional, and presentable.",
        image: "/companies/tso-texas/service-cards/construction-workers-installing-drywall-in-a-new-building-photo.png",
        bullets: [
          "Drywall, patching, texture, and paint",
          "Doors, hardware, trim, and carpentry",
        ],
        icon: "wrench",
        overview: {
          title: "One Team for All Your Maintenance Needs",
          description:
            "TSO Texas handles the full scope of facility maintenance — from drywall and carpentry to doors, hardware, and paint. Instead of coordinating multiple contractors, you get one reliable point of contact for every repair and upkeep task on your property. Our team is structured to respond quickly, diagnose issues accurately, and complete work without creating disruption to your daily operations. Whether it’s ongoing maintenance or one-off repairs, the focus is always on consistency, quality, and keeping your property in working condition."
        },
        includes: {
          title: "What's Included",
          items: [
            "Drywall patching, texture matching, and paint",
            "Door alignment, hardware replacement, and trim repairs",
            "Interior carpentry and millwork",
            "Ceiling and wall damage repair",
            "Light fixture and outlet cover replacement",
            "Preventive maintenance walkthroughs",
          ],
        },
        process: {
          title: "How It Works",
          steps: [
            {
              title: "Request a Walkthrough",
              description:
                "We assess the property, document issues, and provide a clear scope of work before any commitment.",
            },
            {
              title: "Receive a Detailed Quote",
              description:
                "You get an itemized quote with no surprises. We'll answer questions and adjust scope as needed.",
            },
            {
              title: "Work Gets Done Right",
              description:
                "Our crew arrives on time, works cleanly, and completes the job to standard — with a final walkthrough included.",
            },
          ],
        },
        whyItMatters: {
          title: "Deferred Maintenance Compounds Quickly",
          description:
          "Small issues rarely stay small in a commercial or residential property. What starts as minor wear or damage can quickly turn into costly repairs, safety concerns, or tenant complaints if left unaddressed. Consistent maintenance not only preserves the condition of your space, but also reduces emergency calls, extends the life of materials, and keeps your property operating without interruption. Having a reliable team in place allows you to stay ahead of problems instead of reacting to them.",
        },
        cta: {
          title: "Ready to Schedule Maintenance?",
          description:
            "Request a quote for your facility maintenance needs. We'll assess the scope and respond within 1–2 business days.",
          primaryLabel: "Request a Quote",
          primaryHref: "/services/facility-maintenance-repairs#contact-facility-maintenance-repairs",
        },
      },
      {
        title: "Renovations & Improvements",
        slug: "renovations-improvements",
        eyebrow: "Interior Upgrades",
        heroTitle: "Commercial & Residential Renovation Services",
        heroDescription:
          "Modernize your workspace or living space with multi-trade renovation support that covers everything from concept to completion.",
        description:
          "Interior upgrades and multi-trade project support for offices and other spaces.",
        image: "/companies/tso-texas/service-cards/office-build-out-construction-modern-workspace-renovation.png",
        bullets: [
          "Office build-outs and upgrades",
          "Interior renovations and repairs",
          "Multi-trade project execution",
        ],
        icon: "hammer",
        overview: {
          title: "Full-Scope Interior Renovations",
          description:
            "Whether you're upgrading a commercial office or refreshing a residential interior, TSO Texas manages the full renovation process from start to finish. We handle the coordination between trades, sequencing of work, and execution on-site so the project moves efficiently without unnecessary delays. By keeping everything under one team, we reduce miscommunication, maintain quality control, and deliver a finished space that aligns with your goals while minimizing disruption to your day-to-day operations.",
        },
        includes: {
          title: "What's Covered",
          items: [
            "Office build-outs and interior reconfiguration",
            "Partition walls and drywall installation",
            "Paint, texture, and finish work",
            "Flooring preparation and transitions",
            "Door and hardware installation",
            "Multi-trade coordination and project phasing",
          ],
        },
        process: {
          title: "Our Renovation Process",
          steps: [
            {
              title: "Scope & Plan",
              description:
                "We review your goals, document the existing space, and build a clear plan before work begins.",
            },
            {
              title: "Phased Execution",
              description:
                "Work is sequenced to minimize disruption — we complete each phase before moving to the next.",
            },
            {
              title: "Deliver & Review",
              description:
                "We walk through the completed space with you and handle any finishing touches before closing out.",
            },
          ],
        },
        whyItMatters: {
          title: "A Better Space Drives Better Results",
          description:
            "The condition and layout of your space directly impacts how people experience it. Outdated finishes, inefficient layouts, or poorly executed work can affect productivity, client perception, and long-term maintenance costs. A properly planned and executed renovation improves functionality, modernizes the environment, and creates a space that supports the way your business or household operates. Investing in quality work upfront prevents ongoing issues and ensures the space performs as intended.",
        },
        cta: {
          title: "Planning a Renovation?",
          description:
            "Tell us about your project and we'll schedule a walkthrough to assess scope and provide a quote.",
          primaryLabel: "Request a Quote",
          primaryHref: "/services/renovations-improvements#contact-renovations-improvements",
        },
      },
      {
        title: "Low Voltage & Networking",
        slug: "low-voltage-networking",
        eyebrow: "Structured Cabling",
        heroTitle: "Low Voltage & Network Infrastructure Services",
        heroDescription:
          "Organized, professional cabling and network infrastructure that supports your operations — from new installs to existing system cleanup.",
        description:
          "Structured cabling and network support for organized, functional infrastructure.",
        image: "/companies/tso-texas/service-cards/cat6-cable-installation-commercial-building-technician.png",
        bullets: [
          "Cat5e / Cat6 structured cabling",
          "Fiber optic repair & troubleshooting",
          "Rack organization and data drops",
        ],
        icon: "network",
        overview: {
          title: "Clean Infrastructure, Reliable Connections",
          description:
            "A well-structured cabling system is the foundation of any reliable network. TSO Texas installs and organizes low voltage infrastructure with a focus on clarity, performance, and long-term usability. We ensure every cable run is cleanly routed, properly terminated, and clearly labeled so your system is easy to maintain and expand. Whether you're installing a new network or correcting an existing setup, the goal is to create an organized infrastructure that supports your operations without unnecessary downtime.",
        },
        includes: {
          title: "Services Included",
          items: [
            "Cat5e / Cat6 structured cabling installation",
            "Patch panel and rack organization",
            "Data drop installation and labeling",
            "Fiber optic repair and troubleshooting",
            "Cable management and routing",
            "Wall plates, keystone jacks, and terminations",
          ],
        },
        process: {
          title: "How We Approach It",
          steps: [
            {
              title: "Site Assessment",
              description:
                "We document the existing infrastructure, identify problem areas, and plan the cleanest path forward.",
            },
            {
              title: "Installation & Organization",
              description:
                "Cabling is run, terminated, and labeled according to your floor plan and rack layout.",
            },
            {
              title: "Test & Document",
              description:
                "Every run is tested for continuity and performance. We provide documentation of the completed layout.",
            },
          ],
        },
        whyItMatters: {
          title: "Messy Cabling Costs You Later",
          description:
            "Disorganized or poorly installed cabling leads to ongoing problems that cost time and money. Troubleshooting becomes more difficult, outages take longer to resolve, and future upgrades become complicated. A properly installed and documented system eliminates guesswork, reduces downtime, and allows your network to scale as your needs grow. Investing in clean infrastructure upfront prevents recurring issues and ensures your system performs reliably over time.",
        },
        cta: {
          title: "Need Cabling Work Done Right?",
          description:
            "Whether it's a new installation or an existing system that needs cleanup, we can help. Request a site visit and quote.",
          primaryLabel: "Request a Quote",
          primaryHref: "/services/low-voltage-networking#contact-low-voltage-networking",
        },
      },
      {
        title: "Welding & Fabrication",
        slug: "welding-fabrication",
        eyebrow: "Custom Metalwork",
        heroTitle: "Custom Welding & Metal Fabrication Services",
        heroDescription:
          "In-house fabrication and structural welding for commercial and residential applications — built to spec, delivered on time.",
        description:
          "Custom fabrication and structural support solutions completed in-house.",
        image: "/companies/tso-texas/service-cards/metal-fabrication-welding-sparks-industrial-shop.webp",
        bullets: [
          "Custom metal fabrication",
          "Structural repairs and supports",
          "Equipment mounting solutions",
        ],
        icon: "shield",
        overview: {
          title: "Fabrication Without the Middleman",
          description:
            "TSO Texas provides in-house welding and fabrication services, allowing projects to move faster without relying on third-party shops. We build custom components based on your specifications, whether it’s structural reinforcement, equipment mounting, or one-off fabricated pieces. By handling everything internally, we maintain control over quality, timelines, and fitment — ensuring the final product is built correctly and ready for installation without delays or rework.",
        },
        includes: {
          title: "What We Build & Repair",
          items: [
            "Custom metal brackets, frames, and fixtures",
            "Structural steel repairs and reinforcement",
            "Equipment mounting solutions",
            "Gate, railing, and fence fabrication",
            "Metal patch and repair work",
            "Material sourcing and procurement",
          ],
        },
        process: {
          title: "From Spec to Finished Product",
          steps: [
            {
              title: "Review Requirements",
              description:
                "We review your drawings, dimensions, or site conditions to understand exactly what needs to be built.",
            },
            {
              title: "Fabricate In-House",
              description:
                "Work is completed in our shop using the right materials and methods for the application.",
            },
            {
              title: "Deliver & Install",
              description:
                "We deliver the finished product and handle installation when needed — fully fitted and ready to use.",
            },
          ],
        },
        whyItMatters: {
          title: "Off-the-Shelf Solutions Don't Always Fit",
          description:
              "Standard, off-the-shelf components don’t always meet the demands of real-world applications. When something needs to fit precisely or handle specific loads, custom fabrication becomes necessary. Working with an in-house team reduces turnaround time, improves communication, and ensures the final result matches the exact requirements of the project. This leads to stronger, more reliable solutions that hold up over time without the need for constant adjustments or replacements.",
        },
        cta: {
          title: "Have a Fabrication Project?",
          description:
            "Tell us what you need and we'll review the specs. Custom quotes are provided after a brief consultation.",
          primaryLabel: "Request a Quote",
          primaryHref: "/services/welding-fabrication#contact-welding-fabrication",
        },
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
          gallery: [
            { image: "/companies/tso-texas/hero-images/office-renovation-modern-workspace.jpeg", alt: "Modern office workspace after renovation", caption: "Completed workspace — updated finishes and improved layout" },
            { image: "/companies/tso-texas/hero-images/office-remodeling-construction-workers-interior.jpg", alt: "Construction crew during office remodel", caption: "Active work phase — crew on-site during phased execution" },
            { image: "/companies/tso-texas/hero-images/commercial-interior-build-out-construction.png", alt: "Commercial interior build-out in progress", caption: "Framing and drywall phase during the build-out" },
          ],
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
          gallery: [
            { image: "/companies/tso-texas/hero-images/cat6-cable-installation-commercial-building.webp", alt: "Cat6 cable installation in commercial building", caption: "Cat6 runs installed and dressed across the facility" },
            { image: "/companies/tso-texas/hero-images/office-renovation-modern-workspace.jpeg", alt: "Organized workspace post-installation", caption: "Clean, functional workspace following network upgrade" },
          ],
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
          gallery: [
            { image: "/companies/tso-texas/hero-images/commercial-interior-build-out-construction.png", alt: "Commercial interior build-out in progress", caption: "Mid-project — drywall and framing phase" },
            { image: "/companies/tso-texas/hero-images/office-renovation-modern-workspace.jpeg", alt: "Finished commercial workspace", caption: "Completed space ready for tenant move-in" },
            { image: "/companies/tso-texas/hero-images/commercial-drywall-and-construction.png", alt: "Drywall and construction work", caption: "Finish drywall and texture before paint" },
          ],
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
          gallery: [
            { image: "/companies/tso-texas/hero-images/photo-metal-fabrication-shop-with-welding-equipment-sparks-flying.png", alt: "Welding and fabrication shop in operation", caption: "In-house fabrication — custom mounting system in production" },
            { image: "/companies/tso-texas/hero-images/commercial-interior-build-out-construction.png", alt: "Installation phase on-site", caption: "On-site installation of fabricated mounting hardware" },
          ],
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
          gallery: [
            { image: "/companies/tso-texas/hero-images/commercial-drywall-and-construction.png", alt: "Drywall and patching work in progress", caption: "Active patching phase across multiple units" },
            { image: "/companies/tso-texas/hero-images/office-renovation-modern-workspace.jpeg", alt: "Finished unit interior", caption: "Completed unit — ready for new tenant" },
          ],
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
      cardBackground: "#F3F6FA",
      cardBorder: "#0B1F4D",
      modalBackground: "linear-gradient(180deg, #dfe1e2 0%, #ffffff 70%, #dfe1e2 100%)",
      modalBorder: "#ffffff",
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
    title: "Reliable Work. One Team. Multiple Trades.",
    image:
      "/companies/tso-texas/contact/job-site-construction-bg-gradient.png",
    imageAlt: "TSO Texas team at job site",
    storyTitle: "Built on Reliability",
    story: [
      "TSO Texas was built on the belief that skilled tradespeople shouldn't have to choose between specialization and versatility. We've spent decades developing expertise across renovations, low voltage systems, networking, and custom fabrication.",
      "Today, our clients rely on us because one call is all it takes. Residential homeowners, property managers, and commercial facility teams know that when TSO shows up, the work gets done right — and they don't need to coordinate five separate contractors to make it happen.",
    ],
    highlights: [
      {
        title: "25+ Years Experience",
        description: "Renovation, telecom, and project management across residential and commercial jobs.",
      },
      {
        title: "Multi-Trade Team",
        description: "One crew covers low voltage, networking, welding, and general contracting.",
      },
      {
        title: "Certified Welding",
        description: "Custom metalwork and structural fabrication for unique project needs.",
      },
      {
        title: "Houston-Based",
        description: "Locally rooted and available across the greater Houston metro area.",
      },
    ],
    quote: {
      text: "We built TSO to be the team we always wished we could call — one that actually shows up, knows what they're doing, and gets it done.",
      author: "TSO Texas Team",
      avatar: "https://i.pravatar.cc/150?img=13",
    },
    images: {
      main: "/companies/tso-texas/contact/tso-texas-team-posing-in-front-of-job-site.png",
      secondary: [
        "/companies/tso-texas/contact/job-site-construction-bg-gradient.png",
      ],
      tertiary: [
        "/companies/tso-texas/contact/modern_commercial_interior_under_construction_wide_angle.png",
      ],
    },
    styles: {
      background: "#F3F6FA",
      cardBackground: "#ffffff",
      border: "#e2e8f0",
      title: "#0B1F4D",
      gradientFrom: "rgba(255,255,255,1)",
      gradientTo: "rgba(255,255,255,0)",
      text: "#1e293b",
      mutedText: "#64748b",
    },
    process: {
      eyebrow: "Our Process",
      title: "How We Get It Done",
      description:
        "A simple process designed to keep your project moving — without the headaches.",
      steps: [
        {
          step: "Step One",
          title: "Reach Out",
          description:
            "Tell us what you need — we'll take it from there.",
          tag: "Quick Response",
          icon: "Phone",
        },
        {
          step: "Step Two",
          title: "We Assess the Job",
          description:
            "We evaluate the project and outline the best approach.",
          tag: "Clear Plan",
          icon: "ClipboardCheck",
        },
        {
          step: "Step Three",
          title: "We Get to Work",
          description:
            "Our team shows up prepared and gets the job done right.",
          tag: "Reliable Work",
          icon: "Hammer",
        },
        {
          step: "Step Four",
          title: "Job Complete",
          description:
            "Clean, finished, and ready — with no loose ends.",
          tag: "Done Right",
          icon: "BadgeCheck",
        },
      ],
      styles: {
        background: "#F3F6FA"
      }
    },
    stats: {
      items: [
        { value: 25, suffix: "+", label: "Years of combined experience" },
        { value: 4, label: "Core service categories" },
        { value: 1, label: "Reliable point of contact" },
        { value: 100, suffix: "%", label: "Focused on clean execution" },
      ],
      styles: {
        background: "#F3F6FA",
        containerBg: "#ffffff",
        border: "#E2E8F0",
        numberColor: "#C62828",
        labelColor: "#475569",
      },
    },
    team: {
      members: [
        {
          name: "Manu Arora",
          role: "Owner & General Contractor",
          avatar: "https://assets.aceternity.com/avatars/manu.webp",
        },
        {
          name: "John Doe",
          role: "Project Manager",
          avatar: "https://assets.aceternity.com/avatars/1.webp",
        },
        {
          name: "Glennfiddich Doe",
          role: "Lead Technician",
          avatar: "https://assets.aceternity.com/avatars/2.webp",
        },
        {
          name: "Jameson Beam",
          role: "Field Supervisor",
          avatar: "https://assets.aceternity.com/avatars/3.webp",
        },
        {
          name: "Johnny Walker",
          role: "Operations Coordinator",
          avatar: "https://assets.aceternity.com/avatars/4.webp",
        },
        {
          name: "Jack Daniels",
          role: "Site Manager",
          avatar: "https://assets.aceternity.com/avatars/5.webp",
        },
        {
          name: "Samantha Rives",
          role: "Client Relations",
          avatar: "https://assets.aceternity.com/avatars/6.webp",
        },
        {
          name: "Evelyn Martinez",
          role: "Quality Control",
          avatar: "https://assets.aceternity.com/avatars/7.webp",
        },
        {
          name: "Priya Patel",
          role: "Scheduling & Logistics",
          avatar: "https://assets.aceternity.com/avatars/8.webp",
        },
      ],
      styles: {
        background: "#F3F6FA",
        nameColor: "#0B1F4D",
        roleColor: "#64748B",
      },
    },
    differentiators: {
      items: [
        {
          title: "One Team, Multiple Trades",
          description: "Handle repairs, renovations, networking, and fabrication through one reliable crew.",
          icon: "RouteAltLeft",
        },
        {
          title: "Clean, Professional Execution",
          description: "Organized work, clear communication, and job sites left clean when the work is complete.",
          icon: "AdjustmentsBolt",
        },
        {
          title: "Fast, Reliable Communication",
          description: "Quick response times and straightforward updates from first call to final walkthrough.",
          icon: "Help",
        },
        {
          title: "Residential & Commercial Support",
          description: "Flexible support for businesses, facilities, property managers, and homeowners.",
          icon: "Cloud",
        },
        {
          title: "On-Time Project Delivery",
          description: "We show up when we say we will and keep projects moving forward.",
          icon: "EaseInOut",
        },
        {
          title: "Detail-Oriented Work",
          description: "Every detail is handled with care to ensure long-lasting results.",
          icon: "Terminal2",
        },
        {
          title: "Transparent Pricing",
          description: "Clear, upfront pricing with no surprises along the way.",
          icon: "CurrencyDollar",
        },
        {
          title: "Built on Relationships",
          description: "We focus on long-term relationships, not one-time jobs.",
          icon: "Heart",
        },
      ],
      title: "What Sets Us Apart",
      description:
        "Our clients choose us because we provide a level of reliability, versatility, and professionalism that’s hard to find in the trades industry. We’re not just another contractor — we’re a team that delivers consistent results across multiple service categories, all under one roof.",
      styles: {
        background: "#F3F6FA",
        sectionTitle: "#0B1F4D",
        sectionDescription: "#475569",
        icon: "#C62828",
        title: "#0B1F4D",
        description: "#475569",
        border: "#E2E8F0",
        hoverGradientFrom: "#ffffff",
        accent: "#C62828",
      },
    },
  },

  finalCta: {
    title: "Need a team that can handle more in one call?",
    description:
      "From repairs and renovations to networking and fabrication, TSO Texas is built to support a wide range of residential and commercial service needs.",
    primaryCta: {
      label: "Request a Quote",
      href: "/#contact",
    },
    secondaryCta: {
      label: "Call Now",
      href: "tel:2104655077",
    },
    image:
      "/companies/tso-texas/contact/tso-texas-team-posing-in-front-of-job-site.png",
    imageAlt:
      "TSO Texas crew posing in front of a completed office renovation project, showcasing their multi-trade capabilities and commitment to quality work.",
      styles: {
        title: "#0B1F4D",
      }
  },

  contact: {
    backgroundImage:
      "/companies/tso-texas/contact/tso-texas-truck-at-site-at-sunrise.png",
    title: "Let's Work Together",
    description:
      "Whether you need repairs, renovations, low voltage work, or ongoing facility support — our team is ready to help. Tell us what you need and we'll take it from there.",
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
      home: {
        formBg: "#F3F6FA",
        text: "#0B1F4D",
        mutedText: "#1d2838",
      },
      contact: {
        background: "linear-gradient(to bottom, #0B1F4D 0%, #2752a3 100%)",
      }
    }
  },

  faq: {
    eyebrow: "Got Questions?",
    title: "Frequently Asked Questions",
    description:
      "Answers to common questions about our services, process, and coverage area.",
    items: [
      {
        question: "What types of services does TSO Texas offer?",
        answer:
          "TSO Texas is a multi-trade contractor serving both residential and commercial clients. We handle facility maintenance and repairs, interior renovations and build-outs, structured cabling and low voltage networking, custom welding and metal fabrication, and general drywall and finish work. One team, multiple trades.",
      },
      {
        question: "Do you work on both residential and commercial projects?",
        answer:
          "Yes. We work with homeowners, property managers, general contractors, and commercial facility teams. Whether it's a single-family home repair or a full commercial build-out, we have the crew and experience to handle it.",
      },
      {
        question: "How do I request a quote?",
        answer:
          "You can submit a request through the contact form on any page, or call us directly. We'll follow up to schedule a walkthrough or gather details depending on the scope of work. Most quotes are provided within 1–2 business days.",
      },
      {
        question: "What areas do you serve?",
        answer:
          "We're based in San Antonio, TX and serve clients throughout the greater San Antonio metro area, including surrounding cities and counties. Contact us if you're unsure whether your location falls within our service range.",
      },
      {
        question: "Can TSO Texas handle multiple trades on a single project?",
        answer:
          "Absolutely — that's one of our biggest advantages. If your project requires renovation work, networking installation, and welding in the same scope, we coordinate it all internally. No need to hire and manage separate contractors.",
      },
      {
        question: "What does low voltage and networking installation include?",
        answer:
          "Our low voltage services include Cat6 structured cabling, cable management and patching, server room organization, Wi-Fi infrastructure planning, and basic AV and security system rough-in. We work in both new construction and retrofit environments.",
      },
      {
        question: "How long do projects typically take?",
        answer:
          "Project timelines vary by scope. A minor repair may be completed in a single day, while a full commercial build-out can take several weeks. We provide a detailed timeline estimate with every quote so you know what to expect before work begins.",
      },
      {
        question: "Are you licensed and insured?",
        answer:
          "Yes. TSO Texas is fully licensed and insured. We carry general liability insurance and maintain all required state and local licenses for the trades we perform. Documentation is available upon request.",
      },
    ],
  },

  footer: {
    shortDescription:
      "Multi-trade residential and commercial services for repairs, renovations, networking, and fabrication.",
    serviceArea: "San Antonio, TX",
    socials: [
      { platform: "facebook", url: "https://facebook.com/" },
      { platform: "instagram", url: "https://instagram.com/" },
      { platform: "linkedin", url: "https://linkedin.com/company/" },
      { platform: "twitter", url: "https://twitter.com/" },
      { platform: "youtube", url: "https://youtube.com/" },
    ],
  },

  og: {
    image: "/companies/tso-texas/og/og-image.png",
    tintColor: "#0B1F4D",
    tintOpacity: 0.58,
    gradientDirection: "to bottom",
  },
};

const topTierRenovationsCompany: Company = {
  general: {
    slug: "top-tier-renovations",
    subdomain: "top-tier-renovations",
    name: "Top Tier Renovations",
    legalName: "Top Tier Renovations LLC", // TODO: confirm legal business name
    tagline: "Revamp • Renew • Refresh",
    phone: "(210) 612-9114",
    email: "sammygarza44@icloud.com", // TODO: confirm email
    city: "San Antonio",
    state: "TX",
    googlePlaceId: "", // TODO: add Google Place ID
  },
  branding: {
    logo: "/logos/top-tier-renovations.png", // TODO: upload + confirm path
    navLogo: "/logos/top-tier-renovations-nav.png", // TODO: create simplified/white version for navbar
    theme: {
      primary: "#1E90FF",      // strong electric blue (CTA, buttons, highlights)
      secondary: "#0B0F14",    // deep dark for sections/hero backgrounds
      accent: "#F8FAFC",       // soft white for contrast elements

      background: "#F3F6FA",   // light neutral page background
      surface: "#FFFFFF",      // cards / containers

      text: "#0F172A",         // slightly softer than pure black (better UX)
      mutedText: "#475569",    // secondary text

      border: "#E2E8F0",       // subtle borders/dividers
    },
  },
  seo: {
    title: "Top Tier Renovations | Home Remodeling in San Antonio, TX",
    description:
      "Top Tier Renovations offers flooring, custom showers, kitchen renovations, and full home remodeling in San Antonio, TX. Call today for a free estimate.",
  },
  navigation: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Services",
      href: "/services",
      viewAllHref: "/services",
      children: [
        {
          label: "Flooring",
          href: "/services/flooring",
        },
        {
          label: "Custom Showers",
          href: "/services/custom-showers",
        },
        {
          label: "Kitchen Renovations",
          href: "/services/kitchen-renovations",
        },
        {
          label: "Full Home Remodel",
          href: "/services/full-remodel",
        },
        {
          label: "General Maintenance",
          href: "/services/maintenance",
        },
      ],
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],
  hero: {
    eyebrow: "San Antonio Remodeling Experts",
    title: "Revamp. Renew. Refresh.",
    subtitle:
      "From flooring and custom showers to full home renovations, Top Tier Renovations delivers high-quality interior and exterior remodeling built to last.",
    primaryCta: {
      label: "Get Free Estimate",
      href: "/contact", // TODO: replace with booking link if available
    },
    secondaryCta: {
      label: "Call (210) 612-9114",
      href: "tel:2106129114",
    },
    highlights: [
      "Free Estimates",
      "Interior & Exterior Remodeling",
      "Custom Showers & Kitchens",
      "San Antonio Local",
    ],
    images: [
      "/images/top-tier-hero-1.jpg", // TODO: replace with real project images
    ],
    styles: {
      overlay: "rgba(11, 15, 20, 0.75)", // dark overlay for readability

      eyebrow: "#F8FAFC",
      title: "#FFFFFF",
      subtitle: "#E2E8F0",

      primaryCtaBg: "#1E90FF",
      primaryCtaText: "#FFFFFF",

      secondaryCtaText: "#F8FAFC",

      highlightBg: "rgba(255, 255, 255, 0.05)",
      highlightBorder: "rgba(255, 255, 255, 0.15)",
      highlightText: "#F8FAFC",
    },
  },
  differentiators: {
    eyebrow: "Why Homeowners Choose Us",

    title: "Renovation Work Built Around Quality, Detail, and Trust",

    description:
      "Whether it’s a single-room upgrade or a full home remodel, Top Tier Renovations focuses on clean workmanship, reliable communication, and results that fit your vision.",

    styles: {
      background: "#F3F6FA",
      eyebrow: "#1E90FF",
      title: "#0F172A",
      description: "#475569",
      cardBackground: "#FFFFFF",
      cardBorder: "#E2E8F0",
      cardTitle: "#0F172A",
      cardDescription: "#475569",
      icon: "#1E90FF",
      iconBackground: "rgba(30, 144, 255, 0.10)",
      hoverBorder: "#1E90FF",
    },

    items: [
      {
        title: "Free Estimates",
        description:
          "Easy, no-pressure estimates so homeowners can understand the scope before moving forward.",
        icon: "ClipboardCheck",
      },
      {
        title: "Interior & Exterior Remodeling",
        description:
          "Support for a wide range of renovation needs, from flooring and kitchens to full home remodels.",
        icon: "Home",
      },
      {
        title: "Custom Finish Work",
        description:
          "Detailed remodeling solutions designed to improve both the look and function of your space.",
        icon: "Hammer",
      },
      {
        title: "Local San Antonio Service",
        description:
          "A local renovation team serving homeowners throughout the San Antonio area.",
        icon: "MapPin",
      },
    ],
  },
  services: {
    eyebrow: "What We Do",
    title: "Our Remodeling Services",
    description:
      "From flooring and custom showers to full home remodels, we handle the work from start to finish.",
    columns: 2,
    items: [
      {
        title: "Flooring",
        slug: "flooring",
        description:
          "Durable flooring updates that transform the look and feel of your home.",
        icon: "PanelsTopLeft",
      },
      {
        title: "Custom Showers",
        slug: "custom-showers",
        description:
          "Bathroom upgrades designed around comfort, function, and long-lasting finishes.",
        icon: "Bath",
      },
      {
        title: "Kitchen Renovations",
        slug: "kitchen-renovations",
        description:
          "Functional kitchen improvements built around better layouts, cleaner finishes, and everyday use.",
        icon: "CookingPot",
      },
      {
        title: "Full Home Remodel",
        slug: "full-remodel",
        description:
          "Complete interior and exterior renovation services for homeowners ready for a full transformation.",
        icon: "Home",
      },
      {
        title: "General Maintenance",
        slug: "maintenance",
        description:
          "Reliable maintenance services to keep your home looking and working the way it should.",
        icon: "Wrench",
      },
    ],
    styles: {
      background: "#F3F6FA",
      cardBackground: "#FFFFFF",
      cardBorder: "#E2E8F0",
      cardTitle: "#0F172A",
      cardDescription: "#475569",
      accent: "#1E90FF",
    },
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
          gallery: [
            { image: "/companies/tso-texas/hero-images/office-renovation-modern-workspace.jpeg", alt: "Modern office workspace after renovation", caption: "Completed workspace — updated finishes and improved layout" },
            { image: "/companies/tso-texas/hero-images/office-remodeling-construction-workers-interior.jpg", alt: "Construction crew during office remodel", caption: "Active work phase — crew on-site during phased execution" },
            { image: "/companies/tso-texas/hero-images/commercial-interior-build-out-construction.png", alt: "Commercial interior build-out in progress", caption: "Framing and drywall phase during the build-out" },
          ],
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
          gallery: [
            { image: "/companies/tso-texas/hero-images/cat6-cable-installation-commercial-building.webp", alt: "Cat6 cable installation in commercial building", caption: "Cat6 runs installed and dressed across the facility" },
            { image: "/companies/tso-texas/hero-images/office-renovation-modern-workspace.jpeg", alt: "Organized workspace post-installation", caption: "Clean, functional workspace following network upgrade" },
          ],
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
          gallery: [
            { image: "/companies/tso-texas/hero-images/commercial-interior-build-out-construction.png", alt: "Commercial interior build-out in progress", caption: "Mid-project — drywall and framing phase" },
            { image: "/companies/tso-texas/hero-images/office-renovation-modern-workspace.jpeg", alt: "Finished commercial workspace", caption: "Completed space ready for tenant move-in" },
            { image: "/companies/tso-texas/hero-images/commercial-drywall-and-construction.png", alt: "Drywall and construction work", caption: "Finish drywall and texture before paint" },
          ],
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
          gallery: [
            { image: "/companies/tso-texas/hero-images/photo-metal-fabrication-shop-with-welding-equipment-sparks-flying.png", alt: "Welding and fabrication shop in operation", caption: "In-house fabrication — custom mounting system in production" },
            { image: "/companies/tso-texas/hero-images/commercial-interior-build-out-construction.png", alt: "Installation phase on-site", caption: "On-site installation of fabricated mounting hardware" },
          ],
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
          gallery: [
            { image: "/companies/tso-texas/hero-images/commercial-drywall-and-construction.png", alt: "Drywall and patching work in progress", caption: "Active patching phase across multiple units" },
            { image: "/companies/tso-texas/hero-images/office-renovation-modern-workspace.jpeg", alt: "Finished unit interior", caption: "Completed unit — ready for new tenant" },
          ],
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
    eyebrow: "Customer Feedback",

    title: "Built on Quality Work and Satisfied Homeowners",

    description:
      "Top Tier Renovations is committed to delivering high-quality remodeling services with a focus on detail, reliability, and customer satisfaction. Check back soon to see what homeowners in San Antonio are saying.",

    styles: {
      background: "#0B0F14",
      eyebrow: "#1E90FF",
      title: "#FFFFFF",
      description: "#CBD5F5",

      cardBackground: "#111827",
      cardBorder: "rgba(255,255,255,0.08)",

      quote: "#E2E8F0",
      name: "#FFFFFF",
      role: "#94A3B8",

      star: "#1E90FF",
      mutedStar: "#334155",

      quoteIcon: "#1E90FF",

      ctaBackground: "#1E90FF",
      ctaText: "#FFFFFF",

      modalBackground: "#0B0F14",
      modalBorder: "rgba(255,255,255,0.1)",
    },

    // intentionally no items yet
  },
  logoSection: {
    eyebrow: "Full-Service Remodeling",

    title: "Built for Interior and Exterior Renovation Projects",

    description:
      "From flooring and kitchens to full home remodels, Top Tier Renovations delivers reliable craftsmanship across every stage of your project.",

    styles: {
      background: "#0B0F14",
      title: "#F8FAFC",
      description: "#94A3B8",
    },
  },
  about: {
    title: "Quality Renovations. Clean Work. Reliable Service.",

    image: "/companies/top-tier-renovations/contact/top-tier-renovation-bg.png", // TODO: replace with real image
    imageAlt: "Top Tier Renovations remodeling project",

    storyTitle: "Built to Revamp, Renew, and Refresh",

    story: [
      "Top Tier Renovations helps homeowners transform their spaces with reliable interior and exterior remodeling services. From flooring and custom showers to kitchens and full home remodels, the goal is simple: quality work that improves the way your home looks and feels.",
      "Based in San Antonio, Top Tier Renovations focuses on clear communication, detailed craftsmanship, and dependable service from the first estimate to the final walkthrough. Whether it’s a small upgrade or a larger renovation, every project is handled with care.",
    ],

    highlights: [
      {
        title: "Free Estimates",
        description: "No-pressure estimates to help homeowners understand the scope before getting started.",
      },
      {
        title: "Full Home Remodeling",
        description: "Interior and exterior renovation services for kitchens, bathrooms, flooring, and more.",
      },
      {
        title: "Custom Showers",
        description: "Bathroom upgrades designed around comfort, function, and long-lasting finishes.",
      },
      {
        title: "San Antonio-Based",
        description: "Locally serving homeowners throughout San Antonio and surrounding areas.",
      },
    ],

    quote: {
      text: "Our goal is to help homeowners revamp, renew, and refresh their space with work they can feel confident in.",
      author: "Top Tier Renovations Team",
      avatar: "https://i.pravatar.cc/150?img=13", // TODO: replace with owner/team photo
    },

    images: {
      main: "/companies/top-tier-renovations/contact/top-tier-team-or-project.png", // TODO
      secondary: [
        "/companies/top-tier-renovations/contact/remodeling-project-bg.png", // TODO
      ],
      tertiary: [
        "/companies/top-tier-renovations/contact/kitchen-or-bathroom-remodel.png", // TODO
      ],
    },

    styles: {
      background: "#F3F6FA",
      cardBackground: "#ffffff",
      border: "#E2E8F0",
      title: "#0F172A",
      gradientFrom: "rgba(255,255,255,1)",
      gradientTo: "rgba(255,255,255,0)",
      text: "#1e293b",
      mutedText: "#64748b",
    },

    process: {
      eyebrow: "Our Process",
      title: "A Simple Way to Start Your Renovation",
      description:
        "A clear, straightforward process designed to help your project move from idea to completion with less stress.",

      steps: [
        {
          step: "Step One",
          title: "Request Your Estimate",
          description:
            "Call or text to tell us what you need and schedule a free estimate.",
          tag: "Free Estimate",
          icon: "Phone",
        },
        {
          step: "Step Two",
          title: "Review the Project",
          description:
            "We take a look at the space, understand your goals, and outline the best path forward.",
          tag: "Clear Scope",
          icon: "ClipboardCheck",
        },
        {
          step: "Step Three",
          title: "Renovation Begins",
          description:
            "Our team gets to work with a focus on quality, cleanliness, and attention to detail.",
          tag: "Quality Work",
          icon: "Hammer",
        },
        {
          step: "Step Four",
          title: "Final Walkthrough",
          description:
            "We review the finished work with you and make sure the project is completed the right way.",
          tag: "Done Right",
          icon: "BadgeCheck",
        },
      ],

      styles: {
        background: "#F3F6FA",
      },
    },

    stats: {
      items: [
        { value: 5, suffix: "+", label: "Core remodeling services" },
        { value: 1, label: "Local renovation team" },
        { value: 100, suffix: "%", label: "Focused on quality work" },
        { value: 0, label: "Project details to confirm" }, // TODO: replace with real stat
      ],
      styles: {
        background: "#F3F6FA",
        containerBg: "#ffffff",
        border: "#E2E8F0",
        numberColor: "#1E90FF",
        labelColor: "#475569",
      },
    },

    team: {
      members: [
        {
          name: "Top Tier Renovations Team",
          role: "Remodeling Specialists",
          avatar: "https://i.pravatar.cc/150?img=13", // TODO: replace with real team image
        },
      ],
      styles: {
        background: "#F3F6FA",
        nameColor: "#0F172A",
        roleColor: "#64748B",
      },
    },

    differentiators: {
      items: [
        {
          title: "Interior & Exterior Remodeling",
          description:
            "Support for a wide range of home renovation needs, from kitchens and bathrooms to full remodels.",
          icon: "Home",
        },
        {
          title: "Custom Shower Work",
          description:
            "Bathroom upgrades designed to improve comfort, function, and style.",
          icon: "Bath",
        },
        {
          title: "Flooring Installation",
          description:
            "Durable flooring updates that help transform the look and feel of your home.",
          icon: "PanelsTopLeft",
        },
        {
          title: "Kitchen Renovations",
          description:
            "Functional kitchen improvements built around better layouts, cleaner finishes, and everyday use.",
          icon: "CookingPot",
        },
        {
          title: "Free Estimates",
          description:
            "Simple, no-pressure estimates so you can understand your options before moving forward.",
          icon: "ClipboardCheck",
        },
        {
          title: "Clean, Reliable Work",
          description:
            "A focus on professional workmanship, clean execution, and dependable communication.",
          icon: "BadgeCheck",
        },
        {
          title: "General Maintenance",
          description:
            "Helpful maintenance services to keep your home looking and working the way it should.",
          icon: "Wrench",
        },
        {
          title: "Local San Antonio Service",
          description:
            "A local remodeling team serving homeowners throughout the San Antonio area.",
          icon: "MapPin",
        },
      ],

      title: "What Sets Top Tier Renovations Apart",

      description:
        "Top Tier Renovations focuses on quality remodeling, clear communication, and dependable service for homeowners who want their space upgraded the right way. From small improvements to larger renovation projects, the work is built around your goals and your home.",

      styles: {
        background: "#F3F6FA",
        sectionTitle: "#0F172A",
        sectionDescription: "#475569",
        icon: "#1E90FF",
        title: "#0F172A",
        description: "#475569",
        border: "#E2E8F0",
        hoverGradientFrom: "#ffffff",
        accent: "#1E90FF",
      },
    },
  },
  finalCta: {
    title: "Ready to Revamp, Renew, and Refresh Your Home?",

    description:
      "Whether you need flooring, a custom shower, a kitchen renovation, or a full home remodel, Top Tier Renovations is ready to help you take the next step.",

    primaryCta: {
      label: "Get Free Estimate",
      href: "/contact", // TODO: replace with booking/estimate link if available
    },

    secondaryCta: {
      label: "Call (210) 612-9114",
      href: "tel:2106129114",
    },

    image: "/companies/top-tier-renovations/cta/remodeling-project.jpg", // TODO: replace with real project image
    imageAlt: "Top Tier Renovations home remodeling project",

    styles: {
      background: "#0B0F14",
      title: "#FFFFFF",
      description: "#CBD5E1",
      buttonBg: "#1E90FF",
      buttonText: "#FFFFFF",
    },
  },
  contact: {
    backgroundImage: "/companies/top-tier-renovations/contact/top-tier-renovation-bg.png", // TODO: replace with real image
    title: "Get Your Free Estimate",
    description:
      "Ready to revamp, renew, or refresh your home? Tell us about your project and we'll get back to you quickly.",
    testimonial: {
      quote:
        "Top Tier Renovations did an amazing job on our bathroom remodel. Clean work and great communication throughout.",
      name: "TODO: Real Customer Name",
      title: "Homeowner",
      avatar: "https://i.pravatar.cc/150?img=13", // TODO: replace with real avatar
    },
    form: {
      title: "Contact Us",
      description: "We\u2019re here to help with any questions. Email us at",
      email: "info@toptierrenovations.com", // TODO: confirm email
      services: [
        { label: "Flooring", value: "flooring" },
        { label: "Custom Showers", value: "custom-showers" },
        { label: "Kitchen Renovations", value: "kitchen-renovations" },
        { label: "Full Home Remodel", value: "full-remodel" },
        { label: "General Maintenance", value: "maintenance" },
        { label: "Other", value: "other" },
      ],
    },
    styles: {
      home: {
        formBg: "#F3F6FA",
        text: "#0F172A",
        mutedText: "#1d2838",
      },
      contact: {
        background: "linear-gradient(to bottom, #1E90FF 0%, #0B0F14 100%)",
      },
    },
  },
  faq: {
    eyebrow: "Common Questions",

    title: "What Homeowners Ask Before Getting Started",

    description:
      "Here are some of the most common questions about our remodeling services, timelines, and what to expect when working with Top Tier Renovations.",

    items: [
      {
        question: "Do you offer free estimates?",
        answer:
          "Yes, we offer free estimates for all projects. You can call or text us to get started and we’ll schedule a time to review your project.",
      },
      {
        question: "What types of remodeling services do you offer?",
        answer:
          "We provide flooring installation, custom showers, kitchen renovations, full home remodels, and general maintenance services.",
      },
      {
        question: "How long does a typical project take?",
        answer:
          "Project timelines vary depending on the size and scope of the work. We’ll give you a clearer timeframe after reviewing your project details.", // TODO: refine with real timelines
      },
      {
        question: "Do you handle both interior and exterior work?",
        answer:
          "Yes, we handle both interior and exterior remodeling projects depending on your needs.",
      },
      {
        question: "Do I need to know exactly what I want before contacting you?",
        answer:
          "No — we can help guide you through the process, understand your goals, and recommend the best approach for your space.",
      },
      {
        question: "How do I get started?",
        answer:
          "You can call, text, or fill out the contact form on the website to request your free estimate and we’ll take it from there.",
      },
    ],

    styles: {
      background: "#F3F6FA",
      eyebrow: "#1E90FF",
      title: "#0F172A",
      description: "#475569",
      itemBackground: "#FFFFFF",
      itemBorder: "#E2E8F0",
      question: "#0F172A",
      answer: "#475569",
      icon: "#1E90FF",
      accent: "#1E90FF",
    },
  },
  footer: {
    shortDescription:
      "Top Tier Renovations provides reliable interior and exterior remodeling services in San Antonio, TX. From flooring and custom showers to full home renovations, we help homeowners revamp, renew, and refresh their space.",

    serviceArea: "San Antonio, TX and surrounding areas", // TODO: expand if needed

    socials: [
        { platform: "facebook", url: "https://facebook.com/" },
        { platform: "instagram", url: "https://instagram.com/" },
        { platform: "linkedin", url: "https://linkedin.com/company/" },
        { platform: "twitter", url: "https://twitter.com/" },
        { platform: "youtube", url: "https://youtube.com/" },
    ],
  },
  og: {
    image: "/images/og/top-tier-renovations-og.jpg", // TODO: generate dynamic OG image later

    tintColor: "#0B0F14", // dark overlay to match brand
    tintOpacity: 0.6,
    gradientDirection: "to bottom",

    logo: "/logos/top-tier-renovations.png", // TODO: add logo

    title: "Top Tier Renovations | San Antonio Remodeling Experts",

    description:
      "Flooring, custom showers, kitchen renovations, and full home remodeling in San Antonio, TX. Get your free estimate today.",
  },
};

// slug === subdomain for all companies — keyed by slug/subdomain interchangeably.
export const companies: Record<string, Company> = {
  [tsoTexasCompany.general.slug]: tsoTexasCompany,
  [topTierRenovationsCompany.general.slug]: topTierRenovationsCompany,
};

export const defaultCompany: Company = tsoTexasCompany;

export function getCompanyBySlug(slug?: string | null): Company {
  if (!slug) return defaultCompany;
  return companies[slug] ?? defaultCompany;
}
