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
  return (
    <section
      id="features"
      style={
        {
          "--primary": company.theme.primary,
          "--secondary": company.theme.secondary,
          "--background": company.theme.background,
          "--surface": company.theme.surface,
          "--text": company.theme.text,
          "--muted": company.theme.mutedText,
          "--border": company.theme.border,
        } as React.CSSProperties
      }
      className="bg-[var(--background)] px-4 py-10 md:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center font-sans">
          <h2 className="text-2xl font-bold tracking-tight text-[var(--primary)] md:text-4xl">
            {company.differentiators.title}
          </h2>

          {company.differentiators.description && (
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-[var(--muted)]">
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
                className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[var(--secondary)]/40 hover:shadow-md"
              >
                <div className="mb-4 flex items-center gap-4">
                  <div className="inline-flex size-11 items-center justify-center rounded-lg bg-[var(--primary)]/10">
                    <Icon
                      className="size-5 text-[var(--primary)]"
                      strokeWidth={1.75}
                    />
                  </div>

                  <h3 className="m-0 text-lg font-semibold tracking-tight text-[var(--text)]">
                    {item.title}
                  </h3>
                </div>

                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
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
