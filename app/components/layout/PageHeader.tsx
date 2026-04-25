import Link from "next/link";
import type { Company } from "@/data/companies";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  breadcrumbs?: Breadcrumb[];
  company: Company;
}

export function PageHeader({ title, breadcrumbs = [], company }: PageHeaderProps) {
  const crumbs: Breadcrumb[] = [{ label: "Home", href: "/" }, ...breadcrumbs];

  return (
    <section
      className="border-b"
      style={{
        backgroundColor: company.theme.background,
        borderColor: company.theme.border,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-1.5 text-xs font-medium">
            {crumbs.map((crumb, i) => (
              <li key={i} className="flex items-center gap-1.5">
                {i > 0 && (
                  <span style={{ color: company.theme.border }}>/</span>
                )}
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="transition-opacity hover:opacity-70"
                    style={{ color: company.theme.mutedText }}
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="font-semibold" style={{ color: company.theme.secondary }}>
                    {crumb.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* Page title — compact, right-aligned */}
        <p className="text-xs font-semibold hidden sm:block" style={{ color: company.theme.mutedText }}>
          {title}
        </p>
      </div>
    </section>
  );
}
