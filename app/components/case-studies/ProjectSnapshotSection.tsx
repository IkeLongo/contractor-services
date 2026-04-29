"use client";

import { motion } from "motion/react";
import {
  Wrench,
  MapPin,
  Clock,
  Layers,
  Hammer,
  Network,
  ShieldCheck,
  BadgeCheck,
  FolderOpen,
  type LucideIcon,
} from "lucide-react";
import type { Company } from "@/lib/types/company";
import type { PortfolioItem, SnapshotItem  } from "@/lib/types/old-types";

const ICON_MAP: Record<string, LucideIcon> = {
  Wrench,
  MapPin,
  Clock,
  Layers,
  Hammer,
  Network,
  ShieldCheck,
  BadgeCheck,
  FolderOpen,
};

function resolveIcon(name?: string): LucideIcon {
  if (!name) return FolderOpen;
  const key = name.charAt(0).toUpperCase() + name.slice(1);
  return ICON_MAP[key] ?? FolderOpen;
}

function buildFallbackItems(
  company: Company,
  project: PortfolioItem
): SnapshotItem[] {
  return [
    { label: "Service", value: project.category ?? project.title, icon: "Wrench" },
    { label: "Location", value: `${company.general.city}, ${company.general.state}`, icon: "MapPin" },
    { label: "Timeline", value: project.title, icon: "Clock" },
    { label: "Scope", value: "Multi-trade support", icon: "Layers" },
  ];
}

interface ProjectSnapshotSectionProps {
  company: Company;
  project: PortfolioItem;
}

export function ProjectSnapshotSection({
  company,
  project,
}: ProjectSnapshotSectionProps) {
  const t = company.branding.theme;
  
  const items =
    project.snapshot && project.snapshot.length > 0
      ? project.snapshot
      : buildFallbackItems(company, project);

  return (
    <section
      className="py-14 md:py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: t.background }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-10 text-center">
          <h2
            className="text-2xl md:text-3xl font-black tracking-tight"
            style={{ color: t.primary }}
          >
            Project Snapshot
          </h2>
          <p
            className="mt-2 text-sm md:text-base"
            style={{ color: t.mutedText }}
          >
            A quick look at the project scope, service type, and outcome.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, index) => {
            const Icon = resolveIcon(item.icon);
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="relative overflow-hidden flex flex-col gap-3 rounded-xl border p-5"
                style={{
                  backgroundColor: t.surface,
                  borderColor: t.border,
                  ["--card-border" as string]: t.border,
                }}
              >
                {/* Dot grid texture */}
                <div className="pointer-events-none absolute inset-0 opacity-[0.045] bg-[radial-gradient(circle_at_1px_1px,_var(--card-border)_1px,_transparent_0)] [background-size:18px_18px]" />

                {/* Soft gradient above texture */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 to-transparent" />

                {/* Content */}
                <div className="relative z-10 flex flex-col gap-3">
                  <Icon
                    className="size-5 flex-shrink-0"
                    style={{ color: t.primary }}
                  />
                  <div className="flex flex-col gap-0.5">
                    <span
                      className="text-[11px] font-bold uppercase tracking-widest"
                      style={{ color: t.mutedText }}
                    >
                      {item.label}
                    </span>
                    <span
                      className="text-base font-bold leading-snug"
                      style={{ color: t.text }}
                    >
                      {item.value}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
