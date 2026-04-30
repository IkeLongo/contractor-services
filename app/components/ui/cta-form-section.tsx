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
  const cs = company.contact.styles?.services;

  const resolvedImage =
    image ?? company.finalCta.image ?? company.contact.backgroundImage;
  const resolvedImageAlt = imageAlt ?? company.general.name;
  const resolvedBg = background ?? cs?.background ?? t.background;
  const resolvedSectionBg = cs?.sectionBg ?? resolvedBg;
  const resolvedFormBg = formBackground ?? cs?.formBg ?? "#ffffff";
  const resolvedButtonBg = buttonBg ?? cs?.buttonBg ?? t.primary;
  const resolvedButtonText = buttonText ?? cs?.buttonText ?? "#ffffff";
  const resolvedText = cs?.text ?? t.text;
  const resolvedMutedText = cs?.mutedText ?? t.mutedText;
  const resolvedInputBg = cs?.input?.background ?? "white";
  const resolvedInputText = cs?.input?.text ?? "black";
  const resolvedInputPlaceholder = cs?.input?.placeholder;
  const resolvedInputLabel = cs?.input?.label ?? resolvedText;
  const resolvedInputRing = cs?.input?.ring ?? "rgb(0 0 0 / 0.1)";
  const resolvedFocusOutline = cs?.input?.focusOutline ?? "rgb(163 163 163)";

  const inputClass = "w-full rounded-lg border-0 px-4 py-2.5 text-sm shadow-sm ring-1 shadow-black/10 focus:outline-2 focus:-outline-offset-1";

  const defaultValue = shouldPreselectService ? (selectedServiceSlug ?? "") : "";

  return (
    <section
      className="scroll-mt-24 py-16 px-4 sm:px-6 lg:px-8 md:py-20"
      style={{ backgroundColor: resolvedSectionBg }}
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
            style={{ backgroundColor: resolvedFormBg, borderColor: cs?.input?.ring ?? t.border }}
          >
            {/* Header */}
            {eyebrow && (
              <p
                className="mb-2 text-xs font-bold uppercase tracking-widest"
                style={{ color: cs?.text ?? t.secondary }}
              >
                {eyebrow}
              </p>
            )}
            <h2
              className="mb-2 text-2xl font-black leading-snug md:text-3xl"
              style={{ color: resolvedText }}
            >
              {title}
            </h2>
            {description && (
              <p
                className="mb-7 text-sm leading-relaxed"
                style={{ color: resolvedMutedText }}
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
                  style={{ color: resolvedInputLabel }}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="cta-name"
                  name="name"
                  placeholder="Your name"
                  autoComplete="name"
                  className={inputClass}
                  style={{
                    backgroundColor: resolvedInputBg,
                    color: resolvedInputText,
                    ringColor: resolvedInputRing,
                    "--tw-ring-color": resolvedInputRing,
                    "--tw-ring-shadow": `0 0 0 1px ${resolvedInputRing}`,
                    caretColor: resolvedInputText,
                    ...(resolvedInputPlaceholder ? { "--placeholder-color": resolvedInputPlaceholder } : {}),
                  } as React.CSSProperties}
                />
              </div>

              {/* Email + Phone row */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="cta-email"
                    className="text-sm font-medium"
                    style={{ color: resolvedInputLabel }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="cta-email"
                    name="email"
                    placeholder="you@email.com"
                    autoComplete="email"
                    className={inputClass}
                    style={{
                      backgroundColor: resolvedInputBg,
                      color: resolvedInputText,
                      "--tw-ring-color": resolvedInputRing,
                      "--tw-ring-shadow": `0 0 0 1px ${resolvedInputRing}`,
                    } as React.CSSProperties}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="cta-phone"
                    className="text-sm font-medium"
                    style={{ color: resolvedInputLabel }}
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="cta-phone"
                    name="phone"
                    placeholder="(555) 123-4567"
                    autoComplete="tel"
                    className={inputClass}
                    style={{
                      backgroundColor: resolvedInputBg,
                      color: resolvedInputText,
                      "--tw-ring-color": resolvedInputRing,
                      "--tw-ring-shadow": `0 0 0 1px ${resolvedInputRing}`,
                    } as React.CSSProperties}
                  />
                </div>
              </div>

              {/* Service dropdown */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="cta-service"
                  className="text-sm font-medium"
                  style={{ color: resolvedInputLabel }}
                >
                  Service Needed
                </label>
                <select
                  id="cta-service"
                  name="service"
                  defaultValue={defaultValue}
                  className={inputClass}
                  style={{
                    backgroundColor: resolvedInputBg,
                    color: resolvedInputText,
                    "--tw-ring-color": resolvedInputRing,
                    "--tw-ring-shadow": `0 0 0 1px ${resolvedInputRing}`,
                  } as React.CSSProperties}
                >
                  {!shouldPreselectService && (
                    <option
                      value=""
                      style={{ backgroundColor: resolvedInputBg, color: resolvedInputText }}
                    >
                      Select a service
                    </option>
                  )}
                  {company.services.items
                    .filter((item) => item.slug)
                    .map((item) => (
                      <option
                        key={item.slug}
                        value={item.slug}
                        style={{ backgroundColor: resolvedInputBg, color: resolvedInputText }}
                      >
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
                  style={{ color: resolvedInputLabel }}
                >
                  Message
                </label>
                <textarea
                  id="cta-message"
                  name="message"
                  rows={3}
                  placeholder="Tell us about your project or need..."
                  className={`${inputClass} resize-none`}
                  style={{
                    backgroundColor: resolvedInputBg,
                    color: resolvedInputText,
                    "--tw-ring-color": resolvedInputRing,
                    "--tw-ring-shadow": `0 0 0 1px ${resolvedInputRing}`,
                  } as React.CSSProperties}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="mt-1 flex w-full cursor-pointer items-center justify-center rounded-lg px-4 py-3 text-sm font-bold shadow-sm ring-1 ring-white/20 transition-opacity hover:opacity-90 active:opacity-80"
                style={{ backgroundColor: resolvedButtonBg, color: resolvedButtonText, boxShadow: `0 4px 14px ${resolvedButtonBg}44` }}
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
