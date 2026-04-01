import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

type ResourceLinkProps = {
  href: string;
  title: string;
  description: string;
};

export default function ResourceLink({
  href,
  title,
  description,
}: ResourceLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-4 bg-primary bg-opacity-5 border border-primary border-opacity-20 rounded-lg hover:bg-opacity-10 transition"
    >
      <h3 className="font-medium text-primary-muted flex items-center gap-2 mb-2 text-base">
        {title} <ArrowUpRightIcon className="size-3 stroke-primary mt-[1px] group-hover:-translate-y-[2px] group-hover:translate-x-[2px] transition" />
      </h3>
      <p className="text-slate-600 dark:text-slate-300 max-w-xs text-sm">
        {description}
      </p>
    </a>
  );
}
