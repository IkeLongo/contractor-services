"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { Company } from "@/data/companies";

const allLogos = [
  { title: "Raycast", src: "https://assets.aceternity.com/logos/raycast.webp" },
  { title: "Twitch", src: "https://assets.aceternity.com/logos/twitch.webp" },
  { title: "Spotify", src: "https://assets.aceternity.com/logos/spotify.webp" },
  { title: "Hulu", src: "https://assets.aceternity.com/logos/hulu.webp" },
  { title: "YouTube", src: "https://assets.aceternity.com/logos/youtube.webp" },
  {
    title: "Character AI",
    src: "https://assets.aceternity.com/logos/characterai.png",
  },
  { title: "OpenAI", src: "https://assets.aceternity.com/logos/openai.png" },
  { title: "Oracle", src: "https://assets.aceternity.com/logos/oracle.png" },
  { title: "Portola", src: "https://assets.aceternity.com/logos/portola.png" },
  { title: "Granola", src: "https://assets.aceternity.com/logos/granola.png" },
  {
    title: "Hello Patient",
    src: "https://assets.aceternity.com/logos/hello-patient.png",
  },
  { title: "Company 1", src: "https://assets.aceternity.com/logos/1.png" },
  { title: "Forbes", src: "https://assets.aceternity.com/logos/forbes.png" },
  {
    title: "Y Combinator",
    src: "https://assets.aceternity.com/logos/y-combinator.png",
  },
  { title: "Company 7", src: "https://assets.aceternity.com/logos/7.png" },
  { title: "Company 8", src: "https://assets.aceternity.com/logos/8.png" },
  { title: "Company 4", src: "https://assets.aceternity.com/logos/4.png" },
  { title: "Company 9", src: "https://assets.aceternity.com/logos/9.png" },
  { title: "Figma", src: "https://assets.aceternity.com/logos/figma2.svg" },
  { title: "Wired", src: "https://assets.aceternity.com/logos/wired.png" },
];

interface LogoSectionProps {
  company: Company;
}

export function LogoSection({ company }: LogoSectionProps) {
  const section = company.logoSection;

  if (!section) return null;

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
    const logos = [];
    for (let i = 0; i < logosPerSet; i++) {
      logos.push(allLogos[(startIndex + i) % allLogos.length]);
    }
    return logos;
  };

  const currentLogos = getCurrentLogos();

  return (
    <section
      className="overflow-hidden px-4 py-10 md:py-20 lg:py-32"
      style={{ backgroundColor: section.styles?.background || undefined }}
    >
      <h2
        className="mx-auto max-w-xl text-center text-lg font-medium text-neutral-600 dark:text-neutral-400"
        style={{ color: section.styles?.title || undefined }}
      >
        {section.title}{" "}
        <br className="hidden sm:block" />{" "}
        <span
          className="text-neutral-400 dark:text-neutral-600"
          style={{ color: section.styles?.description || undefined }}
        >
          {section.description}
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
                alt={logo.title}
                className="h-8 w-auto object-contain md:h-8 dark:invert dark:filter"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
