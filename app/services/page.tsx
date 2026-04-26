import { defaultCompany } from "@/data/companies";
import { PageHeader } from "@/app/components/layout/PageHeader";
import { ServicesHero } from "@/app/components/services/ServicesHero";
import { ServicesGrid } from "@/app/components/home/ServicesGrid";
import { FaqSection } from "@/app/components/home/FaqSection";

export default function ServicesPage() {
  const company = defaultCompany;

  return (
    <main>
      <PageHeader
        title="Services"
        breadcrumbs={[{ label: "Services" }]}
        company={company}
      />
      <ServicesHero company={company} />
      <ServicesGrid company={company} id="services-list" />
      <FaqSection company={company} />
    </main>
  );
}
