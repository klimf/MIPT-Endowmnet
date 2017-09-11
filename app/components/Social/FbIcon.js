import React, { PropTypes } from 'react';
import { palette } from '../../utils/constants';


function FbIcon(props) {
  return (
    <svg width="14px" height="30px" viewBox="-2 -2 18 34" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <path id="FbIcon" fill={props.dark ? palette.white : palette.black} d="M9.35767302,30 L3.74456703,30 L3.74456703,15 L0,15 L0,9.83056641 L3.74456703,9.82886719 L3.73848211,6.78339844 C3.73848211,2.56605469 4.88039953,0 9.8409562,0 L13.9709796,0 L13.9709796,5.17042969 L11.3898613,5.17042969 C9.45813273,5.17042969 9.36522066,5.89277344 9.36522066,7.24125 L9.357556,9.82886719 L14,9.82886719 L13.4527081,14.9983008 L9.36141759,15 L9.35767302,30 Z" />
    </svg>
  );
}

FbIcon.propTypes = {
  dark: PropTypes.bool,
};

export default FbIcon;
