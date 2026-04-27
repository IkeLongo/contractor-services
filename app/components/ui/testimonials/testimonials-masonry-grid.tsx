"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { FaQuoteLeft, FaStar, FaUserCircle } from "react-icons/fa";
import { ReviewModal } from "./review-modal";
import { dummyTestimonials } from "./testimonials-data";
import type { TestimonialItem } from "@/data/companies";
import type { Company } from "@/data/companies";
import test from "node:test";

const TRUNCATE_MAX = 220;

function truncateReview(text: string, max: number): { display: string; isTruncated: boolean } {
  if (text.length <= max) return { display: text, isTruncated: false };
  const cut = text.lastIndexOf(" ", max);
  return { display: text.slice(0, cut > 0 ? cut : max) + "…", isTruncated: true };
}

export function TestimonialsMasonryGrid({
  testimonials,
  company,
}: {
  testimonials?: Company["testimonials"];
  company?: Company;
}) {
  const data: TestimonialItem[] =
  testimonials?.items && testimonials.items.length > 0
    ? testimonials.items
    : dummyTestimonials;
  const [selected, setSelected] = useState<TestimonialItem | null>(null);

  const first = data.slice(0, 3);
  const second = data.slice(3, 6);
  const third = data.slice(6, 9);
  const fourth = data.slice(9, 12);
  const grid = [first, second, third, fourth];

  return (
    <div>
      <div 
        className="mx-auto mt-10 grid max-w-7xl grid-cols-1 items-start gap-4 px-0 md:grid-cols-2 md:px-8 lg:grid-cols-4"
        style={{ background: testimonials?.styles?.background }}
      >
        {grid.map((testimonialsCol, index) => (
          <div key={`testimonials-col-${index}`} className="grid items-start gap-4">
            {testimonialsCol.map((testimonial, idx) => {
              const { display, isTruncated } = truncateReview(testimonial.quote, TRUNCATE_MAX);
              return (
                <Card
                  key={`testimonial-${testimonial.name}-${index}-${idx}`}
                  onClick={() => setSelected(testimonial)}
                  clickable
                >
                  <Quote>
                    {display}
                    {isTruncated && (
                      <button
                        className="ml-1 text-xs font-semibold not-italic"
                        style={{ color: "var(--description)" }}
                        onClick={(e) => { e.stopPropagation(); setSelected(testimonial); }}
                        aria-label="Read full review"
                      >
                        Read more
                      </button>
                    )}
                  </Quote>
                  <div className="mt-3 flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <FaStar
                        key={i}
                        size={12}
                        style={{ color: i < (testimonial.rating ?? 5) ? "var(--star)" : "var(--muted-star)" }}
                      />
                    ))}
                  </div>
                  <div className="mt-8 flex items-center gap-2">
                    {testimonial.image ? (
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={40}
                        height={40}
                        className="rounded-full shrink-0"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />
                    ) : (
                      <FaUserCircle size={40} style={{ color: "var(--card-border)" }} className="shrink-0" />
                    )}
                    <div className="flex flex-col">
                      <QuoteDescription>{testimonial.name}</QuoteDescription>
                      <QuoteDescription className="text-[10px]">
                        {testimonial.role || testimonial.company}
                      </QuoteDescription>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        ))}
      </div>

      {selected && (
        <ReviewModal
          testimonial={selected}
          onClose={() => setSelected(null)}
          testimonials={testimonials}
          company={company}
        />
      )}
    </div>
  );
}
export const Card = ({
  className,
  children,
  onClick,
  clickable,
}: {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  clickable?: boolean;
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "group relative rounded-xl border p-8",
        clickable && "cursor-pointer transition-colors hover:bg-[var(--card-bg)] hover:border-[var(--card-border)]",
        className,
      )}
      style={{
        background: "var(--card-bg)",
        borderColor: "var(--card-border)",
      }}
    >
      <FaQuoteLeft className="absolute top-2 left-2" style={{ color: "var(--quote-icon)" }} />
      {children}
    </div>
  );
};

export const Quote = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "relative py-2 text-base font-normal italic",
        className,
      )}
      style={{ color: "var(--quote)" }}
    >
      {children}
    </h3>
  );
};

export const QuoteDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "max-w-sm text-xs font-normal",
        className,
      )}
      style={{ color: "var(--role)" }}
    >
      {children}
    </p>
  );
};


