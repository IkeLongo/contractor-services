import type { Company } from "@/lib/types/company";
import { CtaFormSection } from "@/app/components/ui/cta-form-section";

interface AboutCtaSectionProps {
  company: Company;
}

export function AboutCtaSection({ company }: AboutCtaSectionProps) {
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
      imageAlt={imageAlt}
      shouldPreselectService={false}
    />
  );
}
