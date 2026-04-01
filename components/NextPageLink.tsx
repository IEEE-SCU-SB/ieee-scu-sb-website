import Link from "next/link";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

interface linkProps {
  children: React.ReactNode;
  href: string;
}
export default function NextPageLink({ children, href }: linkProps) {
  return (
    <Link
      href={href}
      className={`group text-primary hover:border-primary flex w-fit cursor-pointer items-center justify-center gap-2 border-b border-transparent text-xs font-medium tracking-wider`}
    >
      {children}
      <ArrowLongRightIcon className="size-4 transition group-hover:translate-x-1" />
    </Link>
  );
}
