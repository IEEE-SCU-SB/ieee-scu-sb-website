export default function NotFound() {
  return (
    <div className="flex items-center justify-center my-auto min-h-[91svh] p-4">
      <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100">
        404
      </h1>
      <div className="w-px h-8 md:h-12 bg-slate-300 dark:bg-slate-700 mx-4"></div>
      <p className="text-sm md:text-base text-slate-700 dark:text-slate-400">
        This page could not be found.
      </p>
    </div>
  );
}
