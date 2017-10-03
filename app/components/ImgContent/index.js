/**
 *
 * ImgContent
 *
 */

import React, { PropTypes, Children } from 'react';
import styled from 'styled-components';
import { image, shadow, unit } from '../../utils/constants';
import { media } from '../../utils/helpers';
import FlexBox from '../FlexBox';

const Wrapper = styled(FlexBox)`
  display: flex;
  flex-direction: ${(props) => props.reverse ? 'row-reverse' : 'row'};
  align-items: center;
  position: relative;
  width: 100%;
  margin: ${3 * unit}px 0;
  padding: 0;
`;

const contentSubstract = (props) => {
  if (props.imgWidth && props.innerPadding) {
    return props.imgWidth + props.innerPadding;
  }
  return 0;
};

const ContentBlock = styled.div`
  position:relative;
  padding: ${(props) => props.padding ? props.padding : '0'};
  margin: 0;
  width: calc(100% - ${(props) => contentSubstract(props)}px);
  min-height: ${(props) => props.imgWidth && props.imgWidth}px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${media.small`
    margin: 36px 0;
    width: 100%;
  `}
`;

const ImgWrapper = styled.div`
  width: ${(props) => props.imgWidth ? props.imgWidth : 400}px;
  ${media.small`
    width: 40%;
    margin: 0 30%;
  `}
`;

const borderRadius = (props) => {
  if (props.circle) {
    return '50%';
  } else if (props.rounded) {
    return '8px';
  }
  return '0';
};

const Image = styled.div`
  position:relative;
  width: 100%;
  padding: 50% 0;
  border-radius: ${(props) => borderRadius(props)};
  overflow: hidden;
  ${image}
  ${(props) => props.shadow && shadow}
`;


function ImgContent(props) {
  return (
    <Wrapper reverse={props.reverse} horisontal="space-between">
      <ImgWrapper imgWidth={props.imgWidth}>
        <Image circle={props.circle} rounded={props.rounded} shadow={props.shadow} style={{ backgroundImage: `url(${props.image})` }} />
      </ImgWrapper>
      <ContentBlock padding={props.padding} imgWidth={props.imgWidth} innerPadding={props.innerPadding}>
        { Children.toArray(props.children) }
      </ContentBlock>
    </Wrapper>
  );
}

ImgContent.defaultProps = {
  imgWidth: 200,
  innerPadding: 48,
};

ImgContent.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.string,
  padding: PropTypes.string,
  innerPadding: PropTypes.number,
  imgWidth: PropTypes.number,
  reverse: PropTypes.bool,
  shadow: PropTypes.bool,
  circle: PropTypes.bool,
  rounded: PropTypes.bool,
};

export default ImgContent;
