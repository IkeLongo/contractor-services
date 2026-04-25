import { notFound } from "next/navigation";
import { defaultCompany } from "@/data/companies";
import { CaseStudyHeader } from "@/app/components/case-studies/CaseStudyHeader";
import { ProjectSnapshotSection } from "@/app/components/case-studies/ProjectSnapshotSection";
import { ChallengeSolutionResultSection } from "@/app/components/case-studies/ChallengeSolutionResultSection";
import { CaseStudyGallerySection } from "@/app/components/case-studies/CaseStudyGallerySection";
import { CaseStudyCtaSection } from "@/app/components/case-studies/CaseStudyCtaSection";

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
      <ProjectSnapshotSection company={company} project={project} />
      <ChallengeSolutionResultSection company={company} project={project} />
      <CaseStudyGallerySection company={company} project={project} />
      <CaseStudyCtaSection company={company} />
    </main>
  );
}
