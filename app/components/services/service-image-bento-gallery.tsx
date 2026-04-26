import { LayoutGrid } from "@/app/components/ui/layout-grid";
import type { Company, ServiceItem } from "@/data/companies";

interface ServiceImageBentoGalleryProps {
  company: Company;
  service: ServiceItem;
}

const FALLBACK_LABELS = [
  { title: "Overview", description: "A look at the overall scope of work.", className: "md:col-span-2" },
  { title: "Work In Progress", description: "Our team executing the job with care.", className: "md:col-span-1" },
  { title: "Project Detail", description: "Close-up of the craftsmanship involved.", className: "md:col-span-1" },
  { title: "Completed Work", description: "The finished result, ready for use.", className: "md:col-span-2" },
];

const LAYOUT_CLASSES = ["md:col-span-2", "md:col-span-1", "md:col-span-1", "md:col-span-2"];

export function ServiceImageBentoGallery({ company, service }: ServiceImageBentoGalleryProps) {
  const t = company.theme;
  const s = company.services.styles?.gallery;

  const fallbackImage = service.image;
  if (!fallbackImage && (!service.gallery || service.gallery.length === 0)) return null;

  const items =
    service.gallery && service.gallery.length > 0
      ? service.gallery
      : FALLBACK_LABELS.map((label) => ({
          image: fallbackImage!,
          alt: `${service.title} — ${label.title}`,
          title: label.title,
          description: label.description,
          className: label.className,
        }));

  const cards = items.map((item, i) => ({
    id: i + 1,
    thumbnail: item.image,
    alt: item.alt ?? item.title ?? service.title,
    className: item.className ?? LAYOUT_CLASSES[i % LAYOUT_CLASSES.length],
    content: (
      <div>
        {item.title && (
          <p className="font-bold text-white text-base">{item.title}</p>
        )}
        {item.description && (
          <p className="mt-1 text-sm text-white/80">{item.description}</p>
        )}
      </div>
    ),
  }));

  return (
    <section
      className="py-16 md:py-20"
      style={{ backgroundColor: s?.cardBackground ?? "#ffffff" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-2"
            style={{ color: t.secondary }}
          >
            Project Photos
          </p>
          <h2
            className="text-2xl md:text-3xl font-black mb-3"
            style={{ color: s?.titleColor ?? t.text }}
          >
            {service.title} Gallery
          </h2>
          <p className="text-base" style={{ color: s?.descriptionColor ?? t.mutedText }}>
            A quick visual look at the type of work included in this service.
          </p>
        </div>
      </div>

      <LayoutGrid cards={cards} />
    </section>
  );
}

