"use client";

import { motion, type Transition } from "motion/react";
import {
  Phone,
  ClipboardCheck,
  Hammer,
  BadgeCheck,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { Company } from "@/data/companies";

const ICON_MAP: Record<string, LucideIcon> = {
  Phone,
  ClipboardCheck,
  Hammer,
  BadgeCheck,
  Wrench,
};

function resolveIcon(name?: string): LucideIcon {
  if (!name) return Wrench;
  const key = name.charAt(0).toUpperCase() + name.slice(1);
  return ICON_MAP[key] ?? Wrench;
}

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
};

interface AboutProcessSectionProps {
  company: Company;
}

export function AboutProcessSection({ company }: AboutProcessSectionProps) {
  const process = company.about.process;
  const t = company.theme;

  if (!process) return null;

  const ps = process.styles;

  const eyebrowColor = ps?.eyebrow ?? t.secondary;
  const titleColor = ps?.title ?? t.text;
  const descColor = ps?.description ?? t.mutedText;
  const cardBg = ps?.cardBackground ?? "#ffffff";
  const cardBorder = ps?.cardBorder ?? t.border;
  const cardText = ps?.cardText ?? t.text;
  const cardMuted = ps?.cardMutedText ?? t.mutedText;
  const accent = ps?.accent ?? t.secondary;

  return (
    <section
      className="py-16 px-4 sm:px-6 lg:px-8 md:py-12"
      style={{ backgroundColor: ps?.background ?? t.background }}
    >
      <div className="mx-auto max-w-7xl">

        {/* ── Header ── */}
        <motion.div
          className="mb-12 text-center"
          {...fadeUp}
          transition={{ duration: 0.5 } as Transition}
        >
          {process.eyebrow && (
            <p
              className="mb-3 text-xs font-bold uppercase tracking-widest"
              style={{ color: eyebrowColor }}
            >
              {process.eyebrow}
            </p>
          )}
          <h2
            className="text-2xl font-black leading-tight md:text-3xl"
            style={{ color: titleColor }}
          >
            {process.title}
          </h2>
          {process.description && (
            <p
              className="mx-auto mt-3 max-w-xl text-sm leading-relaxed md:text-base"
              style={{ color: descColor }}
            >
              {process.description}
            </p>
          )}
        </motion.div>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {process.steps.map((step, i) => {
            const Icon = resolveIcon(step.icon);
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: -120, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 14,
                  mass: 0.9,
                  delay: i * 0.12,
                }}
              >
                <div
                  className="relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-2xl border p-5 shadow-sm"
                  style={{ backgroundColor: cardBg, borderColor: cardBorder }}
                >
                  {/* Step label */}
                  <p
                    className="mb-3 text-[10px] uppercase tracking-widest"
                    style={{ color: accent }}
                  >
                    {step.step}
                  </p>

                  {/* Title + description */}
                  <div className="flex-1">
                    <h3
                      className="mb-2 text-base font-black leading-snug"
                      style={{ color: cardText }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: cardMuted }}
                    >
                      {step.description}
                    </p>
                  </div>

                  {/* Tag pill */}
                  {step.tag && (
                    <div className="mt-4">
                      <span
                        className="inline-block rounded-full px-3 py-1 text-[11px] font-semibold"
                        style={{
                          backgroundColor: `${accent}18`,
                          color: accent,
                        }}
                      >
                        {step.tag}
                      </span>
                    </div>
                  )}

                  {/* Decorative background icon */}
                  <div className="pointer-events-none absolute bottom-3 right-3 rotate-12 opacity-[0.06]">
                    <Icon size={72} strokeWidth={1.5} color={cardText} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
