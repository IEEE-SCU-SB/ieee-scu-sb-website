import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";
import { developers, techStack } from "@/features/developers/data/developers";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

// Static Site Generation
export const dynamic = "force-static";
export const revalidate = false;

// Metadata for SEO
export const metadata: Metadata = {
  title: "Meet Our Webmasters | IEEE SCU SB",
  description:
    "Meet the talented webmasters behind the IEEE SCU Student Branch website. Learn about their achievements, contributions, and the technology stack powering our digital presence.",
  keywords: [
    "IEEE SCU webmasters",
    "web development team",
    "student branch developers",
    "website creators",
  ],
  openGraph: {
    title: "Meet Our Webmasters | IEEE SCU SB",
    description:
      "The talented minds behind our award-winning website. Our webmasters combine technical expertise with creative vision.",
    type: "website",
  },
};

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const DeveloperCard = ({
  name,
  role,
  achievements,
  award,
  linkedin,
  email,
  image,
}: {
  name: string;
  role: string;
  achievements: string[];
  award?: {
    title: string;
    year: string;
    organization: string;
  };
  linkedin: string;
  email: string;
  image: {
    src: import("next/image").StaticImageData;
    alt: string;
  };
}) => {
  return (
    <div className="border-border relative overflow-hidden rounded-xl border bg-white shadow-sm transition-shadow duration-200 hover:shadow-md dark:bg-slate-800">
      {/* Award Badge - Responsive positioning for all screens */}
      {award && (
        <div className="top-2 right-2 z-10 mt-2 mr-2 ml-auto w-fit rounded-xl bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 p-0.5 shadow-xl select-none sm:absolute sm:top-3 sm:right-3">
          <div className="flex items-start gap-1.5 rounded-lg bg-gradient-to-b from-yellow-50 to-yellow-100 px-2 py-1.5 sm:gap-2 sm:px-3 sm:py-2 dark:from-yellow-900/90 dark:to-yellow-800/90">
            {/* Award Medal SVG - Responsive sizing */}
            <svg
              className="h-4 w-4 flex-shrink-0 text-yellow-300 sm:h-5 sm:w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M5 16L3 21L8.5 18L12 21L15.5 18L21 21L19 16H5ZM19 8C19 11.86 15.86 15 12 15S5 11.86 5 8C5 4.14 8.14 1 12 1S19 4.14 19 8ZM12 13C14.76 13 17 10.76 17 8S14.76 3 12 3S7 5.24 7 8S9.24 13 12 13ZM12 5C13.66 5 15 6.34 15 8S13.66 11 12 11S9 9.66 9 8S10.34 5 12 5Z" />
            </svg>
            <div className="min-w-0 flex-1">
              <span className="mb-0.5 block truncate text-[10px] leading-tight font-bold text-yellow-800 sm:mb-1 sm:text-xs dark:text-yellow-200">
                {award.title}
              </span>
              <div className="flex flex-col gap-0.5 sm:flex-row sm:items-center sm:gap-1">
                <span className="truncate text-[9px] leading-tight text-yellow-700 sm:text-xs dark:text-yellow-300">
                  {award.organization} {award.year}{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row">
        {/* Mobile/Small Screen Layout - Image + Essential Info Side by Side */}
        <div className="flex items-center gap-4 p-4 sm:p-6 md:hidden">
          {/* Mobile Image */}
          <div className="relative size-32 flex-shrink-0 overflow-hidden rounded-full border-2 border-slate-200 shadow-lg dark:border-slate-600">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover object-center transition-transform duration-300 hover:scale-105"
              sizes="128px"
              priority={true}
            />
          </div>

          {/* Mobile Essential Info */}
          <div className="min-w-0 flex-1">
            <h3 className="text-foreground mb-1 text-base font-bold break-words">{name}</h3>
            <p className="text-primary mb-3 text-sm font-medium">{role}</p>

            <div className="flex flex-wrap gap-1.5">
              <Link
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-foreground text-background hover:bg-foreground/90 inline-flex flex-shrink-0 items-center gap-1 rounded-md px-2 py-1 text-xs font-medium transition-colors"
              >
                <LinkedInIcon className="h-3 w-3" />
                <span className="whitespace-nowrap">LinkedIn</span>
              </Link>

              <Link
                href={`mailto:${email}`}
                className="dark:border-border text-foreground inline-flex flex-shrink-0 items-center gap-1 rounded-md border border-slate-300 px-2 py-1 text-xs font-medium transition-colors hover:bg-slate-100 dark:hover:bg-slate-700"
              >
                <EnvelopeIcon className="h-3 w-3" />
                <span className="whitespace-nowrap">Email</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Original Design (hidden on mobile) */}
        <div className="hidden w-full md:flex md:flex-row">
          {/* Desktop Image Section */}
          <div className="flex min-w-fit items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-6 dark:from-slate-700 dark:to-slate-800">
            <div className="relative h-44 w-44 overflow-hidden rounded-full border-4 border-slate-200 shadow-lg lg:h-56 lg:w-56 dark:border-slate-600">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover object-center transition-transform duration-300 hover:scale-105"
                sizes="(max-width: 1024px) 176px, 224px"
                priority={false}
                loading="lazy"
              />
            </div>
          </div>

          {/* Desktop Content Section */}
          <div className="min-w-0 flex-1 p-6">
            <div className="mb-4">
              <h3 className="text-foreground mb-1 text-lg font-bold break-words">{name}</h3>
              <p className="text-primary text-sm font-medium">{role}</p>
            </div>

            <div className="mb-4">
              <h4 className="text-foreground mb-2 text-sm font-semibold">Key Contributions</h4>
              <ul className="space-y-1.5">
                {achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="bg-primary mt-2 h-1 w-1 flex-shrink-0 rounded-full"></span>
                    <p className="text-sm leading-relaxed break-words text-slate-700 dark:text-slate-300">
                      {achievement}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2">
              <Link
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-foreground text-background hover:bg-foreground/90 inline-flex flex-shrink-0 items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors"
              >
                <LinkedInIcon className="h-3.5 w-3.5" />
                <span className="whitespace-nowrap">LinkedIn</span>
              </Link>

              <Link
                href={`mailto:${email}`}
                className="dark:border-border text-foreground inline-flex flex-shrink-0 items-center gap-1.5 rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-medium transition-colors hover:bg-slate-100 dark:hover:bg-slate-700"
              >
                <EnvelopeIcon className="h-3.5 w-3.5" />
                <span className="whitespace-nowrap">Email</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Achievements Section - Shown below on mobile only */}
        <div className="px-4 pb-4 sm:px-6 sm:pb-6 md:hidden">
          <h4 className="text-foreground mb-2 text-sm font-semibold">Key Contributions</h4>
          <ul className="space-y-1.5">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="bg-primary mt-2 h-1 w-1 flex-shrink-0 rounded-full"></span>
                <p className="text-xs leading-relaxed break-words text-slate-700 sm:text-sm dark:text-slate-300">
                  {achievement}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default function Developers() {
  return (
    <>
      <Header title="Meet Our Webmasters">
        <p className="mx-auto my-3 max-w-3xl px-4 text-sm leading-relaxed text-slate-700 sm:my-4 sm:px-6 sm:text-base dark:text-slate-200">
          The talented minds behind this website. Our webmasters combine technical expertise with
          creative vision to deliver exceptional digital experiences.
        </p>
      </Header>

      <main className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl space-y-6 sm:space-y-8">
          {developers.map((developer) => (
            <DeveloperCard
              key={developer.id}
              name={developer.name}
              role={developer.role}
              achievements={developer.achievements}
              award={developer.award}
              linkedin={developer.linkedin}
              email={developer.email}
              image={developer.image}
            />
          ))}
        </div>

        {/* Technology Stack Section */}
        <div className="mx-auto max-w-4xl rounded-xl border border-slate-200 bg-slate-50 p-4 py-7 text-center dark:border-slate-700 dark:bg-slate-800">
          <h3 className="text-foreground mb-2 text-base font-bold sm:mb-3 sm:text-lg">
            Technology Stack
          </h3>
          <p className="mx-auto mb-4 max-w-2xl text-xs leading-relaxed text-slate-700 sm:mb-6 sm:text-sm dark:text-slate-300">
            Built with cutting-edge technologies to deliver exceptional performance, seamless user
            experience, and reliable scalability for the IEEE SCU Student Branch digital presence.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 lg:gap-4">
            {techStack.map((tech) => (
              <div
                key={tech.id}
                className="dark:border-border text-foreground flex items-center gap-1.5 rounded-lg border border-slate-300 bg-white px-2.5 py-1.5 text-xs font-medium transition-shadow duration-200 hover:shadow-md sm:gap-2 sm:px-3 sm:py-2 sm:text-sm dark:bg-slate-700"
                title={tech.description}
              >
                <Image
                  src={tech.icon}
                  alt={`${tech.name} icon`}
                  width={16}
                  height={16}
                  className="h-3 w-3 sm:h-4 sm:w-4"
                  loading="lazy"
                  decoding="async"
                />
                <span className="whitespace-nowrap">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
