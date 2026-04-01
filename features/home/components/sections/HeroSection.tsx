import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import logoShapeWhite from "@/assets/logos/logo-shape-only-white.webp";
import logoShape from "@/assets/logos/logo-shape-only.webp";
import { upcomingEvents } from "@/features/events/data/events";
import { BellAlertIcon } from "@heroicons/react/24/solid";
import InteractiveGridPattern from "../partials/InteractiveGridPattern";

interface linkProps {
  href: string;
  children: ReactNode;
}

const CustomLink = ({ href, children }: linkProps) => {
  return (
    <Link
      href={href}
      className={`hover:text-primary after:bg-primary relative font-medium after:absolute after:inset-x-0 after:bottom-[-2px] after:h-[1px] after:scale-x-0 after:transition after:content-[""] hover:after:scale-x-100 dark:text-slate-200 dark:after:bg-white dark:hover:text-white`}
      aria-label={children?.toString()}
    >
      {children}
    </Link>
  );
};

export default function HeroSection() {
  return (
    <header className="relative flex min-h-svh flex-col justify-between overflow-hidden p-8 md:p-12 lg:justify-around">
      <nav className="relative z-10 mx-auto mt-8 hidden w-full max-w-6xl items-center justify-evenly gap-4 backdrop-blur-[2px] lg:flex">
        <CustomLink href={"/"}>Home</CustomLink>
        <CustomLink href="/events">
          {upcomingEvents && upcomingEvents.length != 0 && (
            <BellAlertIcon className="bell absolute top-[2px] -left-6 inline-block size-5 text-red-600 dark:text-red-500" />
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

      <div className="z-10 mx-auto mt-auto flex w-fit items-center justify-center gap-2">
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
            className="hidden w-[1.45em] dark:block"
          />
        </div>
        <h1 className="text-primary m-0 leading-none font-black dark:text-white">
          <span className="block text-[12vw] font-black sm:text-[10vw] md:text-[8vw] lg:text-[6rem]">
            IEEE
          </span>
          <span className="block text-[4vw] font-extrabold sm:text-[3vw] md:text-[2vw] lg:text-[2rem]">
            Suez Canal University
          </span>
          <span className="block text-[4vw] font-extrabold sm:text-[3vw] md:text-[2vw] lg:text-[2rem]">
            Student Branch
          </span>
        </h1>
      </div>
      <p className="z-10 mx-auto mt-auto max-w-md text-center text-xs tracking-widest text-slate-700 md:text-sm dark:text-slate-300">
        Where your true potential begins to shine.
      </p>

      <InteractiveGridPattern squares={[14, 14]} className="md:hidden" aria-hidden="true" />
      <InteractiveGridPattern
        squares={[20, 20]}
        className="hidden md:block lg:hidden"
        aria-hidden="true"
      />
      <InteractiveGridPattern squares={[26, 26]} className="hidden lg:block" aria-hidden="true" />
    </header>
  );
}
