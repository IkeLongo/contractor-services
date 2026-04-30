import type { Company } from "@/lib/types/company";

export function getNavbarHeroOffset(company: Company): {
  desktop: string;
  mobile: string;
} {
  const navbar = company.layout.navbar;

  if (navbar.variant !== "centeredLogo") {
    return { desktop: "0px", mobile: "0px" };
  }

  return {
    desktop: navbar.styles?.heroContentOffset ?? "140px",
    mobile: navbar.styles?.mobileHeroContentOffset ?? "96px",
  };
}
