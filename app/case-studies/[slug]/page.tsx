import { notFound } from "next/navigation";
import { defaultCompany } from "@/data/companies";
import { CaseStudyHeader } from "@/app/components/case-studies/CaseStudyHeader";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const company = defaultCompany;

  const project = company.portfolio.items.find(
    (item) =>
      item.slug === slug ||
      item.href === `/case-studies/${slug}`
  );

  if (!project) {
    notFound();
  }

  return (
    <main>
      <CaseStudyHeader company={company} project={project} />
    </main>
  );
}
