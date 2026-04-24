"use client";

import { useEffect, useRef } from "react";
import { FaStar, FaTimes, FaUserCircle, FaQuoteLeft } from "react-icons/fa";
import type { TestimonialItem } from "@/data/companies";

interface ReviewModalProps {
  testimonial: TestimonialItem;
  onClose: () => void;
}

export function ReviewModal({ testimonial, onClose }: ReviewModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  // Close on Escape
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // Trap scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    // Backdrop
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Dialog */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        className="relative flex flex-col w-full max-w-lg max-h-[85vh] rounded-2xl shadow-2xl"
        style={{ background: "var(--section-bg)", border: "1px solid var(--card-border)" }}
      >
        {/* Header — fixed, never scrolls */}
        <div className="flex-shrink-0 flex items-center gap-3 px-8 py-3 border-b" style={{ borderColor: "var(--card-border)" }}>
          {testimonial.image ? (
            <img
              src={testimonial.image}
              alt={testimonial.name}
              width={44}
              height={44}
              className="rounded-full object-cover shrink-0 border-1 border-[var(--card-border)]"
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
          ) : (
            <FaUserCircle size={44} style={{ color: "var(--card-border)" }} className="shrink-0" />
          )}
          <div className="flex flex-col min-w-0">
            <span className="text-sm font-medium truncate" style={{ color: "var(--name)" }}>{testimonial.name}</span>
            {(testimonial.role || testimonial.company) && (
              <span className="text-xs truncate" style={{ color: "var(--role)" }}>{testimonial.role || testimonial.company}</span>
            )}
            <div className="mt-1 flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar
                  key={i}
                  size={12}
                  style={{ color: i < (testimonial.rating ?? 5) ? "var(--star)" : "var(--muted-star)" }}
                />
              ))}
            </div>
          </div>
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close review"
            className="ml-auto shrink-0 transition-colors"
            style={{ color: "var(--role)" }}
          >
            <FaTimes size={16} />
          </button>
        </div>

        {/* Body — scrollable */}
        <div className="flex-1 overflow-y-auto px-8 py-6">
          <FaQuoteLeft className="mb-4" size={20} style={{ color: "var(--quote-icon)" }} />
          <p className="text-base font-normal italic leading-relaxed" style={{ color: "var(--quote)" }}>
            {testimonial.quote}
          </p>
        </div>
      </div>
    </div>
  );
}
