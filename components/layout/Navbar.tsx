"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logoWhite from "@/assets/logos/logo-white.webp";
import logo from "@/assets/logos/logo.webp";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import SelectTheme from "./SelectTheme";

interface linkProps {
  href: string;
  className?: string;
  children: ReactNode;
  setIsOpen: (isOpen: boolean) => void;
}

const CustomLink = ({ href, className, children, setIsOpen }: linkProps) => {
  const pathname = usePathname();

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <Link
      href={href}
      className={`hover:text-primary lg:after:bg-primary relative py-3 after:content-[""] lg:py-5 lg:after:absolute lg:after:inset-x-0 lg:after:bottom-[-1px] lg:after:h-[2px] lg:after:scale-x-0 lg:after:rounded-sm lg:after:transition lg:after:ease-linear lg:hover:after:scale-x-100 dark:text-slate-300 dark:hover:text-white dark:lg:after:bg-white ${pathname === href ? "text-primary lg:after:scale-x-100 dark:text-white" : ""} ${className}`}
      aria-label={children?.toString()}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (pathname === "/") {
        const shouldShow = window.scrollY > window.innerHeight / 4.5;
        if (shouldShow !== showNavbar) {
          setShowNavbar(shouldShow);
        }
      }
    };

    if (pathname === "/") {
      window.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname, showNavbar]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav
      className={`bg-background top-0 z-40 flex items-center justify-between border-b py-3 font-medium transition-all duration-700 lg:py-0 ${pathname === "/" ? "fixed w-full" : "sticky"} ${
        pathname === "/" && !showNavbar
          ? "bg-opacity-40 dark:bg-opacity-0 border-transparent px-7 py-7 lg:invisible lg:-translate-y-full"
          : "bg-opacity-100 dark:bg-opacity-100 border-border lg:-translate-y-0"
      } `}
    >
      <Link href={"/"}>
        <Image
          src={logo}
          alt="logo"
          width={75}
          unoptimized
          quality={100}
          loading="eager"
          priority
          className="lg:w-[85px] dark:hidden"
        />
        <Image
          src={logoWhite}
          alt="logo"
          width={75}
          unoptimized
          quality={100}
          loading="eager"
          priority
          className="hidden lg:w-[85px] dark:block"
        />
      </Link>
      <div>
        <button
          className="block lg:hidden"
          onClick={() => setIsOpen(true)}
          aria-label="Show navigation"
        >
          <Bars3BottomRightIcon className="size-8 text-black dark:text-white" />
          <span className="sr-only">Show Navbar</span>
        </button>

        {/* Menu Links */}
        <div
          ref={menuRef}
          className={`bg-background border-border fixed top-0 right-0 flex h-screen w-[70%] max-w-[280px] flex-col border-l p-6 transition duration-300 lg:static lg:h-fit lg:w-full lg:max-w-none lg:translate-x-0 lg:flex-row lg:gap-[3vw] lg:border-none lg:bg-transparent lg:p-0 lg:dark:bg-transparent ${isOpen ? "translate-x-0" : "translate-x-[105%]"}`}
        >
          <button
            className="mb-3 ml-auto lg:hidden"
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation"
          >
            <XMarkIcon className="text-bgDark size-7 dark:text-white" />
          </button>

          <CustomLink href="/" setIsOpen={setIsOpen}>
            Home
          </CustomLink>
          <CustomLink href="/events" setIsOpen={setIsOpen}>
            Events
          </CustomLink>
          <CustomLink href="/about" setIsOpen={setIsOpen}>
            About Us
          </CustomLink>
          <CustomLink href="/committees" setIsOpen={setIsOpen}>
            Committees
          </CustomLink>
          <CustomLink href="/join" setIsOpen={setIsOpen}>
            Join Us
          </CustomLink>
          <CustomLink href="/contact" setIsOpen={setIsOpen}>
            Contact Us
          </CustomLink>
          <hr className="mt-2 mb-4 lg:hidden" />
          <div className="relative lg:my-auto">
            <span className="border-border absolute -left-1/2 hidden h-6 translate-y-[25%] border lg:block"></span>
            <SelectTheme />
          </div>
        </div>
      </div>
    </nav>
  );
}
