import headerBg from "@/assets/misc/endless-constellation.svg";

interface HeaderProps {
  title: string;
  children?: React.ReactNode;
}

export default function Header({ title, children }: HeaderProps) {
  return (
    <header className="relative text-center px-4 md:px-6 lg:px-8 xl:px-10 py-14">
      {/* ATTRIBUTION: SVG background by https://www.svgbackgrounds.com */}
      <div
        className="absolute max-w-6xl mx-auto -z-10 opacity-60 dark:opacity-80 inset-0 
        before:absolute before:inset-0 before:bg-gradient-to-r before:pointer-events-none
        before:from-background/90 before:via-transparent before:to-background/90 
        after:absolute after:inset-0 after:bg-gradient-to-b after:pointer-events-none
        after:from-background/90 after:via-transparent after:to-background/90"
        style={{ backgroundImage: `url(${headerBg.src})` }}
      ></div>
      <h1 className="relative">{title}</h1>
      {children}
    </header>
  );
}
