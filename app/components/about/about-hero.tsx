import type { Company } from "@/data/companies";

interface AboutHeroProps {
  company: Company;
}

export function AboutHero({ company }: AboutHeroProps) {
  const about = company.about;
  const s = about.styles;
  const t = company.theme;

  return (
    <section
      className="py-8 px-4 sm:px-6 lg:px-8 md:py-12"
      style={{ backgroundColor: s?.background ?? "#F3F6FA" }}
    >
      {/* Hero card — image is the container background */}
      <div
        className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border p-6 md:p-10"
        style={{
          backgroundImage: `url(${about.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
          minHeight: "100px",
          borderColor: s?.border ?? t.border,
        }}
      >
        {/* Left-to-right gradient for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to right, ${s?.gradientFrom ?? "rgba(255,255,255,0.98)"} 0%, ${s?.gradientFrom ?? "rgba(255,255,255,0.9)"} 42%, ${s?.gradientTo ?? "rgba(255,255,255,0.15)"} 72%)`,
          }}
        />

        {/* Title */}
        <div className="relative z-10 flex min-h-[100px] max-w-xl items-center md:min-h-[100px]">
          <h1
              className="text-2xl font-black leading-tight md:text-4xl"
              style={{ color: s?.title ?? t.text }}
            >
              {/* Mobile: line break after each sentence */}
              <span className="block md:hidden">
                {about.title.split(". ").map((sentence, i, arr) => (
                  <span key={i}>
                    {sentence}
                    {i < arr.length - 1 && "."}
                    <br />
                  </span>
                ))}
              </span>
              {/* Desktop: normal inline rendering */}
              <span className="hidden md:block">{about.title}</span>
            </h1>
        </div>
      </div>
    </section>
  );
}



