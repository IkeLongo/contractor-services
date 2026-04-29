"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { Company } from "@/lib/types/company";

interface LogoSectionProps {
  company: Company;
}

export function LogoSection({ company }: LogoSectionProps) {
  const section = company.pages.home.logoSection;

  if (!section || !section.logos?.length) return null;

  const allLogos = section.logos;

  const [currentSet, setCurrentSet] = useState(0);
  const logosPerSet = 10;
  const totalSets = Math.ceil(allLogos.length / logosPerSet);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSet((prev) => (prev + 1) % totalSets);
    }, 3000);

    return () => clearInterval(interval);
  }, [totalSets]);

  const getCurrentLogos = () => {
    const startIndex = currentSet * logosPerSet;

    return Array.from({ length: logosPerSet }, (_, i) => {
      return allLogos[(startIndex + i) % allLogos.length];
    });
  };

  const currentLogos = getCurrentLogos();

  return (
    <section
      className="overflow-hidden py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundColor: section?.styles?.background,
      }}
    >
      <h2
        className="mx-auto max-w-xl text-center text-lg font-medium text-neutral-600 dark:text-neutral-400"
        style={{
          color: section?.title.styles?.color,
        }}
      >
        {section.title.content}{" "}
        <br className="block" />{" "}
        <span
          className="text-neutral-400 dark:text-neutral-600"
          style={{
            color: section?.description.styles?.color,
          }}
        >
          {section.description.content}
        </span>
      </h2>

      <div className="mx-auto mt-10 grid max-w-4xl grid-cols-5 gap-8">
        <AnimatePresence mode="popLayout">
          {currentLogos.map((logo, index) => (
            <motion.div
              key={`${logo.title}-${currentSet}-${index}`}
              initial={{
                x: 40,
                opacity: 0,
                filter: "blur(8px)",
              }}
              animate={{
                x: 0,
                opacity: 1,
                filter: "blur(0px)",
              }}
              exit={{
                x: -40,
                opacity: 0,
                filter: "blur(8px)",
              }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: index * 0.05,
              }}
              className="flex items-center justify-center"
            >
              <img
                src={logo.src}
                width={100}
                height={100}
                alt={logo.alt ?? `${logo.title} logo`}
                className="h-8 w-auto object-contain md:h-8 dark:invert dark:filter"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
