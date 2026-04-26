"use client";

import { motion, type Transition } from "motion/react";
import {
  Wrench, DoorOpen, Paintbrush, Hammer, Lightbulb,
  ClipboardCheck, Building2, ShieldCheck, Network,
  type LucideIcon,
} from "lucide-react";
import type { Company, ServiceItem } from "@/data/companies";

interface ServiceNarrativeProps {
  company: Company;
  service: ServiceItem;
}

const ICON_MAP: Record<string, LucideIcon> = {
  Wrench, DoorOpen, Paintbrush, Hammer, Lightbulb,
  ClipboardCheck, Building2, ShieldCheck, Network,
};

const DEFAULT_CARD_COLORS = ["#EAF1FF", "#FFF1F1", "#F8FAFC", "#EEF9F1"];

type ScopeItem = { title: string; icon?: string; color?: string };

function normalizeScopeItems(
  items: (string | ScopeItem)[]
): ScopeItem[] {
  return items.map((item) =>
    typeof item === "string" ? { title: item } : item
  );
}

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.4, ease: "easeOut" } as Transition,
};

export function ServiceNarrative({ company, service }: ServiceNarrativeProps) {
  const t = company.theme;
  const s = company.services.styles?.narrative;

  const overviewTitle = service.overview?.title ?? service.title;
  const overviewDesc = service.overview?.description ?? service.description;
  const overviewLong = service.overview?.longDescription;

  const scopeTitle = service.includes?.title ?? "Scope of Work";
  const scopeDesc = service.includes?.description;
  const rawItems = service.includes?.items ?? service.bullets ?? [];
  const scopeItems = normalizeScopeItems(rawItems);

  const cardColors = s?.scopeCardColors ?? DEFAULT_CARD_COLORS;

  return (
    <section
      className="py-16 md:py-24 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: s?.background ?? t.background }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="md:grid md:grid-cols-[3px_1fr] md:gap-12">
          {/* Accent line */}
          <div
            className="hidden md:block rounded-full"
            style={{ backgroundColor: s?.accent ?? t.secondary, opacity: 0.35 }}
          />

          <div className="space-y-14">

            {/* ── 1. Overview ── */}
            <motion.div {...fadeUp}>
              <p
                className="text-xs font-bold uppercase tracking-widest mb-3"
                style={{ color: s?.eyebrow ?? s?.accent ?? t.secondary }}
              >
                Overview
              </p>
              <h2
                className="text-3xl md:text-4xl font-black leading-tight mb-5"
                style={{ color: s?.title ?? t.text }}
              >
                {overviewTitle}
              </h2>
              <p className="text-base leading-relaxed" style={{ color: s?.text ?? t.mutedText }}>
                {overviewDesc}
              </p>
              {overviewLong && (
                <p className="mt-4 text-base leading-relaxed" style={{ color: s?.text ?? t.mutedText }}>
                  {overviewLong}
                </p>
              )}
            </motion.div>

            {/* ── 2. Scope of Work ── */}
            {scopeItems.length > 0 && (
              <motion.div {...fadeUp}>
                <h3
                  className="mb-2 text-xl font-black md:text-2xl"
                  style={{ color: s?.title ?? t.text }}
                >
                  {scopeTitle}
                </h3>

                {scopeDesc && (
                  <p
                    className="mb-6 text-base leading-relaxed"
                    style={{ color: s?.text ?? t.mutedText }}
                  >
                    {scopeDesc}
                  </p>
                )}

                <div className="relative mt-4 overflow-hidden rounded-3xl p-4 md:p-6">
                  <img
                    src={company.branding.logo}
                    alt=""
                    aria-hidden="true"
                    className="pointer-events-none absolute left-1/2 top-1/2 w-[600px] max-w-[95%] -translate-x-1/2 -translate-y-1/2 opacity-[0.04]"
                  />

                  <div className="relative z-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {scopeItems.map((item, i) => {
                      const Icon = ICON_MAP[item.icon ?? ""] ?? Wrench;

                      return (
                        <div
                          key={i}
                          className="group relative flex min-h-[76px] items-center overflow-hidden rounded-2xl border border-white/70 bg-white/65 backdrop-blur-md p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                        >
                          <div
                            className="absolute left-0 top-0 h-full w-[3px] rounded-full"
                            style={{ backgroundColor: s?.accent ?? t.secondary }}
                          />

                          <span
                            className="relative z-10 max-w-[82%] text-sm font-bold leading-snug"
                            style={{ color: s?.scopeCardText ?? t.text }}
                          >
                            {item.title}
                          </span>

                          <Icon
                            className="absolute -right-2 -bottom-3 -rotate-12 opacity-10 transition-transform duration-300 group-hover:rotate-0 group-hover:scale-105"
                            size={64}
                            style={{ color: s?.scopeCardIcon ?? t.primary }}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}

            {/* ── 3. Why It Matters ── */}
            {service.whyItMatters && (
              <motion.div {...fadeUp}>
                <h3
                  className="text-xl md:text-2xl font-black mb-3"
                  style={{ color: s?.title ?? t.text }}
                >
                  {service.whyItMatters.title}
                </h3>
                <p className="text-base leading-relaxed" style={{ color: s?.text ?? t.mutedText }}>
                  {service.whyItMatters.description}
                </p>
                {service.whyItMatters.longDescription && (
                  <p className="mt-4 text-base leading-relaxed" style={{ color: s?.text ?? t.mutedText }}>
                    {service.whyItMatters.longDescription}
                  </p>
                )}
              </motion.div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
