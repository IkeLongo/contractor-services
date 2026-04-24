
import Image from "next/image";
import type { Company } from "@/data/companies";

const COLS_CLASS: Record<number, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

function ServiceCard({
  service,
  company,
}: {
  service: Company["services"]["items"][number];
  company: Company;
}) {
  // Section-level style overrides with fallbacks
  const s = company.services.styles;
  const t = company.theme;
  // Fallbacks for theme in case it's missing
  const fallback = {
    background: "#fff",
    primary: "#0B1F4D",
    secondary: "#C62828",
    surface: "#fff",
    text: "#111827",
    mutedText: "#475569",
    border: "#E2E8F0",
  };
  const theme = t || fallback;

  return (
    <div
      className="group relative flex flex-col overflow-hidden rounded-xl border shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:cursor-pointer"
      style={{
        background: "var(--card-bg)",
        borderColor: "var(--card-border)",
      } as any}
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        {service.image ? (
          <>
            <Image
              src={service.image}
              alt={service.title}
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
            style={{ backgroundColor: theme.primary }}
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
          {service.title}
        </h3>
        <p
          className="text-sm leading-relaxed"
          style={{ color: "var(--card-description)" }}
        >
          {service.description}
        </p>
      </div>

      {/* Bottom accent bar — animates left to right on hover */}
      <div
        className="absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full"
        style={{ backgroundColor: "var(--accent)" }}
      />
    </div>
  );
}

interface ServicesGridProps {
  company: Company;
}

export function ServicesGrid({ company }: ServicesGridProps) {
  const s = company.services.styles;
  const t = company.theme;
  const fallback = {
    background: "#fff",
    primary: "#0B1F4D",
    secondary: "#C62828",
    surface: "#fff",
    text: "#111827",
    mutedText: "#475569",
    border: "#E2E8F0",
  };
  const theme = t || fallback;

  const cssVars = {
    "--section-bg": s?.background || "#FFFFFF",
    "--eyebrow": s?.eyebrow || theme.primary,
    "--title": s?.title || theme.text,
    "--description": s?.description || theme.mutedText,
    "--card-bg": s?.cardBackground || theme.surface,
    "--card-border": s?.cardBorder || theme.border,
    "--card-title": s?.cardTitle || theme.text,
    "--card-description": s?.cardDescription || theme.mutedText,
    "--accent": s?.accent || theme.secondary,
    "--image-overlay": s?.imageOverlay || "transparent",
  } as any;

  const colsClass =
    COLS_CLASS[company.services.columns ?? 3] ?? "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section
      className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-[var(--section-bg)]"
      style={cssVars}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          {company.services.eyebrow && (
            <p
              className="text-xs font-bold uppercase tracking-widest mb-2"
              style={{ color: "var(--eyebrow)" }}
            >
              {company.services.eyebrow}
            </p>
          )}
          <h2
            className="text-3xl md:text-4xl font-black mb-3"
            style={{ color: "var(--title)" }}
          >
            {company.services.title}
          </h2>
          {company.services.description && (
            <p
              className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed"
              style={{ color: "var(--description)" }}
            >
              {company.services.description}
            </p>
          )}
        </div>
        <ul className={`grid grid-cols-1 ${colsClass} gap-6`}>
          {company.services.items.map((service, idx) => (
            <li key={service.title + idx}>
              <ServiceCard service={service} company={company} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}