"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Header from "@/components/layout/Header";
import NextPageLink from "@/components/NextPageLink";
import { aboutSections } from "@/features/about/data/aboutSections";
import { useIntersectionObserver } from "@/lib/utils/useIntersectionObserver";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

export default function About() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const whoAreWeRef = useRef<HTMLElement>(null);
  const whatIsIeeeRef = useRef<HTMLElement>(null);
  const region8Ref = useRef<HTMLElement>(null);
  const egyptSectionRef = useRef<HTMLElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollLinks = [
    { label: "Who are we?", ref: whoAreWeRef },
    { label: "What is IEEE?", ref: whatIsIeeeRef },
    { label: "IEEE Region-8", ref: region8Ref },
    { label: "IEEE Egypt Section", ref: egyptSectionRef },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - 100 - window.innerHeight;
      const scrollPercentage = scrollTop / documentHeight;

      setScrollProgress(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const gradientPosition = `${scrollProgress * 100 - 3}%`;

  const activeSection = useIntersectionObserver(
    aboutSections.map((s) => s.id),
    { threshold: 1 }
  );

  return (
    <>
      <Header title="About Us">
        <nav>
          <ul className="mt-4 flex flex-wrap justify-center gap-2">
            {scrollLinks.map((link, index) => (
              <li key={index}>
                <button
                  className="bg-primary bg-opacity-5 border-primary border-opacity-15 hover:bg-opacity-10 focus:bg-opacity-10 cursor-pointer rounded-full border px-4 py-2 text-sm font-medium text-slate-800 transition dark:text-slate-200"
                  onClick={() => scrollToSection(link.ref)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </Header>

      <main className="relative">
        <div className="relative mx-auto grid max-w-3xl translate-x-3 gap-24 sm:translate-x-10 sm:gap-32 md:gap-44">
          {/* Scrolling gradient Line */}
          <div
            className="bg-border absolute -left-2 -z-10 h-full w-[1.4px] bg-gradient-to-b from-transparent via-sky-600 to-transparent bg-no-repeat"
            style={{
              backgroundPosition: `0 ${gradientPosition}`,
              backgroundSize: "100% 150px",
            }}
          ></div>

          {/* Sections */}
          {aboutSections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              ref={
                section.id === "ieeescusb"
                  ? whoAreWeRef
                  : section.id === "ieee"
                    ? whatIsIeeeRef
                    : section.id === "region8"
                      ? region8Ref
                      : egyptSectionRef
              }
              className={`px-4 transition-opacity duration-300 sm:px-8 ${activeSection === section.id ? "opacity-100" : "opacity-65"}`}
            >
              <Image
                src={section.logo.src}
                alt={section.logo.alt}
                width={95}
                unoptimized
                quality={100}
                className="dark:hidden"
              />
              {/* Dark mode Image */}
              <Image
                src={section.logoWhite.src}
                alt={section.logoWhite.alt}
                width={95}
                unoptimized
                quality={100}
                className="hidden dark:block"
              />
              <h2 className="my-2 text-xl font-bold">{section.label}</h2>
              <p className="dark:text-slate-200">{section.description}</p>
              {section.learnMoreLink && (
                <a
                  href={section.learnMoreLink.url}
                  target="_blank"
                  className="text-primary group mt-3 inline-block text-sm font-medium"
                >
                  {section.learnMoreLink.title}
                  <ChevronRightIcon className="ml-1 inline size-3 transition group-hover:translate-x-1" />
                </a>
              )}
            </section>
          ))}
        </div>

        <div className="mx-auto">
          <NextPageLink href="/committees">Explore Our Committees</NextPageLink>
        </div>
      </main>
    </>
  );
}
