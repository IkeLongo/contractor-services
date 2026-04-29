"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useSpring, useTransform } from "motion/react";
import type { Company } from "@/lib/types/company";

interface AboutStatsSectionProps {
  company: Company;
}

export function AboutStatsSection({ company }: AboutStatsSectionProps) {
  const stats = company.about.stats;
  const t = company.branding.theme;

  if (!stats || !stats.items || stats.items.length === 0) return null;

  const s = stats.styles;

  return (
    <section
      className="py-10 px-4 md:py-14"
      style={{ backgroundColor: s?.background ?? t.background }}
    >
      <div
        className="mx-auto max-w-7xl rounded-3xl border p-6 md:p-10"
        style={{ backgroundColor: s?.containerBg ?? t.surface, borderColor: s?.border ?? t.border }}
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
            >
              <div className="flex items-baseline gap-0.5">
                {item.prefix && (
                  <span className="text-3xl font-black" style={{ color: s?.numberColor ?? t.primary }}>
                    {item.prefix}
                  </span>
                )}
                <span className="text-3xl font-black" style={{ color: s?.numberColor ?? t.primary }}>
                  <AnimatedNumber value={item.value} />
                </span>
                {item.suffix && (
                  <span className="text-3xl font-black" style={{ color: s?.numberColor ?? t.primary }}>
                    {item.suffix}
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm leading-snug" style={{ color: s?.labelColor ?? t.mutedText }}>
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedNumber({
  value,
  initial = 0,
}: {
  value: number;
  initial?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const spring = useSpring(initial, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString(),
  );

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    } else {
      spring.set(initial);
    }
  }, [isInView, spring, value, initial]);

  return <motion.span ref={ref}>{display}</motion.span>;
}
