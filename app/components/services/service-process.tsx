import type { Company, ServiceItem } from "@/data/companies";

const DEFAULT_STEPS = [
  {
    title: "Assess the Need",
    description:
      "We evaluate the scope and document exactly what needs to be done — no surprises.",
  },
  {
    title: "Complete the Work",
    description:
      "Our crew arrives on time, works cleanly, and completes the job to standard.",
  },
  {
    title: "Review and Follow Up",
    description:
      "We walk through the finished work with you and address any remaining questions.",
  },
];

interface ServiceProcessProps {
  company: Company;
  service: ServiceItem;
}

export function ServiceProcess({ company, service }: ServiceProcessProps) {
  const t = company.theme;
  const processTitle = service.process?.title ?? "How It Works";
  const processDesc = service.process?.description;
  const processSteps = service.process?.steps ?? DEFAULT_STEPS;

  return (
    <section
      className="py-16 md:py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: t.primary }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-2"
            style={{ color: t.secondary }}
          >
            Step by Step
          </p>
          <h2 className="text-2xl md:text-3xl font-black text-white">
            {processTitle}
          </h2>
          {processDesc && (
            <p
              className="mt-3 text-base"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              {processDesc}
            </p>
          )}
        </div>
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {processSteps.map((step, i) => (
            <li
              key={i}
              className="rounded-xl p-6"
              style={{
                backgroundColor: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-black text-white mb-4"
                style={{ backgroundColor: t.secondary }}
              >
                {i + 1}
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                {step.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
