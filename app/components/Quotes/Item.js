/**
 *
 * NewsItem
 *
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import { block, palette, shadow, unit } from '../../utils/constants';
import { media } from '../../utils/helpers';
import FlexBox from '../FlexBox';
import placeholder from '../../images/placeholder.png';
// import Space from '../Space';

export const Wrapper = styled(FlexBox)`
  display: flex;
  flex-direction: ${(props) => props.isLeft ? 'row' : 'row-reverse'};
  align-items: center;
  position: relative;
  width: 100%;
  margin: ${3 * unit}px 0;
  padding: 0 ${2 * unit}px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 300;
`;

export const TextBlock = styled.div`
  position:relative;
  margin: 0;
  padding: 24px;
  width: calc(100% - 280px);
  min-height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${block}
  ${media.small`
    margin: 36px 0;
    width: 100%;
  `}
`;

export const Quote = styled.h2`
  position: relative;
  margin: 0;
  color: ${palette.black};
  font-size: 24px;
`;

export const More = styled.p`
  position: relative;
  margin: 16px 0 0 0;
  color: ${palette.primary};
  text-decoration: underline;
  font-size: 20px;
`;

export const Info = styled.p`
  position: relative;
  margin: 16px 0 0 0;
  color: ${palette.gray};
  font-size: 20px;
  & b {
    font-weight: 400;
    color: ${palette.black};
  }
`;

export const ImgWrapper = styled.div`
  width: 200px;
  ${media.small`
    width: 40%;
    margin: 0 30%;
  `}
`;

export const Image = styled.div`
  position:relative;
  width: 100%;
  padding: 50% 0;
  border-radius: 50%;
  overflow: hidden;
  background-color: ${palette.primary};
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.src || placeholder});
  ${shadow}
`;

export const Decoration = styled.div`
  position: absolute;
  ${(props) => props.isLeft ? 'left: 0' : 'right: 0'};
  top: 50%;
  margin: -15px;
  width: 30px;
  height: 30px;
  transform: rotate(45deg);
  background-color: ${palette.white};
  ${media.small`
    left: 50%;
    top: 0;
    border-left: 3px solid ${palette.disabled};
    border-top: 3px solid ${palette.disabled};
    border-radius: 0 20px;
  `}
`;

function Item(props) {
  return (
    <StyledLink to={props.link}>
      <Wrapper isLeft={props.index % 2 === 0} horisontal="space-between">
        <ImgWrapper>
          <Image style={{ backgroundImage: `url(${props.image})` }} />
        </ImgWrapper>
        <TextBlock>
          <Quote>{props.quote}</Quote>
          <FlexBox horisontal="space-between" vertical="center">
            <More>Подробнее</More>
            <Info>{props.status} - <b>{props.name}</b></Info>
          </FlexBox>
          <Decoration isLeft={props.index % 2 === 0} />
        </TextBlock>
      </Wrapper>
    </StyledLink>
  );
}

Item.propTypes = {
  link: PropTypes.string,
  name: PropTypes.string,
  status: PropTypes.string,
  quote: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  index: PropTypes.number,
};

export default Item;
