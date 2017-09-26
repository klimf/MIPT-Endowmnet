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


export const Field = (Node) => (
  <div>
    { Node }
    <Space size={1} />
  </ div>
);

export class Form extends React.PureComponent {

  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidUpdate() {
    const errors = this.props.handleErrors();
    if (errors.length > 0) {
      errors.forEach((err) => {
        this.form.showError(err.name, err.error);
      });
    }
  }

  onSubmit(e) {
    e.preventDefault();
    if (Object.keys(this.form.validateAll()).length === 0) {
      this.props.handleSubmit(this.form);
    }
  }

  render() {
    return (
      <Validation.Form
        ref={(c) => { this.form = c; }}
        onSubmit={this.onSubmit}
      >
        {this.props.children}
      </Validation.Form >
    );
  }
}


Form.propTypes = {
  children: React.PropTypes.any,
  handleSubmit: React.PropTypes.func.isRequired,
  handleErrors: React.PropTypes.func.isRequired,
};


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


export class SimpleForm extends React.PureComponent { // eslint-disable-line
  render() {
    return (
      <Wrapper>
        <Space size={5} />
        <Container>
          <Title noMargin>{ this.props.title }</Title>
          <Space size={3} />
          <Form {...this.props} >
            { React.Children.map(this.props.children, Field) }
            <Button expanded submit >
              { this.props.actionLabel }
            </Button>
          </Form >
        </Container>
      </Wrapper>
    );
  }
}


SimpleForm.propTypes = {
  title: React.PropTypes.string.isRequired,
  children: React.PropTypes.any,
  actionLabel: React.PropTypes.any.isRequired,
};

export default Form;
