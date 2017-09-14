/**
*
* HideOn
*
*/

import React, { PropTypes, Children } from 'react';
import styled from 'styled-components';
import { media } from '../../utils/helpers';


function HideOn(props) {
  const Wrapper = styled.div`
    ${media.small`
       ${props.small && 'display: none'};
    `}
    ${media.medium`
       ${props.medium && 'display: none'};
    `}
    ${media.large`
       ${props.large && 'display: none'};
    `}
  `;
  return (
    <Wrapper>
      {Children.toArray(props.children)}
    </Wrapper>
  );
}

HideOn.propTypes = {
  small: PropTypes.bool,
  medium: PropTypes.bool,
  large: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default HideOn;
