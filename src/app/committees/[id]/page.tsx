import Image from "next/image";
import Link from "next/link";
import { committees } from "@/data/committees";
import { board } from "@/data/board";
import BoardCard from "@/components/committees/BoardCard";
import NotFound from "@/app/not-found";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import NextPageLink from "@/components/NextPageLink";

export default async function CommitteeDetails(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const committee = committees.find((committee) => committee.id === params.id);

  if (!committee) {
    return <NotFound />;
  }

  const committeeBoard = board.find(
    (boardMembers) => boardMembers.id === committee.id
  );
  const committeeHead = committeeBoard?.head;
  const committeeVice = committeeBoard?.vice;

  return (
    <>
      <header
        className={`px-4 md:px-6 lg:px-8 xl:px-10 py-8
      bg-gradient-to-b ${
        committee.category === "non-technical"
          ? "from-purple/15"
          : "from-primary/15"
      } to-transparent`}
      >
        <Link
          href={"/committees"}
          className="group mb-8 w-fit text-slate-600 dark:text-slate-300 flex items-center gap-1 text-xs font-medium border border-slate-200 dark:border-slate-800 py-1 px-3 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800"
        >
          <ArrowLeftIcon className="size-3 stroke-2 group-hover:-translate-x-1 transition" />
          Back
        </Link>
        <div className="flex gap-6 sm:gap-8 justify-center items-center">
          <Image
            src={committee.image.src}
            alt={committee.image.alt}
            className="max-w-[6em] md:max-w-[8em]"
          />
          <div>
            <p
              className={`font-semibold capitalize text-sm ${
                committee.category == "non-technical"
                  ? "text-purple"
                  : "text-primary"
              }`}
            >
              {committee.category}
            </p>
            <h1 className="font-extrabold my-2">{committee.title}</h1>
            <p className="font-medium text-sm text-slate-600 dark:text-slate-300">
              {committee.subtitle}
            </p>
          </div>
        </div>
        <p className="dark:text-slate-300 text-center max-w-4xl mx-auto mt-12">
          {committee.description}
        </p>
      </header>

      <div aria-hidden="true">
        <hr
          className={`border-none h-[1px] my-8 max-w-3xl mx-auto bg-gradient-to-r from-transparent to-transparent ${
            committee.category === "non-technical"
              ? "via-purple"
              : "via-primary"
          }`}
        />
      </div>

      <main>
        {/* Committee Goals */}
        <section>
          <h2 className="mb-8 text-center">Committee Goals</h2>
          <ul className="grid md:grid-cols-2 gap-y-8 gap-x-12">
            {committee.goals.map((goal, index) => (
              <li
                key={index}
                className={`border-l pl-4 ${
                  committee.category == "non-technical"
                    ? "border-purple"
                    : "border-primary"
                }`}
              >
                <h3 className="text-base font-semibold mb-2">{goal.title}</h3>
                <p className="dark:text-slate-300">{goal.description}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Committee Responsibilities */}
        <section>
          <h2 className="mb-8 text-center">Roles and Responsibilities</h2>
          <ul className="grid md:grid-cols-2 gap-8">
            {committee.roles.map((role, index) => (
              <li key={index}>
                <h3 className="text-base font-semibold mb-2">{role.role}</h3>
                <ul className="dark:text-slate-300">
                  {role.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-baseline gap-2">
                      <ArrowRightIcon
                        className={`size-3 ${
                          committee.category == "non-technical"
                            ? "text-purple"
                            : "text-primary"
                        }`}
                      />{" "}
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>

        {/* Key Activities */}
        <section>
          <h2 className="mb-8 text-center">Key Activities</h2>
          <ul className="flex justify-center gap-4 flex-wrap">
            {committee.activities.map((activity, index) => (
              <li
                key={index}
                className="p-4 shadow-sm rounded-xl max-w-sm border dark:border-slate-900 text-center"
              >
                <h3 className="text-base font-semibold mb-1">
                  {activity.title}
                </h3>
                <p className="dark:text-slate-300">{activity.description}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Committee Board */}
        <section>
          <h2 className="mb-8 text-center">Committee&apos;s Board</h2>
          <div className={committeeVice ? "grid gap-8" : ""}>
            {committeeHead && (
              <BoardCard
                category={committee.category}
                name={committeeHead.name}
                position={`${committee.title} Head`}
                bio={committeeHead.bio}
                linkedin={committeeHead.linkedin}
                mail={committeeHead.mail}
                image={{
                  src: committeeHead.image.src,
                  alt: committeeHead.image.alt,
                }}
              />
            )}
            {committeeVice && (
              <BoardCard
                category={committee.category}
                name={committeeVice.name}
                position={`${committee.title} Vice Head`}
                bio={committeeVice.bio}
                linkedin={committeeVice.linkedin}
                mail={committeeVice.mail}
                image={{
                  src: committeeVice.image.src,
                  alt: committeeVice.image.alt,
                }}
              />
            )}
          </div>
        </section>

        <div className="mx-auto">
          <NextPageLink href="/join">Interested in Joining Us?</NextPageLink>
        </div>
      </main>
    </>
  );
}

export async function generateStaticParams() {
  return committees.map((committee) => ({ id: committee.id }));
}
