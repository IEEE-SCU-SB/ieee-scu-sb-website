import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import logoShape from "@/assets/logos/logo-shape-only.webp";
import logoShapeWhite from "@/assets/logos/logo-shape-only-white.webp";
import InteractiveGridPattern from "../partials/InteractiveGridPattern";
import { BellAlertIcon } from "@heroicons/react/24/solid";
import { upcomingEvents } from "@/data/events";

interface linkProps {
  href: string;
  children: ReactNode;
}

const CustomLink = ({ href, children }: linkProps) => {
  return (
    <Link
      href={href}
      className={`relative font-medium hover:text-primary dark:text-slate-200 dark:hover:text-white after:content-[""] after:absolute after:inset-x-0 after:bottom-[-2px] after:h-[1px] after:bg-primary dark:after:bg-white after:scale-x-0 after:transition hover:after:scale-x-100`}
      aria-label={children?.toString()}
    >
      {children}
    </Link>
  );
};

export default function HeroSection() {
  return (
    <header className="relative min-h-svh flex flex-col justify-between lg:justify-around p-8 md:p-12 overflow-hidden">
      <nav className="relative hidden lg:flex w-full mt-8 justify-evenly gap-4 items-center max-w-6xl mx-auto backdrop-blur-[2px] z-10">
        <CustomLink href={"/"}>Home</CustomLink>
        <CustomLink href="/events">
          {upcomingEvents && upcomingEvents.length != 0 && (
            <BellAlertIcon className="bell inline-block size-5 text-red-600 dark:text-red-500 absolute top-[2px] -left-6" />
          )}
          Events
        </CustomLink>
        <CustomLink href="/about">About Us</CustomLink>
        <Image
          src={logoShape}
          alt="Logo"
          width={60}
          unoptimized={true}
          quality={100}
          className="dark:hidden"
        />
        <Image
          src={logoShapeWhite}
          alt="Logo"
          width={60}
          unoptimized={true}
          quality={100}
          className="hidden dark:block"
        />
        <CustomLink href="/committees">Committees</CustomLink>
        <CustomLink href="/join">Join Us</CustomLink>
        <CustomLink href="/contact">Contact Us</CustomLink>
      </nav>

      <div className="flex items-center justify-center gap-2 mt-auto w-fit mx-auto z-10">
        <div className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[6rem]">
          <Image
            src={logoShape}
            alt="IEEE Suez Canal University logo"
            unoptimized={true}
            quality={100}
            className="w-[1.45em] dark:hidden"
          />
          <Image
            src={logoShapeWhite}
            alt="IEEE Suez Canal University logo"
            unoptimized={true}
            quality={100}
            className="w-[1.45em] hidden dark:block"
          />
        </div>
        <h1 className="leading-none font-black m-0 text-primary dark:text-white">
          <span className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[6rem] block font-black">
            IEEE
          </span>
          <span className="text-[4vw] sm:text-[3vw] md:text-[2vw] lg:text-[2rem] block font-extrabold">
            Suez Canal University
          </span>
          <span className="text-[4vw] sm:text-[3vw] md:text-[2vw] lg:text-[2rem] block font-extrabold">
            Student Branch
          </span>
        </h1>
      </div>
      <p className="max-w-md text-center tracking-widest text-xs md:text-sm mx-auto mt-auto text-slate-700 dark:text-slate-300 z-10">
        Where your true potential begins to shine.
      </p>

      <InteractiveGridPattern
        squares={[14, 14]}
        className="md:hidden"
        aria-hidden="true"
      />
      <InteractiveGridPattern
        squares={[20, 20]}
        className="hidden md:block lg:hidden"
        aria-hidden="true"
      />
      <InteractiveGridPattern
        squares={[26, 26]}
        className="hidden lg:block"
        aria-hidden="true"
      />
    </header>
  );
}
