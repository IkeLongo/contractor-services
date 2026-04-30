import type { Company } from "@/lib/types/company";

export const defaultCompanySlug = "tso-texas";

export const companySlugs = [
  "tso-texas",
  "top-tier-renovations",
  "san-antonio-luxury-glass",
] as const;

export type CompanySlug = (typeof companySlugs)[number];

export function isCompanySlug(slug?: string | null): slug is CompanySlug {
  return !!slug && companySlugs.includes(slug as CompanySlug);
}

export async function getCompanyBySlug(
  slug?: string | null
): Promise<Company> {
  const safeSlug = isCompanySlug(slug) ? slug : defaultCompanySlug;

  switch (safeSlug) {
    case "top-tier-renovations": {
      const mod = await import("./top-tier-renovations");
      return mod.topTierRenovationsCompany;
    }

    case "san-antonio-luxury-glass": {
      const mod = await import("./san-antonio-luxury-glass");
      return mod.sanAntonioLuxuryGlassCompany;
    }

    case "tso-texas":
    default: {
      const mod = await import("./tso-texas");
      return mod.tsoTexasCompany;
    }
  }
}