import type { Company } from "@/data/companies";
import { CtaFormSection } from "@/app/components/ui/cta-form-section";

interface AboutCtaSectionProps {
  company: Company;
}

export function AboutCtaSection({ company }: AboutCtaSectionProps) {
  const image = company.finalCta.image ?? company.contact.backgroundImage;
  const imageAlt = company.finalCta.imageAlt ?? company.general.name;

  const title =
    company.finalCta.title ?? `Ready to work with ${company.general.name}?`;

  const description =
    company.finalCta.description ??
    `Tell us what you need and we'll follow up with the next steps.`;

  return (
    <CtaFormSection
      company={company}
      eyebrow="Get in Touch"
      title={title}
      description={description}
      image={image}
      imageAlt={imageAlt}
      shouldPreselectService={false}
      background="#F3F6FA"
    />
  );
}
