"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { dummyTestimonials } from "@/app/components/ui/testimonials/testimonials-data";
import type { Company, TestimonialItem } from "@/data/companies";

interface ContactTestimonialsCarouselProps {
  company: Company;
}

function StarRating({ rating, color }: { rating: number; color: string }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className="size-4"
          fill={i < rating ? color : "none"}
          stroke={i < rating ? color : "#d1d5db"}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>
      ))}
    </div>
  );
}

export function ContactTestimonialsCarousel({ company }: ContactTestimonialsCarouselProps) {
  const t = company.theme;
  // Use company testimonials if available, otherwise fall back to dummy data
  const items: TestimonialItem[] =
    (company.testimonials.items && company.testimonials.items.length > 0)
      ? company.testimonials.items
      : dummyTestimonials;

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % items.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [items.length]);

  function goTo(next: number) {
    setDirection(next > index ? 1 : -1);
    setIndex(next);
  }

  const current = items[index];

  return (
    <div className="w-full max-w-lg">
      {/* Card */}
      <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur-sm">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            initial={{ opacity: 0, x: direction * 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -24 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex flex-col gap-4"
          >
            {/* Stars */}
            {current.rating != null && (
              <StarRating rating={current.rating} color={t.secondary} />
            )}

            {/* Quote */}
            <p className="text-base leading-relaxed text-white/90">
              &ldquo;{current.quote}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center gap-3">
              {current.image && (
                <img
                  src={current.image}
                  alt={current.name}
                  className="size-9 rounded-full object-cover ring-2 ring-white/30"
                />
              )}
              <div>
                <p className="text-sm font-bold text-white">{current.name}</p>
                {current.role && (
                  <p className="text-xs text-white/60">{current.role}</p>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dot indicators */}
      <div className="mt-4 flex items-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            className="h-2 rounded-full transition-all duration-300"
            style={{
              width: i === index ? "1.5rem" : "0.5rem",
              backgroundColor: i === index ? t.secondary : "rgba(255,255,255,0.35)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
