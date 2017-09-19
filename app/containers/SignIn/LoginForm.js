import React, { Component } from 'react';
import Input from '../../components/Input';
import Form from '../../components/Form';
import messages from './messages';

const defaultProps = {};
const propTypes = {};

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(form) {
    console.log(form);
  }

  render() {
    return (
      <div>
        <Form title={messages.formTitle.defaultMessage} actionLabel={messages.signIButton.defaultMessage} handleSubmit={this.onSubmit}>
          <Input name={'login'} label={messages.loginLabel.defaultMessage} validations={['required', 'email']} type="email" placeholder={'jambul@mail.ru'}></Input>
          <Input name={'password'} validations={['required', 'password']} label={messages.passwordLabel.defaultMessage} type="password" placeholder={'jambul@mail.ru'}></Input>
        </Form>
      </div>
    );
  }
}

LoginForm.propTypes = propTypes;

LoginForm.defaultProps = defaultProps;

export default LoginForm;
