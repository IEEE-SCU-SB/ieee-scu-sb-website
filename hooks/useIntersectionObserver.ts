import { useState, useEffect, useRef } from "react";

type UseIntersectionObserverOptions = {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
};

/**
 * Custom hook to observe visibility of elements.
 * @param targetIds - Array of target element IDs or class names.
 * @param options - Intersection observer options.
 * @returns The currently visible target element's ID or class name.
 */
export function useIntersectionObserver(
  targetIds: string[],
  options: UseIntersectionObserverOptions = {}
): string | null {
  const [activeTarget, setActiveTarget] = useState<string | null>(null);
  const activeTargetRef = useRef<string | null>(null);

  useEffect(() => {
    // Filter valid elements from target IDs or class names
    const targets = targetIds
      .flatMap((id) => Array.from(document.querySelectorAll(`#${id}, .${id}`)))
      .filter(Boolean);

    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleTarget =
          entries.find((entry) => entry.isIntersecting)?.target.id ||
          entries.find((entry) => entry.isIntersecting)?.target.className;

        if (visibleTarget && visibleTarget !== activeTargetRef.current) {
          activeTargetRef.current = visibleTarget;
          setActiveTarget(visibleTarget);
        }
      },
      {
        root: options.root || null,
        threshold: options.threshold ?? 0.7,
        rootMargin: options.rootMargin || "0px",
      }
    );

    targets.forEach((target) => observer.observe(target));

    return () => {
      targets.forEach((target) => observer.unobserve(target));
      observer.disconnect();
    };
  }, [targetIds, options.root, options.threshold, options.rootMargin]);

  return activeTarget;
}
