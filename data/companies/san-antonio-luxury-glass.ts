import type { Company } from "@/lib/types";

export const sanAntonioLuxuryGlassCompany: Company = {
  general: {
    slug: "san-antonio-luxury-glass",
    subdomain: "san-antonio-luxury-glass",
    name: "San Antonio Luxury Glass",
    legalName: "San Antonio Luxury Glass LLC", // TODO: confirm legal business name
    tagline: "Revamp • Renew • Refresh",
    phone: "(830) 499-4374",
    email: "sanantonio@luxuryglass.com", // TODO: confirm email
    city: "San Antonio",
    state: "TX",
    googlePlaceId: "", // TODO: add Google Place ID
  },
  branding: {
    logo: "/companies/san-antonio-luxury-glass/logos/logo-1.png", // TODO: upload + confirm path
    navLogo: "/companies/san-antonio-luxury-glass/logos/logo-1.png", // TODO: create simplified/white version for navbar
    theme: {
      primary: "#C8A96A",      // soft champagne gold for CTAs, highlights, premium accents
      secondary: "#11161C",    // elevated dark section background
      accent: "#6B8A9C",       // cool glass-blue accent for subtle reflections/details
      background: "#0B0F14",   // deep charcoal luxury base
      surface: "#151B22",      // cards / containers
      text: "#EAEAEA",         // primary body text
      mutedText: "#A0A8B0",    // secondary text
      border: "#2A333D",       // subtle glass-like dividers
      eyebrow: "#C8A96A",      // premium gold eyebrow text
      title: "#F8FAFC",        // crisp white titles
      buttons: {
        primary: {
          background: "#C8A96A",
          text: "#0B0F14",
          hoverBackground: "#D7BB7A",
          hoverText: "#05070A",
        },
      },
      cards: {
        background: "#151B22", 
        border: "#2A333D",
        hoverBackground: "#1F2A33",
        hoverBorder: "#C8A96A",
        title: "#F8FAFC",
        description: "#A0A8B0",
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
          label: "Projects",
          href: "/#portfolio",
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
          children: [
            {
              label: "Our Story",
              href: "/about",
            },
            {
              label: "Customer Reviews",
              href: "/#testimonials",
            },
          ],
        },
        {
          label: "Contact",
          href: "/contact",
        },
      ],
      styles: {
        background: "#0B0F14",        // deep luxury base
        border: "#2A333D",            // subtle glass-like divider
        link: "#EAEAEA",              // clean readable text
        linkHover: "#C8A96A",         // gold accent on hover

        dropdownBackground: "#11161C",
        dropdownBorder: "#2A333D",

        phoneIcon: "#ffffff",
        phoneIconBg: "#C8A96A",       // gold badge
        mobilePhoneIconBg: "#151B22",
        mobilePhoneText: "#C8A96A",

        ctaBg: "#C8A96A",
        ctaText: "#ffffff",

        mobileBackground: "#0B0F14",
        mobileMenuBg: "#151B22",
        mobileMenuIcon: "#C8A96A",

        mobilePanelBg: "#11161C",
      },
      logo: {
        desktop: {
          width: "13rem",
          height: "13rem",
        },
        mobile: {
          width: "11rem",
          height: "7rem",
        },
      },
      showBreadcrumbHeader: false,
    },
  },
  pages: {
    home: {
      hero: {
        eyebrow: {
          content: "San Antonio Luxury Glass Specialists",
          styles: {
            color: "#C8A96A",
          },
        },

        title: {
          content: "Precision Glass. Elevated Spaces.",
          styles: {
            color: "#F8FAFC",
          },
        },

        subtitle: {
          content:
            "From frameless shower enclosures to custom glass railings and architectural installs, we deliver high-end glass solutions designed to enhance light, space, and modern living.",
          styles: {
            color: "#e1e3e6",
          },
        },

        primaryCta: {
          label: "Request a Free Estimate",
          href: "/contact",
          styles: {
            background: "#C8A96A",
            text: "#0B0F14",
          },
        },

        secondaryCta: {
          label: "Call (830) 499-4374",
          href: "tel:8304994374",
          styles: {
            text: "#EAEAEA",
          },
        },

        highlights: [
          { content: "Frameless Shower Glass" },
          { content: "Custom Glass Railings" },
          { content: "High-End Residential & Commercial" },
          { content: "San Antonio Local Experts" },
        ],
        images: [
          {
            src: "/companies/san-antonio-luxury-glass/hero-images/hero-1.png",
            alt: "Frameless glass shower enclosure with gold fixtures in a modern luxury bathroom",
            priority: true,
          },
          {
            src: "/companies/san-antonio-luxury-glass/hero-images/hero-2.png",
            alt: "Custom dual shower with frameless glass panels and matte black hardware",
            priority: true,
          },
          {
            src: "/companies/san-antonio-luxury-glass/hero-images/hero-3.png",
            alt: "Walk-in glass shower with sleek black framing and premium tile design",
            priority: true,
          },
          {
            src: "/companies/san-antonio-luxury-glass/hero-images/hero-4.png",
            alt: "Luxury frameless glass shower installation with clean modern finishes",
            priority: true,
          },
        ],
      },
      services: {
        eyebrow: {
          content: "What We Do",
          styles: {
            color: "#C8A96A",
          },
        },
        title: {
          content: "Custom Glass Services",
        },
        description: {
          content:
            "From frameless shower enclosures to glass railings and custom mirror installations, we create clean, premium glass solutions for modern homes and businesses.",
        },
        columns: 2,
        items: [
          {
            title: {
              content: "Frameless Shower Glass",
              styles: {
                color: "#F8FAFC",
              },
            },
            description: {
              content:
                "Clean, modern shower enclosures designed for a seamless luxury bathroom finish.",
              styles: {
                color: "#A0A8B0",
              },
            },
            image: {
              src: "/companies/san-antonio-luxury-glass/service-cards/service-1.png",
              alt: "Frameless glass shower enclosure in a luxury bathroom",
            },
            href: "/services/frameless-shower-glass",
            styles: {
              cardBg: "#151B22",
              cardBorder: "#2A333D",
              accent: "#C8A96A",
            },
          },
          {
            title: {
              content: "Custom Shower Doors",
              styles: {
                color: "#F8FAFC",
              },
            },
            description: {
              content:
                "Precision-fit glass shower doors with premium hardware and a clean, polished look.",
              styles: {
                color: "#A0A8B0",
              },
            },
            image: {
              src: "/companies/san-antonio-luxury-glass/service-cards/service-2.png",
              alt: "Custom glass shower door with black hardware",
            },
            href: "/services/custom-shower-doors",
            styles: {
              cardBg: "#151B22",
              cardBorder: "#2A333D",
              accent: "#C8A96A",
            },
          },
          {
            title: {
              content: "Glass Railings",
              styles: {
                color: "#F8FAFC",
              },
            },
            description: {
              content:
                "Sleek interior and exterior glass railing systems that open up views and elevate the space.",
              styles: {
                color: "#A0A8B0",
              },
            },
            image: {
              src: "/companies/san-antonio-luxury-glass/service-cards/service-3.png",
              alt: "Modern glass railing system in a luxury home",
            },
            href: "/services/glass-railings",
            styles: {
              cardBg: "#151B22",
              cardBorder: "#2A333D",
              accent: "#C8A96A",
            },
          },
          {
            title: {
              content: "Custom Mirrors",
              styles: {
                color: "#F8FAFC",
              },
            },
            description: {
              content:
                "Made-to-fit mirrors for bathrooms, vanities, gyms, studios, and statement walls.",
              styles: {
                color: "#A0A8B0",
              },
            },
            image: {
              src: "/companies/san-antonio-luxury-glass/service-cards/service-4.png",
              alt: "Custom wall mirror installation in a modern bathroom",
            },
            href: "/services/custom-mirrors",
            styles: {
              cardBg: "#151B22",
              cardBorder: "#2A333D",
              accent: "#C8A96A",
            },
          },
          {
            title: {
              content: "Commercial Glass",
              styles: {
                color: "#F8FAFC",
              },
            },
            description: {
              content:
                "Professional storefront glass, office partitions, and glass solutions for commercial spaces.",
              styles: {
                color: "#A0A8B0",
              },
            },
            image: {
              src: "/companies/san-antonio-luxury-glass/service-cards/service-5.png",
              alt: "Commercial storefront glass installation with modern clean finish",
            },
            href: "/services/commercial-glass",
            styles: {
              cardBg: "#151B22",
              cardBorder: "#2A333D",
              accent: "#C8A96A",
            },
          },
        ],
        styles: {
          background: "#0B0F14",
        },
      },
      logoSection: {
        title: {
          content: "Crafted for Modern Glass Installations",
          styles: {
            color: "#F8FAFC",
          },
        },

        description: {
          content:
            "From frameless shower enclosures to custom glass railings and mirrors, San Antonio Luxury Glass delivers precision craftsmanship designed to elevate light, space, and everyday living.",
          styles: {
            color: "#A0A8B0",
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
          content: "Why Clients Choose Us",
          styles: {
            color: "#C8A96A",
          },
        },

        title: {
          content: "Precision Glass Work Built on Detail and Craftsmanship",
          styles: {
            color: "#F8FAFC",
          },
        },

        description: {
          content:
            "From frameless shower enclosures to custom glass installations, we focus on clean lines, precise measurements, and a seamless finish that elevates the entire space.",
          styles: {
            color: "#A0A8B0",
          },
        },

        cards: [
          {
            title: {
              content: "Precision Installation",
              styles: {
                color: "#F8FAFC",
              },
            },
            description: {
              content:
                "Every piece of glass is measured and installed with exact precision for a flawless, seamless finish.",
            },
            icon: "Ruler",
            styles: {
              cardBg: "#151B22",
              cardBorder: "#2A333D",
              iconColor: "#C8A96A",
              iconBackground: "rgba(200, 169, 106, 0.15)",
              hoverBorder: "#C8A96A",
            },
          },
          {
            title: {
              content: "Premium Materials",
            },
            description: {
              content:
                "We use high-quality tempered glass and hardware designed for durability, safety, and long-term performance.",
            },
            icon: "ShieldCheck",
            styles: {
              cardBg: "#151B22",
              cardBorder: "#2A333D",
              iconColor: "#C8A96A",
              iconBackground: "rgba(200, 169, 106, 0.15)",
              hoverBorder: "#C8A96A",
            },
          },
          {
            title: {
              content: "Clean, Modern Design",
            },
            description: {
              content:
                "Our work is designed to enhance light, open up space, and create a sleek, modern look in every project.",
            },
            icon: "Layers",
            styles: {
              cardBg: "#151B22",
              cardBorder: "#2A333D",
              iconColor: "#C8A96A",
              iconBackground: "rgba(200, 169, 106, 0.15)",
              hoverBorder: "#C8A96A",
            },
          },
          {
            title: {
              content: "Local San Antonio Experts",
            },
            description: {
              content:
                "Proudly serving the San Antonio area with reliable service, clear communication, and consistent results.",
            },
            icon: "MapPin",
            styles: {
              cardBg: "#151B22",
              cardBorder: "#2A333D",
              iconColor: "#C8A96A",
              iconBackground: "rgba(200, 169, 106, 0.15)",
              hoverBorder: "#C8A96A",
            },
          },
        ],

        styles: {
          background: "#0B0F14",
          overlayGradient:
            "linear-gradient(to bottom, rgba(11,15,20,0.9), rgba(11,15,20,0.6), rgba(11,15,20,0.9))",
          patternColor: "#a5aaad",
          glowColor: "#C8A96A",
          glowOpacity: 0.08,
        },
      },
    },
  },
  services: {
    hero: {
      eyebrow: "What We Do",
      title: "Custom Glass Services",
      description:
        "From frameless shower enclosures to custom mirrors, glass railings, and commercial storefronts, we deliver clean, precise glass installations for homes and businesses.",
    },

    columns: 2,

    styles: {
      background: "#0B0F14",
      eyebrow: "#C8A96A",

      primaryCtaButtonBg: "#C8A96A",
      primaryCtaButtonText: "#0B0F14",
      secondaryCtaButtonText: "#F8FAFC",

      cardBackground: "#151B22",
      cardBorder: "#2A333D",
      cardTitle: "#F8FAFC",
      cardDescription: "#A0A8B0",
      accent: "#C8A96A",

      narrative: {
        background: "#0B0F14",
        eyebrow: "#C8A96A",
        title: "#F8FAFC",
        text: "#A0A8B0",
        accent: "#C8A96A",

        scopeCardBg: "#151B22",
        scopeCardBorder: "#2A333D",
        scopeCardColors: ["#C8A96A", "#6B8A9C", "#C8A96A", "#6B8A9C", "#C8A96A"],
        scopeCardText: "#F8FAFC",
        scopeCardIcon: "#C8A96A",
      },
    },
    items: [
      {
        title: "Frameless Shower Glass",
        eyebrow: "Luxury Bath Glass",
        slug: "frameless-shower-glass",
        image: "/companies/san-antonio-luxury-glass/service-cards/service-1.png",
        description:
          "Clean, modern frameless shower enclosures designed to open up your bathroom and showcase your finishes.",
        icon: "Bath",
        overview: {
          title: "Frameless Shower Glass That Elevates the Entire Bathroom",
          description:
            "Frameless shower glass gives your bathroom a cleaner, brighter, and more open feel. Instead of heavy framing or bulky shower doors, custom glass creates a seamless look that lets your tile, fixtures, and layout stand out. Whether you are finishing a new remodel or upgrading an older enclosure, we measure and install each panel with precision so the final result feels intentional, modern, and built to last.",
        },
        includes: {
          title: "What’s Included",
          items: [
            "Custom measurements for a precise fit",
            "Frameless glass shower panels",
            "Premium hinges, handles, and hardware",
            "Swinging or fixed glass panel options",
            "Professional installation and final alignment",
          ],
        },
        whyItMatters: {
          title: "Why Frameless Glass Matters",
          description:
            "Your shower is often the focal point of the bathroom. Frameless glass helps the space feel larger, allows more light to move through the room, and creates a high-end finish that traditional framed enclosures cannot match. A clean glass installation also makes the bathroom feel more polished, modern, and valuable.",
        },
        cta: {
          title: "Ready to Upgrade to Frameless Shower Glass?",
          description:
            "Tell us about your bathroom and we’ll help you create a clean, custom glass enclosure that fits your space beautifully.",
          primaryLabel: "Request a Custom Quote",
          primaryHref: "/contact",
          image: "/companies/san-antonio-luxury-glass/images/service-cta-image.png",
        },
      },
      {
        title: "Custom Shower Doors",
        eyebrow: "Precision Glass Doors",
        slug: "custom-shower-doors",
        image: "/companies/san-antonio-luxury-glass/service-cards/service-2.png",
        description:
          "Precision-fit shower doors built for a seamless look, smooth operation, and long-term durability.",
        icon: "DoorOpen",
        overview: {
          title: "Custom Shower Doors Built for a Perfect Fit",
          description:
            "A custom shower door completes the look and function of your bathroom. Instead of forcing a standard door into a unique opening, we measure your space and build the glass solution around the exact layout. From clean single-door installs to larger shower entrances with fixed panels, our goal is to create a door that feels smooth, secure, and visually refined every time you use it.",
        },
        includes: {
          title: "What’s Included",
          items: [
            "On-site measurement and layout review",
            "Custom glass shower door installation",
            "Premium handles, hinges, and seals",
            "Swinging, sliding, or fixed-panel options",
            "Final adjustment for clean operation",
          ],
        },
        whyItMatters: {
          title: "Why Custom Shower Doors Matter",
          description:
            "Shower doors need to look great, operate smoothly, and fit correctly. Poorly fitted doors can leak, shift, or make a bathroom feel unfinished. A custom glass door gives the space a cleaner appearance, improves everyday function, and adds a polished finish that supports the entire bathroom design.",
        },
        cta: {
          title: "Need a Custom Shower Door?",
          description:
            "We’ll measure your space and help you choose a clean glass door solution that fits your bathroom and your style.",
          primaryLabel: "Request a Custom Quote",
          primaryHref: "/contact",
          image: "/companies/san-antonio-luxury-glass/images/service-cta-image.png",
        },
      },
      {
        title: "Glass Railings",
        eyebrow: "Architectural Glass",
        slug: "glass-railings",
        image: "/companies/san-antonio-luxury-glass/service-cards/service-3.png",
        description:
          "Sleek glass railing systems that open up views while keeping your space safe, modern, and refined.",
        icon: "PanelsTopLeft",
        overview: {
          title: "Glass Railings That Open Up the View",
          description:
            "Glass railings bring a modern, open look to staircases, balconies, patios, and elevated spaces. They provide safety and structure without blocking sightlines, allowing your home or business to feel brighter, larger, and more connected. Whether you want a clean interior railing or an exterior glass system, we focus on precise installation, strong hardware, and a finished look that feels both secure and high-end.",
        },
        includes: {
          title: "What’s Included",
          items: [
            "Interior and exterior glass railing options",
            "Custom-measured glass panels",
            "Post, clamp, or framed railing systems",
            "Tempered safety glass",
            "Professional hardware installation",
          ],
        },
        whyItMatters: {
          title: "Why Glass Railings Matter",
          description:
            "Traditional railings can make spaces feel closed off, especially on stairs, balconies, and decks. Glass railings preserve safety while keeping the view open. They add a clean architectural detail that makes a property feel more modern, more spacious, and more visually connected.",
        },
        cta: {
          title: "Ready to Add Glass Railings?",
          description:
            "Let’s create a clean, modern railing system that opens up your space while keeping the structure safe and polished.",
          primaryLabel: "Request a Custom Quote",
          primaryHref: "/contact",
          image: "/companies/san-antonio-luxury-glass/images/service-cta-image.png",
        },
      },
      {
        title: "Custom Mirrors",
        eyebrow: "Interior Glass Details",
        slug: "custom-mirrors",
        image: "/companies/san-antonio-luxury-glass/service-cards/service-4.png",
        description:
          "Made-to-fit mirrors that add light, depth, and a polished finish to bathrooms, gyms, studios, and interior spaces.",
        icon: "Scan",
        overview: {
          title: "Custom Mirrors That Make Spaces Feel Brighter and Larger",
          description:
            "Custom mirrors are one of the simplest ways to elevate a room. A properly sized mirror adds light, creates visual depth, and gives the space a more finished look. Whether you need a bathroom vanity mirror, a large wall mirror, or a custom mirror for a gym, studio, or commercial space, we measure and install each piece to fit the layout cleanly and securely.",
        },
        includes: {
          title: "What’s Included",
          items: [
            "Custom mirror measurement",
            "Bathroom vanity mirrors",
            "Large wall mirror installations",
            "Gym, studio, and commercial mirrors",
            "Clean mounting and finished edges",
          ],
        },
        whyItMatters: {
          title: "Why Custom Mirrors Matter",
          description:
            "Mirrors do more than reflect an image. They influence how bright, open, and balanced a room feels. A mirror that is too small or poorly placed can make a space feel unfinished. A custom mirror is built around the room, giving the space better proportion, cleaner lines, and a more intentional design.",
        },
        cta: {
          title: "Ready to Add a Custom Mirror?",
          description:
            "Tell us about your space and we’ll help you create a mirror installation that feels clean, balanced, and custom-built.",
          primaryLabel: "Request a Custom Quote",
          primaryHref: "/contact",
          image: "/companies/san-antonio-luxury-glass/images/service-cta-image.png",
        },
      },
      {
        title: "Commercial Glass",
        eyebrow: "Storefront & Business Glass",
        slug: "commercial-glass",
        image: "/companies/san-antonio-luxury-glass/service-cards/service-5.png",
        description:
          "Professional storefront and commercial glass installations designed for visibility, curb appeal, and a clean first impression.",
        icon: "Building2",
        overview: {
          title: "Commercial Glass That Creates a Strong First Impression",
          description:
            "Your storefront or commercial glass system plays a major role in how customers experience your business before they ever walk inside. Clean glass, strong framing, and professional installation help your space feel more open, visible, and trustworthy. From storefront panels to entry doors and interior glass solutions, we provide commercial glass work built around function, durability, and a polished appearance.",
        },
        includes: {
          title: "What’s Included",
          items: [
            "Storefront glass installation",
            "Commercial entry doors",
            "Large glass panel replacement",
            "Office and interior glass options",
            "Black frame and modern finish options",
          ],
        },
        whyItMatters: {
          title: "Why Commercial Glass Matters",
          description:
            "Commercial glass affects visibility, security, natural light, and curb appeal. Damaged, outdated, or poorly installed glass can make a business feel less professional. A clean storefront or interior glass system helps create a better first impression while supporting the daily function of the space.",
        },
        cta: {
          title: "Need Commercial Glass for Your Business?",
          description:
            "We’ll help you create a clean, professional glass solution for your storefront, office, or commercial space.",
          primaryLabel: "Request a Custom Quote",
          primaryHref: "/contact",
          image: "/companies/san-antonio-luxury-glass/images/service-cta-image.png",
        },
      },
    ],
  },
  portfolio: {
    eyebrow: "Our Work",
    title: "Featured Projects",
    description:
      "A showcase of our recent glass installations, highlighting frameless shower enclosures, custom railings, and clean, modern designs built with precision.",
    items: [
      {
        slug: "frameless-shower-glass",
        title: "Frameless Shower Glass",
        projectName: "Luxury Frameless Shower Enclosure",
        description:
          "A clean, modern shower enclosure designed to make the bathroom feel open, bright, and elevated.",
        image: "/companies/san-antonio-luxury-glass/service-cards/service-1.png",
        category: "Luxury Bath",
        icon: "Bath",
        href: "/case-studies/frameless-shower-glass",
        snapshot: [
          { label: "Service", value: "Frameless Shower Glass", icon: "Bath" },
          { label: "Location", value: "San Antonio, TX", icon: "MapPin" },
          { label: "Timeline", value: "2–3 Days", icon: "Clock" },
          { label: "Scope", value: "Custom Glass Enclosure", icon: "Layers" },
        ],

        caseStudy: {
          eyebrow: "Case Study",
          title: "Frameless Shower That Elevated the Entire Bathroom",
          description:
            "A homeowner wanted to upgrade their bathroom with a clean, modern glass enclosure that would open up the space and highlight the tile work.",

          challenge: {
            label: "Challenge",
            title: "Bulky Framing and a Closed-Off Feel",
            description:
              "The existing shower enclosure used heavy framing that made the space feel smaller and hid the detail in the tile and finishes.",
            icon: "AlertTriangle",
          },

          solution: {
            label: "Solution",
            title: "Custom Frameless Glass Installation",
            description:
              "We installed a precision-cut frameless glass enclosure with minimal hardware, allowing natural light to flow and creating a seamless, open look.",
            icon: "Wrench",
          },

          result: {
            label: "Result",
            title: "A Brighter, More Open Bathroom",
            description:
              "The new frameless shower transformed the space, making it feel larger, cleaner, and more modern while showcasing the full design of the bathroom.",
            icon: "CheckCircle",
          },

          gallery: [
            {
              image: "/companies/san-antonio-luxury-glass/service-cards/service-1.png",
              alt: "Frameless glass shower enclosure in a modern bathroom",
              caption: "Custom frameless shower enclosure with clean, minimal hardware",
            },
            {
              image: "/companies/san-antonio-luxury-glass/hero-images/hero-2.png",
              alt: "Luxury walk-in shower with glass panels",
              caption: "Glass panels create an open, seamless shower experience",
            },
            {
              image: "/companies/san-antonio-luxury-glass/hero-images/hero-1.png",
              alt: "Modern bathroom with frameless shower installation",
              caption: "Final result — a brighter, more open, and elevated bathroom",
            },
          ],
        },
        layout: { colStart: 1, rowStart: 1, colSpan: 2, rowSpan: 2 },
      },
      {
        slug: "custom-shower-doors",
        title: "Custom Shower Doors",
        projectName: "Precision-Fit Glass Shower Door",
        description:
          "A custom glass shower door installation with premium hardware and a seamless finished look.",
        image: "/companies/san-antonio-luxury-glass/service-cards/service-2.png",
        category: "Custom Glass",
        icon: "DoorOpen",
        href: "/case-studies/custom-shower-doors",
        snapshot: [
          { label: "Service", value: "Custom Shower Doors", icon: "DoorOpen" },
          { label: "Location", value: "San Antonio, TX", icon: "MapPin" },
          { label: "Timeline", value: "1–2 Days", icon: "Clock" },
          { label: "Scope", value: "Glass Door Installation", icon: "Layers" },
        ],

        caseStudy: {
          eyebrow: "Case Study",
          title: "Custom Shower Door That Completed the Space",
          description:
            "A homeowner needed a clean, precise glass door solution to complete their newly remodeled shower.",

          challenge: {
            label: "Challenge",
            title: "Standard Doors Didn’t Fit the Space",
            description:
              "The shower opening required a custom fit, and off-the-shelf options left gaps or compromised the overall look.",
            icon: "AlertTriangle",
          },

          solution: {
            label: "Solution",
            title: "Precision-Measured Glass Door",
            description:
              "We installed a custom-fit glass door with premium hardware, ensuring a tight seal and a clean, modern finish.",
            icon: "Wrench",
          },

          result: {
            label: "Result",
            title: "A Seamless, Finished Look",
            description:
              "The new door completed the bathroom, giving it a polished, cohesive appearance with improved function.",
            icon: "CheckCircle",
          },

          gallery: [
            {
              image: "/companies/san-antonio-luxury-glass/service-cards/service-2.png",
              alt: "Custom glass shower door installation",
              caption: "Precision-fit glass door with premium hardware",
            },
            {
              image: "/companies/san-antonio-luxury-glass/hero-images/hero-2.png",
              alt: "Modern shower with custom glass door",
              caption: "Clean lines and a tight fit create a polished finish",
            },
            {
              image: "/companies/san-antonio-luxury-glass/hero-images/hero-3.png",
              alt: "Luxury shower door detail",
              caption: "Final result — a seamless and functional shower entry",
            },
          ],
        },
        layout: { colSpan: 1 },
      },
      {
        slug: "glass-railings",
        title: "Glass Railings",
        projectName: "Modern Glass Railing Installation",
        description:
          "A sleek glass railing system designed to open up the space while keeping the home clean and modern.",
        image: "/companies/san-antonio-luxury-glass/service-cards/service-3.png",
        category: "Architectural Glass",
        icon: "PanelsTopLeft",
        href: "/case-studies/glass-railings",
        snapshot: [
          { label: "Service", value: "Glass Railings", icon: "PanelsTopLeft" },
          { label: "Location", value: "San Antonio, TX", icon: "MapPin" },
          { label: "Timeline", value: "2–4 Days", icon: "Clock" },
          { label: "Scope", value: "Railing Installation", icon: "Layers" },
        ],

        caseStudy: {
          eyebrow: "Case Study",
          title: "Glass Railings That Opened Up the Entire Space",
          description:
            "A homeowner wanted to replace traditional railings with a cleaner, more modern glass solution.",

          challenge: {
            label: "Challenge",
            title: "Blocked Views and Outdated Design",
            description:
              "The existing railing system made the space feel closed off and didn’t match the home’s updated interior.",
            icon: "AlertTriangle",
          },

          solution: {
            label: "Solution",
            title: "Modern Glass Railing System",
            description:
              "We installed a sleek glass railing system that maintained safety while opening up sightlines throughout the space.",
            icon: "Wrench",
          },

          result: {
            label: "Result",
            title: "A More Open and Modern Feel",
            description:
              "The new railings created a clean, high-end look while making the home feel larger and more connected.",
            icon: "CheckCircle",
          },

          gallery: [
            {
              image: "/companies/san-antonio-luxury-glass/service-cards/service-3.png",
              alt: "Modern glass railing installation",
              caption: "Sleek glass railing system with clean lines",
            },
            {
              image: "/companies/san-antonio-luxury-glass/service-cards/service-3.png",
              alt: "Interior glass railing staircase",
              caption: "Glass panels open up views across the space",
            },
            {
              image: "/companies/san-antonio-luxury-glass/service-cards/service-3.png",
              alt: "Exterior glass railing balcony",
              caption: "Final result — modern, open, and visually seamless",
            },
          ],
        },
        layout: { colSpan: 1 },
      },
      {
        slug: "custom-mirrors",
        title: "Custom Mirrors",
        projectName: "Custom Vanity Mirror Installation",
        description:
          "A made-to-fit mirror installation that adds light, depth, and a polished finish to the space.",
        image: "/companies/san-antonio-luxury-glass/service-cards/service-4.png",
        category: "Interior Glass",
        icon: "Scan",
        href: "/case-studies/custom-mirrors",
        snapshot: [
          { label: "Service", value: "Custom Mirrors", icon: "Scan" },
          { label: "Location", value: "San Antonio, TX", icon: "MapPin" },
          { label: "Timeline", value: "1 Day", icon: "Clock" },
          { label: "Scope", value: "Mirror Installation", icon: "Layers" },
        ],

        caseStudy: {
          eyebrow: "Case Study",
          title: "Custom Mirrors That Added Light and Depth",
          description:
            "A homeowner wanted a mirror solution that would enhance both lighting and the overall feel of the space.",

          challenge: {
            label: "Challenge",
            title: "Limited Light and Visual Depth",
            description:
              "The space felt smaller and darker without properly sized or positioned mirrors.",
            icon: "AlertTriangle",
          },

          solution: {
            label: "Solution",
            title: "Made-to-Fit Mirror Installation",
            description:
              "We installed a custom mirror sized specifically for the space, improving light reflection and visual balance.",
            icon: "Wrench",
          },

          result: {
            label: "Result",
            title: "A Brighter, More Open Room",
            description:
              "The mirror added depth and brightness, giving the room a cleaner and more refined look.",
            icon: "CheckCircle",
          },

          gallery: [
            {
              image: "/companies/san-antonio-luxury-glass/service-cards/service-4.png",
              alt: "Custom mirror installation in bathroom",
              caption: "Large custom mirror enhances lighting and space",
            },
            {
              image: "/companies/san-antonio-luxury-glass/service-cards/service-4.png",
              alt: "Vanity mirror with modern lighting",
              caption: "Clean, tailored fit for a polished finish",
            },
            {
              image: "/companies/san-antonio-luxury-glass/service-cards/service-4.png",
              alt: "Mirror wall installation",
              caption: "Final result — brighter and more visually open space",
            },
          ],
        },
        layout: { colSpan: 1 },
      },
      {
        slug: "commercial-glass",
        title: "Commercial Glass",
        projectName: "Modern Storefront Glass Installation",
        description:
          "A clean commercial glass storefront designed for visibility, curb appeal, and a professional first impression.",
        image: "/companies/san-antonio-luxury-glass/service-cards/service-5.png",
        category: "Commercial Glass",
        icon: "Building2",
        href: "/case-studies/commercial-glass",
        snapshot: [
          { label: "Service", value: "Commercial Glass", icon: "Building2" },
          { label: "Location", value: "San Antonio, TX", icon: "MapPin" },
          { label: "Timeline", value: "3–5 Days", icon: "Clock" },
          { label: "Scope", value: "Storefront Installation", icon: "Layers" },
        ],

        caseStudy: {
          eyebrow: "Case Study",
          title: "Storefront Glass That Improved Visibility and Appeal",
          description:
            "A business owner needed a clean, modern storefront to improve curb appeal and attract more customers.",

          challenge: {
            label: "Challenge",
            title: "Outdated and Uninviting Exterior",
            description:
              "The previous storefront lacked visibility and didn’t reflect the professionalism of the business.",
            icon: "AlertTriangle",
          },

          solution: {
            label: "Solution",
            title: "Modern Glass Storefront Installation",
            description:
              "We installed large glass panels with clean framing to create a more open, welcoming storefront.",
            icon: "Wrench",
          },

          result: {
            label: "Result",
            title: "A Professional, Eye-Catching Exterior",
            description:
              "The updated storefront improved visibility and gave the business a stronger first impression.",
            icon: "CheckCircle",
          },

          gallery: [
            {
              image: "/companies/san-antonio-luxury-glass/service-cards/service-5.png",
              alt: "Commercial glass storefront installation",
              caption: "Modern storefront with clean glass panels",
            },
            {
              image: "/companies/san-antonio-luxury-glass/service-cards/service-5.png",
              alt: "Retail glass exterior",
              caption: "Improved visibility and natural light",
            },
            {
              image: "/companies/san-antonio-luxury-glass/service-cards/service-5.png",
              alt: "Finished storefront glass project",
              caption: "Final result — clean, professional, and inviting",
            },
          ],
        },
        layout: { colSpan: 2 },
      },
    ],
    styles: {
      background: "#0B0F14",
      eyebrow: "#C8A96A",
      title: "#F8FAFC",
      description: "#A0A8B0",

      cardBackground: "#151B22",
      cardBorder: "#2A333D",
      cardTitle: "#F8FAFC",

      categoryBackground: "rgba(39, 38, 38, 0.88)",
      categoryText: "#C8A96A",

      icon: "#C8A96A",
      link: "#C8A96A",
      accent: "#C8A96A",

      ctaBackground: "#11161C",
    },
  },
  testimonials: {
    eyebrow: "Client Feedback",

    title: "Trusted Craftsmanship. Real Results.",

    description:
      "We take pride in delivering clean, precise glass installations that elevate every space. Here’s what homeowners and businesses in San Antonio are saying about working with our team.",

    styles: {
      background: "#0B0F14",
      eyebrow: "#C8A96A",
      title: "#F8FAFC",
      description: "#A0A8B0",

      cardBackground: "#151B22",
      cardBorder: "#2A333D",

      quote: "#EAEAEA",
      name: "#F8FAFC",
      role: "#A0A8B0",

      star: "#dacc14",
      mutedStar: "#2A333D",

      quoteIcon: "#C8A96A",

      ctaBackground: "#C8A96A",
      ctaText: "#0B0F14",

      modalBackground:
        "linear-gradient(180deg, #11161C 0%, #151B22 70%, #11161C 100%)",
      modalBorder: "#151B22",
    },
    items: [
      {
        name: "Martin G.",
        quote:
          "The frameless shower they installed completely changed the feel of our bathroom. It looks clean, modern, and makes the space feel twice as big.",
        image: "https://i.pravatar.cc/150?img=1",
        role: "Homeowner, San Antonio TX",
      },
      {
        name: "James R.",
        quote:
          "We needed a custom glass shower door and they nailed the fit perfectly. The hardware feels solid and the finish is exactly what we were hoping for.",
        image: "https://i.pravatar.cc/150?img=2",
        role: "Homeowner, San Antonio TX",
      },
      {
        name: "John L.",
        quote:
          "The glass railing they installed opened up our entire staircase. It feels more modern and lets so much more light into the space.",
        image: "https://i.pravatar.cc/150?img=3",
        role: "Homeowner, San Antonio TX",
      },
      {
        name: "Carlos M.",
        quote:
          "These guys know what they’re doing with glass. Clean install, no shortcuts, and everything lined up perfectly.",
        image: "https://i.pravatar.cc/150?img=4",
        role: "Homeowner, San Antonio TX",
      },
      {
        name: "Patricia H.",
        quote:
          "We added a custom mirror to our bathroom and it made a huge difference. The room feels brighter and more finished now.",
        image: "https://i.pravatar.cc/150?img=5",
        role: "Homeowner, San Antonio TX",
      },
      {
        name: "David W.",
        quote:
          "They handled multiple glass installs in our home and everything came out consistent and high quality. It’s hard to find that level of detail.",
        image: "https://i.pravatar.cc/150?img=6",
        role: "Homeowner, San Antonio TX",
      },
      {
        name: "Lance T.",
        quote:
          "Our shower upgrade felt like a completely different bathroom after they installed the frameless glass. Super clean look.",
        image: "https://i.pravatar.cc/150?img=7",
        role: "Homeowner, San Antonio TX",
      },
      {
        name: "Robert K.",
        quote:
          "The process was straightforward and the install was done right. No issues, no surprises, just solid work.",
        image: "https://i.pravatar.cc/150?img=8",
        role: "Homeowner, San Antonio TX",
      },
      {
        name: "Angela F.",
        quote:
          "We had them install glass railings on our balcony and it made the whole space feel more open and modern.",
        image: "https://i.pravatar.cc/150?img=9",
        role: "Homeowner, San Antonio TX",
      },
      {
        name: "Maria D.",
        quote:
          "They explained everything clearly and delivered exactly what they said they would. The glass work looks amazing.",
        image: "https://i.pravatar.cc/150?img=10",
        role: "Homeowner, San Antonio TX",
      },
      {
        name: "Steven B.",
        quote:
          "The shower glass install was quick and the finish is top quality. It really upgraded the entire bathroom.",
        image: "https://i.pravatar.cc/150?img=11",
        role: "Homeowner, San Antonio TX",
      },
      {
        name: "Kevin O.",
        quote:
          "Great communication and even better execution. Everything from measurement to install was handled professionally.",
        image: "https://i.pravatar.cc/150?img=12",
        role: "Homeowner, San Antonio TX",
      },
      {
        name: "Nancy C.",
        quote:
          "We’ve used them for multiple glass projects and they’ve been consistent every time. Reliable and easy to work with.",
        image: "https://i.pravatar.cc/150?img=13",
        role: "Homeowner, San Antonio TX",
      },
      {
        name: "Tony V.",
        quote:
          "They gave us a straightforward solution and didn’t try to oversell anything. Honest work and great results.",
        image: "https://i.pravatar.cc/150?img=14",
        role: "Homeowner, San Antonio TX",
      },
    ],
  },
  about: {
    title: "Built with Precision, Built to Last",
    image: "/companies/san-antonio-luxury-glass/images/about-fade-image.png",
    imageAlt: "San Antonio Luxury Glass remodeling project",
    team: {
      members: [
        {
          name: "Manu Arora",
          role: "Owner & Lead Glass Specialist",
          avatar: "https://assets.aceternity.com/avatars/manu.webp",
        },
        {
          name: "John Doe",
          role: "Project Manager",
          avatar: "https://assets.aceternity.com/avatars/1.webp",
        },
        {
          name: "Glennfiddich Doe",
          role: "Senior Glass Installer",
          avatar: "https://assets.aceternity.com/avatars/2.webp",
        },
        {
          name: "Jameson Beam",
          role: "Frameless Shower Specialist",
          avatar: "https://assets.aceternity.com/avatars/3.webp",
        },
        {
          name: "Johnny Walker",
          role: "Glass Fabrication & Measurement Technician",
          avatar: "https://assets.aceternity.com/avatars/4.webp",
        },
      ],
    },
    storyTitle: "Built to Revamp, Renew, and Refresh",
    story: [
      "San Antonio Luxury Glass helps homeowners transform their spaces with reliable interior and exterior remodeling services. From flooring and custom showers to kitchens and full home remodels, the goal is simple: quality work that improves the way your home looks and feels.",
      "Based in San Antonio, San Antonio Luxury Glass focuses on clear communication, detailed craftsmanship, and dependable service from the first estimate to the final walkthrough. Whether it’s a small upgrade or a larger renovation, every project is handled with care.",
    ],
    highlights: [
      {
        title: "Frameless Glass Specialists",
        description:
          "We focus on clean, frameless glass installations that create a modern, open look in any space.",
      },
      {
        title: "Designed to Enhance Light & Space",
        description:
          "Our glass solutions are built to maximize natural light and make your space feel larger and more refined.",
      },
      {
        title: "Residential & Commercial Projects",
        description:
          "From homes to storefronts, we deliver high-quality glass installations tailored to your needs.",
      },
      {
        title: "San Antonio Local Experts",
        description:
          "Proudly serving San Antonio with reliable service, clear communication, and consistent results.",
      },
    ],
    quote: {
      text: "Our goal is to deliver clean, precise glass work that elevates your space — something you notice every day and feel confident in for years to come.",
      author: "San Antonio Luxury Glass Team",
      avatar: "https://i.pravatar.cc/150?img=13", // TODO: replace with owner/team photo
    },
    images: {
      main: "/companies/san-antonio-luxury-glass/images/service-cta-image.png",
      secondary: [
        "/companies/san-antonio-luxury-glass/contact/remodeling-project-bg.png", // TODO
      ],
      tertiary: [
        "/companies/san-antonio-luxury-glass/images/tertiary-image.png", // TODO
      ],
    },
    stats: {
      items: [
        {
          value: 100,
          suffix: "%",
          label: "Custom-Measured Installations",
        },
        {
          value: 5,
          suffix: "+",
          label: "Core Glass Services",
        },
        {
          value: 1,
          label: "Dedicated San Antonio Team",
        },
        {
          value: 24,
          suffix: "hr",
          label: "Typical Quote Response Time",
        },
      ],

      styles: {
        background: "#0B0F14",
        containerBg: "#151B22",
        border: "#2A333D",

        numberColor: "#C8A96A",
        labelColor: "#A0A8B0",
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
          title: "Frameless Shower Glass",
          description:
            "Clean, modern shower enclosures designed to open up your space and highlight your bathroom finishes.",
          icon: "Bath",
        },
        {
          title: "Custom Shower Doors",
          description:
            "Precision-fit glass doors built for a seamless look, smooth operation, and long-term durability.",
          icon: "DoorOpen",
        },
        {
          title: "Glass Railings",
          description:
            "Sleek interior and exterior railing systems that improve visibility while maintaining safety and structure.",
          icon: "PanelsTopLeft",
        },
        {
          title: "Custom Mirrors",
          description:
            "Made-to-fit mirrors that enhance lighting, depth, and the overall feel of your space.",
          icon: "Scan",
        },
        {
          title: "Commercial Glass",
          description:
            "Storefront and interior glass solutions designed to improve visibility and create a professional appearance.",
          icon: "Building2",
        },
        {
          title: "Precision Measurement",
          description:
            "Every project is carefully measured to ensure a perfect fit and a clean, polished installation.",
          icon: "Ruler",
        },
        {
          title: "Clean, Professional Installation",
          description:
            "Our team focuses on clean execution, attention to detail, and a finished product that speaks for itself.",
          icon: "BadgeCheck",
        },
        {
          title: "San Antonio Local Experts",
          description:
            "Proudly serving homeowners and businesses throughout the San Antonio area with reliable service.",
          icon: "MapPin",
        },
      ],
      title: "What Sets San Antonio Luxury Glass Apart",
      description:
        "We focus on precision, clean design, and high-quality materials to deliver glass installations that elevate your space. Every project is custom-measured and installed with attention to detail, giving you a seamless finish that stands out from standard, off-the-shelf solutions.",
      styles: {
        hoverGradientFrom: "#C8A96A",
        accent: "#ffffff",
      },
    },
    styles: {
      background: "#0B0F14",
      cardBackground: "#151B22",
      border: "#363636",
      title: "#F8FAFC",
      gradientFrom: "#0B0F14",
      gradientTo: "rgba(255,255,255,0)",
      text: "#1e293b",
      mutedText: "#8b99ad",
    },
  },
  finalCta: {
    title: "Ready to Elevate Your Space with Custom Glass?",
    description:
      "From frameless shower enclosures to custom glass railings and mirrors, we deliver clean, modern installations designed to enhance light, space, and everyday living.",
    primaryCta: {
      label: "Request a Custom Quote",
      href: "/contact",
    },
    secondaryCta: {
      label: "Call (210) 612-9114",
      href: "tel:2106129114",
    },
    image: "/companies/san-antonio-luxury-glass/images/service-cta-image.png",
    imageAlt: "Frameless glass shower installation in a modern luxury bathroom",
    styles: {
      background: "#151B22",
      title: "#F8FAFC",
      description: "#A0A8B0",
      buttonBg: "#C8A96A",
      buttonText: "#0B0F14",
    },
  },
  contact: {
    backgroundImage: "/companies/san-antonio-luxury-glass/images/service-cta-image.png",

    title: "Request Your Custom Glass Quote",

    description:
      "Ready to upgrade your bathroom, railing, mirror, or storefront glass? Tell us about your project and our team will follow up with the next steps.",

    testimonial: {
      quote:
        "The frameless shower glass completely changed the look of our bathroom. Clean install, great communication, and the finish looks incredible.",
      name: "TODO: Real Customer Name",
      title: "Homeowner, San Antonio TX",
      avatar: "https://i.pravatar.cc/150?img=13",
    },

    form: {
      title: "Contact San Antonio Luxury Glass",
      description: "Have a question or project in mind? Email us at",
      email: "info@sanantonioluxuryglass.com", // TODO: confirm email
      services: [
        { label: "Frameless Shower Glass", value: "frameless-shower-glass" },
        { label: "Custom Shower Doors", value: "custom-shower-doors" },
        { label: "Glass Railings", value: "glass-railings" },
        { label: "Custom Mirrors", value: "custom-mirrors" },
        { label: "Commercial Glass", value: "commercial-glass" },
        { label: "Other", value: "other" },
      ],
    },

    styles: {
      home: {
        formBg: "#0B0F14",
        text: "#F8FAFC",
        mutedText: "#A0A8B0",
        buttonBg: "#C8A96A",
        buttonText: "#0B0F14",
        input: {
          background: "#151B22",
          text: "#F8FAFC",
          placeholder: "#A0A8B0",
          label: "#F8FAFC",
          ring: "#2A333D",
          focusOutline: "#C8A96A",
          activeRing: "#C8A96A",
        },
      },

      services: {
        formBg: "#0B0F14",
        text: "#F8FAFC",
        mutedText: "#A0A8B0",
        buttonBg: "#C8A96A",
        buttonText: "#0B0F14",
        input: {
          background: "#151B22",
          text: "#F8FAFC",
          placeholder: "#A0A8B0",
          label: "#F8FAFC",
          ring: "#2A333D",
          focusOutline: "#C8A96A",
          activeRing: "#C8A96A",
        },
      },

      contact: {
        background: "linear-gradient(to bottom, #A0A8B0 0%, #0B0F14 100%)",
        formBg: "#0B0F14",
        text: "#F8FAFC",
        mutedText: "#A0A8B0",
        buttonBg: "#C8A96A",
        buttonText: "#0B0F14",
        input: {
          background: "#151B22",
          text: "#F8FAFC",
          placeholder: "#A0A8B0",
          label: "#F8FAFC",
          ring: "#2A333D",
          focusOutline: "#C8A96A",
          activeRing: "#C8A96A",
        },
      },
    },
  },
  faq: {
    eyebrow: "Common Questions",

    title: "What Clients Ask Before Getting Started",

    description:
      "Here are some of the most common questions about our glass services, installation process, and what to expect when working with San Antonio Luxury Glass.",

    items: [
      {
        question: "Do you offer free estimates?",
        answer:
          "Yes, we offer free estimates for all glass projects. Reach out by phone or through our contact form and we’ll schedule a time to review your space.",
      },
      {
        question: "What types of glass services do you offer?",
        answer:
          "We specialize in frameless shower glass, custom shower doors, glass railings, custom mirrors, and commercial glass installations.",
      },
      {
        question: "How long does a typical glass installation take?",
        answer:
          "Most residential installations like shower glass or mirrors take 1–3 days after measurements are completed. Larger or custom projects may take slightly longer.",
      },
      {
        question: "Do you handle custom-sized glass projects?",
        answer:
          "Yes, all of our work is custom-measured and built to fit your space. This ensures a clean, precise fit and a more polished final result.",
      },
      {
        question: "Will frameless glass make my bathroom look bigger?",
        answer:
          "In most cases, yes. Frameless glass opens up the space, allows more light through, and creates a cleaner, more modern look compared to framed enclosures.",
      },
      {
        question: "How do I get started?",
        answer:
          "You can call, text, or submit a request through our website. We’ll walk you through the next steps and schedule a time to review your project.",
      },
    ],

    styles: {
      background: "#0B0F14",
      eyebrow: "#C8A96A",
      title: "#F8FAFC",
      description: "#A0A8B0",

      itemBackground: "#151B22",
      itemBorder: "#2A333D",

      question: "#F8FAFC",
      answer: "#A0A8B0",

      icon: "#F8FAFC",
      accent: "#C8A96A",
    },
  },
  footer: {
    shortDescription:
      "San Antonio Luxury Glass provides custom glass installations for homes and businesses. From frameless shower enclosures to railings, mirrors, and storefront glass, we deliver clean, precise work that elevates every space.",

    serviceArea: "San Antonio, TX and surrounding areas",

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
      mutedText: "#A0A8B0",
      headingText: "#F8FAFC",

      linkText: "#A0A8B0",
      linkHover: "#C8A96A",

      childLinkText: "#A0A8B0",
      childLinkHover: "#C8A96A",

      border: "#2A333D",
      bottomText: "#A0A8B0",

      socialIcon: "#F8FAFC",
      socialIconHover: "#C8A96A",
    },
  },
};