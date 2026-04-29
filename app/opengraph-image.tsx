import { ImageResponse } from "next/og";
import { headers } from "next/headers";
import { getCompanyBySlug } from "@/data/companies";

export const runtime = "edge";
export const alt = "Contractor Services";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const FALLBACK_SLUG = "tso-texas";
const FALLBACK_BG = "/companies/tso-texas/og/og-image.png";
const FALLBACK_TINT = "#0B1F4D";

export default async function Image() {
  const headersList = await headers();

  const slug = headersList.get("x-company-slug") ?? FALLBACK_SLUG;
  const company = await getCompanyBySlug(slug);

  const t = company.branding.theme;
  const g = company.general;

  const host = headersList.get("host") ?? "localhost:3000";
  const protocol = host.includes("localhost") ? "http" : "https";
  const baseUrl = `${protocol}://${host}`;

  const og = company.seo?.og ?? {};

  const tintColor = og.tintColor ?? t.primary ?? FALLBACK_TINT;
  const tintOpacity = og.tintOpacity ?? 0.55;

  const bgPath = og.image ?? FALLBACK_BG;
  const bgUrl = `${baseUrl}${bgPath}`;

  const logoPath = og.logo ?? company.branding.logo ?? company.branding.navLogo;
  const logoUrl = logoPath ? `${baseUrl}${logoPath}` : null;

  const title = og.title ?? g.name;
  const description = og.description ?? g.tagline;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          backgroundColor: tintColor,
        }}
      >
        <img
          src={bgUrl}
          alt=""
          width={1200}
          height={630}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.28)",
            display: "flex",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: tintColor,
            opacity: tintOpacity,
            display: "flex",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "24px",
            padding: "48px",
          }}
        >
          {logoUrl ? (
            <img
              src={logoUrl}
              alt={g.name}
              width={400}
              height={180}
              style={{ objectFit: "contain" }}
            />
          ) : (
            <span
              style={{
                fontSize: 72,
                fontWeight: 800,
                color: "#ffffff",
                letterSpacing: "-2px",
              }}
            >
              {title}
            </span>
          )}

          {description && (
            <p
              style={{
                fontSize: 28,
                color: "rgba(255,255,255,0.75)",
                textAlign: "center",
                margin: 0,
                maxWidth: 700,
              }}
            >
              {description}
            </p>
          )}
        </div>
      </div>
    ),
    size
  );
}