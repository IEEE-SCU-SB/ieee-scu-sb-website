export default function NotFound() {
  return (
    <div className="my-auto flex min-h-[91svh] items-center justify-center p-4">
      <h1 className="text-2xl font-bold text-slate-900 md:text-3xl dark:text-slate-100">404</h1>
      <div className="mx-4 h-8 w-px bg-slate-300 md:h-12 dark:bg-slate-700"></div>
      <p className="text-sm text-slate-700 md:text-base dark:text-slate-400">
        This page could not be found.
      </p>
    </div>
  );
}
