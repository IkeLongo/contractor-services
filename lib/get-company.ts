// lib/get-company.ts
import { headers } from "next/headers";
import { getCompanyBySlug, defaultCompany, type Company } from "@/data/companies";

  const headersList = await headers();
  const slug = headersList.get("x-company-slug");
  return getCompanyBySlug(slug);
}