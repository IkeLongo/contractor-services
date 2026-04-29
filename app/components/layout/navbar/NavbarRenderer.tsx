// app/components/layout/navbar/NavbarRenderer.tsx

import type { Company } from "@/lib/types/company";
import { ClassicNavbar } from "./ClassicNavbar";
import { CenteredLogoNavbar } from "./CenteredLogoNavbar";

type NavbarRendererProps = {
  company: Company;
};

export function NavbarRenderer({ company }: NavbarRendererProps) {
  const variant = company.layout.navbar.variant ?? "classic";

  switch (variant) {
    case "centeredLogo":
      return <CenteredLogoNavbar company={company} />;

    case "classic":
    default:
      return <ClassicNavbar company={company} />;
  }
}