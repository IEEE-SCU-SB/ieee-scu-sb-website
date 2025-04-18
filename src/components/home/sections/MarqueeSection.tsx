import Marquee from "@/components/Marquee";
import { bottomMarqueeImages, topMarqueeImages } from "@/data/MarqueeImageUrls";
import doodles from "@/assets/misc/confetti-doodles.svg";

export default function MarqueeSection() {
  return (
    <section className="relative">
      {/* ATTRIBUTION: SVG background by https://www.svgbackgrounds.com */}
      <div
        className="absolute w-full h-full bg-contain opacity-35 -z-10"
        style={{ backgroundImage: `url(${doodles.src})` }}
      ></div>
      <h2 className="text-center px-4 md:px-6 lg:px-8 xl:px-10 mb-8 lg:mb-12">
        Capturing Moments Since 2012
      </h2>
      <div className="relative grid gap-6">
        <Marquee images={topMarqueeImages} scrollDirection={"right"} />
        <Marquee images={bottomMarqueeImages} scrollDirection={"left"} />
      </div>
    </section>
  );
}
