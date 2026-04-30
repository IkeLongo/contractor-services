import type { Company } from "@/lib/types";

export const topTierRenovationsCompany: Company = {
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
    logo: "/companies/top-tier-renovations/logos/top-tier-renovations-logo.png", // TODO: upload + confirm path
    navLogo: "/companies/top-tier-renovations/logos/top-tier-renovations-logo.png", // TODO: create simplified/white version for navbar
    theme: {
      primary: "#1E90FF",      // strong electric blue (CTA, buttons, highlights)
      secondary: "#F3F6FA",    // deep dark for sections/hero backgrounds
      accent: "#F8FAFC",       // soft white for contrast elements
      background: "#0B0F14",   // light neutral page background
      surface: "#FFFFFF",      // cards / containers
      text: "#F8FAFC",         // slightly softer than pure black (better UX)
      mutedText: "#8b99ad",    // secondary text
      border: "#363636",       // subtle borders/dividers
      eyebrow: "#55a2f0",      // lighter blue for eyebrow text and accents
      title: "#F8FAFC",        // white for main titles
      buttons: {
        primary: {
          background: "#1E90FF",
          text: "#F8FAFC",
          hoverBackground: "#1C86EE",
          hoverText: "#FFFFFF",
        },
      },
      cards: {
        background: "#202020", // dark card background for contrast against main background
        border: "#363636",     // darker border for card definition
        hoverBackground: "#1e8fff4b", // subtle hover effect for cards
        hoverBorder: "#1E90FF", // accent border on hover
        title: "#F8FAFC",      // white for card titles
        description: "#8b99ad", // muted text for descriptions
      }
    },
  },
  seo: {
    title: "Top Tier Renovations | Home Remodeling in San Antonio, TX",
    description:
      "Top Tier Renovations offers flooring, custom showers, kitchen renovations, and full home remodeling in San Antonio, TX. Call today for a free estimate.",
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
  },
  layout: {
    navbar: {
      variant: "centeredLogo",
      items: [
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
      styles: {
        background: "#191f25",
        border: "#191f25",
        link: "#F8FAFC",
        linkHover: "#1E90FF",
        dropdownBackground: "#0B0F14",
        dropdownBorder: "#363636",
        phoneIcon: "#F8FAFC",
        phoneIconBg: "#1E90FF",
        ctaBg: "#1E90FF",
        ctaText: "#F8FAFC",
        mobileBackground: "#0B0F14",
        mobileMenuBg: "#1E90FF",
        mobileMenuIcon: "#F8FAFC",
        mobilePanelBg: "#0B0F14",
      },
      showBreadcrumbHeader: false,
    },
  },
  pages: {
    home: {
      hero: {
        eyebrow: {
          content: "San Antonio Remodeling Experts",
          styles: {
            color: "#F8FAFC",
          },
        },
        title: {
          content: "Revamp. Renew. Refresh.",
          styles: {
            color: "#FFFFFF",
          },
        },
        subtitle: {
          content:
            "From flooring and custom showers to full home renovations, Top Tier Renovations delivers high-quality interior and exterior remodeling built to last.",
          styles: {
            color: "#E2E8F0",
          },
        },
        primaryCta: {
          label: "Get Free Estimate",
          href: "/contact",
          styles: {
            background: "#1E90FF",
            text: "#FFFFFF",
          },
        },
        secondaryCta: {
          label: "Call (210) 612-9114",
          href: "tel:2106129114",
          styles: {
            text: "#F8FAFC",
          },
        },
        highlights: [
          { content: "Free Estimates" },
          { content: "Interior & Exterior Remodeling" },
          { content: "Custom Showers & Kitchens" },
          { content: "San Antonio Local" },
        ],
        images: [
          {
            src: "/companies/top-tier-renovations/hero-images/hero-1.png",
            alt: "Kitchen renovation with modern finishes",
            priority: true,
          },
          {
            src: "/companies/top-tier-renovations/hero-images/hero-2.png",
            alt: "Movie room with custom lighting and seating",
            priority: true,
          },
          {
            src: "/companies/top-tier-renovations/hero-images/hero-3.png",
            alt: "Shower renovation with tile and glass enclosure",
            priority: true,
          },
          {
            src: "/companies/top-tier-renovations/hero-images/hero-4.png",
            alt: "Dining room remodel with new flooring and lighting",
            priority: true,
          },
        ],
      },
      services: {
        eyebrow: {
          content: "What We Do",
          styles: {
            color: "#55a2f0",
          }
        },
        title: {
          content: "Our Remodeling Services",
        },
        description: {
          content:
            "From flooring and custom showers to full home remodels, we handle the work from start to finish.",
        },
        columns: 2,
        items: [       
          {
            title: {
              content: "Flooring",
              styles: {
                color: "#F8FAFC",
              },
            },
            description: {
              content:
                "Durable flooring updates that transform the look and feel of your home.",
              styles: {
                color: "#475569",
              }
            },
            image: {
              src: "/companies/top-tier-renovations/service-cards/service-1.jpg",
              alt: "Durable flooring updates that transform the look and feel of your home",
            },
            href: "/services/flooring",
            styles: {
              cardBg: "#202020",
              cardBorder: "#363636",
              accent: "#55a2f0",
            },
          },
          {
            title: {
              content: "Custom Showers",
              styles: {
                color: "#F8FAFC",
              },
            },
            description: {
              content:
                "Bathroom upgrades designed around comfort, function, and long-lasting finishes.",
              styles: {
                color: "#475569",
              }
            },
            image: {
              src: "/companies/top-tier-renovations/service-cards/service-2.png",
              alt: "Bathroom upgrades designed around comfort, function, and long-lasting finishes",
            },
            href: "/services/custom-showers",
            styles: {
              cardBg: "#202020",
              cardBorder: "#363636",
              accent: "#55a2f0",
            },
          },
          {
            title: {
              content: "Kitchen Renovations",
              styles: {
                color: "#F8FAFC",
              },
            },
            description: {
              content:
                "Functional kitchen improvements built around better layouts, cleaner finishes, and everyday use.",
              styles: {
                color: "#475569",
              }
            },
            image: {
              src: "/companies/top-tier-renovations/service-cards/service-3.webp",
              alt: "Functional kitchen improvements built around better layouts, cleaner finishes, and everyday use.",
            },
            href: "/services/kitchen-renovations",
            styles: {
              cardBg: "#202020",
              cardBorder: "#363636",
              accent: "#55a2f0",
            },
          },
          {
            title: {
              content: "Full Home Remodel",
              styles: {
                color: "#F8FAFC",
              },
            },
            description: {
              content:
                "Complete interior and exterior renovation services for homeowners ready for a full transformation.",
              styles: {
                color: "#475569",
              }
            },
            image: {
              src: "/companies/top-tier-renovations/service-cards/service-4.png",
              alt: "Complete interior and exterior renovation services for homeowners ready for a full transformation.",
            },
            href: "/services/full-remodel",
            styles: {
              cardBg: "#202020",
              cardBorder: "#363636",
              accent: "#55a2f0",
            },
          },
          {
            title: {
              content: "General Maintenance",
              styles: {
                color: "#F8FAFC",
              },
            },
            image: {
              src: "/companies/top-tier-renovations/service-cards/service-5.jpg",
              alt: "Reliable maintenance services to keep your home looking and working the way it should.",
            },
            description: {
              content:
                "Reliable maintenance services to keep your home looking and working the way it should.",
              styles: {
                color: "#475569",
              }
            },
            href: "/services/maintenance",
            styles: {
              cardBg: "#202020",
              cardBorder: "#363636",
              accent: "#55a2f0",
            },
          },
        ],
        styles: {
          background: "#0B0F14",
        },
      },
      logoSection: {
        title: {
          content: "Built for Interior and Exterior Renovation Projects",
          styles: {
            color: "#F8FAFC",
          },
        },
        description: {
          content:
            "From flooring and kitchens to full home remodels, Top Tier Renovations delivers reliable craftsmanship across every stage of your project.",
          styles: {
            color: "#8b99ad",
          },
        },
        logos: [
          { title: "Raycast", src: "https://assets.aceternity.com/logos/raycast.webp" },
          { title: "Twitch", src: "https://assets.aceternity.com/logos/twitch.webp" },
          { title: "Spotify", src: "https://assets.aceternity.com/logos/spotify.webp" },
          { title: "Hulu", src: "https://assets.aceternity.com/logos/hulu.webp" },
          { title: "YouTube", src: "https://assets.aceternity.com/logos/youtube.webp" },
          { title: "Character AI", src: "https://assets.aceternity.com/logos/characterai.png" },
          { title: "OpenAI", src: "https://assets.aceternity.com/logos/openai.png" },
          { title: "Oracle", src: "https://assets.aceternity.com/logos/oracle.png" },
          { title: "Portola", src: "https://assets.aceternity.com/logos/portola.png" },
          { title: "Granola", src: "https://assets.aceternity.com/logos/granola.png" },
          { title: "Hello Patient", src: "https://assets.aceternity.com/logos/hello-patient.png" },
          { title: "Company 1", src: "https://assets.aceternity.com/logos/1.png" },
          { title: "Forbes", src: "https://assets.aceternity.com/logos/forbes.png" },
          { title: "Y Combinator", src: "https://assets.aceternity.com/logos/y-combinator.png" },
          { title: "Company 7", src: "https://assets.aceternity.com/logos/7.png" },
          { title: "Company 8", src: "https://assets.aceternity.com/logos/8.png" },
          { title: "Company 4", src: "https://assets.aceternity.com/logos/4.png" },
          { title: "Company 9", src: "https://assets.aceternity.com/logos/9.png" },
          { title: "Figma", src: "https://assets.aceternity.com/logos/figma2.svg" },
          { title: "Wired", src: "https://assets.aceternity.com/logos/wired.png" },
        ],
        styles: {
          background: "#0B0F14",
        },
      },
      whySection: {
        eyebrow: {
          content: "Why Homeowners Choose Us",
          styles: {
            color: "#55a2f0",
          }
        },
        title: {
          content: "Renovation Work Built Around Quality, Detail, and Trust",
          styles: {
            color: "#F8FAFC",
          }
        },
        description: {
          content:
            "Whether it’s a single-room upgrade or a full home remodel, Top Tier Renovations focuses on clean workmanship, reliable communication, and results that fit your vision.",
          styles: {
            color: "#8b99ad",
          }
        },
        cards: [
          {
            title: {
              content: "Free Estimates",
              styles: {
                color: "#F8FAFC",
              }
            },
            description: {
              content:
                "Easy, no-pressure estimates so homeowners can understand the scope before moving forward.",
            },
            icon: "ClipboardCheck",
            styles: {
              cardBg: "#202020",
              cardBorder: "#363636",
              iconColor: "#1eadff",
              iconBackground: "#1e8fff4b",
              hoverBorder: "#1eadff",
            }
          },
          {
            title: {
              content: "Interior & Exterior Remodeling",
            },
            description: {
              content:
                "Support for a wide range of renovation needs, from flooring and kitchens to full home remodels.",
            },
            icon: "Home",
            styles: {
              cardBg: "#202020",
              cardBorder: "#363636",
              iconColor: "#1E90FF",
              iconBackground: "#1e8fff4b",
              hoverBorder: "#1E90FF",
            }
          },
          {
            title: {
              content: "Custom Finish Work",
            },
            description: {
              content:
                "Detailed remodeling solutions designed to improve both the look and function of your space.",
            },
            icon: "Hammer",
            styles: {
              cardBg: "#202020",
              cardBorder: "#363636",
              iconColor: "#1E90FF",
              iconBackground: "#1e8fff4b",
              hoverBorder: "#1E90FF",
            }
          },
          {
            title: {
              content: "Local San Antonio Service",
            },
            description: {
              content:
                "A local renovation team serving homeowners throughout the San Antonio area.",
            },
            icon: "MapPin",
            styles: {
              cardBg: "#202020",
              cardBorder: "#363636",
              iconColor: "#1E90FF",
              iconBackground: "#1e8fff4b",
              hoverBorder: "#1E90FF",
            }
          },
        ],
        styles: {
          background: "#0B0F14",
          overlayGradient: "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), transparent, rgba(0, 0, 0, 0.6))",
          patternColor: "rgb(241, 241, 241)",
          glowColor: "#1E90FF",
          glowOpacity: 0.15,
        },
      },
    },
  },
  services: {
    hero: {
      eyebrow: "What We Do",
      title: "Our Remodeling Services",
      description:
        "From flooring and custom showers to full home remodels, we handle the work from start to finish.",
    },
    columns: 2,
    styles: {
      background: "#0B0F14",
      eyebrow: "#55a2f0",
      primaryCtaButtonBg: "#1E90FF",
      primaryCtaButtonText: "#FFFFFF",
      secondaryCtaButtonText: "#FFFFFF",
      cardBackground: "#FFFFFF",
      cardBorder: "#E2E8F0",
      cardTitle: "#0F172A",
      cardDescription: "#475569",
      accent: "#1E90FF",
      narrative: {
        background: "#0B0F14",
        eyebrow: "#55a2f0",
        title: "#FFFFFF",
        text: "#8b99ad",
        accent: "#1E90FF",
        scopeCardBg: "#202020",
        scopeCardBorder: "#363636",
        scopeCardColors: ["#1E90FF", "#1E90FF", "#1E90FF", "#1E90FF", "#1E90FF"],
        scopeCardText: "#FFFFFF",
        scopeCardIcon: "#1E90FF",
      },
    },
    items: [
      {
        title: "Flooring",
        eyebrow: "Surface Upgrades",
        slug: "flooring",
        image: "/companies/top-tier-renovations/service-cards/service-1.jpg",
        description:
          "Durable flooring updates that transform the look and feel of your home.",
        icon: "PanelsTopLeft",
        overview: {
          title: "Flooring That Changes the Entire Feel of a Home",
          description:
            "New flooring does more than update the look of a space—it changes how a home feels the moment you walk in. Whether you're replacing worn-out surfaces or upgrading to something more modern, the right flooring ties everything together. We help homeowners choose materials that not only look great but also hold up to everyday life, from high-traffic areas to moisture-prone rooms. Every install is done with precision so you get a clean, lasting finish that elevates the entire space.",
          },
        includes: {
          title: "What’s Included",
          items: [
            "Luxury vinyl plank & tile installation",
            "Hardwood and engineered wood flooring",
            "Tile flooring for kitchens and bathrooms",
            "Subfloor prep and leveling",
            "Repairs and partial replacements",
          ],
        },
        whyItMatters: {
          title: "Why Flooring Matters",
          description:
            "Flooring is one of the first things people notice when they enter a home, and it takes on the most wear over time. Outdated or damaged floors can make even a well-kept home feel unfinished. On the other hand, properly installed, high-quality flooring adds comfort, durability, and long-term value. It also reduces maintenance headaches and creates a more cohesive, polished look throughout your home.",
        },
        cta: {
          title: "Ready to Upgrade Your Floors?",
          description:
            "Whether you need a full replacement or just want to update a few rooms, we’re here to help with expert flooring services that fit your style and budget.",
          primaryLabel: "Get Free Estimate",
          primaryHref: "/contact",
          image: "/companies/top-tier-renovations/images/service-cta-image.png",
        }
      },
      {
        title: "Custom Showers",
        eyebrow: "Luxury Bath",
        slug: "custom-showers",
        image: "/companies/top-tier-renovations/service-cards/service-2.png",
        description:
          "Bathroom upgrades designed around comfort, function, and long-lasting finishes.",
        icon: "Bath",
        overview: {
          title: "Custom Showers Built Around Comfort and Function",
          description:
            "A well-designed shower can completely transform your daily routine. We build custom showers that are tailored to your space, your style, and how you actually use your bathroom. From sleek modern finishes to more traditional designs, every detail is considered—from layout and drainage to tile work and fixtures. The result is a space that feels clean, functional, and built to last without cutting corners.",
        },
        includes: {
          title: "What Goes Into It",
          items: [
            "Walk-in shower design and installation",
            "Custom tile and waterproofing systems",
            "Glass enclosures and modern finishes",
            "Shower pan and drainage solutions",
            "Fixture upgrades and layout improvements",
          ],
        },
        whyItMatters: {
          title: "Why It Matters",
          description:
            "Bathrooms see daily use, and poorly built showers can quickly lead to leaks, mold, and costly repairs. A properly constructed shower isn’t just about looks—it’s about protecting your home and creating a space you actually enjoy using. Investing in a custom solution ensures better durability, improved functionality, and a more comfortable experience every day.",
        },
      },
      {
        title: "Kitchen Renovations",
        eyebrow: "Modern Living",
        slug: "kitchen-renovations",
        image: "/companies/top-tier-renovations/service-cards/service-3.webp",
        description:
          "Functional kitchen improvements built around better layouts, cleaner finishes, and everyday use.",
        icon: "CookingPot",
        overview: {
          title: "Kitchen Renovations That Improve Everyday Living",
          description:
            "The kitchen is one of the most used spaces in any home, and small inefficiencies can quickly become daily frustrations. We focus on creating kitchens that work better—from improved layouts and storage to updated finishes that bring everything together. Whether you're looking for a full renovation or targeted upgrades, our goal is to deliver a space that feels open, functional, and built for real life.",
        },
        includes: {
          title: "What We Handle",
          items: [
            "Cabinet installation and refinishing",
            "Countertop upgrades and replacements",
            "Backsplash and tile work",
            "Layout adjustments and space optimization",
            "Lighting and fixture updates",
          ],
        },
        whyItMatters: {
          title: "Why It Matters",
          description:
            "A poorly designed kitchen slows everything down—from cooking to cleaning to hosting guests. Renovating your kitchen isn’t just about appearance—it’s about improving flow, maximizing space, and making everyday tasks easier. A well-planned kitchen increases both your home’s value and your quality of life, making it one of the most impactful upgrades you can make.",
        },
      },
      {
        title: "Full Home Remodel",
        eyebrow: "Total Transformation",
        slug: "full-remodel",
        image: "/companies/top-tier-renovations/service-cards/service-4.png",
        description:
          "Complete interior and exterior renovation services for homeowners ready for a full transformation.",
        icon: "Home",
        overview: {
          title: "Complete Home Transformations Done the Right Way",
          description:
            "When it’s time for a full remodel, you need more than quick fixes—you need a plan that brings everything together. We handle complete interior and exterior renovations with a focus on consistency, quality, and long-term results. From structural updates to finishing details, every part of the project is managed carefully to ensure the final result feels cohesive and professionally done.",
        },
        includes: {
          title: "Scope of Work",
          items: [
            "Whole-home interior renovations",
            "Exterior upgrades and improvements",
            "Room reconfigurations and layout changes",
            "Coordinated flooring, kitchens, and bathrooms",
            "Project management from start to finish",
          ],
        },
        whyItMatters: {
          title: "Why It Matters",
          description:
            "A piecemeal approach to remodeling can leave a home feeling disconnected and unfinished. A full remodel allows you to align everything—from layout to finishes—into one cohesive vision. It’s the best way to modernize an older home, improve functionality, and significantly increase property value while avoiding repeated disruptions from separate projects.",
        },
      },
      {
        title: "General Maintenance",
        eyebrow: "Ongoing Care",
        slug: "maintenance",
        image: "/companies/top-tier-renovations/service-cards/service-5.jpg",
        description:
          "Reliable maintenance services to keep your home looking and working the way it should.",
        icon: "Wrench",
        overview: {
          title: "Reliable Maintenance That Keeps Everything Running Smoothly",
          description:
            "Not every project needs a full renovation. Ongoing maintenance is what keeps a home in good condition and prevents small issues from turning into major problems. We provide dependable maintenance services to handle repairs, updates, and general upkeep so homeowners can avoid the stress of unexpected breakdowns or damage.",
        },
        includes: {
          title: "Ongoing Services",
          items: [
            "General repairs and handyman services",
            "Fixture replacements and adjustments",
            "Minor electrical and plumbing fixes",
            "Interior and exterior touch-ups",
            "Preventative maintenance work",
          ],
        },
        whyItMatters: {
          title: "Why It Matters",
          description:
            "Small issues left unattended can quickly turn into expensive repairs. Regular maintenance helps preserve the condition of your home, extends the life of key systems, and gives you peace of mind. Having a reliable team to handle these tasks ensures your home stays safe, functional, and looking its best year-round.",
        },
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
      background: "#0B0F14",
      eyebrow: "#55a2f0",
      title: "#F8FAFC",
      description: "#8b99ad",
      cardBackground: "#202020",
      cardBorder: "#363636",
      cardTitle: "#F8FAFC",
      categoryBackground: "#1e8fffd5",
      categoryText: "#FFFFFF",
      icon: "#1E90FF",
      link: "#55a2f0",
      accent: "#1E90FF",
    }
  },
  testimonials: {
    eyebrow: "Customer Feedback",
    title: "Built on Quality Work and Satisfied Homeowners",
    description:
      "Top Tier Renovations is committed to delivering high-quality remodeling services with a focus on detail, reliability, and customer satisfaction. Check back soon to see what homeowners in San Antonio are saying.",
    styles: {
      background: "#0B0F14",
      eyebrow: "#55a2f0",
      title: "#FFFFFF",
      description: "#CBD5F5",
      cardBackground: "#202020",
      cardBorder: "#363636",
      quote: "#E2E8F0",
      name: "#FFFFFF",
      role: "#94A3B8",
      star: "#dacc14",
      mutedStar: "#334155",
      quoteIcon: "#1E90FF",
      ctaBackground: "#1E90FF",
      ctaText: "#FFFFFF",
      modalBackground: "linear-gradient(180deg, #202020 0%, #363636 70%, #202020 100%)",
      modalBorder: "#363636",
    },

    // intentionally no items yet
  },
  about: {
    title: "Quality Renovations. Clean Work. Reliable Service.",
    image: "/companies/top-tier-renovations/images/about-fade-image.png",
    imageAlt: "Top Tier Renovations remodeling project",
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
      main: "/companies/top-tier-renovations/images/service-cta-image.png",
      secondary: [
        "/companies/top-tier-renovations/contact/remodeling-project-bg.png", // TODO
      ],
      tertiary: [
        "/companies/top-tier-renovations/images/tertiary-image.png", // TODO
      ],
    },
    stats: {
      items: [
        { value: 5, suffix: "+", label: "Core remodeling services" },
        { value: 1, label: "Local renovation team" },
        { value: 100, suffix: "%", label: "Focused on quality work" },
        { value: 0, label: "Project details to confirm" }, // TODO: replace with real stat
      ],
      styles: {
        background: "#0B0F14",
        containerBg: "#202020",
        border: "#363636",
        numberColor: "#1E90FF",
        labelColor: "#475569",
      },
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
        hoverGradientFrom: "#1E90FF",
      },
    },
    styles: {
      background: "#0B0F14",
      cardBackground: "#202020",
      border: "#363636",
      title: "#F8FAFC",
      gradientFrom: "#0B0F14",
      gradientTo: "rgba(255,255,255,0)",
      text: "#1e293b",
      mutedText: "#8b99ad",
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

    image: "/companies/top-tier-renovations/images/service-cta-image.png",
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
    backgroundImage: "/companies/top-tier-renovations/images/service-cta-image.png",
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
        formBg: "#0B0F14",
        text: "#F8FAFC",
        mutedText: "#8b99ad",
        buttonBg: "#1E90FF",
        buttonText: "#FFFFFF",
        input: {
          background: "#202020",
          text: "#F8FAFC",
          placeholder: "#8b99ad",
          label: "#F8FAFC",
          ring: "#363636",
          focusOutline: "#1E90FF",
          activeRing: "#1E90FF",
        }
      },
      services: {
        formBg: "#0B0F14",
        text: "#F8FAFC",
        mutedText: "#8b99ad",
        buttonBg: "#1E90FF",
        buttonText: "#FFFFFF",
        input: {
          background: "#202020",
          text: "#F8FAFC",
          placeholder: "#8b99ad",
          label: "#F8FAFC",
          ring: "#363636",
          focusOutline: "#1E90FF",
          activeRing: "#1E90FF",
        }
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
      background: "#0B0F14",
      eyebrow: "#55a2f0",
      title: "#F8FAFC",
      description: "#8b99ad",
      itemBackground: "#FFFFFF",
      itemBorder: "#E2E8F0",
      question: "#0F172A",
      answer: "#475569",
      icon: "#F8FAFC",
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
    styles: {
      background: "#0B0F14",
      text: "#F8FAFC",
      mutedText: "#8b99ad",
      headingText: "#F8FAFC",
      linkText: "#8b99ad",
      linkHover: "#1E90FF",
      childLinkText: "#8b99ad",
      childLinkHover: "#1E90FF",
      border: "#8b99ad",
      bottomText: "#8b99ad",
      socialIcon: "#F8FAFC",
      socialIconHover: "#1E90FF",
    }
  },
};