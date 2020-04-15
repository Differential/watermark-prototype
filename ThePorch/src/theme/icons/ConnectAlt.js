import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';
import { makeIcon } from '@apollosproject/ui-kit';

const Icon = makeIcon(
  ({ size = 32, fill, focused, secondaryFill, ...otherProps } = {}) => (
    <Svg width={size} height={size} viewBox="0 0 32 32" {...otherProps}>
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M23.8667 18C24.6135 18 24.9868 18 25.272 18.1635C25.5229 18.3074 25.7268 18.5367 25.8547 18.819C26 19.1398 26 19.5599 26 20.4V21.75V24.6C26 25.4401 26 25.8602 25.8547 26.181C25.7268 26.4633 25.5229 26.6927 25.272 26.8365C24.9868 27 24.6135 27 23.8667 27H14.6667H8.13333C7.3866 27 7.01323 27 6.72801 26.8365C6.47713 26.6927 6.27316 26.4633 6.14532 26.181C6 25.8602 6 25.4401 6 24.6V21.75V20.4C6 19.5599 6 19.1398 6.14532 18.819C6.27316 18.5367 6.47713 18.3074 6.72801 18.1635C7.01323 18 7.3866 18 8.13333 18H12.6667H23.8667Z"
        fill={focused ? secondaryFill : 'none'}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.10756 6H25.8923C26.2438 5.99999 26.5469 5.99997 26.7966 6.02352C27.0602 6.04837 27.3223 6.10322 27.5746 6.25152C27.9509 6.47277 28.2569 6.8258 28.4486 7.26003C28.5771 7.55109 28.6247 7.85355 28.6462 8.15768C28.6666 8.4458 28.6666 8.79562 28.6666 9.20111V22.7989C28.6666 23.2045 28.6666 23.5542 28.6462 23.8423C28.6247 24.1465 28.5771 24.4489 28.4486 24.74C28.2569 25.1742 27.9509 25.5272 27.5746 25.7485C27.3223 25.8968 27.0602 25.9517 26.7966 25.9765C26.5469 26 26.2438 26 25.8923 26H6.10755C5.75612 26 5.45295 26 5.20324 25.9765C4.93967 25.9517 4.67753 25.8968 4.42528 25.7485C4.04895 25.5272 3.74299 25.1742 3.55124 24.74C3.42271 24.4489 3.37517 24.1465 3.35364 23.8423C3.33323 23.5542 3.33324 23.2045 3.33325 22.7989V9.20112V9.20109C3.33324 8.7956 3.33323 8.4458 3.35364 8.15768C3.37517 7.85355 3.42271 7.55109 3.55124 7.26003C3.74299 6.8258 4.04895 6.47277 4.42528 6.25152C4.67753 6.10322 4.93967 6.04837 5.20324 6.02352C5.45295 5.99997 5.75611 5.99999 6.10753 6H6.10756ZM5.31181 7.55686C5.13071 7.57394 5.06356 7.60292 5.0306 7.62231C4.90516 7.69605 4.80316 7.81374 4.73925 7.95848C4.72245 7.99651 4.69733 8.07399 4.68253 8.28295C4.66711 8.50091 4.66659 8.78728 4.66659 9.23077V22.7692C4.66659 23.2128 4.66711 23.4991 4.68253 23.7171C4.69733 23.926 4.72245 24.0035 4.73925 24.0415C4.80316 24.1863 4.90516 24.304 5.0306 24.3777C5.06356 24.3971 5.13071 24.426 5.31181 24.4431C5.50071 24.4609 5.74888 24.4615 6.13325 24.4615H25.8666C26.251 24.4615 26.4991 24.4609 26.6881 24.4431C26.8691 24.426 26.9363 24.3971 26.9693 24.3777C27.0947 24.304 27.1967 24.1863 27.2606 24.0415C27.2774 24.0035 27.3025 23.926 27.3173 23.7171C27.3327 23.4991 27.3333 23.2128 27.3333 22.7692V9.23077C27.3333 8.78726 27.3327 8.50091 27.3173 8.28295C27.3025 8.07399 27.2774 7.99651 27.2606 7.95848C27.1967 7.81374 27.0947 7.69605 26.9693 7.62231C26.9363 7.60292 26.8691 7.57394 26.6881 7.55686C26.4991 7.53906 26.251 7.53846 25.8666 7.53846H6.13325C5.74888 7.53846 5.50071 7.53906 5.31181 7.55686ZM8.66659 12.9231C8.66659 10.7989 10.159 9.07692 11.9999 9.07692C13.8409 9.07692 15.3333 10.7989 15.3333 12.9231C15.3333 15.0472 13.8409 16.7692 11.9999 16.7692C10.159 16.7692 8.66659 15.0472 8.66659 12.9231ZM11.9999 10.6154C10.8953 10.6154 9.99992 11.6486 9.99992 12.9231C9.99992 14.1976 10.8953 15.2308 11.9999 15.2308C13.1045 15.2308 13.9999 14.1976 13.9999 12.9231C13.9999 11.6486 13.1045 10.6154 11.9999 10.6154ZM10.6976 16.7692H10.6634H10.6634C10.4084 16.7692 10.2328 16.7692 10.0654 16.7886C9.0768 16.9037 8.18427 17.5217 7.63107 18.474C7.53737 18.6352 7.45477 18.814 7.3348 19.0737H7.33479L7.31868 19.1085L7.28605 19.1791C7.14849 19.476 7.03431 19.7226 6.97713 19.9372C6.62781 21.2483 7.3408 22.6195 8.50777 22.8808C8.69879 22.9235 8.94107 22.9234 9.23293 22.9231H9.23295H9.233H9.30227H14.6977H14.7669H14.767C15.0589 22.9234 15.3011 22.9235 15.4921 22.8808C16.6591 22.6195 17.3721 21.2483 17.0227 19.9372C16.9655 19.7226 16.8514 19.4762 16.7139 19.1791H16.7138L16.6813 19.1085L16.6651 19.0737C16.5451 18.814 16.4625 18.6352 16.3689 18.474C15.8157 17.5217 14.9231 16.9037 13.9345 16.7886C13.7671 16.7692 13.5915 16.7692 13.3365 16.7692H13.3023H10.6976ZM10.1992 18.3194C10.2914 18.3086 10.3956 18.3077 10.6976 18.3077H13.3023C13.6043 18.3077 13.7085 18.3086 13.8007 18.3194C14.3938 18.3885 14.9294 18.7591 15.2613 19.3305C15.3129 19.4194 15.3626 19.5249 15.5047 19.8325C15.6926 20.2389 15.7346 20.338 15.7483 20.3894C15.8647 20.8263 15.6271 21.2834 15.2381 21.3705C15.1923 21.3808 15.0967 21.3846 14.6977 21.3846H9.30227C8.90311 21.3846 8.80756 21.3808 8.76181 21.3705C8.37281 21.2834 8.13516 20.8263 8.2516 20.3894C8.26529 20.338 8.30731 20.2389 8.49515 19.8325C8.63729 19.5249 8.68704 19.4194 8.73861 19.3305C9.07053 18.7591 9.60605 18.3885 10.1992 18.3194ZM16.6666 12.1538C16.6666 11.729 16.9651 11.3846 17.3333 11.3846H22.6666C23.0347 11.3846 23.3333 11.729 23.3333 12.1538C23.3333 12.5787 23.0347 12.9231 22.6666 12.9231H17.3333C16.9651 12.9231 16.6666 12.5787 16.6666 12.1538ZM17.3333 14.4615C16.9651 14.4615 16.6666 14.806 16.6666 15.2308C16.6666 15.6555 16.9651 16 17.3333 16H25.3333C25.7014 16 25.9999 15.6555 25.9999 15.2308C25.9999 14.806 25.7014 14.4615 25.3333 14.4615H17.3333Z"
        fill={fill}
      />
    </Svg>
  )
);

Icon.propTypes = {
  size: PropTypes.number,
  fill: PropTypes.string,
};

export default Icon;
