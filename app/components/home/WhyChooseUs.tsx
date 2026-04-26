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
import type { Company } from "@/data/companies";

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
  const s = company.differentiators.styles;
  const t = company.theme;
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

  // Compose CSS variables for section and cards
  const cssVars = {
    "--section-bg": s?.background || theme.background,
    "--eyebrow": s?.eyebrow || theme.secondary,
    "--title": s?.title || theme.text,
    "--description": s?.description || theme.mutedText,
    "--card-bg": s?.cardBackground || theme.surface,
    "--card-border": s?.cardBorder || theme.border,
    "--card-title": s?.cardTitle || theme.text,
    "--card-description": s?.cardDescription || theme.mutedText,
    "--icon": s?.icon || theme.secondary,
    "--icon-bg": s?.iconBackground || `${theme.secondary}1A`,
    "--hover-border": s?.hoverBorder || theme.secondary,
  } as any;

  return (
    <section
      id="features"
      style={cssVars as any}
      className="relative overflow-hidden bg-[var(--section-bg)] px-4 py-10 md:py-24 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-transparent to-slate-200/60" />
        <div className="absolute inset-0 opacity-[0.1] bg-[radial-gradient(circle_at_1px_1px,_#0B1F4D_1px,_transparent_0)] [background-size:22px_22px]" />
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[var(--icon)]/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center font-sans">
          {company.differentiators.eyebrow && (
            <p
              className="text-xs font-bold uppercase tracking-widest mb-2"
              style={{ color: "var(--eyebrow)" }}
            >
              {company.differentiators.eyebrow}
            </p>
          )}
          <h2
            className="text-2xl font-black tracking-tight md:text-4xl text-[var(--title)]"
            style={{ color: "var(--title)" }}
          >
            {company.differentiators.title}
          </h2>

          {company.differentiators.description && (
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-[var(--description)]">
              {company.differentiators.description}
            </p>
          )}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:mt-20 md:grid-cols-3">
          {company.differentiators.items.map((item) => {
            const Icon = item.icon
              ? ICON_MAP[item.icon] ?? ShieldCheck
              : ShieldCheck;

            return (
              <div
                key={item.title}
                className="rounded-xl border p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md bg-[var(--card-bg)] border-[var(--card-border)] hover:border-[var(--hover-border)]"
              >
                <div className="mb-4 flex items-center gap-4">
                  <div
                    className="inline-flex size-11 items-center justify-center rounded-lg"
                    style={{ background: "var(--icon-bg)" }}
                  >
                    <Icon
                      className="size-5"
                      strokeWidth={1.75}
                      style={{ color: "var(--icon)" }}
                    />
                  </div>

                  <h3
                    className="m-0 text-lg font-semibold tracking-tight"
                    style={{ color: "var(--card-title)" }}
                  >
                    {item.title}
                  </h3>
                </div>

                <p
                  className="mt-2 text-sm leading-relaxed"
                  style={{ color: "var(--card-description)" }}
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 
