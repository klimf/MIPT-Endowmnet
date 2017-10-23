/**
 *
 * NewsItem
 *
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { palette } from '../../utils/constants';
import { media } from '../../utils/helpers';
import FlexBox from '../FlexBox';
import ImgContent from '../ImgContent/index';


export const Quote = styled.h2`
  position: relative;
  margin: 0;
  color: ${palette.black};
  font-size: 24px;
`;

export const More = styled.h4`
  position: relative;
  margin: 16px 0 0 0;
  color: ${palette.primary};
  text-decoration: underline;
  font-size: 20px;
  ${(props) => props.noMore && 'visibility: hidden; opacity: 0;'}
`;

export const Info = styled.h4`
  position: relative;
  margin: 16px 0 0 0;
  color: ${palette.gray};
  font-size: 20px;
  & b {
    font-weight: 400;
    color: ${palette.black};
  }
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


const side = (left, right, index) => {
  if (left) {
    return false;
  }
  if (right) {
    return true;
  }
  return index % 2 !== 0;
};

function Item(props) {
  return (
    <ImgContent
      margin="48px 0" block padding="24px" reverse={side(props.isLeft, props.right, props.index)}
      circle
      shadow
      image={props.image && props.image.original ? props.image.small : props.image}
    >
      <Quote>{props.quote}</Quote>
      <FlexBox horisontal="space-between" vertical="center">
        <More noMore={props.noMore}>Подробнее</More>
        <Info>{props.status} - <b>{props.name}</b></Info>
      </FlexBox>
      <Decoration isLeft={props.index % 2 === 0} />
    </ImgContent>
  );
}

Item.propTypes = {
  name: PropTypes.string,
  status: PropTypes.string,
  quote: PropTypes.string,
  image: PropTypes.string,
  index: PropTypes.number,
  noMore: PropTypes.bool,
  isLeft: PropTypes.bool,
  right: PropTypes.bool,
};

Item.defaultProps = {
  link: '#',
  name: 'Иванов Иван',
  status: 'Руководитель фонда',
  quote: 'Текст цитаты',
  index: 1,
  noMore: true,
};

export default Item;
