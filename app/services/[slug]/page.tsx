import { notFound } from "next/navigation";
import { defaultCompany } from "@/data/companies";
import { PageHeader } from "@/app/components/layout/PageHeader";
import { ServiceHero } from "@/app/components/services/service-hero";
import { ServiceOverview } from "@/app/components/services/service-overview";
import { ServiceIncludes } from "@/app/components/services/service-includes";
import { ServiceProcess } from "@/app/components/services/service-process";
import { ServiceWhyItMatters } from "@/app/components/services/service-why-it-matters";
import { RelatedServices } from "@/app/components/services/related-services";
import { ServiceContactCta } from "@/app/components/services/ServiceContactCta";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const company = defaultCompany;

  const service = company.services.items.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <main style={{ backgroundColor: company.theme.background }}>
      <PageHeader
        title={service.title}
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
        company={company}
      />
      <ServiceHero company={company} service={service} />
      <ServiceOverview company={company} service={service} />
      <ServiceIncludes company={company} service={service} />
      <ServiceProcess company={company} service={service} />
      <ServiceWhyItMatters company={company} service={service} />
      <ServiceContactCta company={company} service={service} />
      <RelatedServices company={company} service={service} />
    </main>
  );
}

