/**
*
* Form
*
*/

import React from 'react';
import styled from 'styled-components';
import * as Validation from 'react-validation/lib/build/validation.rc';
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
    { Node }
    <Space size={3} />
  </ div>
);


class Form extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    if (Object.keys(this.form.validateAll()).length === 0) {
      this.props.handleSubmit(this.form);
    }
  }
  render() {
    return (
      <Wrapper>
        <Space size={5} />
        <Container>
          <Title noMargin>{ this.props.title }</Title>
          <Space size={3} />
          <Validation.Form
            ref={(c) => { this.form = c; }}
            onSubmit={this.onSubmit}
          >
            { React.Children.map(this.props.children, Field) }
            <Button expanded submit >
              { this.props.actionLabel }
            </Button>
          </Validation.Form >
        </Container>
      </Wrapper>
    );
  }
}


Form.propTypes = {
  title: React.PropTypes.string.isRequired,
  children: React.PropTypes.any,
  actionLabel: React.PropTypes.any.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
};

export default Form;
