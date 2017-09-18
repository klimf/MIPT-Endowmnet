/**
 *
 * Capital
 *
 */

import React, { PropTypes } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router';
import { Block, palette, shadow, unit } from '../../utils/constants';
import FlexBox from '../../components/FlexBox/index';
import { formatMoney } from '../../utils/helpers';

const Wrapper = styled.div`
  position: relative;
  float: left;
  display: inline-block;
  width: 33.333333%;
  height: 200px;
`;


const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 300;
`;

const Name = styled.h2`
  margin: 0;
  font-size: 20px;
  font-weight: 300;
`;

const Info = styled.p`
  position: relative;
  margin: 16px 0 0 0;
  color: ${palette.black};
  font-weight: 300;
  font-size: 20px;
  & b {
    font-weight: 400;
    color: ${palette.primary};
  }
`;

const More = styled.p`
  position: relative;
  margin: 16px 0 0 0;
  color: ${palette.primary};
  text-decoration: underline;
  font-size: 18px;
  font-weight: 300;
`;

function Capital(props) {
  return (
    <Wrapper>
      <StyledLink to={props.link}>
        <Block>
          <FlexBox>
            <Name>{props.name}</Name>
            <Info>Собрано: <b>{formatMoney(props.collected)}</b> ₽</Info>
            <br />
            <More>Подробнее</More>
          </FlexBox>
        </Block>
      </StyledLink>
    </Wrapper>
  );
}

Capital.propTypes = {
  link: PropTypes.string,
  name: PropTypes.string,
  collected: PropTypes.number,
};

export default Capital;
