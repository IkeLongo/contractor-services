// lib/get-company.ts
import { headers } from "next/headers";
import { cache } from "react";
import { getCompanyBySlug } from "@/data/companies";
import type { Company } from "@/lib/types/company";

export const getCompany = cache(async (): Promise<Company> => {
  const headersList = await headers();
  const slug = headersList.get("x-company-slug");

  console.log("[getCompany] x-company-slug header:", slug);

  const company = await getCompanyBySlug(slug);

  console.log("[getCompany] resolved company:", company.general.slug);

  return company;
});
