import Image from "next/image";
import Link from "next/link";
import type { Company, ServiceItem } from "@/data/companies";

interface ServiceHeroProps {
  company: Company;
  service: ServiceItem;
}

export function ServiceHero({ company, service }: ServiceHeroProps) {
  const t = company.branding.theme;
  const heroTitle = service.heroTitle ?? service.title;
  const heroDesc = service.heroDescription ?? service.description;

  return (
    <section
      className="py-16 md:py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: t.background }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: text */}
          <div>
            {service.eyebrow && (
              <p
                className="text-xs font-bold uppercase tracking-widest mb-3"
                style={{ color: t.secondary }}
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
                style={{ backgroundColor: t.secondary }}
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
