"use client";
import React from "react";
import {
  Layers,
  BadgeCheck,
  Clock,
  Hammer,
  Network,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import type { Company } from "@/data/companies";

const ICON_MAP: Record<string, LucideIcon> = {
  Layers,
  BadgeCheck,
  Clock,
  Hammer,
  Network,
  ShieldCheck,
};

interface WhyChooseUsProps {
  company: Company;
}

export function WhyChooseUs({ company }: WhyChooseUsProps) {
  return (
    <section
      id="features"
      className="mx-auto max-w-7xl px-4 py-10 md:py-24 lg:py-32"
    >
      <div className="flex flex-col items-center justify-center font-sans">
        <h2 className="text-2xl font-bold tracking-tight text-neutral-700 md:text-4xl">
          {company.differentiators.title}
        </h2>
        {company.differentiators.description && (
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-neutral-600">
            {company.differentiators.description}
          </p>
        )}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 md:mt-20 md:grid-cols-3">
        {company.differentiators.items.map((item) => {
          const Icon = item.icon ? (ICON_MAP[item.icon] ?? ShieldCheck) : ShieldCheck;
          return (
            <div
              key={item.title}
              className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="inline-flex size-11 items-center justify-center rounded-lg bg-neutral-100">
                  <Icon className="size-5 text-neutral-700" strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-neutral-900 m-0">
                  {item.title}
                </h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
