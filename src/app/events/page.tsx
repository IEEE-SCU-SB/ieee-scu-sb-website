import { upcomingEvents, latestEvents } from "@/data/events";
import Header from "@/components/Header";
import LatestEventCard from "@/components/events/LatestEventCard";
import UpcomingEventCard from "@/components/events/UpcomingEventCard";
import NextPageLink from "@/components/NextPageLink";
import Image from "next/image";
import zzCalendar from "@/public/illustrations/zz-calendar.svg";

export default function Events() {
  return (
    <>
      <Header title="Our Events">
        <p className="mt-4 max-w-3xl mx-auto text-slate-800 dark:text-slate-200">
          Discover our upcoming and past events, from workshops to competitions.
          Stay informed and never miss an opportunity to learn and grow.
        </p>
      </Header>
      <main>
        <section>
          <h2 className="text-center mb-8">Upcoming Events</h2>
          {upcomingEvents && upcomingEvents.length != 0 && (
            <div className="flex flex-col gap-8">
              {upcomingEvents.map((event, index) => (
                <UpcomingEventCard
                  key={index}
                  category={event.category}
                  title={event.title}
                  date={event.date}
                  location={event.location}
                  description={event.description}
                  benefits={event.benefits}
                  image={event.image}
                  RegistrationLink={event.RegistrationLink}
                  socialMediaPostLinks={event.socialMediaPostLinks}
                />
              ))}
            </div>
          )}
          {!upcomingEvents ||
            (upcomingEvents.length == 0 && (
              <div className="flex flex-col justify-center items-center gap-8">
                <Image
                  src={zzCalendar}
                  alt=""
                  className="w-32 md:w-44 lg:w-56"
                />
                <p className="text-center text-slate-500 dark:text-slate-300">
                  No upcoming events for now, stay tuned for more updates!
                </p>
              </div>
            ))}
        </section>

        <section>
          <h2 className="text-center mb-8">Latest Events</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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
