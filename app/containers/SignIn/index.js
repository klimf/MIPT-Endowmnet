/*
 *
 * SignIn
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectSignIn from './selectors';
import messages from './messages';
import Form from '../../components/Form';
import Input from '../../components/Input';

export class SignIn extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="SignIn"
          meta={[
            { name: 'description', content: 'Description of SignIn' },
          ]}
        />

        <Form title={messages.formTitle.defaultMessage} actionLabel={messages.signIButton.defaultMessage}>
          <Input name={'login'} label={messages.loginLabel.defaultMessage} validations={['required', 'email']} type="email" placeholder={'jambul@mail.ru'}></Input>
          <Input name={'password'} validations={['required', 'password']} label={messages.passwordLabel.defaultMessage} type="password" placeholder={'jambul@mail.ru'}></Input>
        </Form>

      </div>
    );
  }
}

SignIn.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  SignIn: makeSelectSignIn(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
