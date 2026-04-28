import Image from "next/image";
import type { Company, PortfolioItem } from "@/data/companies";

interface CaseStudyHeaderProps {
  company: Company;
  project: PortfolioItem;
}

export function CaseStudyHeader(
  { company, project }: CaseStudyHeaderProps) {
  const t = company.branding.theme;
  return (
    
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: t.background }}>
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-6">
        {project.category && (
          <p
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: t.secondary }}
          >
            {project.category}
          </p>
        )}

        <h1
          className="text-3xl md:text-5xl font-black leading-tight tracking-tight max-w-3xl"
          style={{ color: t.primary }}
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
