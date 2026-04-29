import Image from "next/image";
import Link from "next/link";
import {
  Wrench,
  Hammer,
  Network,
  Layers,
  ShieldCheck,
  BadgeCheck,
  Clock,
  FolderOpen,
  type LucideIcon,
} from "lucide-react";
import type { Company } from "@/lib/types/company";
import type { PortfolioItem } from "@/lib/types/old-types";

const ICON_MAP: Record<string, LucideIcon> = {
  Wrench,
  Hammer,
  Network,
  Layers,
  ShieldCheck,
  BadgeCheck,
  Clock,
  FolderOpen,
};

/** Returns Tailwind grid-span/start classes from a PortfolioItem's layout field. */
function getBentoClass(item: PortfolioItem): string {
  if (!item || !('layout' in item) || !item.layout) return "";
  const layout = item.layout as NonNullable<typeof item.layout>;
  return [
    layout.colSpan  ? `md:col-span-${layout.colSpan}`  : "",
    layout.rowSpan  ? `md:row-span-${layout.rowSpan}`  : "",
    layout.colStart ? `md:col-start-${layout.colStart}` : "",
    layout.rowStart ? `md:row-start-${layout.rowStart}` : "",
  ]
    .filter(Boolean)
    .join(" ");
}

// -- Featured card: full-bleed image with gradient + overlaid text -------------
function FeaturedCard({
  item,
  company,
}: {
  item: PortfolioItem;
  company: Company;
}) {
  const t = company.branding.theme;
  const s = company.portfolio;
  
  const Icon =
    item.icon
      ? (ICON_MAP[item.icon.charAt(0).toUpperCase() + item.icon.slice(1)] ?? FolderOpen)
      : FolderOpen;

  return (
    <div
      className="group relative flex flex-col h-full overflow-hidden rounded-xl border"
      style={{ background: s.styles?.cardBackground, borderColor: s.styles?.cardBorder }}
    >
      {/* Image */}
      <div className="p-3 pb-0 flex-shrink-0">
        <div className="relative h-48 md:h-108 overflow-hidden rounded-lg">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(min-width: 1024px) 66vw, (min-width: 640px) 66vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
          {item.category && (
            <span
              className="absolute top-4 left-4 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white"
              style={{ backgroundColor: s.styles?.categoryBackground ?? t.secondary, color: s.styles?.categoryText ?? t.text }}
            >
              {item.category}
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1.5 p-5 pt-4 pb-6 flex-1">
        <div className="flex items-center gap-2 mb-1">
          <Icon className="size-5 flex-shrink-0" style={{ color: s.styles?.icon ?? t.secondary }} />
          <h3
            className="text-lg font-bold leading-snug truncate"
            style={{ color: s.styles?.cardTitle ?? t.text, marginBottom: 0 }}
          >
            {item.title}
          </h3>
        </div>
        <p
          className="text-sm leading-relaxed truncate"
          style={{ color: s.styles?.description ?? t.mutedText }}
        >
          {item.description}
        </p>
        {item.href && (
          <span
            className="mt-4 inline-block text-xs font-bold uppercase tracking-wider"
            style={{ color: s.styles?.link ?? t.secondary }}
          >
            View Project →
          </span>
        )}
      </div>

      {/* Accent bar */}
      <div
        className="absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full"
        style={{ backgroundColor: s.styles?.accent ?? t.secondary }}
      />
    </div>
  );
}

// -- Standard card: surface bg, image on top, text below ----------------------
function StandardCard({
  item,
  company,
}: {
  item: PortfolioItem;
  company: Company;
}) {
  const Icon =
    item.icon
      ? (ICON_MAP[item.icon.charAt(0).toUpperCase() + item.icon.slice(1)] ?? FolderOpen)
      : FolderOpen;

  const t = company.branding.theme;
  const s = company.portfolio;

  return (
    <div
      className="group relative flex flex-col h-full overflow-hidden rounded-xl border"
      style={{ background: s.styles?.cardBackground, borderColor: s.styles?.cardBorder }}
    >
      {/* Image */}
      <div className="p-3 pb-0 flex-shrink-0">
        <div className="relative h-48 overflow-hidden rounded-lg">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20" />
          {item.category && (
            <span
              className="absolute top-2.5 left-2.5 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider"
              style={{ backgroundColor: s.styles?.categoryBackground ?? t.secondary, color: s.styles?.categoryText ?? t.text }}
            >
              {item.category}
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-1.5 p-3 pt-3 pb-4 flex-1">
        <div className="flex items-center gap-2 mb-1">
          <Icon className="size-4 flex-shrink-0" style={{ color: s.styles?.icon ?? t.secondary }} />
          <h3
            className="text-sm font-bold leading-snug truncate"
            style={{ color: s.styles?.cardTitle ?? t.text, marginBottom: 0 }}
          >
            {item.title}
          </h3>
        </div>
        <p
          className="text-xs leading-relaxed truncate"
          style={{ color: s.styles?.description ?? t.mutedText }}
        >
          {item.description}
        </p>
      </div>

      {/* Accent bar */}
      <div
        className="absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full"
        style={{ backgroundColor: s.styles?.accent ?? t.secondary }}
      />
    </div>
  );
}

// -- Wrapper: makes card clickable when href exists ----------------------------
function PortfolioCard({
  item,
  company,
  featured,
}: {
  item: PortfolioItem;
  company: Company;
  featured: boolean;
}) {
  let card: React.ReactNode;
  if (featured) {
    card = (
      <>
        {/* StandardCard for mobile */}
        <div className="block md:hidden h-full">
          <StandardCard item={item} company={company} />
        </div>
        {/* FeaturedCard for md+ */}
        <div className="hidden md:block h-full">
          <FeaturedCard item={item} company={company} />
        </div>
      </>
    );
  } else {
    card = <StandardCard item={item} company={company} />;
  }

  if (item.href) {
    return (
      <Link href={item.href} className="block h-full">
        {card}
      </Link>
    );
  }

  return <div className="h-full">{card}</div>;
}

// -- Section -------------------------------------------------------------------
interface PortfolioSectionProps {
  company: Company;
}

export function PortfolioSection({ company }: PortfolioSectionProps) {
  const s = company.portfolio.styles;
  const t = company.branding.theme;
  const sectionBg = s?.background || t.background;
  const sectionTitle = s?.title || t.text;
  const sectionDescription = s?.description || t.mutedText;

  return (
    <section
      id="portfolio"
      className="scroll-mt-16 py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
      style={{ background: sectionBg }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          {company.portfolio.eyebrow && (
            <p
              className="text-xs font-bold uppercase tracking-widest mb-2"
              style={{ color: company.portfolio.styles?.eyebrow || sectionTitle }}
            >
              {company.portfolio.eyebrow}
            </p>
          )}
          <h2 
            className="text-3xl md:text-4xl font-black mb-3 text-white"
            style={{ color: sectionTitle }}
          >
            {company.portfolio.title}
          </h2>
          {company.portfolio.description && (
            <p
              className="max-w-2xl mx-auto text-base leading-relaxed"
              style={{ color: sectionDescription }}
            >
              {company.portfolio.description}
            </p>
          )}
        </div>

        {/* Bento grid — 3 cols on sm+, auto-rows of 280px */}
        <ul className="grid grid-cols-1 md:grid-cols-3 md:auto-rows-[280px] gap-4">
          {company.portfolio.items.map((item, idx) => (
            <li key={item.title + idx} className={getBentoClass(item)}>
              <PortfolioCard
                item={item}
                company={company}
                featured={idx === 0}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
