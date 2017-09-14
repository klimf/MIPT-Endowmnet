/**
 *
 * Masthead
 *
 */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import Button from 'components/Button';
import Space from 'components/Space';
import FlexBox from 'components/FlexBox';
import messages from './messages';
import { palette } from '../../../utils/constants';
import Formula from './Formula';
import { hideOn } from '../../../utils/style-utils';

const Wrapper = styled.div`
  width: calc(100% - 280px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledLink = styled(Link)`
  margin: 9px 0;
  font-size: 20px;
  &:link, &:visited, &:hover, &:active {
    color: ${palette.primary};
  }
`;

const Info = styled(FlexBox)`
  position:relative;
  width: 100%;
  border-bottom: 3px solid ${palette.disabled};
  &:after {
    width: 20px;
    height: 20px;
    border-bottom: 3px solid ${palette.disabled};
  }
  & h2 {
    font-size: 36px;
    font-weight: 300;
    margin: 0;
  }
  & b {
    font-size: 24px;
    font-weight: 300;
  }
  & i {
    font-style: normal;
    color: ${palette.primary};
  }
`;

const Decor = styled.div`
  z-index: 1;
  position:absolute;
  bottom: -33px;
  left: -111px;
  width: 120px;
  border-bottom: 3px solid ${palette.disabled};
  transform: rotate(-30deg);
`;

const Hideable = styled.u`text-decoration: none; ${hideOn}`;

function Masthead() {
  return (
    <Wrapper>
      <Info horisontal="space-between"><Hideable noMedium ><h2><b>Цель:</b> <i>10 000 000 000</i> ₽</h2></Hideable><h2><b>Собрано:</b> 134 000 000 ₽</h2><Decor /></Info>
      <Space size={2} />
      <Formula />
      <Space size={2} />
      <FlexBox horisontal="space-between" vertical="center">
        <StyledLink to="/"><FormattedMessage {...messages.link} /></StyledLink>
        <Button to="/"><FormattedMessage {...messages.button} /></Button>
      </FlexBox>
    </Wrapper>
  );
}

Masthead.propTypes = {

};

export default Masthead;
