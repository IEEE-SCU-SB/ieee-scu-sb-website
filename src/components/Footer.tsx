import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logos/logo.webp";
import logoWhite from "@/assets/logos/logo-white.webp";
import SocialMedia from "./SocialMedia";
import { branchContacts, socialMediaLinks } from "@/data/branchContacts";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";

export default function Footer() {
  const links = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/events" },
    { name: "About Us", href: "/about" },
    { name: "Committees", href: "/committees" },
    { name: "Join Us", href: "/join" },
    { name: "Contact Us", href: "/contact" },
  ];
  return (
    <footer className="relative bg-background border-t border-border mt-auto py-8 dark:text-slate-200 z-10">
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-8 text-sm font-medium">
        <Image
          src={logo}
          alt="IEEE Logo"
          width={150}
          unoptimized
          quality={100}
          className="dark:hidden"
        />
        <Image
          src={logoWhite}
          alt="IEEE Logo"
          width={150}
          unoptimized
          quality={100}
          className="hidden dark:block"
        />

        <div className="grid grid-cols-2 place-items-between gap-y-3 gap-x-8 md:gap-x-14">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:translate-x-2 transition ease-linear dark:hover:text-white"
            >
              <span className="relative pb-1 before:content-[''] before:absolute before:bottom-0 before:w-full before:h-[1px] before:bg-black dark:before:bg-slate-200 before:scale-x-0 hover:before:scale-x-100 before:transition before:ease-linear before:origin-left">
                {link.name}
              </span>
            </Link>
          ))}
        </div>

        <hr className="opacity-40 dark:opacity-60 md:hidden" />

        <div className="grid gap-4">
          <ul className="grid gap-3">
            <li className="flex gap-2 items-center">
              <EnvelopeIcon className="size-4" /> {branchContacts.mail}
            </li>
            <li className="flex gap-2 items-center">
              <PhoneIcon className="size-4" /> {branchContacts.phoneNumber}
            </li>
          </ul>
          <SocialMedia
            accent="black"
            facebook={socialMediaLinks.facebook}
            instagram={socialMediaLinks.instagram}
            linkedin={socialMediaLinks.linkedin}
            tiktok={socialMediaLinks.tiktok}
          />
        </div>
      </div>
      <hr className="my-8" />
      <p className="text-xs font-medium text-slate-800 dark:text-slate-300">
        &copy; 2025 IEEE SCU SB. All rights reserved.
      </p>
    </footer>
  );
}
