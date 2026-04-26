import type { Company } from "@/data/companies";
import { ContactTestimonialsCarousel } from "./contact-testimonials-carousel";

interface ContactSectionProps {
  company: Company;
}

export function ContactSection({ company }: ContactSectionProps) {
  const { contact } = company;
  const t = company.theme;
  const s = contact.styles?.contact;

  const styles = {
    background: s?.background ?? t.primary,
    formBg: s?.formBg ?? t.surface,
    text: s?.text ?? t.text,
    mutedText: s?.mutedText ?? t.mutedText,
    buttonBg: s?.buttonBg ?? t.secondary,
    buttonText: s?.buttonText ?? "#ffffff",
  };

  return (
    <section
      id="contact"
      className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8"
      style={{ background: styles.background }}
    >
      <div className="absolute inset-0 bg-black/10" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">

        {/* ── Left: Branding + Copy ── */}
        <div className="flex flex-col justify-between">
          <div className="max-w-lg space-y-6">
            {/* <img
              src={company.branding.navLogo}
              alt={company.name}
              className="h-16 w-auto object-contain object-left"
            /> */}
            <h2 className="text-3xl md:text-4xl font-black leading-tight text-white">
              {contact.title ?? contact.form.title}
            </h2>
            {contact.description && (
              <p
                className="mt-3 max-w-md text-base leading-relaxed"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                {contact.description}
              </p>
            )}
          </div>

          {/* Testimonials carousel */}
          <div className="mt-10 md:mt-16">
            <ContactTestimonialsCarousel company={company} />
          </div>
        </div>

        {/* ── Right: Form Card ── */}
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-lg md:p-8"
          style={{ backgroundColor: styles.formBg }}
        >
          <div className="mb-6 space-y-1">
            <h3
              className="text-xl font-black text-neutral-900"
              style={{ color: styles.text }}
            >
              {contact.form.title}
            </h3>
            <p
              className="text-sm text-neutral-500"
              style={{ color: styles.mutedText }}
            >
              {contact.form.description}{" "}
              <a
                href={`mailto:${contact.form.email}`}
                className="font-medium underline decoration-neutral-300 underline-offset-2 transition hover:decoration-neutral-500"
                style={{ color: styles.text }}
              >
                {contact.form.email}
              </a>
              .
            </p>
          </div>

          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-name" className="text-sm font-medium text-slate-700">
                Name
              </label>
              <input
                type="text"
                id="contact-name"
                name="name"
                placeholder="Alison Burgers"
                autoComplete="name"
                className="w-full rounded-md border border-slate-200 bg-white px-4 py-2.5 text-sm text-black placeholder:text-neutral-400 focus:outline-none focus:ring-2"
                style={{ "--tw-ring-color": t.secondary } as React.CSSProperties}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-email" className="text-sm font-medium text-slate-700">
                Email
              </label>
              <input
                type="email"
                id="contact-email"
                name="email"
                placeholder="you@email.com"
                autoComplete="email"
                className="w-full rounded-md border border-slate-200 bg-white px-4 py-2.5 text-sm text-black placeholder:text-neutral-400 focus:outline-none focus:ring-2"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-phone" className="text-sm font-medium text-slate-700">
                Phone
              </label>
              <input
                type="tel"
                id="contact-phone"
                name="phone"
                placeholder="(555) 123-4567"
                autoComplete="tel"
                className="w-full rounded-md border border-slate-200 bg-white px-4 py-2.5 text-sm text-black placeholder:text-neutral-400 focus:outline-none focus:ring-2"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-service" className="text-sm font-medium text-slate-700">
                Service Needed
              </label>
              <select
                id="contact-service"
                name="service"
                defaultValue=""
                className="w-full rounded-md border border-slate-200 bg-white px-4 py-2.5 text-sm text-black focus:outline-none focus:ring-2"
              >
                <option value="" disabled>
                  Select a service
                </option>
                {contact.form.services.map((service) => (
                  <option key={service.value} value={service.value}>
                    {service.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-message" className="text-sm font-medium text-slate-700">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                placeholder="How can we help you?"
                className="w-full resize-none rounded-md border border-slate-200 bg-white px-4 py-2.5 text-sm text-black placeholder:text-neutral-400 focus:outline-none focus:ring-2"
              />
            </div>
            <button
              type="submit"
              className="mt-1 w-full rounded-md py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{
                backgroundColor: styles.buttonBg,
                color: styles.buttonText,
              }}
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
