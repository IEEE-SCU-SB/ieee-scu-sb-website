import Header from "@/components/Header";
import SocialMedia from "@/components/SocialMedia";
import NextPageLink from "@/components/NextPageLink";
import { branchContacts, socialMediaLinks } from "@/data/branchContacts";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";
import GoogleMap from "@/components/contact/GoogleMap";

export default function Contact() {
  return (
    <>
      <Header title="Contact Us"></Header>
      <main>
        <div className="grid gap-16 md:grid-cols-2 md:gap-x-[12vw]">
          {/* General Contact Details */}
          <section className="flex flex-col gap-2">
            <h2>Reach Out To Us</h2>
            <p className="dark:text-slate-300 text-sm">
              For questions about joining, events, or general information, feel
              free to contact us directly.
            </p>
            <hr className="mb-2" />
            <ul className="dark:text-slate-200 font-medium tracking-wide">
              <li>
                <EnvelopeIcon className="size-4 inline mr-2" />
                {branchContacts.mail}
              </li>
              <li>
                <PhoneIcon className="size-4 inline mr-2" />
                {branchContacts.phoneNumber}
              </li>
            </ul>
          </section>

          {/* PR Contact Details */}
          <section className="flex flex-col gap-2">
            <h2>Collaborate With Us</h2>
            <p className="dark:text-slate-300 text-sm">
              For partnerships and collaborations, please reach out to our PR
              team.
            </p>
            <hr className="mb-2" />
            <ul className="dark:text-slate-200 font-medium tracking-wide">
              <li>
                <EnvelopeIcon className="size-4 inline mr-2" />
                {branchContacts.prMail}
              </li>
              <li>
                <PhoneIcon className="size-4 inline mr-2" />
                {branchContacts.prPhoneNumber}
              </li>
            </ul>
          </section>

          {/* Social Media Platforms */}
          <section className="flex flex-col gap-2">
            <h2>Stay Connected</h2>
            <p className="dark:text-slate-300 text-sm">
              Keep up with our latest news and events by following us on social
              media.
            </p>
            <hr />
            <SocialMedia
              accent="black"
              className="m-2"
              facebook={socialMediaLinks.facebook}
              instagram={socialMediaLinks.instagram}
              linkedin={socialMediaLinks.linkedin}
              tiktok={socialMediaLinks.tiktok}
            />
          </section>

          {/* Location */}
          <section className="flex flex-col gap-2">
            <h2>Our Location</h2>
            <hr />
            <p className="dark:text-slate-200 my-1">
              <MapPinIcon className="size-4 text-primary inline mb-1" /> Faculty
              of Engineering, Suez Canal University, Ismailia, Egypt.
            </p>
            <GoogleMap />
          </section>
        </div>

        <div className="mx-auto">
          <NextPageLink href="/">Home Page</NextPageLink>
        </div>
      </main>
    </>
  );
}
