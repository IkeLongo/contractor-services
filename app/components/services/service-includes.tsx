import type { Company, ServiceItem } from "@/data/companies";

interface ServiceIncludesProps {
  company: Company;
  service: ServiceItem;
}

export function ServiceIncludes({ company, service }: ServiceIncludesProps) {
  const t = company.theme;
  const includesTitle = service.includes?.title ?? "What's Included";
  const includesItems = service.includes?.items ?? service.bullets ?? [];

  if (includesItems.length === 0) return null;

  return (
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
  );
}
