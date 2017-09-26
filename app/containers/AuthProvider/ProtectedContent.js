import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { isUnauthorized, isLogged } from './selectors';


const propTypes = {
  children: React.PropTypes.any,
  UnauthorizedComponent: React.PropTypes.any,
  isUnauthorized: React.PropTypes.any,
  stateSelector: React.PropTypes.any, // eslint-disable-line
  isLogged: React.PropTypes.any,
};


const ProtectedContent = (props) => {
  const { children, UnauthorizedComponent } = props;
  return (!props.isLogged || props.isUnauthorized) ?
    <UnauthorizedComponent /> : children;
};


ProtectedContent.propTypes = propTypes;


const mapStateToProps = createStructuredSelector({
  isUnauthorized: isUnauthorized(),
  isLogged: isLogged(),
});


export default connect(mapStateToProps)(ProtectedContent);
