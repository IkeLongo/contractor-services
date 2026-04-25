"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import type { Company } from "@/data/companies";

interface ServicesHeroProps {
  company: Company;
}

export function ServicesHero({ company }: ServicesHeroProps) {
  const { theme, services, contact, hero } = company;

  const bgImage =
    contact.backgroundImage ??
    hero.images?.[0] ??
    "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const serviceOptions = services.items.map((s) => ({
    label: s.title,
    value: s.title,
  }));

  return (
    <section className="relative min-h-[600px] flex items-center">
      {/* Background image + overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── Left: hero copy ──────────────────────────────── */}
          <div className="flex flex-col gap-6">
            {services.eyebrow && (
              <p
                className="text-xs font-bold uppercase tracking-widest"
                style={{ color: theme.secondary }}
              >
                {services.eyebrow}
              </p>
            )}

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-white">
              {services.title}
            </h1>

            {services.description && (
              <p className="text-base md:text-lg leading-relaxed text-white/70 max-w-lg">
                {services.description}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl px-7 py-4 text-sm font-bold uppercase tracking-wider transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  backgroundColor: theme.secondary,
                  color: "#ffffff",
                  boxShadow: `0 4px 18px ${theme.secondary}55`,
                }}
              >
                Request a Quote
                <ArrowRight className="size-4" />
              </Link>

              <Link
                href="#services-list"
                className="inline-flex items-center gap-2 rounded-xl border px-7 py-4 text-sm font-bold uppercase tracking-wider text-white/90 transition-all duration-200 hover:bg-white/10"
                style={{ borderColor: "rgba(255,255,255,0.3)" }}
              >
                View Core Services
              </Link>
            </div>
          </div>

          {/* ── Right: contact form card ─────────────────────── */}
          <div
            id="contact"
            className="rounded-2xl p-7 md:p-8 shadow-2xl backdrop-blur-sm"
            style={{ backgroundColor: "rgba(255,255,255,0.97)" }}
          >
            <h2
              className="text-lg font-black mb-1"
              style={{ color: theme.primary }}
            >
              Get a Free Quote
            </h2>
            <p className="text-sm mb-6" style={{ color: theme.mutedText }}>
              Tell us about your project and we'll be in touch.
            </p>

            <form
              className="flex flex-col gap-4"
              onSubmit={(e) => e.preventDefault()}
            >
              {/* Name + Email row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="hero-name"
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: theme.mutedText }}
                  >
                    Name
                  </label>
                  <input
                    id="hero-name"
                    type="text"
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, name: e.target.value }))
                    }
                    className="rounded-lg border px-3.5 py-2.5 text-sm outline-none transition focus:ring-2"
                    style={{
                      borderColor: theme.border,
                      color: theme.text,
                      // @ts-expect-error CSS custom property
                      "--tw-ring-color": theme.secondary,
                    }}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="hero-email"
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: theme.mutedText }}
                  >
                    Email
                  </label>
                  <input
                    id="hero-email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, email: e.target.value }))
                    }
                    className="rounded-lg border px-3.5 py-2.5 text-sm outline-none transition focus:ring-2"
                    style={{
                      borderColor: theme.border,
                      color: theme.text,
                      // @ts-expect-error CSS custom property
                      "--tw-ring-color": theme.secondary,
                    }}
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="hero-phone"
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: theme.mutedText }}
                >
                  Phone
                </label>
                <input
                  id="hero-phone"
                  type="tel"
                  placeholder="(210) 555-0100"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, phone: e.target.value }))
                  }
                  className="rounded-lg border px-3.5 py-2.5 text-sm outline-none transition focus:ring-2"
                  style={{
                    borderColor: theme.border,
                    color: theme.text,
                    // @ts-expect-error CSS custom property
                    "--tw-ring-color": theme.secondary,
                  }}
                />
              </div>

              {/* Service dropdown */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="hero-service"
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: theme.mutedText }}
                >
                  Service Needed
                </label>
                <select
                  id="hero-service"
                  value={formData.service}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, service: e.target.value }))
                  }
                  className="rounded-lg border px-3.5 py-2.5 text-sm outline-none transition focus:ring-2 bg-white"
                  style={{
                    borderColor: theme.border,
                    color: formData.service ? theme.text : theme.mutedText,
                    // @ts-expect-error CSS custom property
                    "--tw-ring-color": theme.secondary,
                  }}
                >
                  <option value="" disabled>
                    Select a service…
                  </option>
                  {serviceOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="hero-message"
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: theme.mutedText }}
                >
                  Message
                </label>
                <textarea
                  id="hero-message"
                  rows={3}
                  placeholder="Briefly describe your project…"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, message: e.target.value }))
                  }
                  className="rounded-lg border px-3.5 py-2.5 text-sm outline-none transition focus:ring-2 resize-none"
                  style={{
                    borderColor: theme.border,
                    color: theme.text,
                    // @ts-expect-error CSS custom property
                    "--tw-ring-color": theme.secondary,
                  }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  backgroundColor: theme.primary,
                  boxShadow: `0 4px 14px ${theme.primary}44`,
                }}
              >
                Send Request
                <ArrowRight className="size-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
