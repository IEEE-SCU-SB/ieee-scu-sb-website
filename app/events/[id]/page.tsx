import { notFound } from "next/navigation";
import CloudinaryImage from "@/components/CloudinaryImage";
import MegaEventGallery from "@/features/events/components/MegaEventGallery";
import Header from "@/components/layout/Header";
import SocialMedia from "@/components/SocialMedia";
import { latestEvents } from "@/features/events/data/events";
import { megaEventSubEvents } from "@/features/events/data/megaEventSubEvents";
import { CalendarDaysIcon, MapPinIcon } from "@heroicons/react/24/solid";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export function generateStaticParams() {
  return latestEvents
    .filter((event) => event.megaEvent)
    .map((event) => ({
      id: event.megaEvent ? event.megaEvent.id : "", // Safe to assert due to filter
    }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const event = latestEvents.find((e) => e.megaEvent !== false && e.megaEvent.id === id);

  if (!event) {
    return {
      title: "Event Not Found",
    };
  }

  return {
    title: `${event.title} | IEEE SCU SB`,
    description: event.description,
    openGraph: {
      title: event.title,
      description: event.description,
      images: [
        {
          url: event.image.src,
          alt: event.image.alt,
        },
      ],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const event = latestEvents.find((e) => e.megaEvent !== false && e.megaEvent.id === id);
  const megaEventData = megaEventSubEvents[id];
  const subEvents = megaEventData.subEvents;
  const detailedDescription = megaEventData.description;

  if (!event) {
    notFound();
  }

  return (
    <>
      <Header title={event.title}>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-slate-700 dark:text-slate-200">
          <p className="flex items-center gap-2 font-medium">
            <CalendarDaysIcon className="size-5 text-amber-600 dark:text-[#fdb848]" />
            {event.date}
          </p>
          <p className="flex items-center gap-2 font-medium">
            <MapPinIcon className="size-5 text-amber-600 dark:text-[#fdb848]" />
            {event.location}
          </p>
        </div>
      </Header>
      <main className="gap-0 pt-2 lg:pt-16">
        <section className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex-col items-center max-lg:flex">
            <CloudinaryImage
              src={typeof event.image.src === "string" ? event.image.src : event.image.src.src}
              alt={event.image.alt}
              width={500}
              height={270}
              className="overflow-hidden rounded-xl border-[2px] border-blue-400 shadow-2xl dark:border dark:border-blue-400/50"
              imgClassName="w-full h-auto object-cover"
            />
            {event.socialMediaPostLinks && (
              <div className="pt-5 lg:pl-5">
                <SocialMedia
                  accent="black"
                  size={5}
                  facebook={event.socialMediaPostLinks.facebook}
                  instagram={event.socialMediaPostLinks.instagram}
                  linkedin={event.socialMediaPostLinks.linkedin}
                  tiktok={event.socialMediaPostLinks.tiktok}
                />
              </div>
            )}
          </div>
          <p className="place-self-start text-sm whitespace-pre-line md:text-center md:text-base lg:text-start lg:text-sm">
            {detailedDescription}
          </p>
        </section>
        <MegaEventGallery subEvents={subEvents} />
      </main>
    </>
  );
}
