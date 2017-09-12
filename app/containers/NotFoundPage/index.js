/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import { palette, unit } from '../../utils/constants';
import messages from './messages';

import Button from 'components/Button';

const Wrapper = styled.div`
  margin-top: ${12 * unit}px;
  text-align: center;
`;
const Title = styled.h1`
  font-size: ${12 * unit}px;
  font-weight: 400;
`;
const SubTitle = styled.h1`
  font-size: ${4 * unit}px;
  font-weight: 400;
`;
const Color = styled.b`
  color: ${palette.primary};
  font-weight: 400;
`;

export default class NotFound extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper>
        <Title>
          4<Color>0</Color>4
        </Title>
        <SubTitle>
          <FormattedMessage {...messages.title} />
        </SubTitle>
        <Button type="header" to="/" margin="48px 0"><FormattedMessage {...messages.button} /></Button>
      </Wrapper>
    );
  }
}
