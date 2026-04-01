import Marquee from "@/components/Marquee";
import doodles from "@/assets/misc/confetti-doodles.svg";
import { bottomMarqueeImages, topMarqueeImages } from "@/data/MarqueeImageUrls";

export default function MarqueeSection() {
  return (
    <section className="relative">
      {/* ATTRIBUTION: SVG background by https://www.svgbackgrounds.com */}
      <div
        className="absolute -z-10 h-full w-full bg-contain opacity-35"
        style={{ backgroundImage: `url(${doodles.src})` }}
      ></div>
      <h2 className="mb-8 px-4 text-center md:px-6 lg:mb-12 lg:px-8 xl:px-10">
        Capturing Moments Since 2012
      </h2>
      <div className="relative grid gap-6">
        <Marquee images={topMarqueeImages} scrollDirection={"right"} />
        <Marquee images={bottomMarqueeImages} scrollDirection={"left"} />
      </div>
    </section>
  );
}
