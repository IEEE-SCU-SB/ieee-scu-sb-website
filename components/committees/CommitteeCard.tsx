import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { Committee } from "@/data/types";

type CommitteeCardProps = Pick<
  Committee,
  "id" | "category" | "title" | "subtitle" | "image"
>;

export default function CommitteeCard({
  id,
  category,
  title,
  subtitle,
  image,
}: CommitteeCardProps) {
  return (
    <div
      className={`relative flex items-center bg-background shadow-sm py-10 px-8 rounded-xl overflow-hidden w-full max-w-md sm:max-w-lg gap-8 border ${
        category === "non-technical"
          ? "border-purple/15"
          : "border-primary/15"
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
      <div className="flex flex-col gap-4 items-start z-10 sm:max-w-[60%]">
        <div
          className={`text-sm font-semibold capitalize
        ${category === "non-technical" ? "text-purple" : "text-primary"}`}
        >
          {category}
        </div>

        <h3 className="uppercase max-w-40 sm:max-w-64">{title}</h3>
        <p className="text-slate-600 dark:text-slate-300">{subtitle}</p>

        <Link
          href={`/committees/${id}`}
          className={`btn-primary text-white ${
            category === "non-technical" ? "bg-purple" : "bg-primary"
          }`}
        >
          <span className="z-10 flex items-center gap-2">
            View Details{" "}
            <ArrowUpRightIcon className="w-3 h-3 mt-[1px] stroke-white" />
          </span>
        </Link>
      </div>

      {/* Committee Illustration */}
      <Image
        src={image.src}
        alt={image.alt}
        width={80}
        height={80}
        className="absolute top-5 right-5 sm:size-40 sm:top-1/2 sm:-translate-y-1/2"
      />
    </div>
  );
}
