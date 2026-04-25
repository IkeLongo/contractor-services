import type { Company, ServiceItem } from "@/data/companies";

interface ServiceOverviewProps {
  company: Company;
  service: ServiceItem;
}

export function ServiceOverview({ company, service }: ServiceOverviewProps) {
  const t = company.theme;
  const overviewTitle = service.overview?.title ?? service.title;
  const overviewDesc = service.overview?.description ?? service.description;

  return (
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
  );
}
