/**
 *
 * NewsItem
 *
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import { palette } from '../../utils/constants';
import { media } from '../../utils/helpers';
import FlexBox from '../FlexBox';
import ImgContent from '../ImgContent/index';


const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 300;
`;

const Quote = styled.h2`
  position: relative;
  margin: 0;
  color: ${palette.black};
  font-size: 24px;
`;

const More = styled.h4`
  position: relative;
  margin: 16px 0 0 0;
  color: ${palette.primary};
  text-decoration: underline;
  font-size: 20px;
  ${(props) => props.noMore && 'visibility: hidden; opacity: 0;'}
`;

const Info = styled.h4`
  position: relative;
  margin: 16px 0 0 0;
  color: ${palette.gray};
  font-size: 20px;
  & b {
    font-weight: 400;
    color: ${palette.black};
  }
`;

const Decoration = styled.div`
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
      <ImgContent margin="48px 0" block padding="24px" reverse={props.index % 2 !== 0} circle shadow image={props.image}>
        <Quote>{props.quote}</Quote>
        <FlexBox horisontal="space-between" vertical="center">
          <More noMore={props.noMore}>Подробнее</More>
          <Info>{props.status} - <b>{props.name}</b></Info>
        </FlexBox>
        <Decoration isLeft={props.index % 2 === 0} />
      </ImgContent>
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
  noMore: PropTypes.bool,
};

export default Item;
