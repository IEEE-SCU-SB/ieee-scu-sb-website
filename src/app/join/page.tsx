import Image from "next/image";
import hiringIllustration from "../../public/illustrations/hiring.svg";
import { recruitment } from "@/data/recruitment";
import { socialMediaLinks } from "@/data/branchContacts";
import Header from "@/components/Header";
import SocialMedia from "@/components/SocialMedia";
import NextPageLink from "@/components/NextPageLink";

export default function Join() {
  return (
    <>
      <Header title="Join Us"></Header>
      <main>
        {recruitment.status === "open" && (
          <section className="grid md:grid-cols-2 gap-12">
            <Image
              className="mx-auto w-full max-w-xs md:max-w-md md:order-2"
              src={hiringIllustration}
              alt="We Are Hiring Illustration"
            />

            <div className="flex flex-col gap-6 justify-center max-w-2xl text-center md:text-left">
              <h2 className="uppercase">
                Recruitment is now{" "}
                <strong className="text-primary">open</strong>!
              </h2>
              <p className="md:text-lg">
                Ready to make an impact? <strong>Join us</strong> and become
                part of our dynamic team. Apply now and take the first step
                toward an exciting journey with us!
              </p>
              <button className="btn-primary bg-primary text-white">
                <span className="z-10">Apply Now!</span>
              </button>
            </div>
          </section>
        )}

        {recruitment.status !== "open" && (
          <section className="grid md:grid-cols-2 gap-12">
            <svg
              viewBox="0 0 358 405"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="m-auto md:order-2 w-full max-w-[160px] sm:max-w-[220px] md:max-w-[240px] lg:max-w-[280px]"
            >
              <rect
                x="9.49805"
                y="83.2961"
                width="308.72"
                height="324.241"
                rx="14"
                transform="rotate(-7.5 9.49805 83.2961)"
                fill="black"
              />
              <rect
                x="0.560986"
                y="78.9085"
                width="309.124"
                height="321.143"
                rx="13.5"
                transform="rotate(-7.5 0.560986 78.9085)"
                fill="url(#paint0_linear_391_1372)"
                stroke="black"
              />
              <g filter="url(#filter0_d_391_1372)">
                <path
                  d="M63.4713 224.984L45.5486 151.066L60.2034 149.137L70.5669 195.923L68.5533 148.038L82.5264 146.198L92.762 193.001L90.5355 145.144L105.361 143.192L107.052 219.247L89.0746 221.614L80.5753 186.024L81.7472 222.578L63.4713 224.984ZM119.705 217.581L109.834 142.603L139.825 138.655L141.732 153.139L126.992 155.08L128.916 169.692L143.059 167.83L144.916 181.931L130.772 183.793L133.032 200.961L148.752 198.891L150.676 213.504L119.705 217.581ZM174.064 210.425L171.435 134.493L196.868 131.145L213.853 205.186L199.667 207.054L197.009 195.095L187.978 196.284L188.633 208.506L174.064 210.425ZM187.467 184.173L194.283 183.276L185.983 145.58L185.302 145.669L187.467 184.173ZM218.454 204.58L208.583 129.602L231.588 126.574C235.422 126.069 238.435 126.568 240.626 128.071C242.814 129.545 244.442 131.816 245.51 134.882C246.603 137.917 247.428 141.55 247.985 145.781C248.524 149.871 248.428 153.206 247.699 155.787C246.998 158.364 245.275 160.31 242.53 161.625C244.951 161.798 246.753 162.759 247.937 164.51C249.146 166.229 249.945 168.566 250.334 171.519L254.069 199.892L239.286 201.838L235.422 172.486C235.134 170.299 234.502 169.01 233.526 168.618C232.574 168.194 231.105 168.113 229.117 168.375L233.62 202.584L218.454 204.58ZM227.491 155.371L231.112 154.894C233.186 154.621 233.925 152.227 233.33 147.711C232.945 144.786 232.466 142.898 231.892 142.049C231.318 141.2 230.406 140.858 229.156 141.023L225.663 141.483L227.491 155.371ZM260.033 199.107L250.162 124.129L280.153 120.18L282.06 134.664L267.32 136.605L269.244 151.217L283.387 149.355L285.244 163.456L271.1 165.318L273.36 182.486L289.08 180.417L291.004 195.029L260.033 199.107Z"
                  fill="white"
                />
              </g>
              <g filter="url(#filter1_d_391_1372)">
                <path
                  d="M88.3316 324.276C82.9071 324.99 78.3109 323.876 74.543 320.934C70.8036 317.988 68.5338 313.476 67.7337 307.399L63.1795 272.807C62.2223 265.536 62.9237 259.781 65.2837 255.54C67.672 251.297 72.1181 248.746 78.6219 247.89C82.172 247.423 85.4105 247.661 88.3373 248.605C91.2926 249.545 93.7375 251.217 95.6719 253.62C97.6026 255.995 98.8278 259.156 99.3475 263.104L101.053 276.055L86.1421 278.018L84.6839 266.942C84.3885 264.698 83.9063 263.23 83.2374 262.538C82.5647 261.818 81.6319 261.536 80.4391 261.693C79.0474 261.876 78.1775 262.511 77.8293 263.597C77.4773 264.654 77.4117 266.021 77.6323 267.697L82.5734 305.228C82.8464 307.302 83.3371 308.725 84.0457 309.498C84.7827 310.268 85.7192 310.578 86.8552 310.429C88.1333 310.26 88.9587 309.617 89.3316 308.499C89.7329 307.377 89.8232 305.978 89.6026 304.303L87.8247 290.798L102.905 288.813L104.773 302.999C105.641 309.588 104.609 314.592 101.679 318.012C98.7449 321.403 94.2958 323.491 88.3316 324.276ZM112.184 320.443L102.313 245.465L117.308 243.49L125.497 305.688L140.918 303.658L142.601 316.438L112.184 320.443ZM164.843 314.203C158.851 314.992 154.027 313.793 150.371 310.605C146.74 307.384 144.474 302.352 143.573 295.507L138.884 259.893C138.039 253.474 138.96 248.398 141.646 244.664C144.361 240.926 148.743 238.659 154.793 237.862C160.842 237.066 165.648 238.123 169.209 241.035C172.799 243.943 175.017 248.606 175.862 255.025L180.55 290.639C181.451 297.484 180.551 302.933 177.849 306.987C175.171 311.009 170.836 313.414 164.843 314.203ZM163.154 300.384C165.426 300.085 166.272 297.734 165.693 293.332L160.875 256.738C160.389 253.045 159.038 251.345 156.823 251.637C154.324 251.966 153.323 254.019 153.82 257.796L158.632 294.348C158.939 296.677 159.443 298.315 160.146 299.263C160.845 300.182 161.847 300.556 163.154 300.384ZM207.189 308.628C200.344 309.53 195.178 308.476 191.691 305.468C188.231 302.456 186.012 297.23 185.032 289.789L184.068 282.462L198.893 280.51L200.127 289.882C200.355 291.615 200.79 292.944 201.432 293.871C202.099 294.765 203.085 295.127 204.392 294.955C205.755 294.775 206.64 294.254 207.046 293.392C207.481 292.525 207.579 291.184 207.34 289.366C207.037 287.065 206.557 285.178 205.901 283.704C205.241 282.202 204.251 280.83 202.932 279.588C201.638 278.314 199.873 276.87 197.638 275.258L190.066 269.754C184.414 265.672 181.187 260.579 180.383 254.473C179.542 248.082 180.377 243.017 182.89 239.277C185.431 235.533 189.513 233.291 195.136 232.551C202.009 231.646 207.121 232.837 210.472 236.123C213.851 239.405 216.032 244.781 217.016 252.25L201.764 254.258L201.086 249.103C200.951 248.081 200.548 247.325 199.877 246.835C199.234 246.342 198.416 246.161 197.422 246.292C196.229 246.449 195.393 246.906 194.915 247.662C194.462 248.386 194.304 249.274 194.442 250.325C194.581 251.376 195.014 252.474 195.743 253.621C196.472 254.767 197.779 256.025 199.664 257.395L209.405 264.564C211.355 265.983 213.175 267.52 214.867 269.176C216.554 270.802 217.999 272.779 219.201 275.106C220.399 277.404 221.228 280.3 221.688 283.793C222.616 290.836 222.036 296.532 219.951 300.881C217.89 305.197 213.636 307.78 207.189 308.628ZM229.592 304.986L219.721 230.008L249.713 226.059L251.62 240.544L236.88 242.484L238.803 257.096L252.947 255.234L254.803 269.335L240.66 271.197L242.92 288.366L258.64 286.296L260.564 300.908L229.592 304.986ZM265.548 300.252L255.677 225.274L276.296 222.559C281.692 221.849 285.951 222.82 289.074 225.471C292.193 228.094 294.132 232.288 294.891 238.054L299.513 273.157C300.448 280.257 299.92 285.903 297.929 290.095C295.966 294.283 291.875 296.786 285.656 297.605L265.548 300.252ZM278.884 285.018L281.483 284.675C284.238 284.313 285.44 282.797 285.088 280.127L279.996 241.445C279.667 238.946 279.115 237.386 278.339 236.766C277.589 236.113 276.191 235.922 274.146 236.191L272.485 236.41L278.884 285.018Z"
                  fill="white"
                />
              </g>
              <circle
                cx="292.627"
                cy="54.5"
                r="5.5"
                fill="white"
                stroke="black"
                strokeWidth="2"
              />
              <rect x="292.127" width="1" height="55" rx="0.5" fill="black" />
              <defs>
                <filter
                  id="filter0_d_391_1372"
                  x="45.5488"
                  y="120.051"
                  width="249.455"
                  height="109.993"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="4" dy="4" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.35 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_391_1372"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_391_1372"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter1_d_391_1372"
                  x="60.2183"
                  y="219.735"
                  width="246.312"
                  height="110.919"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="4" dy="4" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.35 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_391_1372"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_391_1372"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_391_1372"
                  x1="295.427"
                  y1="386.698"
                  x2="115.499"
                  y2="94.7145"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#0A365A" />
                  <stop offset="1" stopColor="#286CA4" />
                </linearGradient>
              </defs>
            </svg>

            <div className="flex flex-col justify-center gap-6 max-w-2xl text-center md:text-left">
              <h2 className="uppercase">
                Recruitment is <strong className="text-primary">Closed</strong>{" "}
                at the moment!
              </h2>
              <p className="md:text-lg">
                Stay tuned for updates—we&apos;ll be back soon with exciting
                opportunities!
              </p>
              <p className="md:text-lg">
                Follow us on social media so you don&apos;t miss out!
              </p>
              <SocialMedia
                accent="black"
                className="mx-auto md:mx-0"
                facebook={socialMediaLinks.facebook}
                instagram={socialMediaLinks.instagram}
                linkedin={socialMediaLinks.linkedin}
                tiktok={socialMediaLinks.tiktok}
              />
            </div>
          </section>
        )}

        <div className="mx-auto">
          <NextPageLink href="/contact">Contact Us</NextPageLink>
        </div>
      </main>
    </>
  );
}
