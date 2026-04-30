"use client";

import { motion } from "motion/react";
import {
  AlertTriangle,
  Wrench,
  CheckCircle,
  Hammer,
  Network,
  Layers,
  FolderOpen,
  type LucideIcon,
} from "lucide-react";
import type { Company } from "@/lib/types/company";
import type { PortfolioItem, CaseStudyCard, CaseStudyContent,  } from "@/lib/types/old-types";

const ICON_MAP: Record<string, LucideIcon> = {
  AlertTriangle,
  Wrench,
  CheckCircle,
  Hammer,
  Network,
  Layers,
  FolderOpen,
};

function resolveIcon(name?: string): LucideIcon {
  if (!name) return FolderOpen;
  const key = name.charAt(0).toUpperCase() + name.slice(1);
  return ICON_MAP[key] ?? FolderOpen;
}

function buildFallback(project: PortfolioItem): CaseStudyContent {
  return {
    eyebrow: "Case Study",
    title: `How We Delivered on ${project.title}`,
    description: project.description,
    challenge: {
      label: "Challenge",
      title: "A Complex Problem to Solve",
      description:
        "The client faced a scope that required careful coordination, multiple skill sets, and a team they could trust to execute without oversight.",
      icon: "AlertTriangle",
    },
    solution: {
      label: "Solution",
      title: "Coordinated, Skilled Execution",
      description:
        "TSO Texas applied hands-on expertise across the full scope, managing all work in-house to keep quality high and communication clear.",
      icon: "Wrench",
    },
    result: {
      label: "Result",
      title: "Delivered on Time and on Standard",
      description:
        "The project was completed to spec, on schedule, and to the satisfaction of the client — with no loose ends left behind.",
      icon: "CheckCircle",
    },
  };
}

interface CardProps {
  card: CaseStudyCard;
  company: Company;
  isResult?: boolean;
  index: number;
}

function CaseStudyCardItem({ card, company, isResult = false, index }: CardProps) {
  const t = company.branding.theme;

  const Icon = resolveIcon(card.icon);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="relative overflow-hidden flex flex-col gap-4 rounded-xl border p-6"
      style={{
        backgroundColor: t.cards.background,
        borderColor: isResult ? t.primary : t.cards.border,
        ["--card-border" as string]: isResult
          ? t.cards.border
          : t.cards.border,
      }}
    >
      {/* Dot grid texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_1px_1px,_var(--card-border)_1px,_transparent_0)] [background-size:18px_18px]" />

      {/* Soft gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, ${t.cards.background}99 0%, transparent 100%)`,
        }}
      />

      {/* Result accent bar at top */}
      {isResult && (
        <div
          className="absolute top-0 left-0 right-0 h-0.5"
          style={{ backgroundColor: t.primary }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-3">
        {/* Label + icon row */}
        <div className="flex items-center gap-2">
          <Icon
            className="size-4 flex-shrink-0"
            style={{ color: isResult ? t.primary : t.mutedText }}
          />
          <span
            className="text-[11px] font-bold uppercase tracking-widest"
            style={{ color: isResult ? t.title : t.mutedText }}
          >
            {card.label}
          </span>
        </div>

        {/* Title */}
        <h3
          className="text-base font-black leading-snug"
          style={{ color: t.text }}
        >
          {card.title}
        </h3>

        {/* Description */}
        <p
          className="text-sm leading-relaxed"
          style={{ color: t.mutedText }}
        >
          {card.description}
        </p>
      </div>
    </motion.div>
  );
}

interface ChallengeSolutionResultSectionProps {
  company: Company;
  project: PortfolioItem;
}

export function ChallengeSolutionResultSection({
  company,
  project,
}: ChallengeSolutionResultSectionProps) {
  const content = project.caseStudy ?? buildFallback(project);
  const t = company.branding.theme;

  return (
    <section
      className="py-14 md:py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: t.background }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-10 text-center">
          {content.eyebrow && (
            <p
              className="text-xs font-bold uppercase tracking-widest mb-2"
              style={{ color: t.eyebrow }}
            >
              {content.eyebrow}
            </p>
          )}
          <h2
            className="text-2xl md:text-3xl font-black tracking-tight"
            style={{ color: t.title }}
          >
            {content.title}
          </h2>
          {content.description && (
            <p
              className="mt-2 max-w-2xl mx-auto text-sm md:text-base"
              style={{ color: t.mutedText }}
            >
              {content.description}
            </p>
          )}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <CaseStudyCardItem card={content.challenge} company={company} index={0} />
          <CaseStudyCardItem card={content.solution} company={company} index={1} />
          <CaseStudyCardItem card={content.result} company={company} isResult index={2} />
        </div>
      </div>
    </section>
  );
}
