import React, { Component } from 'react';
import Input from '../../components/Input';
import { SimpleForm } from '../../components/Form/';
import messages from './messages';

const defaultProps = {};
const propTypes = {
  fetchLogin: React.PropTypes.any,
  authProviderState: React.PropTypes.any,
};

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onError = this.onError.bind(this);
  }

  onSubmit(form) {
    const email = form.components.email.state.value;
    const password = form.components.password.state.value;
    this.props.fetchLogin.start({ email, password });
  }

  onError() {
    return this.props.authProviderState.login.error && [{ name: 'email', error: () => this.props.authProviderState.login.error.data }];
  }

  render() {
    return (
      <div>
        <SimpleForm
          handleErrors={this.onError}
          title={messages.formTitle.defaultMessage}
          actionLabel={messages.signIButton.defaultMessage}
          handleSubmit={this.onSubmit}
        >
          <Input name={'email'} label={messages.loginLabel.defaultMessage} validations={['required', 'email']} placeholder={'jambul@mail.ru'}></Input>
          <Input name={'password'} validations={['required', 'password']} label={messages.passwordLabel.defaultMessage} type="password" placeholder={'jambul@mail.ru'}></Input>
        </SimpleForm>
      </div>
    );
  }
}

LoginForm.propTypes = propTypes;

LoginForm.defaultProps = defaultProps;

export default LoginForm;
