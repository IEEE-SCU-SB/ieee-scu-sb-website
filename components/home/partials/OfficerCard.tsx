import type { Officer } from "@/data/types";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function OfficerCard({
  name,
  position,
  image,
  linkedin,
  mail,
}: Officer) {
  return (
    <div className={`officer-card flex flex-col items-center w-44`}>
      {/* Image */}
      <div className="w-full h-48 mx-auto md:mx-0 bg-gradient-to-bl from-slate-900 via-primary to-slate-900 rounded-3xl shadow-lg overflow-hidden">
        <Image
          src={image.src}
          alt={image.alt}
          className="w-full h-full pt-2 object-cover object-top"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1 items-center py-3 text-center">
        {/* Name & Position */}
        <div>
          <p className="text-lg font-semibold leading-tight">{name}</p>
          <p className="font-medium text-sm">{position}</p>
        </div>

        {/* Contact Details */}
        <div className="flex gap-2 items-bottom">
          <a href={linkedin} target="_blank">
            <svg
              className="fill-primary dark:fill-slate-300 mt-2 hover:translate-y-[2px] dark:hover:fill-white transition"
              width="16"
              height="16"
              viewBox="0 0 20 20"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <g id="Page-1" stroke="none" strokeWidth="1" fillRule="evenodd">
                <g
                  id="Dribbble-Light-Preview"
                  transform="translate(-180.000000, -7479.000000)"
                >
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
          <a href={`mailto:${mail}`} title={mail}>
            <EnvelopeIcon className="size-[18px] fill-primary dark:fill-slate-300 mt-2 hover:translate-y-[2px] dark:hover:fill-white transition" />
            <span className="sr-only">Mail</span>
          </a>
        </div>
      </div>
    </div>
  );
}
