import { NextRequest, NextResponse } from "next/server";
import { companies } from "./data/companies";

export function proxy(req: NextRequest) {
  const host = req.headers.get("host") ?? "";
  // Extract the first segment of the hostname as the subdomain/slug.
  // e.g. "top-tier-renovations.contractor-services.localhost:3000" → "top-tier-renovations"
  const subdomain = host.split(".")[0];

  console.log("[proxy] HOST:", host);
  console.log("[proxy] SUBDOMAIN:", subdomain);
  console.log("[proxy] available company keys:", Object.keys(companies));

  if (!subdomain || !(subdomain in companies)) {
    console.log("[proxy] no match — using default company");
    return NextResponse.next();
  }

  console.log("[proxy] matched company:", subdomain);

  return NextResponse.next({
    request: {
      headers: new Headers({
        ...Object.fromEntries(req.headers),
        "x-company-slug": subdomain,
      }),
    },
  });
}
