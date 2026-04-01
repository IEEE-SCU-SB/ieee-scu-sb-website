import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

type ResourceLinkProps = {
  href: string;
  title: string;
  description: string;
};

export default function ResourceLink({ href, title, description }: ResourceLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-primary bg-opacity-5 border-primary border-opacity-20 hover:bg-opacity-10 block rounded-lg border p-4 transition"
    >
      <h3 className="text-primary-muted mb-2 flex items-center gap-2 text-base font-medium">
        {title}{" "}
        <ArrowUpRightIcon className="stroke-primary mt-[1px] size-3 transition group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
      </h3>
      <p className="max-w-xs text-sm text-slate-600 dark:text-slate-300">{description}</p>
    </a>
  );
}
