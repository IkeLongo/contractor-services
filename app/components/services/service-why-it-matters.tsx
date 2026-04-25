import type { Company, ServiceItem } from "@/data/companies";

interface ServiceWhyItMattersProps {
  company: Company;
  service: ServiceItem;
}

export function ServiceWhyItMatters({ company, service }: ServiceWhyItMattersProps) {
  const t = company.theme;

  if (!service.whyItMatters) return null;

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
  );
}
