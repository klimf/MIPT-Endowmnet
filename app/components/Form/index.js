/**
*
* Form
*
*/

import React from 'react';
import styled from 'styled-components';
import { palette, unit } from '../../utils/constants';
import { media } from '../../utils/helpers';
import Input from '../Input';
import Title from '../Title';
import Space from '../Space';
import Button from '../Button';

const Wrapper = styled.div`
  max-width: 32em;
  margin: 0 auto;
  padding: 0 ${unit / 3}%;
  ${media.large`
      padding: 0 ${3.2 * unit}px;
  `}
`;

const Container = styled.div`
  width: 100%;
  background-color: ${palette.white};
  border-radius: 8px;
  padding: 40px;
`;

function Form() {
  return (
    <Wrapper>
      <Space size={5} />
      <Container>
        <Title noMargin>Вход</Title>
        <Space size={3} />
        <Input label="E-mail" />
        <Space size={0.5} />
        <Input label="Пароль" type="password" />
        <Space size={2} />
        <Button type="header" expanded>Войти</Button>
      </Container>
    </Wrapper>
  );
}

Form.propTypes = {

};

export default Form;
