/*
 *
 * SignIn
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectSignIn from './selectors';
// import messages from './messages';

import AuthProvider from '../AuthProvider';
import LoginForm from './LoginForm';

export class SignIn extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <Helmet
          title="Вход на сайт"
          meta={[
            { name: 'description', content: 'Вход на сайт' },
          ]}
        />
        <AuthProvider>
          <LoginForm></LoginForm>
        </AuthProvider>
      </div>
    );
  }
}

SignIn.propTypes = {
 // dispatch: PropTypes.func.isRequired,
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
