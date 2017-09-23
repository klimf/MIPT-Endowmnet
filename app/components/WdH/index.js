import React, { PropTypes, Children } from 'react';
import styled from 'styled-components';
import { hideOn } from '../../utils/helpers';
import { image, shadow } from '../../utils/constants';

function WdH(props) {
  const Wrapper = styled.div`
    position: relative;
    display: inline-block;
    height: ${props.height};
    ${props.float && `float: ${props.float}`};
    ${hideOn}
    & > img {
      height: ${props.rate * 100}%;
    }
  `;
  const Content = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: ${props.rounded ? '8px' : '0'};
    ${props.src && image}
    ${props.src && shadow}
  `;
  return (
    <Wrapper>
      <img role="presentation" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
      <Content src={props.src}>
        { Children.toArray(props.children) }
      </Content>
    </Wrapper>
  );
}


WdH.defaultProps = {
  rate: 1,
  height: '100%',
};

WdH.propTypes = {
  rate: PropTypes.number,
  height: PropTypes.string,
  children: PropTypes.node,
  src: PropTypes.string,
  rounded: PropTypes.bool,
  float: PropTypes.string,
};

export default WdH;
