import { TestimonialsMasonryGrid } from "@/app/components/ui/testimonials/testimonials-masonry-grid";
import type { Company } from "@/data/companies";

interface TestimonialsSectionProps {
  company: Company;
}

export function TestimonialsSection({ company }: TestimonialsSectionProps) {
  const s = company.testimonials.styles;
  const t = company.theme;
  const cssVars = {
    "--section-bg": s?.background || t.background,
    "--eyebrow": s?.eyebrow || t.secondary,
    "--title": s?.title || t.text,
    "--description": s?.description || t.mutedText,
    "--card-bg": s?.cardBackground || t.surface,
    "--card-border": s?.cardBorder || t.border,
    "--quote": s?.quote || t.text,
    "--name": s?.name || t.text,
    "--role": s?.role || t.mutedText,
    "--star": s?.star || "#FACC15",
    "--muted-star": s?.mutedStar || "rgba(0,0,0,0.15)",
    "--quote-icon": s?.quoteIcon || t.secondary,
    "--cta-bg": s?.ctaBackground || t.secondary,
    "--cta-text": s?.ctaText || "#FFFFFF",
  } as React.CSSProperties;

  return (
    <section
      className="bg-[var(--section-bg)] py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
      style={cssVars}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          {company.testimonials.eyebrow && (
            <p
              className="text-xs font-bold uppercase tracking-widest mb-2"
              style={{ color: "var(--eyebrow)" }}
            >
              {company.testimonials.eyebrow}
            </p>
          )}
          <h2
            className="text-3xl font-black tracking-tight mb-3"
            style={{ color: "var(--title)" }}
          >
            {company.testimonials.title}
          </h2>
          {company.testimonials.description && (
            <p
              className="max-w-2xl mx-auto text-base leading-relaxed"
              style={{ color: "var(--description)" }}
            >
              {company.testimonials.description}
            </p>
          )}
        </div>

        <TestimonialsMasonryGrid
          testimonials={company.testimonials}
        />

        <div className="text-center mt-20">
          <a
            href="#lead-form"
            className="inline-block rounded px-8 py-4 font-bold text-lg transition hover:opacity-90"
            style={{ backgroundColor: "var(--cta-bg)", color: "var(--cta-text)" }}
          >
            Join Our Happy Customers
          </a>
        </div>
      </div>
    </section>
  );
}
