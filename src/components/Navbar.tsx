"use client";
import { useState, useEffect, useRef, ReactNode } from "react";
import { usePathname } from "next/navigation";
import SelectTheme from "./SelectTheme";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logos/logo.webp";
import logoWhite from "@/assets/logos/logo-white.webp";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";

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
      className={`relative dark:text-slate-300 hover:text-primary dark:hover:text-white py-3 lg:py-5
        after:content-[""] lg:after:absolute lg:after:inset-x-0 lg:after:bottom-[-1px] lg:after:h-[2px] lg:after:bg-primary dark:lg:after:bg-white lg:after:scale-x-0 lg:after:transition lg:after:ease-linear lg:after:rounded-sm lg:hover:after:scale-x-100
        ${
          pathname === href ? "text-primary dark:text-white lg:after:scale-x-100" : ""
        } ${className}`}
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
      className={`flex justify-between items-center py-3 lg:py-0 top-0 border-b font-medium bg-background z-40 transition-all duration-700
        ${pathname === "/" ? "fixed w-full" : "sticky"}
        ${
          pathname === "/" && !showNavbar
            ? "bg-opacity-40 dark:bg-opacity-0 border-transparent py-7 px-7 lg:-translate-y-full lg:invisible"
            : "bg-opacity-100 dark:bg-opacity-100 border-border lg:-translate-y-0"
        }
      `}
    >
      <Link href={"/"}>
        <Image
          src={logo}
          alt="logo"
          width={75}
          unoptimized
          quality={100}
          className="lg:w-[85px] dark:hidden"
        />
        <Image
          src={logoWhite}
          alt="logo"
          width={75}
          unoptimized
          quality={100}
          className="lg:w-[85px] hidden dark:block"
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
          className={`fixed top-0 right-0 h-screen w-[70%] max-w-[280px] flex flex-col p-6 lg:p-0 bg-background border-l border-border transition duration-300 lg:static lg:translate-x-0 lg:w-full lg:max-w-none lg:h-fit lg:flex-row lg:gap-[3vw] lg:border-none lg:bg-transparent lg:dark:bg-transparent
          ${isOpen ? "translate-x-0" : "translate-x-[105%]"}`}
        >
          <button
            className="lg:hidden mb-3 ml-auto"
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation"
          >
            <XMarkIcon className="size-7 text-bgDark dark:text-white" />
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
            <span className="hidden lg:block absolute translate-y-[25%] -left-1/2 h-6 border border-border"></span>
            <SelectTheme />
          </div>
        </div>
      </div>
    </nav>
  );
}
