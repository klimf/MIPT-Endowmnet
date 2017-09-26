/*
 *
 * AuthProvider
 * Usage
 * <AuthProvider>
 *  <>
 * </Authprovider>
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindAll } from 'redux-act';

import makeSelectAuthProvider, { isLogged } from './selectors';
import * as actions from './actions';

export class AuthProvider extends React.PureComponent {
  componentWillMount() {
    if (this.props.emitAuth) {
      this.props.fetchUser.start();
    }
  }
  render() {
    const { children, ...otherProps } = this.props;
    return (
      <div>
        { React.Children.map(children, (child) => React.cloneElement(child, otherProps))}
      </div>
    );
  }
}


AuthProvider.propTypes = {
  children: PropTypes.node,
  authProviderState: PropTypes.any,
  fetchUser: PropTypes.any,
  fetchLogin: PropTypes.any,
  fetchLogout: PropTypes.any,
  userChanged: PropTypes.any,
  fetchRecoveryPassword: PropTypes.any,
  fetchGetRecoveryToken: PropTypes.any,
  fetchConfirm: PropTypes.any,
  fetchRegistration: PropTypes.any,
  isLogged: PropTypes.any,
  isUnauthorized: PropTypes.any,
  stateSelector: PropTypes.any,
  emitAuth: PropTypes.any,
};

AuthProvider.defaultProps = {
  stateSelector: (state) => state.get('authProvider').get('user'),
};


const mapStateToProps = createStructuredSelector({
  authProviderState: makeSelectAuthProvider(),
  isLogged: isLogged(),
});

function mapDispatchToProps(dispatch) {
  return bindAll(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthProvider);

export { default as ProtectedContent } from './ProtectedContent';

