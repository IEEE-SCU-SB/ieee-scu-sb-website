import GoogleMap from "@/features/contact/components/GoogleMap";
import Header from "@/components/layout/Header";
import NextPageLink from "@/components/NextPageLink";
import SocialMedia from "@/components/SocialMedia";
import { branchContacts, socialMediaLinks } from "@/features/contact/data/branchContacts";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";

export default function Contact() {
  return (
    <>
      <Header title="Contact Us"></Header>
      <main>
        <div className="grid gap-16 md:grid-cols-2 md:gap-x-[12vw]">
          {/* General Contact Details */}
          <section className="flex flex-col gap-2">
            <h2>Reach Out To Us</h2>
            <p className="text-sm dark:text-slate-300">
              For questions about joining, events, or general information, feel free to contact us
              directly.
            </p>
            <hr className="mb-2" />
            <ul className="font-medium tracking-wide dark:text-slate-200">
              <li>
                <EnvelopeIcon className="mr-2 inline size-4" />
                {branchContacts.mail}
              </li>
              <li>
                <PhoneIcon className="mr-2 inline size-4" />
                {branchContacts.phoneNumber}
              </li>
            </ul>
          </section>

          {/* PR Contact Details */}
          <section className="flex flex-col gap-2">
            <h2>Collaborate With Us</h2>
            <p className="text-sm dark:text-slate-300">
              For partnerships and collaborations, please reach out to our PR team.
            </p>
            <hr className="mb-2" />
            <ul className="font-medium tracking-wide dark:text-slate-200">
              <li>
                <EnvelopeIcon className="mr-2 inline size-4" />
                {branchContacts.prMail}
              </li>
              <li>
                <PhoneIcon className="mr-2 inline size-4" />
                {branchContacts.prPhoneNumber}
              </li>
            </ul>
          </section>

          {/* Social Media Platforms */}
          <section className="flex flex-col gap-2">
            <h2>Stay Connected</h2>
            <p className="text-sm dark:text-slate-300">
              Keep up with our latest news and events by following us on social media.
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
            <p className="my-1 dark:text-slate-200">
              <MapPinIcon className="text-primary mb-1 inline size-4" /> Faculty of Engineering,
              Suez Canal University, Ismailia, Egypt.
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
