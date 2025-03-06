import ResourceLink from "../partials/ResourceLink";

function IntroSection() {
  return (
    <section className="px-4 md:px-6 lg:px-8 xl:px-10">
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
      <p className="max-w-3xl mx-auto text-center">
        The world&apos;s largest technical professional organization, uniting
        over 400,000 members globally to advance technology for humanity.
      </p>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto mt-10">
        <ResourceLink
          href={"https://www.ieee.org"}
          title={"IEEE.org"}
          description={"Explore IEEE's global initiatives and impact."}
        />
        <ResourceLink
          href={"https://www.ieee.org/membership/index.html"}
          title={"Membership & Benefits"}
          description={
            "Join a community that fosters innovation and leadership."
          }
        />
        <ResourceLink
          href={"https://ieeexplore.ieee.org"}
          title={"IEEE Xplore Digital Library"}
          description={"Access cutting-edge research and publications."}
        />
        <ResourceLink
          href={"https://standards.ieee.org"}
          title={"IEEE Standards"}
          description={"Learn how IEEE sets global technological standards."}
        />
        <ResourceLink
          href={"https://spectrum.ieee.org"}
          title={"IEEE Spectrum"}
          description={
            "Stay updated with the latest tech trends, innovations, and expert analysis."
          }
        />
      </div>
    </section>
  );
}

export default IntroSection;
