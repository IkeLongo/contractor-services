"use client";
import { cn } from "@/lib/utils";
import { IconChevronDown, IconMenu2, IconX, IconPhone } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import type { Company } from "@/lib/types";
import type { NavDropdownItem, NavigationItem } from "@/lib/types/layout";

function isDropdown(item: NavigationItem): item is NavDropdownItem {
  return "children" in item && Array.isArray((item as NavDropdownItem).children);
}

interface NavbarProps {
  company: Company;
}

export function CenteredLogoNavbar({ company }: NavbarProps) {
  const b = company.branding;
  const g = company.general;
  // CSS variables for branding colors
  const cssVars = {
    '--primary': b.theme.primary,
    '--secondary': b.theme.secondary,
    '--accent': b.theme.accent,
  } as React.CSSProperties;
  return (
    <header
      className="absolute top-12 left-0 right-0 z-50 fixed"
      style={cssVars}
    >
      {/* Top info bar */}
      {company.layout.navbar.topBar?.enabled !== false && company.layout.navbar.topBar && (
        <div
          className="hidden md:flex items-center justify-between px-6 py-2 text-xs border-b"
          style={{
            background: company.layout.navbar.topBar.styles?.background ?? "#fff",
            color: company.layout.navbar.topBar.styles?.text ?? "var(--primary)",
            borderColor: company.layout.navbar.topBar.styles?.border ?? "#f3f4f6",
          }}
        >
          <span>{company.layout.navbar.topBar.leftText}</span>
          <a
            href={`mailto:${company.layout.navbar.topBar.email}`}
            className="transition"
            style={{ color: company.layout.navbar.topBar.styles?.link ?? "var(--primary)" }}
          >
            {company.layout.navbar.topBar.email}
          </a>
        </div>
      )}
      <DesktopNav company={company} />
      <MobileNav company={company} />
    </header>
  );
}

// ─── Desktop Nav ──────────────────────────────────────────────────────────────

