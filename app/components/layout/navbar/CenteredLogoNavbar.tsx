"use client";
import { cn } from "@/lib/utils";
import { IconChevronDown, IconMenu2, IconX, IconPhone } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import type { Company, NavItem } from "@/data/companies";

interface NavbarProps {
  company: Company;
}

export function CenteredLogoNavbar({ company }: NavbarProps) {
  const { branding } = company;
  // CSS variables for branding colors
  const cssVars = {
    '--primary': branding.primaryColor,
    '--secondary': branding.secondaryColor,
    '--accent': branding.accentColor,
  } as React.CSSProperties;
  return (
    <header
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-[0_1px_3px_rgba(0,0,0,0.08)] w-full"
      style={cssVars}
    >
      {/* Top info bar (navy) */}
      <div className="hidden md:flex items-center justify-between px-6 py-2 text-xs border-b border-neutral-100 bg-white text-[var(--primary)]">
        <span>
          Serving {company.general.city} &nbsp;&amp;&nbsp; surrounding areas &nbsp;&middot;&nbsp; Licensed &amp; Insured
        </span>
        <a
          href={`mailto:${company.general.email}`}
          className="text-[var(--primary)] hover:text-[var(--secondary)] transition"
        >
          {company.general.email}
        </a>
      </div>
      <DesktopNav company={company} />
      <MobileNav company={company} />
    </header>
  );
}

// ─── Desktop Nav ──────────────────────────────────────────────────────────────

const DesktopNav = ({ company }: NavbarProps) => {
  const [active, setActive] = useState<string | null>(null);
  const { branding, navigation } = company;

  return (
    <nav
      className="hidden lg:flex w-full items-center justify-between px-6 py-3 bg-white/95"
    >
      <CompanyLogo company={company} />

      <Menu setActive={setActive}>
        {navigation.map((item) =>
          item.children?.length ? (
            <MenuItem key={item.label} setActive={setActive} active={active} item={item.label}>
              <div className="flex flex-col space-y-3 min-w-[220px] py-1">
                {item.children.map((child) => (
                  <HoveredLink key={child.href} href={child.href}>
                    {child.label}
                  </HoveredLink>
                ))}
                <div className="border-t border-neutral-100 pt-2 mt-1">
                  <Link
                    href={item.viewAllHref ?? "/services"}
                    className="flex items-center justify-between text-sm font-semibold text-[var(--primary)] hover:text-[var(--secondary)] transition"
                  >
                    View All Services
                    <span className="ml-2 text-base leading-none">→</span>
                  </Link>
                </div>
              </div>
            </MenuItem>
          ) : (
            <NavLink key={item.label} href={item.href} label={item.label} />
          )
        )}
      </Menu>

      <div className="flex items-center gap-4">
        <a
          href={`tel:${company.general.phone}`}
          className="flex items-center gap-1.5 text-sm font-semibold text-neutral-800 hover:text-red-800 transition"
        >
          <IconPhone className="w-4 h-4 text-neutral-600" />
          {company.general.phone}
        </a>
        {/* <Link
          href="/request-service"
          className="rounded px-5 py-2 text-sm font-bold transition bg-[var(--primary)] text-white hover:bg-[var(--secondary)]"
        >
          Book Service
        </Link> */}
      </div>
    </nav>
  );
};

// ─── Mobile Nav ───────────────────────────────────────────────────────────────

const MobileNav = ({ company }: NavbarProps) => {
  const [open, setOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const { branding, navigation } = company;

  const toggleAccordion = (label: string) =>
    setOpenAccordion((prev) => (prev === label ? null : label));

  return (
    <div className="lg:hidden w-full bg-white/95 border-b border-neutral-200">
      {/* Mobile bar */}
      <div className="flex items-center justify-between px-4 py-3">
        <CompanyLogo company={company} />
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
          className="text-neutral-800"
        >
          {open ? <IconX className="w-6 h-6" /> : <IconMenu2 className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-neutral-100"
          >
            <div className="flex flex-col px-4 py-4 gap-1">
              {navigation.map((item) =>
                item.children?.length ? (
                  <div key={item.label}>
                    <button
                      onClick={() => toggleAccordion(item.label)}
                      className="flex items-center justify-between w-full py-2.5 text-sm font-semibold text-neutral-800"
                    >
                      {item.label}
                      <IconChevronDown
                        className={cn(
                          "w-4 h-4 text-neutral-600 transition-transform",
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
                          className="overflow-hidden pl-3 border-l border-neutral-100"
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
                          <div className="border-t border-neutral-100 mt-1 pt-2 pb-1">
                            <Link
                              href={item.viewAllHref ?? "/services"}
                              onClick={() => setOpen(false)}
                              className="flex items-center justify-between py-2 text-sm font-semibold text-[var(--primary)] hover:opacity-70 transition"
                            >
                              View All Services
                              <span className="ml-2 text-base leading-none">→</span>
                            </Link>
                          </div>
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

              <div className="border-t border-neutral-100 pt-4 mt-2 flex flex-col gap-3">
                <a
                  href={`tel:${company.general.phone}`}
                  className="flex items-center gap-2 text-sm font-semibold text-neutral-800"
                >
                  <IconPhone className="w-4 h-4 text-neutral-600" />
                  {company.general.phone}
                </a>
                {/* <Link
                  href="/request-service"
                  onClick={() => setOpen(false)}
                  className="block text-center rounded px-5 py-3 text-sm font-bold transition bg-[var(--primary)] text-white hover:bg-[var(--secondary)]"
                >
                  Book Service
                </Link> */}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ─── Shared sub-components ────────────────────────────────────────────────────

const CompanyLogo = ({ company }: NavbarProps) => (
  <Link href="/" className="relative h-18 w-44 shrink-0 block">
    <Image src={company.branding.navLogo} alt={`${company.general.name} logo`} fill className="object-contain object-left" />
  </Link>
);

const NavLink = ({ href, label }: { href: string; label: string }) => (
  <Link
    href={href}
    className="px-3 py-2 text-sm font-semibold text-neutral-800 hover:text-red-800 transition"
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
      "block py-2.5 text-sm font-semibold transition",
      muted ? "text-neutral-600 hover:text-[var(--primary)]" : "text-neutral-800 hover:text-[var(--primary)]",
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
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer px-3 py-2 text-sm font-semibold text-neutral-800 hover:text-red-800 transition"
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
                className="overflow-hidden rounded-xl bg-white shadow-xl border border-gray-100"
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
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
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

export const HoveredLink = ({ children, href, ...rest }: { children: React.ReactNode; href: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <Link
      href={href}
      {...rest}
      className="text-sm text-neutral-800 hover:text-red-800 hover:font-semibold transition"
    >
      {children}
    </Link>
  );
};
