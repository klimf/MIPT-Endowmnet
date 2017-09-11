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
import { bindAll } from 'redux-act';
import { createStructuredSelector } from 'reselect';
import makeSelectAuthProvider, { IsLogged } from './selectors';
import * as actions from './actions';


export class AuthProvider extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { children, ...otherProps } = this.props;
    console.log(otherProps);
    return (
      <div>
        { React.Children.map(children, (child) => React.cloneElement(child, otherProps))}
      </div>
    );
  }
}

AuthProvider.propTypes = {
  dispatch: PropTypes.func.isRequired,
  children: PropTypes.node,
  user: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  AuthProvider: makeSelectAuthProvider(),
  IsLogged: IsLogged(),
});

function mapDispatchToProps(dispatch) {
  return bindAll(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthProvider);
