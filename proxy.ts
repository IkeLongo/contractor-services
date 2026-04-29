import { NextRequest, NextResponse } from "next/server";
import { isCompanySlug } from "./data/companies";

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const method = req.method;
  const host = req.headers.get("host") ?? "";
  const purpose = req.headers.get("purpose");

  const isPrefetch =
    purpose === "prefetch" ||
    !!req.headers.get("next-router-prefetch") ||
    !!req.headers.get("rsc");

  if (isPrefetch) return NextResponse.next();
  if (method !== "GET" && method !== "HEAD") return NextResponse.next();

  const hostname = host.split(":")[0];
  const subdomain = hostname.split(".")[0];

  console.log("[proxy]", method, pathname, {
    host,
    subdomain,
    purpose,
  });

  if (!isCompanySlug(subdomain)) {
    console.log("[proxy] no match — using default company");
    return NextResponse.next();
  }

  console.log("[proxy] matched company:", subdomain);

  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-company-slug", subdomain);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon\\.ico|robots\\.txt|sitemap\\.xml|.*\\..*).*)",
  ],
};
