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
import styled from 'styled-components';
import Button from 'components/Button';
import { palette, unit } from '../../utils/constants';


const Wrapper = styled.div`
  margin-top: ${12 * unit}px;
  text-align: center;
`;
const Title = styled.h1`
  font-size: ${12 * unit}px;
  font-weight: 400;
  margin: 18px 0;
`;
const SubTitle = styled.h1`
  font-size: ${2 * unit}px;
  line-height: 60px;
  margin-top: -${2 * unit}px;
  font-weight: 400;
`;
const Color = styled.b`
  color: ${palette.primary};
  font-weight: 400;
`;

export default class ForbiddenPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  getReferer() {

  }

  render() {
    return (
      <Wrapper>
        <Title>
          4<Color>0</Color>3
        </Title>
        <SubTitle>
          У вас нет прав доступа к странице <Color>{this.getReferer()}</Color>, попробуйте войти в свой аккаунт.
        </SubTitle>
        <Button centred type="header" to="/sign-in">Войти</Button>
      </Wrapper>
    );
  }
}
