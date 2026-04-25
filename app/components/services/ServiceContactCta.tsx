"use client";

import Image from "next/image";
import type { Company, ServiceItem } from "@/data/companies";

interface ServiceContactCtaProps {
  company: Company;
  service: ServiceItem;
}

export function ServiceContactCta({ company, service }: ServiceContactCtaProps) {
  const t = company.theme;

  const image =
    service.cta?.image ??
    company.finalCta.image ??
    company.contact.backgroundImage;

  const imageAlt =
    service.cta?.image != null
      ? `${service.title} service`
      : company.finalCta.imageAlt ?? company.name;

  const headline =
    service.cta?.title ?? `Need ${service.title} done right?`;

  const description =
    service.cta?.description ??
    `Tell us what you need and ${company.name} will follow up with the next steps.`;

  const submitLabel = service.cta?.primaryLabel ?? "Send Request";

  return (
    <section
      id={`contact-${service.slug}`}
      className="scroll-mt-24 py-16 md:py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: t.background }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">

          {/* Left: image */}
          <div className="relative min-h-[320px] lg:min-h-0 overflow-hidden rounded-2xl shadow-lg">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          {/* Right: form card */}
          <div
            className="flex flex-col justify-center rounded-2xl border shadow-sm p-8 sm:p-10"
            style={{ backgroundColor: "#ffffff", borderColor: t.border }}
          >
            {/* Header */}
            <p
              className="text-xs font-bold uppercase tracking-widest mb-2"
              style={{ color: t.secondary }}
            >
              Get in Touch
            </p>
            <h2
              className="text-2xl md:text-3xl font-black mb-2 leading-snug"
              style={{ color: t.text }}
            >
              {headline}
            </h2>
            <p className="text-sm leading-relaxed mb-7" style={{ color: t.mutedText }}>
              {description}
            </p>

            {/* Form */}
            <form className="flex flex-col gap-4">
              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="svc-cta-name"
                  className="text-sm font-medium"
                  style={{ color: t.text }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="svc-cta-name"
                  name="name"
                  placeholder="Your name"
                  autoComplete="name"
                  className="w-full rounded-lg border-0 bg-white px-4 py-2.5 text-sm text-black shadow-sm ring-1 shadow-black/10 ring-black/10 placeholder:text-neutral-400 focus:outline-2 focus:-outline-offset-1 focus:outline-neutral-400"
                />
              </div>

              {/* Email + Phone row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="svc-cta-email"
                    className="text-sm font-medium"
                    style={{ color: t.text }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="svc-cta-email"
                    name="email"
                    placeholder="you@email.com"
                    autoComplete="email"
                    className="w-full rounded-lg border-0 bg-white px-4 py-2.5 text-sm text-black shadow-sm ring-1 shadow-black/10 ring-black/10 placeholder:text-neutral-400 focus:outline-2 focus:-outline-offset-1 focus:outline-neutral-400"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="svc-cta-phone"
                    className="text-sm font-medium"
                    style={{ color: t.text }}
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="svc-cta-phone"
                    name="phone"
                    placeholder="(555) 123-4567"
                    autoComplete="tel"
                    className="w-full rounded-lg border-0 bg-white px-4 py-2.5 text-sm text-black shadow-sm ring-1 shadow-black/10 ring-black/10 placeholder:text-neutral-400 focus:outline-2 focus:-outline-offset-1 focus:outline-neutral-400"
                  />
                </div>
              </div>

              {/* Service dropdown — preselected to current service */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="svc-cta-service"
                  className="text-sm font-medium"
                  style={{ color: t.text }}
                >
                  Service Needed
                </label>
                <select
                  id="svc-cta-service"
                  name="service"
                  defaultValue={service.slug ?? ""}
                  className="w-full rounded-lg border-0 bg-white px-4 py-2.5 text-sm text-black shadow-sm ring-1 shadow-black/10 ring-black/10 focus:outline-2 focus:-outline-offset-1 focus:outline-neutral-400"
                >
                  {company.services.items
                    .filter((item) => item.slug)
                    .map((item) => (
                      <option key={item.slug} value={item.slug}>
                        {item.title}
                      </option>
                    ))}
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="svc-cta-message"
                  className="text-sm font-medium"
                  style={{ color: t.text }}
                >
                  Message
                </label>
                <textarea
                  id="svc-cta-message"
                  name="message"
                  rows={3}
                  placeholder="Tell us about your project or need..."
                  className="w-full resize-none rounded-lg border-0 bg-white px-4 py-2.5 text-sm text-black shadow-sm ring-1 shadow-black/10 ring-black/10 placeholder:text-neutral-400 focus:outline-2 focus:-outline-offset-1 focus:outline-neutral-400"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="mt-1 flex w-full cursor-pointer items-center justify-center rounded-lg px-4 py-3 text-sm font-bold text-white shadow-sm ring-1 ring-white/20 transition-opacity hover:opacity-90 active:opacity-80"
                style={{ backgroundColor: t.primary }}
              >
                {submitLabel}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
