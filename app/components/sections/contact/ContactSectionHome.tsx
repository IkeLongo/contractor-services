import type { Company } from "@/data/companies";

interface ContactSectionProps {
  company: Company;
}

export function ContactSection({ company }: ContactSectionProps) {
  const { contact } = company;

  return (
    <section className="isolate grid h-full w-full flex-1 grid-cols-1 overflow-x-hidden overflow-y-auto overscroll-y-contain md:min-h-0 lg:grid-cols-2 lg:overflow-hidden">
      <div
        className="relative order-last flex min-h-72 items-center justify-center overflow-hidden bg-cover bg-left px-4 py-8 sm:min-h-64 sm:px-6 sm:py-12 lg:order-first lg:min-h-full lg:py-0"
        style={{ backgroundImage: `url(${contact.backgroundImage})` }}
      >
        <div
          className="absolute inset-0"
          aria-hidden
          style={{
            background:
              contact.styles?.overlayGradient ||
              "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.5), rgba(0,0,0,0.2))",
          }}
        />
        <div className="relative z-10 w-full max-w-md rounded-2xl bg-white/95 p-6 shadow-2xl ring-1 shadow-black/30 ring-black/5 backdrop-blur-sm sm:p-8">
          <div className="flex flex-col gap-6">
            <p className="text-xl/8 font-medium tracking-tight text-balance text-neutral-900">
              {`\u201C${contact.testimonial.quote}\u201D`}
            </p>
            <div className="flex items-center gap-3">
              <img
                src={
                  contact.testimonial.avatar ||
                  "https://assets.aceternity.com/avatars/manu.webp"
                }
                alt=""
                className="size-10 rounded-full object-cover ring-1 ring-black/5"
              />
              <div>
                <p className="text-sm/5 font-medium text-neutral-900">
                  {contact.testimonial.name}
                </p>
                <p className="text-sm/5 text-neutral-500">
                  {contact.testimonial.title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="order-first flex flex-col justify-start bg-neutral-50 px-4 py-8 sm:px-6 sm:py-12 md:min-h-0 lg:order-0 lg:justify-center lg:px-10 lg:py-16 xl:px-14 dark:bg-neutral-950"
        style={{ backgroundColor: contact.styles?.formBg || undefined }}
      >
        <div className="mx-auto flex w-full max-w-md flex-col gap-8">
          <div className="flex flex-col gap-6">
            <img
              src={company.branding.navLogo}
              alt={company.name}
              className="h-20 w-auto object-contain object-left"
            />
            <div className="flex flex-col gap-2">
              <h2
                className="max-w-[30ch] text-2xl/8 font-black tracking-tight text-balance text-neutral-900 sm:text-3xl/8 dark:text-white"
                style={{ color: contact.styles?.text || undefined }}
              >
                {contact.form.title}
              </h2>
              <p
                className="max-w-[48ch] text-base/7 text-pretty text-neutral-600 sm:text-sm/6 dark:text-neutral-400"
                style={{ color: contact.styles?.mutedText || undefined }}
              >
                {contact.form.description}{" "}
                <a
                  href={`mailto:${contact.form.email}`}
                  className="font-medium text-neutral-900 underline decoration-neutral-300 decoration-2 underline-offset-2 transition hover:decoration-neutral-500 dark:text-white dark:decoration-neutral-600 dark:hover:decoration-neutral-400"
                  style={{ color: contact.styles?.text || undefined }}
                >
                  {contact.form.email}
                </a>
                .
              </p>
            </div>
          </div>

          <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="contact-dither-name"
                className="text-base/5 font-medium text-neutral-900 sm:text-sm/5"
              >
                Name
              </label>
              <input
                type="text"
                id="contact-dither-name"
                name="name"
                placeholder="Alison Burgers"
                autoComplete="name"
                className="w-full rounded-lg border-0 bg-white px-4 py-2.5 text-base/6 text-black shadow-sm ring-1 shadow-black/10 ring-black/10 placeholder:text-neutral-400 focus:outline-2 focus:-outline-offset-1 focus:outline-neutral-400 sm:py-1.5 sm:text-sm/6"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="contact-email"
                className="text-base/5 font-medium text-neutral-900 sm:text-sm/5"
              >
                Email
              </label>
              <input
                type="email"
                id="contact-email"
                name="email"
                placeholder="you@email.com"
                autoComplete="email"
                className="w-full rounded-lg border-0 bg-white px-4 py-2.5 text-base/6 text-black shadow-sm ring-1 shadow-black/10 ring-black/10 placeholder:text-neutral-400 focus:outline-2 focus:-outline-offset-1 focus:outline-neutral-400 sm:py-1.5 sm:text-sm/6"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="contact-phone"
                className="text-base/5 font-medium text-neutral-900 sm:text-sm/5"
              >
                Phone
              </label>
              <input
                type="tel"
                id="contact-phone"
                name="phone"
                placeholder="(555) 123-4567"
                autoComplete="tel"
                className="w-full rounded-lg border-0 bg-white px-4 py-2.5 text-base/6 text-black shadow-sm ring-1 shadow-black/10 ring-black/10 placeholder:text-neutral-400 focus:outline-2 focus:-outline-offset-1 focus:outline-neutral-400 sm:py-1.5 sm:text-sm/6"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="contact-service"
                className="text-base/5 font-medium text-neutral-900 sm:text-sm/5"
              >
                Service Needed
              </label>
              <select
                id="contact-service"
                name="service"
                defaultValue=""
                className="w-full rounded-lg border-0 bg-white px-4 py-2.5 text-base/6 text-black shadow-sm ring-1 shadow-black/10 ring-black/10 focus:outline-2 focus:-outline-offset-1 focus:outline-neutral-400 sm:py-1.5 sm:text-sm/6"
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
            <div className="flex flex-col gap-2">
              <label
                htmlFor="contact-message"
                className="text-base/5 font-medium text-neutral-900 sm:text-sm/5"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                placeholder="How can we help you?"
                className="w-full resize-none rounded-lg border-0 bg-white px-4 py-2.5 text-base/6 text-black shadow-sm ring-1 shadow-black/10 ring-black/10 placeholder:text-neutral-400 focus:outline-2 focus:-outline-offset-1 focus:outline-neutral-400 sm:py-1.5 sm:text-sm/6"
              />
            </div>
            <button
              type="submit"
              className="flex w-full cursor-pointer items-center justify-center rounded-lg bg-neutral-900 px-4 py-2.5 text-base/5 font-medium text-white shadow-[0px_0px_10px_0px_rgba(255,255,255,0.2)_inset] ring-1 ring-white/20 transition-all duration-200 ring-inset hover:shadow-[0px_0px_20px_0px_rgba(255,255,255,0.4)_inset] hover:ring-white/40 active:scale-98 sm:py-2 sm:text-sm/5"
              style={{
                backgroundColor: contact.styles?.buttonBg || undefined,
                color: contact.styles?.buttonText || undefined,
              }}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
