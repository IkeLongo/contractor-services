import { notFound } from "next/navigation";
import { defaultCompany } from "@/data/companies";
import { PageHeader } from "@/app/components/layout/PageHeader";
import { ServiceHero } from "@/app/components/services/service-hero";
import { ServiceNarrative } from "@/app/components/services/service-narrative";
import { ServiceImageBentoGallery } from "@/app/components/services/service-image-bento-gallery";
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
      <ServiceNarrative company={company} service={service} />
      <ServiceImageBentoGallery company={company} service={service} />
      <ServiceContactCta company={company} service={service} />
      <RelatedServices company={company} service={service} />
    </main>
  );
}

