import Image from "next/image";
import Link from "next/link";
import SocialMedia from "@/components/SocialMedia";
import logoWhite from "@/assets/logos/logo-white.webp";
import logo from "@/assets/logos/logo.webp";
import { branchContacts, socialMediaLinks } from "@/features/contact/data/branchContacts";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";

export default function Footer() {
  const links = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/events" },
    { name: "About Us", href: "/about" },
    { name: "Committees", href: "/committees" },
    { name: "Join Us", href: "/join" },
    { name: "Contact Us", href: "/contact" },
    { name: "Developers", href: "/developers" },
  ];
  return (
    <footer className="bg-background border-border relative z-10 mt-auto border-t py-8 dark:text-slate-200">
      <div className="flex flex-col justify-between gap-8 text-sm font-medium md:flex-row md:items-center">
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

        <div className="place-items-between grid grid-cols-2 gap-x-8 gap-y-3 md:gap-x-14">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="transition ease-linear hover:translate-x-2 dark:hover:text-white"
            >
              <span className="relative pb-1 before:absolute before:bottom-0 before:h-[1px] before:w-full before:origin-left before:scale-x-0 before:bg-black before:transition before:ease-linear before:content-[''] hover:before:scale-x-100 dark:before:bg-slate-200">
                {link.name}
              </span>
            </Link>
          ))}
        </div>

        <hr className="opacity-40 md:hidden dark:opacity-60" />

        <div className="grid gap-4">
          <ul className="grid gap-3">
            <li className="flex items-center gap-2">
              <EnvelopeIcon className="size-4" /> {branchContacts.mail}
            </li>
            <li className="flex items-center gap-2">
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
