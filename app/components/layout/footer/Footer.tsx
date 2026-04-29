import Image from "next/image";
import Link from "next/link";
import type { Company } from "@/lib/types/company";
import type { NavDropdownItem, NavigationItem } from "@/lib/types/layout";

function isDropdown(item: NavigationItem): item is NavDropdownItem {
  return "children" in item && Array.isArray((item as NavDropdownItem).children);
}
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react";

interface FooterProps {
  company: Company;
}

const SOCIAL_ICON_MAP = {
  facebook: IconBrandFacebook,
  instagram: IconBrandInstagram,
  linkedin: IconBrandLinkedin,
  twitter: IconBrandTwitter,
  youtube: IconBrandYoutube,
};

export function Footer({ company }: FooterProps) {
  const { branding, footer, services, general } = company;
  const navigation = company.layout.navbar.items;
  const footerStyles = footer.styles ?? {};

  return (
    <footer
      className="bg-[var(--footer-bg)]"
      style={{
        "--footer-bg": footerStyles.background ?? branding.theme.primary,
        "--footer-text": footerStyles.text ?? "#ffffff",
        "--footer-muted": footerStyles.mutedText ?? "rgba(255,255,255,0.55)",
        "--footer-heading": footerStyles.headingText ?? "#ffffff",
        "--footer-link": footerStyles.linkText ?? "rgba(255,255,255,0.55)",
        "--footer-link-hover": footerStyles.linkHover ?? "#ffffff",
        "--footer-child-link": footerStyles.childLinkText ?? "rgba(255,255,255,0.4)",
        "--footer-child-link-hover": footerStyles.childLinkHover ?? "rgba(255,255,255,0.7)",
        "--footer-border": footerStyles.border ?? "rgba(255,255,255,0.1)",
        "--footer-bottom-text": footerStyles.bottomText ?? "rgba(255,255,255,0.35)",
        "--footer-social": footerStyles.socialIcon ?? "rgba(255,255,255,0.6)",
        "--footer-social-hover": footerStyles.socialIconHover ?? "#ffffff",
      } as React.CSSProperties}
    >
      {/* Main footer columns */}
      <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Column 1 — Logo + short description */}
        <div className="flex flex-col gap-5">
          <Link href="/" className="relative h-16 w-48 block">
            <Image src={branding.navLogo} alt={general.name} fill className="object-contain object-left" />
          </Link>
          <p className="text-[var(--footer-muted)] text-sm leading-relaxed">{footer.shortDescription}</p>
          {/* <p className="text-white/40 text-xs">{footer.serviceArea}</p> */}
        </div>

        {/* Column 2 — Services preview */}
        {services?.items?.length > 0 && (
          <div className="flex flex-col gap-4">
            <h3 className="text-[var(--footer-heading)] text-sm font-bold uppercase tracking-widest">Services</h3>
            <ul className="flex flex-col gap-2.5">
              {services.items.map((s) => (
                <li key={s.title}>
                  <Link
                    href="#"
                    className="text-[var(--footer-link)] text-sm cursor-pointer hover:text-[var(--footer-link-hover)] transition"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Column 3 — Navigation */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[var(--footer-heading)] text-sm font-bold uppercase tracking-widest">Navigation</h3>
          <ul className="flex flex-col gap-2.5">
            {navigation.map((item) => (
              <li key={item.label}>
                <Link
                  href={isDropdown(item) ? (item.href ?? item.viewAllHref ?? "#") : item.href}
                  className="text-[var(--footer-link)] text-sm hover:text-[var(--footer-link-hover)] transition"
                >
                  {item.label}
                </Link>
                {isDropdown(item) && item.children.length > 0 && (
                  <ul className="flex flex-col gap-2 mt-1.5 pl-3 border-l border-[var(--footer-border)]">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link href={child.href} className="text-[var(--footer-child-link)] text-xs hover:text-[var(--footer-child-link-hover)] transition">
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 — Contact info */}
        <div className="flex flex-col gap-4">
          <h3 className="text-[var(--footer-heading)] text-sm font-bold uppercase tracking-widest">Contact Us</h3>
          <div className="flex flex-col gap-2 text-sm text-[var(--footer-muted)]">
            <p>{general.city}, {general.state}</p>
            <a href={`tel:${general.phone}`} className="hover:text-[var(--footer-link-hover)] transition font-semibold text-[var(--footer-text)] mt-1">
              {general.phone}
            </a>
            <a href={`mailto:${general.email}`} className="hover:text-[var(--footer-link-hover)] transition">
              {general.email}
            </a>
          </div>
          {footer.socials && footer.socials.length > 0 && (
            <div className="flex items-center gap-4 mt-3">
              {footer.socials.map((social) => {
                const Icon = SOCIAL_ICON_MAP[social.platform];
                if (!Icon) return null;
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--footer-social)] hover:text-[var(--footer-social-hover)] transition"
                  >
                    <Icon size={20} stroke={1.5} />
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[var(--footer-border)] px-6 py-5">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-start gap-3 text-xs text-[var(--footer-bottom-text)]">
          <div className="flex items-center gap-5">
            {/* <a
              href={`tel:${phone}`}
              className="font-semibold text-white/55 hover:text-white transition"
            >
              {phone}
            </a> */}
            {/* <Link
              href="/request-service"
              className="rounded px-4 py-1.5 text-xs font-bold transition hover:opacity-90"
              style={{ backgroundColor: branding.accentColor, color: branding.primaryColor }}
            >
              Book Now
            </Link> */}
          </div>
          <div className="flex flex-wrap items-center gap-3 sm:gap-5">
            <p>&copy; {new Date().getFullYear()} {general.name}. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="/privacy-policy" className="hover:text-[var(--footer-link-hover)] transition">Privacy Policy</Link>
              <Link href="/terms-and-conditions" className="hover:text-[var(--footer-link-hover)] transition">Terms &amp; Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
