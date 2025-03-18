"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { aboutSections } from "@/data/aboutSections";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import Header from "@/components/Header";
import NextPageLink from "@/components/NextPageLink";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const ScrollLink = ({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) => {
  return (
    <li>
      <button
        className="text-sm font-medium py-2 px-4 rounded-full text-slate-800 dark:text-slate-200 bg-primary bg-opacity-5 border border-primary border-opacity-15 hover:bg-opacity-10 transition cursor-pointer focus:bg-opacity-10"
        onClick={onClick}
      >
        {label}
      </button>
    </li>
  );
};

export default function About() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const whoAreWeRef = useRef(null);
  const whatIsIeeeRef = useRef(null);
  const region8Ref = useRef(null);
  const egyptSectionRef = useRef(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
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
      const documentHeight =
        document.documentElement.scrollHeight - 100 - window.innerHeight;
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
          <ul className="flex flex-wrap gap-2 justify-center mt-4">
            {scrollLinks.map((link, index) => (
              <ScrollLink
                key={index}
                label={link.label}
                onClick={() => scrollToSection(link.ref)}
              />
            ))}
          </ul>
        </nav>
      </Header>

      <main className="relative">
        <div className="relative grid gap-24 sm:gap-32 md:gap-44 max-w-3xl mx-auto translate-x-3 sm:translate-x-10">
          {/* Scrolling gradient Line */}
          <div
            className="bg-slate-200 dark:bg-slate-800 absolute h-full -left-2 w-[1.4px] bg-gradient-to-b from-transparent via-sky-600 to-transparent -z-10 bg-no-repeat"
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
              className={`px-4 sm:px-8 transition-opacity duration-300 ${
                activeSection === section.id ? "opacity-100" : "opacity-65"
              }`}
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
              <h2 className="text-xl font-bold my-2">{section.label}</h2>
              <p className="dark:text-slate-200">{section.description}</p>
              {section.learnMoreLink && (
                <a
                  href={section.learnMoreLink.url}
                  target="_blank"
                  className="text-primary text-sm inline-block mt-3 font-medium group"
                >
                  {section.learnMoreLink.title}
                  <ChevronRightIcon className="inline ml-1 size-3 group-hover:translate-x-1 transition" />
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
