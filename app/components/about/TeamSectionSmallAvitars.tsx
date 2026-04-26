"use client";
import type { Company } from "@/data/companies";

export function TeamSectionWithSmallAvatars({ company }: { company: Company }) {
  const team = company.about.team;
  const s = team?.styles;
  const t = company.theme;

  if (!team || !team.members || team.members.length === 0) return null;

  return (
    <section
      className="mx-auto w-full px-4 py-10 md:px-8 md:py-16 lg:py-12"
      style={{ backgroundColor: s?.background ?? t.background }}
    >
      <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-2 md:gap-12 xl:max-w-7xl xl:grid-cols-3">
        {team.members.map((member) => (
          <div
            key={member.name + "first-team-section"}
            className="flex items-center gap-2 overflow-hidden rounded-3xl p-1"
          >
            <img
              src={member.avatar}
              alt={member.name}
              height={1020}
              width={1024}
              className="aspect-square size-8 rounded-md object-cover shadow-sm ring-1 shadow-black/20 ring-black/20 duration-200 will-change-transform group-hover/team:scale-105"
            />
            <p
              className="text-base font-semibold tracking-tight text-balance"
              style={{ color: s?.nameColor ?? t.text }}
            >
              {member.name}
            </p>
            <div className="size-1 shrink-0 rounded-full" style={{ backgroundColor: t.border }}></div>
            <p
              className="text-sm"
              style={{ color: s?.roleColor ?? t.mutedText }}
            >
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
