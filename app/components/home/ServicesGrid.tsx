
import Image from "next/image";
import Link from "next/link";
import type { ClassicCard, Company } from "@/data/companies";

const COLS_CLASS: Record<number, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

function ServiceCard({
  service,
  company,
}: {
  service: ClassicCard;
  company: Company;
}) {
  // Section-level style overrides with fallbacks
  const t = company.branding.theme;

  const href = service.href;

  const card = (
    <div
      className={`group relative flex flex-col overflow-hidden rounded-xl border shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1${href ? " cursor-pointer" : ""}`}
      style={{
        background: service.styles?.cardBg ?? "var(--card-bg)",
        borderColor: "var(--card-border)",
      } as any}
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        {service.image ? (
          <>
            <Image
              src={service.image.src}
              alt={service.image.alt ?? service.title.content}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Optional image overlay */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "var(--image-overlay)" }}
            />
          </>
        ) : (
          <div
            className="absolute inset-0 opacity-10"
            style={{ backgroundColor: t.primary }}
          />
        )}
      </div>

      {/* Content */}
      <div
        className="flex flex-col gap-2 p-5 pb-6"
        style={{ background: "var(--card-bg)" }}
      >
        <h3
          className="text-lg font-bold tracking-tight"
          style={{ color: "var(--card-title)" }}
        >
          {service.title.content}
        </h3>
        <p
          className="text-sm leading-relaxed"
          style={{ color: "var(--card-description)" }}
        >
          {service.description.content}
        </p>
      </div>

      {/* Bottom accent bar — animates left to right on hover */}
      <div
        className="absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full"
        style={{ backgroundColor: "var(--accent)" }}
      />
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {card}
      </Link>
    );
  }

  return card;
}

interface ServicesGridProps {
  company: Company;
  id?: string;
}

export function ServicesGrid({ company, id = "services" }: ServicesGridProps) {
  const t = company.branding.theme;
  const s = company.pages.home.services;

  const cssVars = {
    "--section-bg": t?.background,
    "--eyebrow": t?.secondary,
    "--title": t?.text,
    "--description": t?.mutedText,
    "--card-bg": t?.surface,
    "--card-border": t?.border,
    "--card-title": t.text,
    "--card-description": t?.mutedText,
    "--accent": t?.secondary,
    // "--image-overlay": s?.imageOverlay || "transparent",
  } as any;

  const colsClass =
    COLS_CLASS[company.services.columns ?? 3] ?? "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section
      id={id}
      className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[var(--section-bg)]"
      style={cssVars}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          {s.eyebrow?.content && (
            <p
              className="text-xs font-bold uppercase tracking-widest mb-2"
              style={{ color: "var(--eyebrow)" }}
            >
              {s.eyebrow.content}
            </p>
          )}
          <h2
            className="text-3xl md:text-4xl font-black mb-3"
            style={{ color: "var(--title)" }}
          >
            {s.title.content}
          </h2>
          {s.description?.content && (
            <p
              className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed"
              style={{ color: "var(--description)" }}
            >
              {s.description.content}
            </p>
          )}
        </div>
        <ul className={`grid grid-cols-1 ${colsClass} gap-6`}>
          {s.items.map((service, idx) => (
            <li key={s.items[idx].title.content}>
              <ServiceCard service={s.items[idx]} company={company} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}