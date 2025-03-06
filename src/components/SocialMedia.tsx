interface SocialMediaProps {
  accent: "white" | "black";
  size?: number;
  className?: string;
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  tiktok?: string;
}
export default function SocialMedia({
  accent,
  size,
  className,
  facebook,
  instagram,
  linkedin,
  tiktok,
}: SocialMediaProps) {
  const svgStyles = `${
    accent == "white" ? "fill-white" : "fill-black hover:fill-primary"
  } hover:translate-y-[2px] transition dark:fill-slate-300 dark:hover:fill-white ${
    size ? `size-${size}` : "size-5"
  }`;

  return (
    <ul className={`flex gap-5 items-center ${className}`}>
      {facebook && (
        <li title="Facebook">
          <a href={facebook} target="_blank">
            <svg
              className={svgStyles}
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_112_2463)">
                <mask
                  id="mask0_112_2463"
                  style={{ maskType: "luminance" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="34"
                  height="34"
                >
                  <path d="M34 0H0V34H34V0Z" fill="white" />
                </mask>
                <g mask="url(#mask0_112_2463)">
                  <path d="M34 17C34 7.60856 26.3851 0 17 0C7.60856 0 0 7.60856 0 17C0 25.483 6.21456 32.5167 14.3438 33.7906V21.9151H10.0268V17.001H14.3438V13.2536C14.3438 8.99406 16.8779 6.64169 20.7624 6.64169C22.6227 6.64169 24.5704 6.97319 24.5704 6.97319V11.1562H22.423C20.315 11.1562 19.6562 12.4684 19.6562 13.8125V17H24.3706L23.613 21.9141H19.6562V33.7896C27.779 32.5158 34 25.483 34 17Z" />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_112_2463">
                  <rect width="34" height="34" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <span className="sr-only">Facebook</span>
          </a>
        </li>
      )}

      {instagram && (
        <li title="Instagram">
          <a href={instagram} target="_blank">
            <svg
              className={svgStyles}
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 169.063 169.063"
              xmlSpace="preserve"
            >
              <g>
                <path d="M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752 c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z M154.063,122.407 c0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752 c17.455,0,31.656,14.201,31.656,31.655V122.407z" />
                <path d="M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561 C128.094,60.512,108.552,40.97,84.531,40.97z M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561 c0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z" />
                <path d="M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78 c2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78 C135.661,29.421,132.821,28.251,129.921,28.251z" />
              </g>
            </svg>
            <span className="sr-only">Instagram</span>
          </a>
        </li>
      )}

      {linkedin && (
        <li title="LinkedIn">
          <a href={linkedin} target="_blank">
            <svg
              className={svgStyles}
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
        </li>
      )}

      {tiktok && (
        <li title="TikTok">
          <a href={tiktok} target="_blank">
            <svg
              className={svgStyles}
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.656 1.029c1.637-0.025 3.262-0.012 4.886-0.025 0.054 2.031 0.878 3.859 2.189 5.213l-0.002-0.002c1.411 1.271 3.247 2.095 5.271 2.235l0.028 0.002v5.036c-1.912-0.048-3.71-0.489-5.331-1.247l0.082 0.034c-0.784-0.377-1.447-0.764-2.077-1.196l0.052 0.034c-0.012 3.649 0.012 7.298-0.025 10.934-0.103 1.853-0.719 3.543-1.707 4.954l0.020-0.031c-1.652 2.366-4.328 3.919-7.371 4.011l-0.014 0c-0.123 0.006-0.268 0.009-0.414 0.009-1.73 0-3.347-0.482-4.725-1.319l0.040 0.023c-2.508-1.509-4.238-4.091-4.558-7.094l-0.004-0.041c-0.025-0.625-0.037-1.25-0.012-1.862 0.49-4.779 4.494-8.476 9.361-8.476 0.547 0 1.083 0.047 1.604 0.136l-0.056-0.008c0.025 1.849-0.050 3.699-0.050 5.548-0.423-0.153-0.911-0.242-1.42-0.242-1.868 0-3.457 1.194-4.045 2.861l-0.009 0.030c-0.133 0.427-0.21 0.918-0.21 1.426 0 0.206 0.013 0.41 0.037 0.61l-0.002-0.024c0.332 2.046 2.086 3.59 4.201 3.59 0.061 0 0.121-0.001 0.181-0.004l-0.009 0c1.463-0.044 2.733-0.831 3.451-1.994l0.010-0.018c0.267-0.372 0.45-0.822 0.511-1.311l0.001-0.014c0.125-2.237 0.075-4.461 0.087-6.698 0.012-5.036-0.012-10.060 0.025-15.083z"></path>
            </svg>
            <span className="sr-only">Tiktok</span>
          </a>
        </li>
      )}
    </ul>
  );
}
