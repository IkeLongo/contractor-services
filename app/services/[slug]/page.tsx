import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { defaultCompany } from "@/data/companies";
import { PageHeader } from "@/app/components/layout/PageHeader";
import { ServiceContactCta } from "@/app/components/services/ServiceContactCta";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const company = defaultCompany;

  const service = company.services.items.find((s) => s.slug === slug);
  if (!service) notFound();

  const t = company.theme;

  const heroTitle = service.heroTitle ?? service.title;
  const heroDesc = service.heroDescription ?? service.description;

  const overviewTitle = service.overview?.title ?? service.title;
  const overviewDesc = service.overview?.description ?? service.description;

  const includesTitle = service.includes?.title ?? "What's Included";
  const includesItems = service.includes?.items ?? service.bullets ?? [];

  const processTitle = service.process?.title ?? "How It Works";
  const processDesc = service.process?.description;
  const processSteps = service.process?.steps ?? [
    {
      title: "Assess the Need",
      description:
        "We evaluate the scope and document exactly what needs to be done — no surprises.",
    },
    {
      title: "Complete the Work",
      description:
        "Our crew arrives on time, works cleanly, and completes the job to standard.",
    },
    {
      title: "Review and Follow Up",
      description:
        "We walk through the finished work with you and address any remaining questions.",
    },
  ];

  const relatedServices = company.services.items
    .filter((item) => item.slug && item.slug !== slug)
    .slice(0, 3);

  return (
    <main style={{ backgroundColor: t.background }}>
      <PageHeader
        title={service.title}
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
        company={company}
      />

      {/* ── 1. Hero ── */}
      <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
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

      {/* ── 2. Overview ── */}
      <section
        className="py-16 md:py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: t.background }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-2"
            style={{ color: t.secondary }}
          >
            Overview
          </p>
          <h2
            className="text-2xl md:text-3xl font-black mb-4"
            style={{ color: t.text }}
          >
            {overviewTitle}
          </h2>
          <p className="text-base leading-relaxed" style={{ color: t.mutedText }}>
            {overviewDesc}
          </p>
        </div>
      </section>

      {/* ── 3. What's Included ── */}
      {includesItems.length > 0 && (
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <p
                className="text-xs font-bold uppercase tracking-widest mb-2"
                style={{ color: t.secondary }}
              >
                Scope of Work
              </p>
              <h2
                className="text-2xl md:text-3xl font-black"
                style={{ color: t.text }}
              >
                {includesTitle}
              </h2>
              {service.includes?.description && (
                <p className="mt-3 text-base" style={{ color: t.mutedText }}>
                  {service.includes.description}
                </p>
              )}
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {includesItems.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-xl border p-4"
                  style={{ backgroundColor: t.surface, borderColor: t.border }}
                >
                  <span
                    className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black text-white shrink-0"
                    style={{ backgroundColor: t.secondary }}
                  >
                    ✓
                  </span>
                  <span
                    className="text-sm leading-snug font-medium"
                    style={{ color: t.text }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ── 4. Process ── */}
      <section
        className="py-16 md:py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: t.primary }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-2"
              style={{ color: t.secondary }}
            >
              Step by Step
            </p>
            <h2 className="text-2xl md:text-3xl font-black text-white">
              {processTitle}
            </h2>
            {processDesc && (
              <p
                className="mt-3 text-base"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                {processDesc}
              </p>
            )}
          </div>
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {processSteps.map((step, i) => (
              <li
                key={i}
                className="rounded-xl p-6"
                style={{
                  backgroundColor: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-black text-white mb-4"
                  style={{ backgroundColor: t.secondary }}
                >
                  {i + 1}
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── 5. Why It Matters ── */}
      {service.whyItMatters && (
        <section
          className="py-16 md:py-20 px-4 sm:px-6 lg:px-8"
          style={{ backgroundColor: t.background }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-2"
              style={{ color: t.secondary }}
            >
              Why It Matters
            </p>
            <h2
              className="text-2xl md:text-3xl font-black mb-4"
              style={{ color: t.text }}
            >
              {service.whyItMatters.title}
            </h2>
            <p className="text-base leading-relaxed" style={{ color: t.mutedText }}>
              {service.whyItMatters.description}
            </p>
          </div>
        </section>
      )}

      {/* ── 6. CTA / Contact form ── */}
      <ServiceContactCta company={company} service={service} />

      {/* ── 7. Related Services ── */}
      {relatedServices.length > 0 && (
        <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <p
                className="text-xs font-bold uppercase tracking-widest mb-2"
                style={{ color: t.secondary }}
              >
                Also Available
              </p>
              <h2
                className="text-2xl md:text-3xl font-black"
                style={{ color: t.text }}
              >
                Other Services
              </h2>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedServices.map((rel) => (
                <li key={rel.slug}>
                  <Link
                    href={`/services/${rel.slug}`}
                    className="group relative flex flex-col overflow-hidden rounded-xl border shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                    style={{ backgroundColor: t.surface, borderColor: t.border }}
                  >
                    {rel.image && (
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={rel.image}
                          alt={rel.title}
                          fill
                          sizes="(min-width: 1024px) 33vw, 50vw"
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="p-4 pb-5">
                      <h3
                        className="text-sm font-bold mb-1"
                        style={{ color: t.text }}
                      >
                        {rel.title}
                      </h3>
                      <p
                        className="text-xs leading-relaxed line-clamp-2"
                        style={{ color: t.mutedText }}
                      >
                        {rel.description}
                      </p>
                    </div>
                    <div
                      className="absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full"
                      style={{ backgroundColor: t.secondary }}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </main>
  );
}

