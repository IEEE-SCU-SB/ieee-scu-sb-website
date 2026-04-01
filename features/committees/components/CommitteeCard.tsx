import Image from "next/image";
import Link from "next/link";
import { Committee } from "@/features/committees/data/types";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

type CommitteeCardProps = Pick<Committee, "id" | "category" | "title" | "subtitle" | "image">;

export default function CommitteeCard({
  id,
  category,
  title,
  subtitle,
  image,
}: CommitteeCardProps) {
  return (
    <div
      className={`bg-background relative flex w-full max-w-md items-center gap-8 overflow-hidden rounded-xl border px-8 py-10 shadow-sm sm:max-w-lg ${
        category === "non-technical" ? "border-purple/15" : "border-primary/15"
      }`}
    >
      <div
        aria-hidden="true"
        className={`absolute inset-0 ${
          category === "non-technical"
            ? "bg-[radial-gradient(800px_circle_at_240px_140px,_rgba(151,_71,_255,_0.12),_transparent_40%)]"
            : "bg-[radial-gradient(800px_circle_at_240px_140px,_rgba(9,_117,_156,_0.12),_transparent_40%)]"
        }`}
      ></div>
      {/* Committee Info */}
      <div className="z-10 flex flex-col items-start gap-4 sm:max-w-[60%]">
        <div
          className={`text-sm font-semibold capitalize ${category === "non-technical" ? "text-purple" : "text-primary"}`}
        >
          {category}
        </div>

        <h3 className="max-w-40 uppercase sm:max-w-64">{title}</h3>
        <p className="text-slate-600 dark:text-slate-300">{subtitle}</p>

        <Link
          href={`/committees/${id}`}
          className={`btn-primary text-white ${
            category === "non-technical" ? "bg-purple" : "bg-primary"
          }`}
        >
          <span className="z-10 flex items-center gap-2">
            View Details <ArrowUpRightIcon className="mt-[1px] h-3 w-3 stroke-white" />
          </span>
        </Link>
      </div>

      {/* Committee Illustration */}
      <Image
        src={image.src}
        alt={image.alt}
        width={80}
        height={80}
        className="absolute top-5 right-5 sm:top-1/2 sm:size-40 sm:-translate-y-1/2"
      />
    </div>
  );
}