const DesktopNav = ({ company }: NavbarProps) => {
  const [active, setActive] = useState<string | null>(null);

  const navbar = company.layout.navbar;
  const navigation = navbar.items;
  const t = company.branding.theme;

  const navbarStyles: NavbarStyles = {
    background: navbar.styles?.background ?? "rgba(255,255,255,0.95)",
    link: navbar.styles?.link ?? "#1F2937",
    linkHover: navbar.styles?.linkHover ?? "#000000",
    dropdownBackground: navbar.styles?.dropdownBackground ?? "#ffffff",
    dropdownBorder: navbar.styles?.dropdownBorder ?? "rgba(0,0,0,0.1)",
    phoneBg: navbar.styles?.phoneBg ?? t.primary,
    phoneText: navbar.styles?.phoneText ?? "#ffffff",
    phoneIcon: navbar.styles?.phoneIcon ?? "#ffffff",
    phoneIconBg: navbar.styles?.phoneIconBg ?? t.secondary,
    ctaBg: navbar.styles?.ctaBg ?? t.secondary,
    ctaText: navbar.styles?.ctaText ?? "#ffffff",
    border: navbar.styles?.border ?? "rgba(0,0,0,0.1)",
  };

  const mid = Math.ceil(navigation.length / 2);
  const leftItems = navigation.slice(0, mid);
  const rightItems = navigation.slice(mid);

  const renderNavItem = (item: NavigationItem) =>
    isDropdown(item) ? (
      <MenuItem
        key={item.label} setActive={setActive} active={active} item={item.label}
        styles={{
          ...navbarStyles,
          background: navbarStyles.dropdownBackground,
          border: navbarStyles.dropdownBorder,
        }}
      >
        <div className="flex flex-col space-y-3 min-w-[220px] py-1"
          style={{ backgroundColor: navbarStyles.dropdownBackground }}
        >
          {item.children.map((child) => (
            <HoveredLink key={child.href} href={child.href} styles={navbarStyles}>
              {child.label}
            </HoveredLink>
          ))}
          {item.viewAllHref && (
            <div className="border-t pt-2 mt-1" style={{ borderColor: navbarStyles.border, background: navbarStyles.dropdownBackground, }}>
              <Link
                href={item.viewAllHref}
                className="flex items-center justify-between text-sm font-semibold transition-colors text-[var(--nav-link)] hover:text-[var(--nav-link-hover)]"
                style={{ background: navbarStyles.dropdownBackground }}
              >
                View All Services
                <span className="ml-2 text-base leading-none">→</span>
              </Link>
            </div>
          )}
        </div>
      </MenuItem>
    ) : (
      <NavLink
        key={item.label} href={item.href} label={item.label}
        styles={navbarStyles}
      />
    );

  return (
    <div className="hidden lg:flex justify-center px-4"
    >
      <nav
        className="relative flex w-[calc(100%-2rem)] max-w-[1560px] items-center justify-between overflow-visible rounded-2xl px-4 py-3 shadow-sm"
        style={{
          background: navbarStyles.background,
          "--nav-link": navbarStyles.link,
          "--nav-link-hover": navbarStyles.linkHover,
        } as React.CSSProperties}
      >
        {/* Left: phone button + left nav links */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${company.general.phone}`}
            className="flex items-center overflow-hidden rounded-xl text-sm font-semibold transition hover:opacity-90"
            style={{
              backgroundColor: navbarStyles.phoneBg,
              color: navbarStyles.phoneText,
            }}
          >
            <span
              className="flex items-center justify-center p-2.5"
              style={{ backgroundColor: navbarStyles.phoneIconBg }}
            >
              <IconPhone
                className="w-4 h-4"
                style={{ color: navbarStyles.phoneIcon }}
              />
            </span>
            <span className="px-3 py-2">{company.general.phone}</span>
          </a>

          <Menu setActive={setActive} styles={navbarStyles}>
            {leftItems.map(renderNavItem)}
          </Menu>
        </div>

        {/* Center: logo (absolutely positioned) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <CompanyLogo company={company} />
        </div>

        {/* Right: right nav links + CTA button */}
        <div className="flex items-center gap-3">
          <Menu setActive={setActive} styles={navbarStyles}>
            {rightItems.map(renderNavItem)}
          </Menu>

          <Link
            href={navbar.cta?.href ?? "/contact"}
            className="rounded-xl px-5 py-2.5 text-xs font-bold uppercase tracking-wide transition hover:opacity-90 whitespace-nowrap"
            style={{
              backgroundColor: navbarStyles.ctaBg,
              color: navbarStyles.ctaText,
            }}
          >
            {navbar.cta?.label ?? "Get A Free Estimate"}
          </Link>
        </div>
      </nav>
    </div>
  );
};

// ─── Mobile Nav ───────────────────────────────────────────────────────────────

const MobileNav = ({ company }: NavbarProps) => {
  const [open, setOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const navbar = company.layout.navbar;
  const navigation = navbar.items;
  const t = company.branding.theme;

  const ms = {
    background: navbar.styles?.mobileBackground ?? "#ffffff",
    menuBg: navbar.styles?.mobileMenuBg ?? t.primary,
    menuIcon: navbar.styles?.mobileMenuIcon ?? "#ffffff",
    phoneBg: navbar.styles?.mobilePhoneIconBg ?? navbar.styles?.phoneIconBg ?? navbar.styles?.phoneBg ?? t.secondary,
    phoneIcon: navbar.styles?.mobilePhoneText ?? navbar.styles?.phoneIcon ?? "#ffffff",
    panelBg: navbar.styles?.mobilePanelBg ?? "#ffffff",
    link: navbar.styles?.link ?? "#1F2937",
    linkHover: navbar.styles?.linkHover ?? t.secondary,
    border: navbar.styles?.border ?? "rgba(0,0,0,0.1)",
  };

  const toggleAccordion = (label: string) =>
    setOpenAccordion((prev) => (prev === label ? null : label));

  return (
    <div className="lg:hidden px-3">
      {/* Floating pill bar */}
      <div
        className="relative flex items-center justify-between h-[70px] rounded-xl px-2 shadow-sm border overflow-visible"
        style={{ background: ms.background, borderColor: ms.border }}
      >
        {/* Left: phone icon button */}
        <a
          href={`tel:${company.general.phone}`}
          aria-label={`Call ${company.general.phone}`}
          className="flex size-14 items-center justify-center rounded-lg shrink-0 transition hover:opacity-90"
          style={{ backgroundColor: ms.phoneBg }}
        >
          <IconPhone className="w-6 h-6" style={{ color: ms.phoneIcon }} />
        </a>

        {/* Center: logo (absolutely centered) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <Link
            href="/"
            className="relative block shrink-0"
            style={{
              width: company.layout.navbar.logo?.mobile?.width ?? "11rem",
              height: company.layout.navbar.logo?.mobile?.height ?? "7rem",
            }}
          >
            <Image
              src={company.branding.navLogo}
              alt={`${company.general.name} logo`}
              fill
              className="object-contain object-center"
            />
          </Link>
        </div>

        {/* Right: menu toggle button */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
          className="flex size-14 items-center justify-center rounded-lg shrink-0 transition hover:opacity-90"
          style={{ backgroundColor: ms.menuBg }}
        >
          {open
            ? <IconX className="w-6 h-6" style={{ color: ms.menuIcon }} />
            : <IconMenu2 className="w-6 h-6" style={{ color: ms.menuIcon }} />
          }
        </button>
      </div>

      {/* Slide-down panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-2 overflow-hidden rounded-xl shadow-lg border"
            style={{
              background: ms.panelBg,
              borderColor: ms.border,
              "--m-link": ms.link,
              "--m-link-hover": ms.linkHover,
              "--m-border": ms.border,
            } as React.CSSProperties}
          >
            <div className="flex flex-col px-4 py-4 gap-1">
              {navigation.map((item) =>
                isDropdown(item) ? (
                  <div key={item.label}>
                    <button
                      onClick={() => toggleAccordion(item.label)}
                      className="flex items-center justify-between w-full py-2.5 text-sm font-semibold text-[var(--m-link)]"
                    >
                      {item.label}
                      <IconChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform text-[var(--m-link)]",
                          openAccordion === item.label && "rotate-180",
                        )}
                      />
                    </button>
                    <AnimatePresence>
                      {openAccordion === item.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden pl-3 border-l"
                          style={{ borderColor: ms.border }}
                        >
                          {item.children.map((child) => (
                            <MobileNavLink
                              key={child.href}
                              href={child.href}
                              label={child.label}
                              onClick={() => setOpen(false)}
                              muted
                            />
                          ))}
                          {item.viewAllHref && (
                            <div className="border-t mt-1 pt-2 pb-1" style={{ borderColor: ms.border }}>
                              <Link
                                href={item.viewAllHref}
                                onClick={() => setOpen(false)}
                                className="flex items-center justify-between py-2 text-sm font-semibold transition-colors text-[var(--m-link)] hover:text-[var(--m-link-hover)]"
                              >
                                View All Services
                                <span className="ml-2 text-base leading-none">→</span>
                              </Link>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <MobileNavLink
                    key={item.label}
                    href={item.href}
                    label={item.label}
                    onClick={() => setOpen(false)}
                  />
                )
              )}

              <div className="border-t pt-4 mt-2 flex flex-col gap-3" style={{ borderColor: ms.border }}>
                <a
                  href={`tel:${company.general.phone}`}
                  className="flex items-center gap-2 text-sm font-semibold text-[var(--m-link)]"
                >
                  <IconPhone className="w-6 h-6 text-[var(--m-link)]" />
                  {company.general.phone}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ─── Shared sub-components ────────────────────────────────────────────────────

const CompanyLogo = ({ company }: NavbarProps) => {
  const logo = company.layout.navbar.logo;
  return (
    <Link
      href="/"
      className="relative shrink-0 block"
      style={{
        width: logo?.desktop?.width ?? "15rem",
        height: logo?.desktop?.height ?? "11rem",
      }}
    >
      <Image src={company.branding.navLogo} alt={`${company.general.name} logo`} fill className="object-contain object-center" />
    </Link>
  );
};

interface NavbarStyles {
  background: string;
  link: string;
  linkHover: string;
  dropdownBackground: string;
  dropdownBorder: string;
  phoneBg: string;
  phoneText: string;
  phoneIcon: string;
  phoneIconBg: string;
  ctaBg: string;
  ctaText: string;
  border: string;
}

const NavLink = ({ href, label, styles: _styles }: { href: string; label: string; styles: NavbarStyles }) => (
  <Link
    href={href}
    className="px-3 py-2 text-sm font-semibold transition-colors text-[var(--nav-link)] hover:text-[var(--nav-link-hover)]"
  >
    {label}
  </Link>
);

const MobileNavLink = ({
  href,
  label,
  onClick,
  muted = false,
}: {
  href: string;
  label: string;
  onClick: () => void;
  muted?: boolean;
}) => (
  <Link
    href={href}
    onClick={onClick}
    className={cn(
      "block py-2.5 text-sm font-semibold transition-colors hover:text-[var(--m-link-hover)]",
      muted ? "text-[var(--m-link)] opacity-75" : "text-[var(--m-link)]",
    )}
  >
    {label}
  </Link>
);

// ─── Animation primitives (from template) ────────────────────────────────────

const transition = {
  type: "spring" as const,
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  styles,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  styles: NavbarStyles;
  children?: React.ReactNode;
}) => {
  return (
    <div
      onMouseEnter={() => setActive(item)}
      className="relative"
    >
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer px-3 py-2 text-sm font-semibold transition-colors text-[var(--nav-link)] hover:text-[var(--nav-link-hover)]"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_0.2rem)] left-1/2 -translate-x-1/2 transform pt-2">
              <motion.div
                transition={transition}
                layoutId="active"
                className="overflow-hidden rounded-xl shadow-xl border"
                style={{ background: styles.background, borderColor: styles.border }}
              >
                <motion.div layout className="h-full w-max p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
  styles: _styles,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
  styles?: NavbarStyles;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className="relative flex items-center"
    >
      {children}
    </nav>
  );
};

export const HoveredLink = ({ children, href, styles: _styles, ...rest }: { children: React.ReactNode; href: string; styles: NavbarStyles } & React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <Link
      href={href}
      {...rest}
      className="text-sm font-semibold transition-colors text-[var(--nav-link)] hover:text-[var(--nav-link-hover)]"
    >
      {children}
    </Link>
  );
};
