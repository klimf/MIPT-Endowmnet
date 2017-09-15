/**
 *
 * NewsItem
 *
 */

import React, { PropTypes } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router';
import { block, palette, unit } from '../../utils/constants';
import { media } from '../../utils/helpers';
import FlexBox from '../FlexBox/index';

const Wrapper = styled(FlexBox)`
  position:relative;
  width: 100%;
  margin: ${3 * unit}px 0;
  padding: 0 ${2 * unit}px;
  overflow: hidden;
  ${block}
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 300;
`;

const TextBlock = styled.div`
  margin: 0 10px 10px 180px;
  ${media.small`
    margin: 280px 10px 10px 10px;
  `}
`;

const Title = styled.h2`
  color: ${palette.primary};
  font-size: 24px;
`;

const Description = styled.p`
  color: ${palette.black};
  font-size: 20px;
`;

const Image = styled.div`
  position:absolute;
  width: 180px;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: ${palette.primary};
  background-size: cover;
  background-position: center;
  ${media.small`
    width: 100%;
    height: 280px;
    bottom: auto;
  `}
`;

function Item(props) {
  return (
    <StyledLink to={props.link}>
      <Wrapper>
        <Image style={{ backgroundImage: `url(${props.image})` }} />
        <TextBlock>
          <Title>{props.title}</Title>
          <Description>{props.description}</Description>
        </TextBlock>
      </Wrapper>
    </StyledLink>
  );
}

Item.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default Item;
