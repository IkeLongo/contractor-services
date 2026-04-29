"use client";
import React from "react";
import { motion } from "motion/react";
import type { Company } from "@/lib/types/company";
import { ImagesSlider } from "../ui/images-slider";
import { HiArrowRight } from "react-icons/hi2";

interface HeroSectionProps {
  company: Company;
}

export function TwoColumnHeroSection({ company }: HeroSectionProps) {
  const s = company.pages.home.hero;
  
  // You can customize these images or pull from s.backgroundImage(s) if available
  const images = s.images && s.images.length > 0
    ? s.images.map((img) => img.src)
    : [
        "/companies/tso-texas/hero-images/office-renovation-modern-workspace.jpeg",
        "/companies/tso-texas/hero-images/commercial-drywall-and-construction.png",
        "/companies/tso-texas/hero-images/office-remodeling-construction-workers-interior.jpg",
        "/companies/tso-texas/hero-images/cat6-cable-installation-commercial-building.webp",
        "/companies/tso-texas/hero-images/commercial-interior-build-out-construction.png",
        "/companies/tso-texas/hero-images/photo-metal-fabrication-shop-with-welding-equipment-sparks-flying.png",
      ];

  // Default/fallback gradients and colors
  const defaultOverlay = "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.8) 100%)";
  const fallbackCtaGradient = "linear-gradient(to bottom, #6366f1, #2563eb)";

  return (
    <ImagesSlider className="h-[40rem] min-h-screen" images={images} overlay={false}>
      {/* Overlay gradient, now styleable */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ background: s.styles?.background?.overlay || defaultOverlay }}
      />
      <motion.div
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="z-20 flex flex-col items-center justify-center w-full h-full px-4 text-center"
      >
        {s.eyebrow && (
          <div
            className="mb-4 text-xs md:text-sm font-semibold uppercase tracking-widest"
            style={{ color: s.eyebrow?.styles?.color || "rgba(255,255,255,0.7)" }}
          >
            {s.eyebrow.content}
          </div>
        )}
        <h1
          className="max-w-4xl text-3xl md:text-5xl font-bold tracking-tight mb-4 drop-shadow-lg"
          style={{ color: s.title?.styles?.color || "#FFFFFF" }}
        >
          {s.title.content}
        </h1>
        <p
          className="max-w-2xl mx-auto text-lg md:text-2xl mb-8 drop-shadow"
          style={{ color: s.subtitle?.styles?.color || "rgba(255,255,255,0.9)" }}
        >
          {s.subtitle.content}
        </p>
        <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
          {s.primaryCta && (
            <a
              href={s.primaryCta.href}
              className="group relative z-10 my-4 flex items-center space-x-2 rounded-2xl px-5 py-3 shadow-[0px_3px_0px_0px_rgba(255,255,255,0.1)_inset] transition"
              style={{
                background: s.primaryCta.styles?.background || fallbackCtaGradient,
                color: s.primaryCta.styles?.text || "#FFFFFF",
              }}
            >
              <span>{s.primaryCta.label}</span>
              <HiArrowRight className="mt-0.5 h-4 w-4 stroke-[1px] transition-transform duration-200 group-hover:translate-x-1" style={{ color: s.primaryCta.styles?.text || "#FFFFFF" }} />
            </a>
          )}

          {s.secondaryCta && (
            <a
              href={s.secondaryCta.href}
              className="text-base font-medium transition hover:text-white"
              style={{ color: s.secondaryCta.styles?.text || "rgba(255,255,255,0.85)" }}
            >
              {s.secondaryCta.label}
            </a>
          )}
        </div>
        {s.highlights && s.highlights.length > 0 && (
          <div className="hidden md:flex flex-wrap justify-center gap-2 mt-4">
            {s.highlights.map((highlight, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.1,
                  ease: "easeOut",
                }}
                className="inline-block rounded-full border px-3 py-1 text-xs font-medium backdrop-blur shadow"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  borderColor: "rgba(255,255,255,0.2)",
                  color: highlight?.styles?.color || "rgba(255,255,255,0.8)",
                }}
              >
                {highlight.content}
              </motion.span>
            ))}
          </div>
        )}
      </motion.div>
    </ImagesSlider>
  );
}

