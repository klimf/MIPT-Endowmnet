/**
*
* Form
*
*/

import React from 'react';
import styled from 'styled-components';
import { palette, unit } from '../../utils/constants';
import { media } from '../../utils/helpers';
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

const Field = (Node) => (
  <div>
    <Space size={3} />
    <Node />
  </ div>
);


function Form(props) {
  return (
    <Wrapper>
      <Space size={5} />
      <Container>
        <Title noMargin>{props.title}</Title>
        { React.Children.map(props.children, Field)}
        <Button expanded onClick={props.onActionButtonClick}>{props.actionLabel}</Button>
      </Container>
    </Wrapper>
  );
}

Form.propTypes = {
  title: React.PropTypes.string.isRequired,
  children: React.PropTypes.any,
  onActionButtonClick: React.PropTypes.any.isRequired,
  actionLabel: React.PropTypes.any.isRequired,
};

export default Form;
