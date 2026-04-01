import headerBg from "@/assets/misc/endless-constellation.svg";

interface HeaderProps {
  title: string;
  children?: React.ReactNode;
}

export default function Header({ title, children }: HeaderProps) {
  return (
    <header className="relative px-4 py-14 text-center md:px-6 lg:px-8 xl:px-10">
      {/* ATTRIBUTION: SVG background by https://www.svgbackgrounds.com */}
      <div
        className="before:from-background/90 before:to-background/90 after:from-background/90 after:to-background/90 absolute inset-0 -z-10 mx-auto max-w-6xl opacity-60 before:pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-r before:via-transparent after:pointer-events-none after:absolute after:inset-0 after:bg-gradient-to-b after:via-transparent dark:opacity-80"
        style={{ backgroundImage: `url(${headerBg.src})` }}
      ></div>
      <h1 className="relative">{title}</h1>
      {children}
    </header>
  );
}
