"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import type { Company } from "@/data/companies";

interface CaseStudyCtaSectionProps {
  company: Company;
}

export function CaseStudyCtaSection({ company }: CaseStudyCtaSectionProps) {
  const { finalCta, theme } = company;
  const [hovered, setHovered] = useState(false);

  const buttonBg = finalCta.styles?.buttonBg ?? theme.secondary;
  const buttonText = finalCta.styles?.buttonText ?? "#ffffff";
  const titleColor = finalCta.styles?.title ?? theme.text;
  const descColor = finalCta.styles?.description ?? theme.mutedText;

  const image = finalCta.image;
  const imageAlt = finalCta.imageAlt ?? `${company.name} team`;

  return (
    <section
      className="py-20 md:py-28 px-4 sm:px-6 lg:px-8"
      style={{
        background:
          company.theme.background
            ? `linear-gradient(to bottom, ${company.theme.background}, ${theme.surface})`
            : `linear-gradient(to bottom, ${theme.surface}, ${theme.background})`,
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── Left: copy + CTA ─────────────────────────────────── */}
          <div className="flex flex-col gap-6">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight"
              style={{ color: titleColor }}
            >
              {finalCta.title}
            </h2>

            <p
              className="text-base md:text-lg leading-relaxed max-w-lg"
              style={{ color: descColor }}
            >
              {finalCta.description}
            </p>

            <div className="flex items-center gap-4 pt-2">
              <Link
                href={finalCta.primaryCta.href}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="inline-flex items-center gap-2 rounded-xl px-7 py-4 text-sm font-bold uppercase tracking-wider shadow-lg transition-all duration-200"
                style={{
                  backgroundColor: buttonBg,
                  color: buttonText,
                  transform: hovered ? "translateY(-2px)" : "translateY(0)",
                  boxShadow: hovered
                    ? `0 8px 24px ${buttonBg}55`
                    : `0 4px 14px ${buttonBg}33`,
                }}
              >
                {finalCta.primaryCta.label}
                <ArrowRight
                  className="size-4 transition-transform duration-200"
                  style={{ transform: hovered ? "translateX(4px)" : "translateX(0)" }}
                />
              </Link>

              {finalCta.secondaryCta && (
                <Link
                  href={finalCta.secondaryCta.href}
                  className="text-sm font-bold uppercase tracking-wider transition-opacity duration-200 hover:opacity-70"
                  style={{ color: theme.mutedText }}
                >
                  {finalCta.secondaryCta.label}
                </Link>
              )}
            </div>
          </div>

          {/* ── Right: image ─────────────────────────────────────── */}
          {image && (
            <div className="relative max-h-[500px] overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={image}
                alt={imageAlt}
                width={800}
                height={500}
                className="w-full h-full object-cover max-h-[500px]"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              {/* Subtle bottom fade */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/20 to-transparent rounded-b-2xl" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
