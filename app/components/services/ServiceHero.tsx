import Image from "next/image";
import Link from "next/link";
import type { Company } from "@/lib/types/company";
import type { ServiceItem } from "@/lib/types/old-types";
import { getNavbarHeroOffset } from "@/lib/navbar-layout";

interface ServiceHeroProps {
  company: Company;
  service: ServiceItem;
}

export function ServiceHero({ company, service }: ServiceHeroProps) {
  const t = company.branding.theme;
  const heroTitle = service.heroTitle ?? service.title;
  const heroDesc = service.heroDescription ?? service.description;

  const navbarOffset = getNavbarHeroOffset(company);

  return (
    <section
      className="px-4 sm:px-6 lg:px-8 pt-[calc(var(--hero-offset-mobile)+64px)] pb-16 lg:pt-[calc(var(--hero-offset-desktop)+80px)] lg:pb-20"
      style={{
        backgroundColor: t.background,
        "--hero-offset-desktop": navbarOffset.desktop,
        "--hero-offset-mobile": navbarOffset.mobile,
      } as React.CSSProperties}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: text */}
          <div>
            {service.eyebrow && (
              <p
                className="text-xs font-bold uppercase tracking-widest mb-3"
                style={{ color: t.eyebrow }}
              >
                {service.eyebrow}
              </p>
            )}
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight mb-5"
              style={{ color: t.text }}
            >
              {heroTitle}
            </h1>
            <p
              className="text-lg leading-relaxed mb-8"
              style={{ color: t.mutedText }}
            >
              {heroDesc}
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={service.cta?.primaryHref ?? `#contact-${service.slug}`}
                className="inline-flex items-center px-6 py-3 rounded-lg text-sm font-bold text-white transition hover:opacity-90"
                style={{ backgroundColor: t.buttons.primary.background, color: t.buttons.primary.text }}
              >
                {service.cta?.primaryLabel ?? "Request a Quote"}
              </a>
              <Link
                href="/services"
                className="inline-flex items-center px-6 py-3 rounded-lg text-sm font-bold border transition hover:opacity-70"
                style={{ borderColor: t.border, color: t.text }}
              >
                ← All Services
              </Link>
            </div>
          </div>

          {/* Right: image */}
          {service.image && (
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={service.image}
                alt={service.title}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
