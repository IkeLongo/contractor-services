"use client";

import type { Company, ServiceItem } from "@/data/companies";
import { CtaFormSection } from "@/app/components/ui/cta-form-section";

interface ServiceContactCtaProps {
  company: Company;
  service: ServiceItem;
}

export function ServiceContactCta({ company, service }: ServiceContactCtaProps) {
  const image =
    service.cta?.image ??
    company.finalCta.image ??
    company.contact.backgroundImage;

  const imageAlt =
    service.cta?.image != null
      ? `${service.title} service`
      : company.finalCta.imageAlt ?? company.name;

  const headline = service.cta?.title ?? `Need ${service.title} done right?`;

  const description =
    service.cta?.description ??
    `Tell us what you need and ${company.name} will follow up with the next steps.`;

  return (
    <CtaFormSection
      company={company}
      eyebrow="Get in Touch"
      title={headline}
      description={description}
      image={image}
      imageAlt={imageAlt}
      selectedServiceSlug={service.slug}
      shouldPreselectService={true}
    />
  );
}
