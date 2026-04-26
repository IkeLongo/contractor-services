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
      modalBackground?: string;
    };
    items?: TestimonialItem[];
  };
  about: {
    title: string;
    image: string;
    imageAlt?: string;
    styles?: {
      background?: string;
      cardBackground?: string;
      border?: string;
      title?: string;
      gradientFrom?: string;
      gradientTo?: string;
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
      {
        label: "Industries",
        href: "/#industries",
        children: [
          { label: "Commercial Facilities", href: "/#industries" },
          { label: "Offices", href: "/#industries" },
          { label: "Property Managers", href: "/#industries" },
          { label: "Residential Projects", href: "/#industries" },
        ],
      },
      { label: "Projects", href: "/#portfolio" },
      { label: "About", href: "/#about" },
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
        href: "/#services",
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
        cardBorder: "#0B1F4D",
        modalBackground: "white",
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
      styles: {
        background: "#F3F6FA",
        cardBackground: "#ffffff",
        border: "#e2e8f0",
        title: "#0B1F4D",
        gradientFrom: "rgba(255,255,255,1)",
        gradientTo: "rgba(255,255,255,0)",
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
          formBg: "rgba(250, 250, 250, 1)",
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
