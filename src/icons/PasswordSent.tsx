import * as React from "react"

interface PasswordSentProps {
  children?: string
}

export default function PasswordSent(props: React.SVGProps<SVGSVGElement> & PasswordSentProps) {
  return (
    <div className={props.className}>
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0)">
          <path
            d="M70.0407 83.8058H13.3605C9.67251 83.8019 6.68431 80.8137 6.68036 77.1257V39.1852C6.67957 38.4206 6.81162 37.6623 7.06861 36.9419C4.41015 37.8932 2.63494 40.4101 2.63177 43.2338V81.1742C2.63573 84.8623 5.62393 87.8505 9.31194 87.8544H65.9921C68.815 87.8512 71.3328 86.076 72.284 83.4176C71.5637 83.6746 70.8053 83.8066 70.0407 83.8058Z"
            fill="#6C757D"
            fill-opacity="0.12"
          />
          <path
            d="M86.5245 27.7897C86.0311 27.1824 85.1383 27.0907 84.531 27.5841L70.0265 39.3859L64.2359 32.6045C63.7275 32.0099 62.8331 31.9395 62.2377 32.4471C61.6431 32.9556 61.5727 33.8499 62.0804 34.4453L68.77 42.2792C69.2698 42.8643 70.1443 42.9434 70.7413 42.4579L86.3197 29.7839C86.6115 29.5467 86.7973 29.2035 86.8353 28.8295C86.874 28.4555 86.7625 28.0807 86.5245 27.7897Z"
            fill="#787676"
          />
          <path
            d="M0.501222 43.3633L32.2391 70.2374C35.4827 72.9995 40.2525 72.9971 43.4937 70.2327L60.7334 55.6111C61.1264 55.2861 61.3138 54.7745 61.2252 54.2724C61.1359 53.7695 60.7832 53.3543 60.3024 53.1843C59.8209 53.0143 59.2863 53.1155 58.9004 53.45L41.6615 68.0708C39.4752 69.9361 36.2584 69.9369 34.0705 68.074L2.33257 41.1999C1.73477 40.6962 0.842031 40.7713 0.337539 41.3675C-0.167743 41.9645 -0.094204 42.8573 0.501222 43.3633Z"
            fill="#787676"
          />
          <path
            d="M74.2915 9.31152C60.6765 9.30757 49.4212 19.924 48.6304 33.5168H9.51417C4.26209 33.5224 0.00554059 37.7789 5.41379e-06 43.031V80.9714C-0.00236681 83.1903 0.774929 85.3395 2.19589 87.0443C2.3058 87.2562 2.4679 87.4365 2.66638 87.5678C4.45661 89.4331 6.92925 90.4864 9.51417 90.4856H66.1943C68.7761 90.4864 71.2463 89.4347 73.035 87.5741C73.1109 87.5243 73.1813 87.4666 73.2461 87.4033C73.3521 87.2989 73.4406 87.1795 73.5094 87.0475C74.932 85.3427 75.7108 83.1918 75.7085 80.9714V60.6898C89.2277 59.9512 99.9999 48.7212 99.9999 35.02C99.9841 20.8286 88.4836 9.32734 74.2915 9.31152ZM72.8745 80.9714C72.876 82.0896 72.5945 83.1903 72.0568 84.1716L55.0259 66.8433C54.4756 66.2961 53.5868 66.293 53.0332 66.837C52.4797 67.3818 52.4671 68.2698 53.0048 68.8297L70.1939 86.3184C69.041 87.1851 67.6366 87.6532 66.1943 87.6516H9.51417C8.06791 87.6532 6.66119 87.1827 5.50592 86.3121L22.6009 68.8273C22.963 68.4667 23.103 67.9393 22.967 67.4474C22.8318 66.9548 22.442 66.5737 21.9462 66.4487C21.4512 66.3246 20.9269 66.4764 20.575 66.8465L3.6461 84.1613C3.11156 83.1831 2.83243 82.0856 2.83401 80.9714V43.031C2.83797 39.343 5.82617 36.3548 9.51417 36.3508H48.6178C49.297 49.47 59.7577 59.9663 72.8745 60.6906V80.9714ZM74.2915 57.8945C61.6586 57.8945 51.417 47.6529 51.417 35.02C51.417 22.3872 61.6586 12.1455 74.2915 12.1455C86.9243 12.1455 97.1659 22.3872 97.1659 35.02C97.1659 47.6529 86.9243 57.8945 74.2915 57.8945Z"
            fill="#4D65F1"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="100" height="100" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}
