import * as React from "react"

interface LogoProps {
  className?: string
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <div className={className}>
      <svg width="98" height="29" viewBox="0 0 98 29" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.3555 13.1476V22.22H0V0H16.1071L15.3551 4.53618H6.3555V8.63572H15.3551V13.1476H6.3555ZM35.8528 10.7461V22.22H31.0013L30.3948 19.5274C29.6671 20.5947 28.8666 21.371 27.9933 21.8561C27.1039 22.3413 26.0365 22.5839 24.7913 22.5839C23.9019 22.5839 23.0609 22.4787 22.2685 22.2685C21.4599 22.0583 20.7484 21.7429 20.1338 21.3225C19.5193 20.902 19.0342 20.3764 18.6784 19.7457C18.3226 19.115 18.1447 18.3792 18.1447 17.5383C18.1124 16.4062 18.2741 15.4521 18.6299 14.6759C18.9856 13.9158 19.4708 13.2851 20.0853 12.7838C20.716 12.2824 21.4357 11.8943 22.2442 11.6194C23.0528 11.3445 23.9099 11.1585 24.8156 11.0615C25.705 10.9644 26.6106 10.9159 27.5324 10.9159C28.438 10.9321 29.3032 10.9644 30.128 11.013V10.9159C30.128 10.0265 29.8935 9.37153 29.4245 8.95107C28.9555 8.5306 28.3814 8.26377 27.7022 8.15056C27.0068 8.03736 26.2468 8.04545 25.422 8.17482C24.5972 8.3042 23.821 8.46591 23.0933 8.65997C22.3655 8.87021 21.7429 9.08044 21.2254 9.29067C20.7079 9.48473 20.4168 9.60602 20.3522 9.65454V5.43371C20.3683 5.41754 20.5866 5.34477 21.0071 5.21539C21.4276 5.06985 21.9532 4.91621 22.5839 4.7545C23.2146 4.60895 23.918 4.4634 24.6943 4.31786C25.4543 4.18848 26.2144 4.1238 26.9745 4.1238C27.7184 4.1238 28.5997 4.21274 29.6186 4.39063C30.6374 4.56852 31.6077 4.90004 32.5295 5.38519C33.4674 5.87035 34.2599 6.54956 34.9067 7.42284C35.5374 8.27994 35.8528 9.3877 35.8528 10.7461ZM30.0795 14.9912V14.3363C29.3356 14.3363 28.5997 14.3443 27.872 14.3605C27.1281 14.3767 26.457 14.4414 25.8586 14.5546C25.2603 14.684 24.7832 14.9023 24.4274 15.2095C24.0555 15.5168 23.8695 15.9615 23.8695 16.5437C23.8695 17.1744 24.0636 17.6676 24.4517 18.0234C24.8398 18.3792 25.2684 18.5571 25.7373 18.5571C26.368 18.5571 26.9502 18.4681 27.4839 18.2903C28.0176 18.0962 28.4785 17.8374 28.8666 17.514C29.2547 17.1906 29.5539 16.8105 29.7641 16.3739C29.9743 15.9534 30.0795 15.4925 30.0795 14.9912ZM46.5989 4.07528C47.6824 4.07528 48.7821 4.22891 49.8979 4.53618C51.03 4.82727 52.1377 5.31242 53.2212 5.99163L51.1351 9.3877C50.9572 9.2745 50.6742 9.12896 50.2861 8.95107C49.9141 8.78935 49.4937 8.63572 49.0247 8.49017C48.5557 8.34463 48.0705 8.22334 47.5692 8.12631C47.0517 8.02928 46.5908 8.00502 46.1865 8.05353C45.7822 8.10205 45.4507 8.23142 45.192 8.44166C44.9332 8.63572 44.8038 8.95915 44.8038 9.41196C44.8038 9.75157 45.0707 10.0346 45.6043 10.261C46.1218 10.4874 46.7202 10.7138 47.3994 10.9402C48.0786 11.1504 48.7821 11.4011 49.5098 11.6922C50.2376 11.9833 50.9006 12.3552 51.499 12.808C52.0973 13.2608 52.5905 13.8188 52.9787 14.4818C53.3668 15.161 53.5608 15.9858 53.5608 16.9561C53.5608 17.9587 53.3587 18.8158 52.9544 19.5274C52.5663 20.239 52.0407 20.8211 51.3777 21.2739C50.7308 21.7268 49.9626 22.0664 49.0732 22.2928C48.1837 22.5192 47.27 22.6324 46.3321 22.6324C45.006 22.6324 43.6557 22.4464 42.2811 22.0744C40.9065 21.7187 39.6693 21.0799 38.5696 20.1581L40.68 16.5437C40.9388 16.8186 41.2865 17.0774 41.7231 17.3199C42.1598 17.5787 42.6368 17.797 43.1543 17.9749C43.6556 18.1528 44.1812 18.2903 44.7311 18.3873C45.2647 18.4681 45.7499 18.4924 46.1865 18.4601C46.6232 18.4115 46.9789 18.2983 47.2539 18.1205C47.545 17.9264 47.6905 17.6434 47.6905 17.2714C47.6905 16.7378 47.4803 16.3173 47.0598 16.01C46.6555 15.6866 46.1461 15.4036 45.5316 15.161C44.9332 14.9346 44.2702 14.7082 43.5424 14.4818C42.8147 14.2554 42.1436 13.9481 41.5291 13.56C40.9145 13.1719 40.4051 12.6706 40.0008 12.056C39.5965 11.4577 39.3944 10.6653 39.3944 9.67879C39.3944 8.70849 39.5965 7.87565 40.0008 7.18026C40.4051 6.4687 40.9469 5.88652 41.6261 5.43371C42.3053 4.96473 43.0816 4.62512 43.9548 4.41489C44.8119 4.18848 45.6933 4.07528 46.5989 4.07528ZM67.7516 4.1238C68.6572 4.1238 69.5547 4.21274 70.4442 4.39063C71.3498 4.56852 72.1584 4.94047 72.8699 5.50648C73.5815 6.07249 74.1637 6.88108 74.6165 7.93225C75.0693 8.98341 75.2957 10.3742 75.2957 12.1046V22.22H69.6194V14.1422C69.6194 12.4603 69.3445 11.1828 68.7946 10.3095C68.261 9.43622 67.4847 8.99958 66.4659 8.99958C65.7382 8.99958 65.1236 9.1613 64.6223 9.48473C64.121 9.80817 63.7248 10.2529 63.4337 10.8189C63.1264 11.3849 62.9 12.048 62.7545 12.808C62.6251 13.5519 62.5604 14.3767 62.5604 15.2823V22.22H56.4718V0.50941H62.051V7.81096C62.051 7.81096 62.1481 7.62498 62.3421 7.25303C62.5523 6.86491 62.8839 6.43636 63.3367 5.96738C63.7895 5.4984 64.3798 5.07793 65.1075 4.70598C65.8352 4.31786 66.7166 4.1238 67.7516 4.1238ZM91.4513 4.56044H97.6127C96.3837 7.77861 95.3082 10.5844 94.3864 12.9778C93.4485 15.3874 92.6076 17.4574 91.8636 19.1878C91.1197 20.9182 90.4567 22.3575 89.8745 23.5056C89.2923 24.6377 88.7344 25.5595 88.2008 26.271C87.6509 26.9826 87.1172 27.5243 86.5997 27.8963C86.0823 28.2521 85.5162 28.5189 84.9017 28.6968C84.5136 28.81 84.0446 28.8908 83.4948 28.9394C82.9449 28.9717 82.4032 28.9879 81.8695 28.9879C81.3358 29.004 80.883 29.004 80.5111 28.9879C80.1553 28.9879 79.9774 28.9879 79.9774 28.9879L80.0017 24.3304L81.918 24.2819C82.5487 24.2819 83.042 24.1606 83.3977 23.918C83.7697 23.6754 84.0446 23.3924 84.2225 23.069C84.4489 22.7132 84.5864 22.3089 84.6349 21.8561L77.4304 4.56044H83.9072L87.7641 16.1313L91.4513 4.56044Z"
          fill="#4D65F1"
        />
      </svg>
    </div>
  )
}
