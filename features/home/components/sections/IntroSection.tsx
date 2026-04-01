import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { RESOURCES } from "../../data/resources";

function IntroSection() {
  return (
    <section className="px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
      <h2 className="mb-4 text-center">
        <span className="text-primary text-[1.25em]">I</span>
        nstitute of
        <span className="text-primary text-[1.25em]"> E</span>
        lectrical and
        <span className="text-primary text-[1.25em]"> E</span>
        lectronics
        <span className="text-primary text-[1.25em]"> E</span>
        ngineering
      </h2>
      <p className="mx-auto max-w-3xl text-center">
        The world&apos;s largest technical professional organization, uniting over 400,000 members
        globally to advance technology for humanity.
      </p>
      <div className="mx-auto mt-10 grid max-w-6xl gap-4 sm:grid-cols-2 md:grid-cols-3">
        {RESOURCES.map((resource, index) => (
          <a
            key={index}
            href={resource.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-primary/10 bg-opacity-5 border-primary/20 border-opacity-20 hover:bg-opacity-10 block rounded-lg border p-4 transition"
          >
            <h3 className="text-primary-muted mb-2 flex items-center gap-2 text-base! font-medium">
              {resource.title}{" "}
              <ArrowUpRightIcon className="stroke-primary mt-[1px] size-3 transition group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
            </h3>
            <p className="max-w-xs text-sm! text-slate-600 dark:text-slate-300">
              {resource.description}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default IntroSection;
