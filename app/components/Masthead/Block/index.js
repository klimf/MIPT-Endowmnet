/**
 *
 * Masthead
 *
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import Button from 'components/Button';
import Space from 'components/Space';
import FlexBox from 'components/FlexBox';
import messages from './messages';
import { palette } from '../../../utils/constants';
import Formula from './Formula';
import { media, hideOn, formatMoney } from '../../../utils/helpers';

const Wrapper = styled.div`
  float:right;
  width: calc(100% - 280px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${media.small`
    width: 100%;
  `}
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
  flex-flow: row-reverse;
  flex-wrap: nowrap;
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
  ${hideOn}
  ${media.small`
    flex-flow: row;
    flex-wrap: wrap;
  `}
`;

const Decor = styled.div`
  z-index: 1;
  position:absolute;
  bottom: -33px;
  left: -111px;
  width: 120px;
  border-bottom: 3px solid ${palette.disabled};
  transform: rotate(-30deg);
  ${hideOn}
`;

const InLine = styled.div`display: inline-block; white-space: nowrap;`;

const Hideable = styled.u`
  text-decoration: none; 
  @media (min-width: 40em) and (max-width: 49.999em) {
    display: none;
  }
`;

function Masthead(props) {
  return (
    <Wrapper>
      <Space noMedium noLarge size={3} />
      <Formula noMedium noLarge />
      <Info noSmall horisontal="space-between">
        <Hideable ><h2>
          <b>Цель:</b> <InLine>{formatMoney(props.collected)} ₽</InLine>
        </h2></Hideable>
        <h2>
          <b>Собрано:</b> <InLine><i>{formatMoney(props.purpose)}</i> ₽</InLine>
        </h2>
        <Decor />
      </Info>
      <Space noMedium noLarge size={3} />
      <Info noMedium noLarge horisontal="space-between">
        <h2>
          <b>Цель:</b>
        </h2>
        <h2>
          <InLine>{formatMoney(props.collected)} ₽</InLine>
        </h2>
      </Info>
      <Space noMedium noLarge size={2} />
      <Info noMedium noLarge horisontal="space-between">
        <h2>
          <b>Собрано:</b>
        </h2>
        <h2>
          <InLine><i>{formatMoney(props.purpose)}</i> ₽</InLine>
        </h2>
      </Info>
      <Space size={2} />
      <Formula noSmall />
      <Space size={2} />
      <FlexBox horisontal="space-between" vertical="center">
        <StyledLink to="/"><FormattedMessage {...messages.link} /></StyledLink>
        <Button to="/"><FormattedMessage {...messages.button} /></Button>
      </FlexBox>
    </Wrapper>
  );
}

Masthead.propTypes = {
  purpose: PropTypes.number,
  collected: PropTypes.number,
};

export default Masthead;
