"use client";

import { useEffect, useRef } from "react";
import { FaStar, FaTimes, FaUserCircle } from "react-icons/fa";
import type { TestimonialItem, Company } from "@/data/companies";


interface ReviewModalProps {
  testimonial: TestimonialItem;
  onClose: () => void;
  testimonials?: Company["testimonials"];
  company?: Company;
}


export function ReviewModal({
  testimonial,
  onClose,
  testimonials,
  company,
}: ReviewModalProps) {
  const { styles } = testimonials ?? {};
  const dialogRef = useRef<HTMLDivElement>(null);
  const rating = testimonial.rating ?? 5;

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        className="relative w-full max-w-3xl overflow-hidden rounded-3xl border-5-solid p-6 shadow-2xl md:p-8"
        style={{
          background:
            styles?.modalBackground ||
            "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)",
          border: `4px solid ${styles?.modalBorder}`,
        }}
      >
        {/* Top row */}

        <div className="mb-6 flex items-center justify-between gap-4">
          {company?.branding?.navLogo ? (
            <img
              src={company.branding.navLogo}
              alt={company.general.name}
              className="h-12 w-auto"
              style={{ maxWidth: 160 }}
            />
          ) : (
            testimonial.company || testimonials?.title || "Review"
          )}

          <button
            onClick={onClose}
            aria-label="Close review"
            className="rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
          >
            <FaTimes size={18} />
          </button>
        </div>

        {/* Quote */}
        <blockquote
          className="max-w-2xl text-xl font-light leading-tight tracking-tight text-slate-950 md:text-2xl"
          style={{ color: "var(--quote)" }}
        >
          “{testimonial.quote}”
        </blockquote>

        {/* Divider */}
        <div className="my-8 border-t border-dashed" style={{ borderColor: "var(--card-border)" }} />

        {/* Bottom row */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            {testimonial.image ? (
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="h-14 w-14 rounded-full object-cover shadow-sm ring-1 ring-slate-200"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            ) : (
              <FaUserCircle size={56} className="text-slate-300" />
            )}

            <div>
              <p
                className="text-lg font-bold leading-tight"
                style={{ color: "var(--name)" }}
              >
                {testimonial.name}
              </p>

              {(testimonial.role || testimonial.company) && (
                <p
                  className="mt-1 text-sm"
                  style={{ color: "var(--role)" }}
                >
                  {testimonial.role || testimonial.company}
                </p>
              )}
            </div>
          </div>

          {/* Rating bottom-right */}
          <div className="flex items-center gap-2 sm:justify-end">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar
                  key={i}
                  size={15}
                  style={{
                    color:
                      i < rating ? "var(--star)" : "var(--muted-star)",
                  }}
                />
              ))}
            </div>

            <span className="text-sm font-semibold text-slate-700">
              {rating.toFixed(1)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
