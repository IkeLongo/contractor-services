"use client";

import { useState } from "react";
import type { Company } from "@/data/companies";

interface FaqSectionProps {
  company: Company;
}

export function FaqSection({ company }: FaqSectionProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faq = company.faq;
  if (!faq || faq.items.length === 0) return null;

  const s = faq.styles;
  const t = company.theme;

  const accent = s?.accent ?? t.secondary;
  const bg = s?.background ?? t.background;
  const eyebrowColor = s?.eyebrow ?? t.secondary;
  const titleColor = s?.title ?? t.text;
  const descColor = s?.description ?? t.mutedText;
  const itemBg = s?.itemBackground ?? t.surface;
  const itemBorder = s?.itemBorder ?? t.border;
  const questionColor = s?.question ?? t.text;
  const answerColor = s?.answer ?? t.mutedText;
  const iconColor = s?.icon ?? "#ffffff";

  return (
    <section
      className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: bg }}
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          {faq.eyebrow && (
            <p
              className="text-xs font-bold uppercase tracking-widest mb-2"
              style={{ color: eyebrowColor }}
            >
              {faq.eyebrow}
            </p>
          )}
          <h2
            className="text-3xl md:text-4xl font-black"
            style={{ color: titleColor }}
          >
            {faq.title}
          </h2>
          {faq.description && (
            <p
              className="mt-3 text-base leading-relaxed max-w-xl mx-auto"
              style={{ color: descColor }}
            >
              {faq.description}
            </p>
          )}
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faq.items.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="overflow-hidden rounded-xl border shadow-sm transition-shadow duration-200"
                style={{
                  backgroundColor: itemBg,
                  borderColor: isOpen ? accent : itemBorder,
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-150"
                  style={{
                    backgroundColor: isOpen ? `${accent}0d` : "transparent",
                  }}
                  aria-expanded={isOpen}
                >
                  <span
                    className="font-bold text-sm md:text-base leading-snug"
                    style={{ color: questionColor }}
                  >
                    {item.question}
                  </span>
                  <span
                    className="shrink-0 w-6 h-6 flex items-center justify-center rounded-full text-sm font-black transition-transform duration-200"
                    style={{
                      backgroundColor: accent,
                      color: iconColor,
                      transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div
                    className="px-6 pb-5 pt-4 text-sm leading-relaxed border-t"
                    style={{ color: answerColor, borderColor: itemBorder }}
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

