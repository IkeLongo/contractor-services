import Image from "next/image";
import type { Company } from "@/lib/types/company";
import type { PortfolioItem } from "@/lib/types/old-types";
import { getNavbarHeroOffset } from "@/lib/navbar-layout";

interface CaseStudyHeaderProps {
  company: Company;
  project: PortfolioItem;
}

export function CaseStudyHeader(
  { company, project }: CaseStudyHeaderProps) {
  const t = company.branding.theme;
  const navbarOffset = getNavbarHeroOffset(company);
  return (
    
    <section
      className="pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 pt-[calc(var(--hero-offset-mobile)+64px)] lg:pt-[calc(var(--hero-offset-desktop)+80px)]"
      style={{
        backgroundColor: t.background,
        "--hero-offset-desktop": navbarOffset.desktop,
        "--hero-offset-mobile": navbarOffset.mobile,
      } as React.CSSProperties}
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-6">
        {project.category && (
          <p
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: t.eyebrow }}
          >
            {project.category}
          </p>
        )}

        <h1
          className="text-3xl md:text-5xl font-black leading-tight tracking-tight max-w-3xl"
          style={{ color: t.title }}
        >
          {project.projectName || project.title}
        </h1>

        {project.projectName && (
          <p
            className="text-sm font-semibold uppercase tracking-wider -mt-2"
            style={{ color: t.mutedText }}
          >
            {project.title}
          </p>
        )}

        {project.description && (
          <p
            className="text-base md:text-lg leading-relaxed max-w-2xl"
            style={{ color: t.mutedText }}
          >
            {project.description}
          </p>
        )}

        {project.image && (
          <div className="w-full mt-4 relative aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
              sizes="(min-width: 1024px) 1024px, 100vw"
            />
          </div>
        )}
      </div>
    </section>
  );
}
