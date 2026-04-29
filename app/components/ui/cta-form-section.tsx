"use client";

import Image from "next/image";
import type { Company } from "@/lib/types/company";

interface CtaFormSectionProps {
  company: Company;
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
  imageAlt?: string;
  background?: string;
  formBackground?: string;
  buttonBg?: string;
  buttonText?: string;
  selectedServiceSlug?: string;
  shouldPreselectService?: boolean;
}

export function CtaFormSection({
  company,
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  background,
  formBackground,
  buttonBg,
  buttonText,
  selectedServiceSlug,
  shouldPreselectService = false,
}: CtaFormSectionProps) {
  const t = company.branding.theme;

  const resolvedImage =
    image ?? company.finalCta.image ?? company.contact.backgroundImage;
  const resolvedImageAlt = imageAlt ?? company.general.name;
  const resolvedBg = background ?? t.background;
  const resolvedFormBg = formBackground ?? "#ffffff";
  const resolvedButtonBg = buttonBg ?? t.primary;
  const resolvedButtonText = buttonText ?? "#ffffff";

  const defaultValue = shouldPreselectService ? (selectedServiceSlug ?? "") : "";

  return (
    <section
      className="scroll-mt-24 py-16 px-4 sm:px-6 lg:px-8 md:py-20"
      style={{ backgroundColor: resolvedBg }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-14">

          {/* Left: image */}
          <div className="relative min-h-[320px] overflow-hidden rounded-2xl shadow-lg lg:min-h-0">
            <Image
              src={resolvedImage}
              alt={resolvedImageAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          {/* Right: form card */}
          <div
            className="flex flex-col justify-center rounded-2xl border p-8 shadow-sm sm:p-10"
            style={{ backgroundColor: resolvedFormBg, borderColor: t.border }}
          >
            {/* Header */}
            {eyebrow && (
              <p
                className="mb-2 text-xs font-bold uppercase tracking-widest"
                style={{ color: t.secondary }}
              >
                {eyebrow}
              </p>
            )}
            <h2
              className="mb-2 text-2xl font-black leading-snug md:text-3xl"
              style={{ color: t.text }}
            >
              {title}
            </h2>
            {description && (
              <p
                className="mb-7 text-sm leading-relaxed"
                style={{ color: t.mutedText }}
              >
                {description}
              </p>
            )}

            {/* Form */}
            <form className="flex flex-col gap-4">
              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="cta-name"
                  className="text-sm font-medium"
                  style={{ color: t.text }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="cta-name"
                  name="name"
                  placeholder="Your name"
                  autoComplete="name"
                  className="w-full rounded-lg border-0 bg-white px-4 py-2.5 text-sm text-black shadow-sm ring-1 shadow-black/10 ring-black/10 placeholder:text-neutral-400 focus:outline-2 focus:-outline-offset-1 focus:outline-neutral-400"
                />
              </div>

              {/* Email + Phone row */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="cta-email"
                    className="text-sm font-medium"
                    style={{ color: t.text }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="cta-email"
                    name="email"
                    placeholder="you@email.com"
                    autoComplete="email"
                    className="w-full rounded-lg border-0 bg-white px-4 py-2.5 text-sm text-black shadow-sm ring-1 shadow-black/10 ring-black/10 placeholder:text-neutral-400 focus:outline-2 focus:-outline-offset-1 focus:outline-neutral-400"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="cta-phone"
                    className="text-sm font-medium"
                    style={{ color: t.text }}
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="cta-phone"
                    name="phone"
                    placeholder="(555) 123-4567"
                    autoComplete="tel"
                    className="w-full rounded-lg border-0 bg-white px-4 py-2.5 text-sm text-black shadow-sm ring-1 shadow-black/10 ring-black/10 placeholder:text-neutral-400 focus:outline-2 focus:-outline-offset-1 focus:outline-neutral-400"
                  />
                </div>
              </div>

              {/* Service dropdown */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="cta-service"
                  className="text-sm font-medium"
                  style={{ color: t.text }}
                >
                  Service Needed
                </label>
                <select
                  id="cta-service"
                  name="service"
                  defaultValue={defaultValue}
                  className="w-full rounded-lg border-0 bg-white px-4 py-2.5 text-sm text-black shadow-sm ring-1 shadow-black/10 ring-black/10 focus:outline-2 focus:-outline-offset-1 focus:outline-neutral-400"
                >
                  {!shouldPreselectService && (
                    <option value="">Select a service</option>
                  )}
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
                  htmlFor="cta-message"
                  className="text-sm font-medium"
                  style={{ color: t.text }}
                >
                  Message
                </label>
                <textarea
                  id="cta-message"
                  name="message"
                  rows={3}
                  placeholder="Tell us about your project or need..."
                  className="w-full resize-none rounded-lg border-0 bg-white px-4 py-2.5 text-sm text-black shadow-sm ring-1 shadow-black/10 ring-black/10 placeholder:text-neutral-400 focus:outline-2 focus:-outline-offset-1 focus:outline-neutral-400"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="mt-1 flex w-full cursor-pointer items-center justify-center rounded-lg px-4 py-3 text-sm font-bold shadow-sm ring-1 ring-white/20 transition-opacity hover:opacity-90 active:opacity-80"
                style={{ backgroundColor: resolvedButtonBg, color: resolvedButtonText }}
              >
                Send Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
