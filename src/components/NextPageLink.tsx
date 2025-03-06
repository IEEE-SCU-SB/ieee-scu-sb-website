import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface linkProps {
  children: React.ReactNode;
  href: string;
}
export default function NextPageLink({ children, href }: linkProps) {
  return (
    <Link
      href={href}
      className={`group w-fit text-xs text-primary font-medium tracking-wider flex justify-center items-center gap-2 cursor-pointer border-b border-transparent hover:border-primary`}
    >
      {children}
      <ArrowLongRightIcon className="size-4 group-hover:translate-x-1 transition" />
    </Link>
  );
}
