/**
 *
 * NewsItem
 *
 */

import React, { PropTypes } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router';
import { Block, palette, shadow, unit } from '../../utils/constants';

const Wrapper = styled.div`
  position: relative;
  float: left;
  display: inline-block;
  width: 33.333333%;
  height: 200px;
`;


const StyledLink = styled(Link)`
  //position: relative;
  text-decoration: none;
  font-weight: 300;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 400;
`;

const Info = styled.p`
  position: relative;
  margin: 16px 0 0 0;
  color: ${palette.gray};
  font-size: 20px;
  & b {
    font-weight: 400;
    color: ${palette.black};
  }
`;

function Item(props) {
  return (
    <Wrapper>
      <StyledLink to={props.link}>
        <Block>
          <Title>{props.title}</Title>
        </Block>
      </StyledLink>
    </Wrapper>
  );
}

Item.propTypes = {
  link: PropTypes.string,
  title: PropTypes.string,
  collected: PropTypes.number,
};

export default Item;
