import React from 'react';
import Svg, { G, Path, Polyline } from 'react-native-svg';
import PropTypes from 'prop-types';
import { makeIcon } from '@apollosproject/ui-kit';

const Icon = makeIcon(
  ({ size = 24, fill, focused, secondaryFill, ...otherProps } = {}) => (
    <Svg width={25} height={size} viewBox="0 0 25 24" {...otherProps}>
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19.6439 12.4012C22.3379 9.24772 20.7088 4.52562 16.5603 3.46385C12.4116 2.40206 8.47171 5.69877 9.10321 9.7034L10.923 21.2444C10.9922 21.6839 11.5839 21.8353 11.8794 21.4892L19.6439 12.4012Z"
        fill={focused ? secondaryFill : 'none'}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4 9.27254C4 5.26147 7.26147 2 11.2725 2C15.2836 2 18.5451 5.26147 18.5451 9.27254C18.5451 16.3935 11.5577 21.9001 11.5577 21.9001C11.4771 21.9648 11.3768 22 11.2734 22C11.17 22 11.0697 21.9648 10.989 21.9001C10.989 21.9001 4 16.3935 4 9.27254ZM17.6358 9.27254C17.6358 5.75276 14.7923 2.90928 11.2725 2.90928C7.75276 2.90928 4.90928 5.75276 4.90928 9.27254C4.90928 15.5087 10.7513 20.4551 11.2725 20.8901C11.7925 20.4561 17.6358 15.5094 17.6358 9.27254ZM8.09163 9.27232C8.09163 7.5205 9.52061 6.08985 11.2724 6.08985C13.0242 6.08985 14.4549 7.5205 14.4549 9.27232C14.4549 11.0241 13.0242 12.4548 11.2724 12.4548C9.52061 12.4548 8.09163 11.0241 8.09163 9.27232ZM13.5456 9.27232C13.5456 8.0118 12.5329 6.99913 11.2724 6.99913C10.0119 6.99913 9.0009 8.0118 9.00091 9.27232C9.0009 10.5328 10.0119 11.5455 11.2724 11.5455C12.5329 11.5455 13.5456 10.5328 13.5456 9.27232Z"
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
