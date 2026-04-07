import Image from "next/image";
import CloudinaryImage from "@/components/CloudinaryImage";
import NextPageLink from "@/components/NextPageLink";
import goldenQmark from "@/features/home/assets/golden-qmark.webp";
import { motm } from "@/features/home/data/motm";

export default function MotmSection() {
  const { name, committee, image, linkedin, published } = motm;

  return (
    <section id="motm" className="px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12">
      <h2 className="mb-8 flex items-center justify-center gap-2 text-center lg:mb-12">
        <span className="gold-shine">Member of the Month</span>
      </h2>
      {published && name !== "" ? (
        <div className={`mx-auto flex max-w-4xl flex-col justify-evenly gap-4 sm:flex-row`}>
          <div className="mx-auto h-52 w-full max-w-48 overflow-hidden rounded-3xl bg-gradient-to-bl from-[#b8860b] via-[#ffd700] to-[#b8860b] shadow-lg outline outline-1 outline-offset-4 outline-[#ffd700] sm:order-2 md:mx-0">
            {image && image.src !== "" && (
              <CloudinaryImage
                src={image.src.toString()}
                alt={image.alt}
                width={192}
                height={208}
                imgClassName="w-full h-full pt-4 object-cover object-top"
              />
            )}
          </div>
          <div className="flex flex-col items-center gap-4 p-3 text-center sm:items-start sm:text-left">
            <div className="">
              <div className="relative mx-auto w-fit sm:mx-0">
                {/* Crown Tag */}
                <span className="absolute -top-[6px] -left-[8px] -rotate-[25deg] md:-top-[10px] md:-left-[11px]">
                  <svg
                    className="fill-[#ffd700] md:size-5"
                    version="1.1"
                    id="_x32_"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="14px"
                    height="14px"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                  >
                    <g>
                      <path
                        className="st0"
                        d="M512,152.469c0-21.469-17.422-38.875-38.891-38.875c-21.484,0-38.906,17.406-38.906,38.875 c0,10.5,4.172,20.016,10.938 27c-26.453,54.781-77.016,73.906-116.203,56.594c-34.906-15.438-47.781-59.563-52.141-93.75 c14.234-7.484,23.938-22.391,23.938-39.594C300.734,78.016,280.719,58,256,58c-24.703,0-44.734,20.016-44.734,44.719 c0,17.203,9.703,32.109,23.938,39.594c-4.359,34.188-17.234,78.313-52.141,93.75c-39.188,17.313-89.75-1.813-116.203-56.594 c6.766-6.984,10.938-16.5,10.938-27c0-21.469-17.422-38.875-38.891-38.875C17.422,113.594,0,131,0,152.469 c0,19.781,14.781,36.078,33.875,38.547l44.828,164.078h354.594l44.828-164.078C497.234,188.547,512,172.25,512,152.469z"
                      />
                      <path
                        className="st0"
                        d="M455.016,425.063c0,15.984-12.953,28.938-28.953,28.938H85.938C69.953,454,57,441.047,57,425.063v-2.406 c0-16,12.953-28.953,28.938-28.953h340.125c16,0,28.953,12.953,28.953,28.953V425.063z"
                      />
                    </g>
                  </svg>
                </span>
                <p className="text-lg font-semibold">{name}</p>
              </div>
              <NextPageLink href={committee.link}>{committee.name}</NextPageLink>
            </div>
            <p className="max-w-[540px]">
              This month&apos;s spotlight celebrates an outstanding member whose dedication,
              innovation, and teamwork have made a lasting impact. Your exceptional contributions
              continue to inspire us all and set the standard for excellence!
            </p>
            {linkedin && (
              <a href={linkedin} target="_blank">
                <svg
                  className="fill-primary transition hover:translate-y-[2px] dark:fill-slate-200 dark:hover:fill-white"
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <g id="Page-1" stroke="none" strokeWidth="1" fillRule="evenodd">
                    <g id="Dribbble-Light-Preview" transform="translate(-180.000000, -7479.000000)">
                      <g id="icons" transform="translate(56.000000, 160.000000)">
                        <path
                          d="M144,7339 L140,7339 L140,7332.001 C140,7330.081 139.153,7329.01 137.634,7329.01 C135.981,7329.01 135,7330.126 135,7332.001 L135,7339 L131,7339 L131,7326 L135,7326 L135,7327.462 C135,7327.462 136.255,7325.26 139.083,7325.26 C141.912,7325.26 144,7326.986 144,7330.558 L144,7339 L144,7339 Z M126.442,7323.921 C125.093,7323.921 124,7322.819 124,7321.46 C124,7320.102 125.093,7319 126.442,7319 C127.79,7319 128.883,7320.102 128.883,7321.46 C128.884,7322.819 127.79,7323.921 126.442,7323.921 L126.442,7323.921 Z M124,7339 L129,7339 L129,7326 L124,7326 L124,7339 Z"
                          id="linkedin-[#161]"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>
                <span className="sr-only">Linkedin</span>
              </a>
            )}
          </div>
        </div>
      ) : (
        <div
          className={`mx-auto flex max-w-4xl flex-col items-center justify-evenly gap-8 sm:flex-row`}
        >
          <div className="mx-auto h-52 w-full max-w-48 overflow-hidden rounded-3xl border border-[#ffd700] bg-gradient-to-bl from-[#b8860b] via-[#ffd700] to-[#b8860b] shadow-lg sm:order-2 sm:mx-0">
            <Image
              src={goldenQmark}
              alt="Golden Placeholder"
              className="h-full w-full object-cover opacity-60"
              quality={100}
            />
          </div>
          <p className="my-auto max-w-sm text-center font-medium sm:text-left">
            The spotlight&apos;s waiting! Stay tuned for our next Member of the Month!
          </p>
        </div>
      )}
    </section>
  );
}
