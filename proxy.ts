import { NextRequest, NextResponse } from "next/server";
import { companies } from "./data/companies";

function getSubdomain(host: string) {
  const hostname = host.split(":")[0]; // remove port

  // local: tso-texas.contractor-services.localhost:3000
  if (hostname.endsWith(".contractor-services.localhost")) {
    return hostname.replace(".contractor-services.localhost", "");
  }

  // live: tso-texas.contractor-services.rivercitycreatives.com
  if (hostname.endsWith(".contractor-services.rivercitycreatives.com")) {
    return hostname.replace(".contractor-services.rivercitycreatives.com", "");
  }

  return null;
}

export function proxy(req: NextRequest) {
  const host = req.headers.get("host") ?? "";
  const subdomain = getSubdomain(host);

  if (!subdomain || !(subdomain in companies)) {
    return NextResponse.next();
  }

  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-company-slug", subdomain);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|logos|.*\\..*).*)"],
};
