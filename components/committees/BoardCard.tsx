import CloudinaryImage from "@/components/CloudinaryImage";
import { BoardMember } from "@/data/types";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

interface BoardCardProps extends BoardMember {
  category: string;
  position: string;
}
export default function BoardCard({
  category,
  name,
  position,
  bio,
  linkedin,
  mail,
  image,
}: BoardCardProps) {
  return (
    <div className="border-border mx-auto flex w-full max-w-4xl flex-col items-center justify-between gap-x-12 gap-y-4 rounded-2xl border p-6 shadow-lg sm:flex-row">
      <div
        className={`relative mx-auto aspect-square w-full max-w-44 overflow-hidden rounded-full shadow-lg sm:order-2 md:mx-0 ${
          category == "non-technical" ? "bg-purple" : "bg-primary"
        }`}
      >
        <CloudinaryImage
          src={image.src.toString()}
          alt={image.alt}
          width={240}
          height={240}
          imgClassName={`h-full w-full pt-4 object-cover transition-opacity duration-500`}
        />
      </div>
      {/* Profile */}
      <div className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-left">
        <div className="capitalize">
          <h3 className="text-lg font-semibold">{name}</h3>
          <h4
            className={`text-sm font-medium ${category == "non-technical" ? "text-purple" : "text-primary"}`}
          >
            {position}
          </h4>
        </div>
        <p className="max-w-2xl dark:text-slate-300">{bio}</p>

        {/* Contact Details */}
        <div className="items-bottom flex gap-3">
          {linkedin && (
            <a href={linkedin} target="_blank">
              <svg
                className="fill-primary mt-2 transition hover:translate-y-[2px] dark:fill-slate-300 dark:hover:fill-white"
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
          <a href={`mailto:${mail}`} title={mail}>
            <EnvelopeIcon className="fill-primary mt-2 size-[18px] transition hover:translate-y-[2px] dark:fill-slate-300 dark:hover:fill-white" />
            <span className="sr-only">Mail</span>
          </a>
        </div>
      </div>
    </div>
  );
}
