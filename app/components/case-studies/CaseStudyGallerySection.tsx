"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Company } from "@/lib/types/company";
import type { PortfolioItem } from "@/lib/types/old-types";

interface GalleryImage {
  image: string;
  alt: string;
  caption?: string;
}

function buildFallbackGallery(project: PortfolioItem): GalleryImage[] {
  return [{ image: project.image, alt: project.title, caption: project.description }];
}

interface CaseStudyGallerySectionProps {
  company: Company;
  project: PortfolioItem;
}

export function CaseStudyGallerySection({
  company,
  project,
}: CaseStudyGallerySectionProps) {
  const t = company.branding.theme;

  const images =
    project.caseStudy?.gallery && project.caseStudy.gallery.length > 0
      ? project.caseStudy.gallery
      : buildFallbackGallery(project);

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  function prev() {
    setDirection(-1);
    setIndex((i) => (i - 1 + images.length) % images.length);
  }

  function next() {
    setDirection(1);
    setIndex((i) => (i + 1) % images.length);
  }

  const current = images[index];

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir * 40 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir * -40 }),
  };

  return (
    <section
      className="py-14 md:py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: t.background }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-10 text-center">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-2"
            style={{ color: t.eyebrow }}
          >
            Project Gallery
          </p>
          <h2
            className="text-2xl md:text-3xl font-black tracking-tight"
            style={{ color: t.title }}
          >
            A Closer Look at the Work
          </h2>
          <p
            className="mt-2 text-sm md:text-base"
            style={{ color: t.mutedText }}
          >
            A few visuals from the project scope and completed work.
          </p>
        </div>

        {/* Image area */}
        <div className="flex flex-col items-center gap-5">
          {/* Main image */}
          <div
            className="relative w-full overflow-hidden rounded-2xl border shadow-sm aspect-[16/9]"
            style={{ borderColor: t.border }}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={current.image}
                  alt={current.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 1024px, 100vw"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Caption */}
          {current.caption && (
            <p
              className="text-sm text-center max-w-xl"
              style={{ color: t.mutedText }}
            >
              {current.caption}
            </p>
          )}

          {/* Controls */}
          {images.length > 1 && (
            <div className="flex items-center gap-4 mt-1">
              <button
                onClick={prev}
                aria-label="Previous image"
                className="flex items-center justify-center size-10 rounded-full border transition-colors"
                style={{
                  borderColor: t.border,
                  color: t.primary,
                  backgroundColor: t.surface,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                    t.primary;
                  (e.currentTarget as HTMLButtonElement).style.color = "#ffffff";
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    t.primary;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                    t.surface;
                  (e.currentTarget as HTMLButtonElement).style.color =
                    t.primary;
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    t.border;
                }}
              >
                <ChevronLeft className="size-4" />
              </button>

              {/* Dot indicators */}
              <div className="flex items-center gap-1.5">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > index ? 1 : -1);
                      setIndex(i);
                    }}
                    aria-label={`Go to image ${i + 1}`}
                    className="size-2 rounded-full transition-all"
                    style={{
                      backgroundColor:
                        i === index ? t.primary : t.border,
                      transform: i === index ? "scale(1.3)" : "scale(1)",
                    }}
                  />
                ))}
              </div>

              <button
                onClick={next}
                aria-label="Next image"
                className="flex items-center justify-center size-10 rounded-full border transition-colors"
                style={{
                  borderColor: t.border,
                  color: t.primary,
                  backgroundColor: t.surface,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                    t.primary;
                  (e.currentTarget as HTMLButtonElement).style.color = "#ffffff";
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    t.primary;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                    t.surface;
                  (e.currentTarget as HTMLButtonElement).style.color =
                    t.primary;
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    t.border;
                }}
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
