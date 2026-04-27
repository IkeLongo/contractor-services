// lib/get-company.ts
import { headers } from "next/headers";
import { getCompanyBySlug, type Company } from "@/data/companies";

export async function getCompany(): Promise<Company> {
  const headersList = await headers();
  const slug = headersList.get("x-company-slug");
  return getCompanyBySlug(slug);
}
