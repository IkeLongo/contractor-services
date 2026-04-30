import type { Company } from "@/lib/types/company";
import { getNavbarHeroOffset } from "@/lib/navbar-layout";

interface AboutHeroProps {
  company: Company;
}

export function AboutHero({ company }: AboutHeroProps) {
  const about = company.about;
  const s = about.styles;
  const t = company.branding.theme;
  const navbarOffset = getNavbarHeroOffset(company);

  return (
    <section
      className="px-4 sm:px-6 lg:px-8 pb-8 md:pb-9 pt-[calc(var(--hero-offset-mobile)+64px)] lg:pt-[calc(var(--hero-offset-desktop)+36px)]"
      style={{
        backgroundColor: t.background ?? "#F3F6FA",
        "--hero-offset-desktop": navbarOffset.desktop,
        "--hero-offset-mobile": navbarOffset.mobile,
      } as React.CSSProperties}
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
          borderColor: t.border,
        }}
      >
        {/* Left-to-right gradient for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to right, ${t.background + "FA"} 0%, ${t.background + "E6"} 42%, ${t.background + "26"} 72%)`,
          }}
        />

        {/* Title */}
        <div className="relative z-10 flex min-h-[100px] max-w-xl items-center md:min-h-[100px]">
          <h1
              className="text-2xl font-black leading-tight md:text-4xl"
              style={{ color: t.title ?? t.text }}
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



