"use client";
import React from "react";
import {
  Layers,
  BadgeCheck,
  Clock,
  Hammer,
  Network,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import type { Company } from "@/lib/types/company";

const ICON_MAP: Record<string, LucideIcon> = {
  Layers,
  BadgeCheck,
  Clock,
  Hammer,
  Network,
  ShieldCheck,
};

interface WhyChooseUsProps {
  company: Company;
}

export function WhyChooseUs({ company }: WhyChooseUsProps) {
  // Section-level style overrides with fallbacks
  const s = company.pages.home.whySection
  const t = company.branding.theme;
  // Fallbacks for theme in case it's missing
  const fallback = {
    background: "#fff",
    primary: "#0B1F4D",
    secondary: "#C62828",
    surface: "#fff",
    text: "#111827",
    mutedText: "#475569",
    border: "#E2E8F0",
  };
  const theme = t || fallback;

  // Compose CSS variables for section
  const cssVars = {
    "--section-bg": s?.styles?.background || theme.background,
    "--eyebrow": s?.eyebrow || theme.secondary,
    "--title": s?.title || theme.text,
    "--description": s?.description || theme.mutedText,
  } as any;

  return (
    <section
      id="features"
      style={cssVars as any}
      className="relative overflow-hidden bg-[var(--section-bg)] py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-slate-200/60" />
        <div className="absolute inset-0 opacity-[0.1] bg-[radial-gradient(circle_at_1px_1px,_#0B1F4D_1px,_transparent_0)] [background-size:22px_22px]" />
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[var(--icon)]/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center font-sans">
          {s?.eyebrow && (
            <p
              className="text-xs font-bold uppercase tracking-widest mb-2"
              style={{ color: "var(--eyebrow)" }}
            >
              {s.eyebrow.content}
            </p>
          )}
          <h2
            className="text-2xl text-center font-black tracking-tight md:text-4xl text-[var(--title)]"
            style={{ color: "var(--title)" }}
          >
            {s?.title.content}
          </h2>

          {s?.description && (
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-[var(--description)]">
              {s.description.content}
            </p>
          )}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:mt-20 md:grid-cols-3">
          {s?.cards.map((item) => {
            const Icon = item.icon
              ? ICON_MAP[item.icon] ?? ShieldCheck
              : ShieldCheck;

            const cardBg = item.styles?.cardBg || theme.surface;
            const cardBorder = item.styles?.cardBorder || theme.border;
            const cardIcon = item.styles?.iconColor || theme.secondary;
            const cardIconBg = item.styles?.iconBackground || `${theme.secondary}1A`;
            const hoverBorder = item.styles?.hoverBorder || theme.secondary;

            return (
              <div
                key={item.title.content}
                className="rounded-xl border-2 p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md !hover:border-[var(--hover-border)]"
                style={{
                  backgroundColor: cardBg,
                  borderColor: cardBorder,
                  "--hover-border": hoverBorder,
                } as React.CSSProperties}
              >
                <div className="mb-4 flex items-center gap-4">
                  <div
                    className="inline-flex size-11 items-center justify-center rounded-lg"
                    style={{ background: cardIconBg }}
                  >
                    <Icon
                      className="size-5"
                      strokeWidth={1.75}
                      style={{ color: cardIcon }}
                    />
                  </div>

                  <h3
                    className="m-0 text-lg font-semibold tracking-tight"
                    style={{ color: theme.text }}
                  >
                    {item.title.content}
                  </h3>
                </div>

                <p
                  className="mt-2 text-sm leading-relaxed"
                  style={{ color: theme.mutedText }}
                >
                  {item.description.content}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 
