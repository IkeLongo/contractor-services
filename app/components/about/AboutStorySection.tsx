import type { Company } from "@/data/companies";

interface AboutStorySectionProps {
  company: Company;
}

export function AboutStorySection({ company }: AboutStorySectionProps) {
  const { about } = company;
  const t = company.theme;
  const s = about.styles;

  if (!about.story && !about.highlights && !about.quote && !about.images) {
    return null;
  }

  const sectionTitle = about.storyTitle ?? "Built on Reliability";

  return (
    <section
      className="px-4 py-16 sm:px-6 md:py-12 lg:px-8"
      style={{ backgroundColor: s?.background ?? t.background }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 lg:min-h-[600px] lg:grid-cols-4 lg:grid-rows-[auto_auto_auto_auto_auto_1fr_1fr_1fr_1fr_1fr_1fr_1fr] lg:items-stretch">
          {/* Left image: full height */}
          {about.images?.main && (
            <div className="relative min-h-[360px] overflow-hidden rounded-2xl lg:col-start-1 lg:row-span-12 lg:row-start-1 lg:min-h-0">
              <img
                src={about.images.main}
                alt={about.imageAlt ?? company.name}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div
                className="absolute bottom-0 left-0 right-0 h-1/2"
                style={{
                  background: `linear-gradient(to bottom, transparent 0%, ${t.secondary} 100%)`,
                  opacity: 0.85,
                }}
              />
            </div>
          )}

          {/* Header: columns 2–4, top 5 rows */}
          <div className="lg:col-span-3 lg:col-start-2 lg:row-span-5 lg:row-start-1 lg:flex lg:flex-col lg:justify-center">
            <h2
              className="text-2xl font-black leading-tight md:text-3xl"
              style={{ color: s?.title ?? t.text }}
            >
              {sectionTitle}
            </h2>

            {about.story?.[0] && (
              <p
                className="mt-3 max-w-4xl text-sm leading-relaxed md:text-base"
                style={{ color: s?.mutedText ?? t.mutedText }}
              >
                {about.story[0]}
              </p>
            )}
          </div>

          {/* Highlight cards: column 2, bottom-aligned */}
          {about.highlights && about.highlights.length > 0 && (
            <div className="flex h-full flex-col lg:col-start-2 lg:row-span-6 lg:row-start-7">
              <div className="flex h-full flex-col gap-4">
                {about.highlights.map((item, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-xl border p-4 shadow-sm"
                    style={{
                      backgroundColor: s?.cardBackground ?? "#ffffff",
                      borderColor: s?.border ?? t.border,
                    }}
                  >
                    <h4
                      className="mb-1 text-sm font-semibold"
                      style={{ color: s?.title ?? t.text }}
                    >
                      {item.title}
                    </h4>
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: s?.mutedText ?? t.mutedText }}
                    >
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quote: column 3, bottom-aligned */}
          {about.quote && (
            <div className="flex h-full flex-col lg:col-start-3 lg:row-span-5 lg:row-start-8">
              <div
                className="flex h-full flex-col justify-between rounded-xl p-6 shadow-md"
                style={{ backgroundColor: t.secondary, color: "#ffffff" }}
              >
                <p className="text-lg font-semibold leading-snug md:text-2xl">
                  &ldquo;{about.quote.text}&rdquo;
                </p>

                {about.quote.author && (
                  <div className="mt-6 flex items-center gap-3">
                    
                    {/* Avatar */}
                    {about.quote.avatar && (
                      <img
                        src={about.quote.avatar}
                        alt={about.quote.author}
                        className="h-10 w-10 rounded-full object-cover border border-white/20"
                      />
                    )}

                    {/* Author name */}
                    <span className="text-sm opacity-80">
                      — {about.quote.author}
                    </span>

                  </div>
                )}
              </div>
            </div>
          )}

          {/* Right image: column 4 */}
          {about.images?.tertiary?.[0] && (
            <div className="relative min-h-[360px] overflow-hidden rounded-2xl lg:col-start-4 lg:row-span-7 lg:row-start-6 lg:min-h-0">
              
              {/* Image */}
              <img
                src={about.images.tertiary[0]}
                alt={`${company.name} project`}
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Color mask overlay */}
              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#0B1F4D]/50 via-white/40 to-white/80"
              />

            </div>
          )}
        </div>
      </div>
    </section>
  );
}