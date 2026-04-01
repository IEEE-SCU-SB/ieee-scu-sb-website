"use client"
import { useEffect, useState } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * InteractiveGridPattern is a component that renders a grid pattern with interactive squares.
 *
 * @param width - The width of each square.
 * @param height - The height of each square.
 * @param squares - The number of squares in the grid. The first element is the number of horizontal squares, and the second element is the number of vertical squares.
 * @param className - The class name of the grid.
 * @param squaresClassName - The class name of the squares.
 */
interface InteractiveGridPatternProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  squares?: [number, number]; // [horizontal, vertical]
  className?: string;
  squaresClassName?: string;
}

/**
 * The InteractiveGridPattern component.
 *
 * @see InteractiveGridPatternProps for the props interface.
 * @returns A React component.
 */
export default function InteractiveGridPattern({
  width = 46,
  height = 46,
  squares = [24, 24],
  className,
  squaresClassName,
  ...props
}: InteractiveGridPatternProps) {
  const [horizontal, vertical] = squares;
  const [hoveredSquare, setHoveredSquare] = useState<number | null>(null);
  const totalSquares = horizontal * vertical;
  const [activeSquare, setActiveSquare] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSquare(Math.floor(Math.random() * totalSquares));
    }, 500); // animates every 0.5s
    return () => clearInterval(interval);
  }, [totalSquares]);

  return (
    <svg
      width={width * horizontal}
      height={height * vertical}
      className={cn(
        "absolute inset-0 w-full h-full xl:h-fit xl:w-fit m-auto [mask-image:radial-gradient(max(45vw,300px)_circle_at_center,white,transparent)]",
        className
      )}
      {...props}
    >
      {Array.from({ length: totalSquares }).map((_, index) => {
        const x = (index % horizontal) * width;
        const y = Math.floor(index / horizontal) * height;
        return (
          <rect
            key={index}
            x={x}
            y={y}
            width={width}
            height={height}
            className={cn(
              "stroke-slate-600/10 dark:stroke-primary/10 transition-all duration-100 ease-in-out [&:not(:hover)]:duration-1000 m-auto",
              hoveredSquare === index || activeSquare === index ? "fill-primary/75" : "fill-transparent",
              squaresClassName
            )}
            onMouseEnter={() => setHoveredSquare(index)}
            onMouseLeave={() => setHoveredSquare(null)}
          />
        );
      })}
    </svg>
  );
}
