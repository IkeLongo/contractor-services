import { notFound } from "next/navigation";
import { defaultCompany } from "@/data/companies";
import { PageHeader } from "@/app/components/layout/PageHeader";
import { ServiceHero } from "@/app/components/services/ServiceHero";
import { ServiceNarrative } from "@/app/components/services/ServiceNarrative";
import { ServiceImageBentoGallery } from "@/app/components/services/ServiceImageBentoGallery";
import { RelatedServices } from "@/app/components/services/RelatedServices";
import { ServiceContactCta } from "@/app/components/services/ServiceContactCta";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const company = defaultCompany;
  const t = company.branding.theme;

  const service = company.services.items.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <main style={{ backgroundColor: t.background }}>
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

