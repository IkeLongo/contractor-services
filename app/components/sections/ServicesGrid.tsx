
import Image from "next/image";
import type { Company } from "@/data/companies";

const COLS_CLASS: Record<number, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

function ServiceCard({
  service,
  company,
}: {
  service: Company["services"]["items"][number];
  company: Company;
}) {
  return (
    <div
      className="group relative flex flex-col overflow-hidden rounded-xl border shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:cursor-pointer"
      style={{
        background: company.theme.surface,
        borderColor: company.theme.border,
      }}
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        {service.image ? (
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className="absolute inset-0 opacity-10"
            style={{ backgroundColor: company.theme.primary }}
          />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 p-5 pb-6">
        <h3
          className="text-lg font-bold tracking-tight"
          style={{ color: company.theme.text }}
        >
          {service.title}
        </h3>
        <p
          className="text-sm leading-relaxed"
          style={{ color: company.theme.mutedText }}
        >
          {service.description}
        </p>
      </div>

      {/* Bottom accent bar — animates left to right on hover */}
      <div
        className="absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full"
        style={{ backgroundColor: company.theme.secondary }}
      />
    </div>
  );
}

interface ServicesGridProps {
  company: Company;
}

export function ServicesGrid({ company }: ServicesGridProps) {
  const colsClass =
    COLS_CLASS[company.services.columns ?? 3] ?? "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section
      className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "white" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          {company.services.eyebrow && (
            <p
              className="text-xs font-bold uppercase tracking-widest mb-2"
              style={{ color: company.theme.primary }}
            >
              {company.services.eyebrow}
            </p>
          )}
          <h2
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ color: company.theme.text }}
          >
            {company.services.title}
          </h2>
          {company.services.description && (
            <p
              className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed"
              style={{ color: company.theme.mutedText }}
            >
              {company.services.description}
            </p>
          )}
        </div>
        <ul className={`grid grid-cols-1 ${colsClass} gap-6`}>
          {company.services.items.map((service, idx) => (
            <li key={service.title + idx}>
              <ServiceCard service={service} company={company} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}