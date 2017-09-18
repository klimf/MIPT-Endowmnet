/**
 *
 * Capital
 *
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import { Block, palette } from '../../utils/constants';
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
  font-size: 24px;
  font-weight: 300;
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

function Capital(props) {
  return (
    <Wrapper>
      <StyledLink to={props.link}>
        <Block>
          <FlexBox>
            <Name>{props.name}</Name>
            <Info>{formatMoney(props.collected)}</Info>
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
