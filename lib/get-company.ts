// lib/get-company.ts
import { headers } from "next/headers";
import { getCompanyBySlug, type Company } from "@/data/companies";

export async function getCompany(): Promise<Company> {
  const headersList = await headers();
  const slug = headersList.get("x-company-slug");
  console.log("[getCompany] x-company-slug header:", slug);
  const company = getCompanyBySlug(slug);
  console.log("[getCompany] resolved company:", company.slug);
  return company;
}
