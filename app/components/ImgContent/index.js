/**
 *
 * ImgContent
 *
 */

import React, { PropTypes, Children } from 'react';
import styled from 'styled-components';
import { block, image, palette, shadow } from '../../utils/constants';
import { media } from '../../utils/helpers';
import FlexBox from '../FlexBox';

export const Wrapper = styled(FlexBox)`
  display: flex;
  flex-direction: ${(props) => props.reverse ? 'row-reverse' : 'row'};
  align-items: center;
  position: relative;
  width: 100%;
  margin: ${(props) => props.margin && props.margin};
  padding: 0;
`;

const contentSubtract = (props) => {
  if (props.imgWidth && props.innerPadding) {
    return props.imgWidth + props.innerPadding;
  }
  return 0;
};

export const ContentBlock = styled.div`
  position:relative;
  padding: ${(props) => props.padding ? props.padding : '0'};
  margin: 0;
  width: calc(100% - ${(props) => contentSubtract(props)}px);
  min-height: ${(props) => props.imgWidth && props.imgWidth - props.vertPadding}px;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.centredColumn ? 'space-around' : 'space-between'};
  ${(props) => props.block && block}
  & p {
    font-size: 20px;
    margin: 0;
    color: ${palette.gray};
  }
  & h2 {
    font-size: 24px;
    margin: 0;
    color: ${palette.black};
  }
  ${(props) => !props.noAdaptive && media.small`
    margin: 36px 0;
    width: 100%;
  `}
  ${(props) => props.styles && props.styles}
`;

export const ImgWrapper = styled.div`
  width: ${(props) => props.imgWidth ? props.imgWidth : 400}px;
  ${(props) => !props.noAdaptive && media.small`
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

export const Image = styled.div`
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
    <Wrapper margin={props.margin} reverse={props.reverse} horisontal="space-between">
      <ImgWrapper noAdaptive={props.noAdaptive} imgWidth={props.imgWidth}>
        <Image circle={props.circle} rounded={props.rounded} shadow={props.shadow} style={{ backgroundImage: `url(${props.image})` }} />
      </ImgWrapper>
      <ContentBlock styles={props.styles} vertPadding={props.vertPadding} noAdaptive={props.noAdaptive} centredColumn={props.centredColumn} block={props.block} padding={props.padding} imgWidth={props.imgWidth} innerPadding={props.innerPadding}>
        { Children.toArray(props.children) }
      </ContentBlock>
    </Wrapper>
  );
}

ImgContent.defaultProps = {
  imgWidth: 200,
  innerPadding: 48,
  vertPadding: 48,
  margin: '36px 0',
};

ImgContent.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.string,
  padding: PropTypes.string,
  margin: PropTypes.string,
  styles: PropTypes.array,
  innerPadding: PropTypes.number,
  vertPadding: PropTypes.number,
  imgWidth: PropTypes.number,
  centredColumn: PropTypes.bool,
  reverse: PropTypes.bool,
  shadow: PropTypes.bool,
  circle: PropTypes.bool,
  rounded: PropTypes.bool,
  block: PropTypes.bool,
  noAdaptive: PropTypes.bool,
};

export default ImgContent;
