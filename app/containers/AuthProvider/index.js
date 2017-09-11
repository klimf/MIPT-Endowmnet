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
import makeSelectAuthProvider from './selectors';

export class AuthProvider extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {children, ...otherProps} = this.props
    return (
      <div>
        { React.Children.map(children, (child) => React.cloneElement(child, otherProps))}
      </div>
    );
  }
}

AuthProvider.propTypes = {
  dispatch: PropTypes.func.isRequired,
  kek: PropTypes.any.isRequired
};

const mapStateToProps = createStructuredSelector({
  AuthProvider: makeSelectAuthProvider(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthProvider);
