import Image from "next/image";
import Link from "next/link";
import type { Company, ServiceItem } from "@/data/companies";

interface RelatedServicesProps {
  company: Company;
  service: ServiceItem;
}

export function RelatedServices({ company, service }: RelatedServicesProps) {
  const t = company.theme;
  const relatedServices = company.services.items
    .filter((item) => item.slug && item.slug !== service.slug)
    .slice(0, 3);

  if (relatedServices.length === 0) return null;

  return (
    <section
      className="py-16 md:py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: t.background }}
    >
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
  );
}
