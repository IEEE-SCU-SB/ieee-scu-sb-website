export default function MissionAndVisionSection() {
  return (
    <section className="relative flex flex-col justify-between gap-24 px-4 py-16 md:flex-row md:px-6 md:py-24 lg:px-8 xl:px-10 2xl:px-12">
      <div
        className="absolute inset-0 -z-10 opacity-40 dark:opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='199' viewBox='0 0 100 199'%3E%3Cg fill='%232d79b7' fill-opacity='1'%3E%3Cpath d='M0 199V0h1v1.99L100 199h-1.12L1 4.22V199H0zM100 2h-.12l-1-2H100v2z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E")`,
        }}
      >
        <div className="from-background/20 to-background/20 pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r via-transparent"></div>
        <div className="from-background/80 to-background/80 pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b via-transparent"></div>
      </div>
      <section className="max-w-xl">
        <h2>Our Mission</h2>
        <hr className="my-3" />
        <p className="dark:text-slate-200">
          Creating an empowering environment where students thrive, innovate, and excel through
          learning and collaboration.
        </p>
      </section>
      <section className="max-w-xl">
        <h2>Our Vision</h2>
        <hr className="my-3" />
        <p className="dark:text-slate-200">
          To be the catalyst that sparks excellence, leadership, and transformative growth in future
          innovators.
        </p>
      </section>
    </section>
  );
}
