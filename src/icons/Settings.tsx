import * as React from "react"

interface SettingsProps extends React.SVGProps<SVGSVGElement> {
  className?: string
}

export const Settings = ({ className, ...props }: SettingsProps) => {
  return (
    <div className={className}>
      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.985 6.59799L15.8818 6.91603C16.5522 7.15465 17 7.7893 17 8.50092C17 9.21255 16.5522 9.8472 15.8818 10.0858L14.985 10.4053C14.7255 10.4976 14.5173 10.6956 14.412 10.9501C14.3067 11.2046 14.3141 11.4918 14.4325 11.7405L14.8405 12.5997C15.1455 13.2426 15.0131 14.0079 14.51 14.511C14.0068 15.0142 13.2416 15.1465 12.5986 14.8416L11.7394 14.4336C11.4907 14.3152 11.2035 14.3077 10.949 14.4131C10.6945 14.5184 10.4966 14.7266 10.4042 14.9861L10.0855 15.8828C9.84649 16.5531 9.21181 17.0006 8.50022 17.0006C7.78864 17.0006 7.15395 16.5531 6.91497 15.8828L6.59622 14.9868C6.50422 14.727 6.30633 14.5185 6.05174 14.413C5.79716 14.3075 5.50977 14.315 5.26101 14.4336L4.4018 14.8416C3.75888 15.1465 2.99365 15.0142 2.49048 14.511C1.98732 14.0079 1.85498 13.2426 2.15993 12.5997L2.56793 11.7405C2.6863 11.4918 2.69376 11.2046 2.58845 10.9501C2.48314 10.6956 2.27492 10.4976 2.01543 10.4053L1.11868 10.0865C0.448251 9.84791 0.000488281 9.21326 0.000488281 8.50163C0.000488281 7.79 0.448251 7.15536 1.11868 6.91674L2.01543 6.59799C2.27497 6.50549 2.48318 6.30739 2.58848 6.05278C2.69378 5.79817 2.68632 5.51087 2.56793 5.26207L2.15993 4.40286C1.85498 3.75994 1.98732 2.9947 2.49048 2.49154C2.99365 1.98838 3.75888 1.85603 4.4018 2.16099L5.26101 2.56969C5.50983 2.6878 5.79702 2.69504 6.05148 2.58962C6.30593 2.48419 6.50385 2.27596 6.59622 2.01649L6.91497 1.11974C7.15395 0.44948 7.78864 0.00195312 8.50022 0.00195312C9.21181 0.00195312 9.84649 0.44948 10.0855 1.11974L10.4042 2.01578C10.4964 2.27538 10.6943 2.48378 10.9488 2.58935C11.2032 2.69492 11.4905 2.68777 11.7394 2.56969L12.5986 2.16099C13.2416 1.85603 14.0068 1.98838 14.51 2.49154C15.0131 2.9947 15.1455 3.75994 14.8405 4.40286L14.4325 5.26207C14.3139 5.51084 14.3063 5.79823 14.4116 6.05291C14.517 6.30759 14.7253 6.50567 14.985 6.59799ZM5.35439 9.80405C5.90468 11.0547 7.13386 11.8696 8.5001 11.8894C8.94667 11.8986 9.39034 11.8156 9.80343 11.6457C11.5387 10.9239 12.3625 8.9338 11.6451 7.19667C10.9072 5.47751 8.93312 4.66033 7.19606 5.35501C5.46078 6.07686 4.637 8.06692 5.35439 9.80405Z"
          fill="white"
        />
      </svg>
    </div>
  )
}
