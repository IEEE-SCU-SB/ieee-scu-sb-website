import Image from "next/image";
import LatestEventCard from "@/components/events/LatestEventCard";
import UpcomingEventCard from "@/components/events/UpcomingEventCard";
import Header from "@/components/Header";
import NextPageLink from "@/components/NextPageLink";
import zzCalendar from "@/assets/illustrations/zz-calendar.svg";
import { latestEvents, upcomingEvents } from "@/data/events";
import { UpcomingEvent } from "@/data/types";

export default function Events() {
  return (
    <>
      <Header title="Our Events">
        <p className="mx-auto mt-4 max-w-3xl text-slate-800 dark:text-slate-200">
          Discover our upcoming and past events, from workshops to competitions. Stay informed and
          never miss an opportunity to learn and grow.
        </p>
      </Header>
      <main>
        <section>
          <h2 className="mb-8 text-center">Upcoming Events</h2>
          {upcomingEvents && upcomingEvents.length != 0 && (
            <div className="flex flex-col gap-8">
              {upcomingEvents.map((event: UpcomingEvent, index) => (
                <UpcomingEventCard
                  key={index}
                  category={event.category}
                  title={event.title}
                  date={event.date}
                  time={event.time}
                  location={event.location}
                  description={event.description}
                  tags={event.tags}
                  image={event.image}
                  RegistrationLink={event.RegistrationLink}
                  socialMediaPostLinks={event.socialMediaPostLinks}
                  megaEvent={event.megaEvent}
                />
              ))}
            </div>
          )}
          {!upcomingEvents ||
            (upcomingEvents.length == 0 && (
              <div className="flex flex-col items-center justify-center gap-8">
                <Image src={zzCalendar} alt="" className="w-32 md:w-44 lg:w-56" />
                <p className="text-center text-slate-500 dark:text-slate-300">
                  No upcoming events for now, stay tuned for more updates!
                </p>
              </div>
            ))}
        </section>

        <section>
          <h2 className="mb-8 text-center">Latest Events</h2>
          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
            {latestEvents.map((event, index) => (
              <LatestEventCard
                key={index}
                category={event.category}
                title={event.title}
                date={event.date}
                location={event.location}
                description={event.description}
                image={event.image}
                socialMediaPostLinks={event.socialMediaPostLinks}
                megaEvent={event.megaEvent}
              />
            ))}
          </div>
        </section>

        <div className="mx-auto">
          <NextPageLink href="/about">Know More About Us</NextPageLink>
        </div>
      </main>
    </>
  );
}
