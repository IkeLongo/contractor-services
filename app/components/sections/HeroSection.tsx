"use client";
import React from "react";
import { motion } from "motion/react";
import type { Company } from "@/data/companies";
import { ImagesSlider } from "../ui/images-slider";
import { HiArrowRight } from "react-icons/hi2";

interface HeroSectionProps {
  company: Company;
}

export function TwoColumnHeroSection({ company }: HeroSectionProps) {
  // You can customize these images or pull from company.hero.backgroundImage(s) if available
    const images = company.hero.images && company.hero.images.length > 0
      ? company.hero.images
    : [
        "/companies/tso-texas/hero-images/office-renovation-modern-workspace.jpeg",
        "/companies/tso-texas/hero-images/commercial-drywall-and-construction.png",
        "/companies/tso-texas/hero-images/office-remodeling-construction-workers-interior.jpg",
        "/companies/tso-texas/hero-images/cat6-cable-installation-commercial-building.webp",
        "/companies/tso-texas/hero-images/commercial-interior-build-out-construction.png",
        "/companies/tso-texas/hero-images/photo-metal-fabrication-shop-with-welding-equipment-sparks-flying.png",
      ];  

  return (
    <ImagesSlider className="h-[40rem] min-h-screen" images={images} overlay={false}>
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/70 via-black/40 to-black/80 pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="z-20 flex flex-col items-center justify-center w-full h-full px-4 text-center"
      >
        {company.hero.eyebrow && (
          <div className="mb-4 text-xs md:text-sm font-semibold uppercase tracking-widest text-white/70">
            {company.hero.eyebrow}
          </div>
        )}
        <h1 className="max-w-4xl text-3xl md:text-5xl font-bold tracking-tight text-white mb-4 drop-shadow-lg">
          {company.hero.title}
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-2xl text-white/90 mb-8 drop-shadow">
          {company.hero.subtitle}
        </p>
        <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
          {company.hero.primaryCta && (
            <a
              href={company.hero.primaryCta.href}
              className="group relative z-10 my-4 flex items-center space-x-2 rounded-2xl bg-gradient-to-b from-indigo-500 to-blue-600 px-5 py-3 text-white shadow-[0px_3px_0px_0px_rgba(255,255,255,0.1)_inset] transition hover:from-indigo-600 hover:to-blue-700"
            >
              <span>{company.hero.primaryCta.label}</span>
              <HiArrowRight className="mt-0.5 h-4 w-4 stroke-[1px] text-white transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          )}

          {company.hero.secondaryCta && (
            <a
              href={company.hero.secondaryCta.href}
              className="text-base font-medium text-white/85 transition hover:text-white"
            >
              {company.hero.secondaryCta.label}
            </a>
          )}
        </div>
        {company.hero.highlights && company.hero.highlights.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {company.hero.highlights.map((highlight, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.1,
                  ease: "easeOut",
                }}
                className="inline-block rounded-full bg-white/10 border border-white/20 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur shadow"
              >
                {highlight}
              </motion.span>
            ))}
          </div>
        )}
      </motion.div>
    </ImagesSlider>
  );
}

