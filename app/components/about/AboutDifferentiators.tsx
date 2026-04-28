import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";
import type { Company } from "@/data/companies";

type TablerIcon = React.ComponentType<{ size?: number; stroke?: number; color?: string }>;

const ICON_MAP: Record<string, TablerIcon> = {
  RouteAltLeft: IconRouteAltLeft,
  AdjustmentsBolt: IconAdjustmentsBolt,
  Help: IconHelp,
  Cloud: IconCloud,
  Terminal2: IconTerminal2,
  EaseInOut: IconEaseInOut,
  CurrencyDollar: IconCurrencyDollar,
  Heart: IconHeart,
};

function resolveIcon(name?: string): TablerIcon {
  if (!name) return IconAdjustmentsBolt;
  const key = name.charAt(0).toUpperCase() + name.slice(1);
  return ICON_MAP[key] ?? IconAdjustmentsBolt;
}

export function AboutDifferentiators({ company }: { company: Company }) {
  const section = company.about.differentiators;
  const s = section?.styles;
  const t = company.branding.theme;

  if (!section || !section.items || section.items.length === 0) return null;

  return (
    <section
      className="w-full py-14"
      style={{ backgroundColor: s?.background ?? t.background }}
    >
      <div className="mx-auto max-w-7xl">
        {(section.title || section.description) && (
          <div className="mx-auto mb-12 max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="flex flex-col justify-start gap-6 md:gap-8 xl:flex-row">
              
              {section.title && (
                <h2
                  className="text-2xl font-black tracking-tight md:text-4xl lg:text-4xl max-w-xl"
                  style={{ color: s?.sectionTitle ?? s?.title ?? t.text }}
                >
                  {section.title}
                </h2>
              )}

              {section.description && (
                <p
                  className="w-full text-base md:text-lg leading-relaxed"
                  style={{ color: s?.sectionDescription ?? s?.description ?? t.mutedText }}
                >
                  {section.description}
                </p>
              )}

            </div>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10">
          {section.items.map((item, index) => {
            const Icon = ICON_MAP[item.icon ?? ""] ?? IconAdjustmentsBolt;

            return (
              <Feature
                key={item.title}
                title={item.title}
                description={item.description}
                icon={<Icon size={24} />}
                index={index}
                total={section.items.length}
                iconColor={s?.icon ?? t.primary}
                titleColor={s?.title ?? t.text}
                descriptionColor={s?.description ?? t.mutedText}
                borderColor={s?.border ?? t.border}
                hoverGradientFrom={s?.hoverGradientFrom ?? t.surface}
                accentColor={s?.accent ?? t.secondary}
                spacing={{
                  titleMarginBottom: s?.spacing?.titleMarginBottom,
                  descriptionMarginTop: s?.spacing?.descriptionMarginTop,
                  descriptionLineHeight: s?.spacing?.descriptionLineHeight,
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
  total,
  iconColor,
  titleColor,
  descriptionColor,
  borderColor,
  hoverGradientFrom,
  accentColor,
  spacing,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  total: number;
  iconColor: string;
  titleColor: string;
  descriptionColor: string;
  borderColor: string;
  hoverGradientFrom: string;
  accentColor: string;
  spacing?: {
    titleMarginBottom?: string;
    descriptionMarginTop?: string;
    descriptionLineHeight?: string;
  };
}) => {
  const cols = 4;
  const lastRow = Math.floor((total - 1) / cols);
  const row = Math.floor(index / cols);
  const colPos = index % cols;
  const isNotLastRow = row < lastRow;

  return (
    <div
      className={cn(
        "group/feature relative flex flex-col py-10",
        "lg:border-r",
        colPos === 0 && "lg:border-l",
        isNotLastRow && "lg:border-b"
      )}
      style={{ borderColor }}
    >
      {isNotLastRow && (
        <div
          className="pointer-events-none absolute inset-0 h-full w-full to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100"
          style={{ backgroundImage: `linear-gradient(to top, ${hoverGradientFrom}, transparent)` }}
        />
      )}
      {!isNotLastRow && (
        <div
          className="pointer-events-none absolute inset-0 h-full w-full to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100"
          style={{ backgroundImage: `linear-gradient(to bottom, ${hoverGradientFrom}, transparent)` }}
        />
      )}
      <div className="relative z-10 mb-4 px-10" style={{ color: iconColor }}>
        {icon}
      </div>
      <div className="relative z-10 px-10">
        <div className="relative mb-2 text-lg font-bold leading-snug">
          <div
            className="absolute inset-y-0 -left-10 h-6 w-1 origin-center rounded-br-full rounded-tr-full transition-all duration-200 group-hover/feature:h-8"
            style={{ backgroundColor: accentColor }}
          />
          <span
            className="inline-block transition duration-200 group-hover/feature:translate-x-2"
            style={{ color: titleColor, marginBottom: spacing?.titleMarginBottom }}
          >
            {title}
          </span>
        </div>
        <p
          className="max-w-xs text-sm"
          style={{
            color: descriptionColor,
            marginTop: spacing?.descriptionMarginTop,
            lineHeight: spacing?.descriptionLineHeight,
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};
