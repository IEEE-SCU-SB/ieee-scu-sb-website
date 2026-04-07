"use client";

import { useEffect, useRef, useState } from "react";
import { CldImage } from "next-cloudinary";
import ImageSkeleton from "@/components/ImageSkeleton";
import { ImageType } from "@/lib/types";

interface MarqueeProps {
  images: ImageType[];
  scrollDirection: "left" | "right";
}

export default function Marquee({ images, scrollDirection }: MarqueeProps) {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [loadedImages, setLoadedImages] = useState<boolean[]>([]);

  useEffect(() => {
    setLoadedImages(new Array(images.length * 2).fill(false));
  }, [images]);

  useEffect(() => {
    const marquee = marqueeRef.current;

    if (!marquee) return;

    const autoScroll = () => {
      if (scrollDirection === "right") {
        marquee.scrollLeft += 1;
        if (marquee.scrollLeft >= marquee.scrollWidth / 2) {
          marquee.scrollLeft = 0;
        }
      } else if (scrollDirection === "left") {
        marquee.scrollLeft -= 1;
        if (marquee.scrollLeft <= 0) {
          marquee.scrollLeft = marquee.scrollWidth / 2;
        }
      }
    };

    const interval =
      scrollDirection == "left" ? setInterval(autoScroll, 30) : setInterval(autoScroll, 15);

    return () => {
      clearInterval(interval);
    };
  }, [scrollDirection]);

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
  };

  return (
    <div ref={marqueeRef} className="no-scrollbar overflow-x-auto overflow-y-hidden">
      <div className="flex h-[22vh] divide-x-[24px] divide-transparent md:h-[14em]">
        {images.concat(images).map((img, index) => (
          <div key={index} className="relative flex-shrink-0">
            {!loadedImages[index] && <ImageSkeleton />}
            <CldImage
              src={img.src.toString()}
              alt={img.alt}
              width={300}
              height={200}
              sizes="100%"
              className={`h-full w-auto object-cover transition-opacity duration-500 ${
                loadedImages[index] ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => handleImageLoad(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
