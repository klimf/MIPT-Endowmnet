import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { isUnauthorized, isLogged } from './selectors';


const propTypes = {
  children: React.PropTypes.any,
  UnauthorizedComponent: React.PropTypes.any,
  isUnauthorized: React.PropTypes.any,
  targetState: React.PropTypes.any,
  stateSelector: React.PropTypes.any,
  isLogged: React.PropTypes.any,
};


const ProtectedContent = (props) => {
  const { children, UnauthorizedComponent, ...otherProps } = props;
  return !props.isLogged || props.isUnauthorized ?
    <UnauthorizedComponent {...otherProps} />
      : (
        <div>
          { React.Children.map(children, (child) => React.cloneElement(child, otherProps)) }
        </div>
    );
};


ProtectedContent.propTypes = propTypes;


const mapStateToProps = createStructuredSelector({
  isUnauthorized: isUnauthorized(),
  isLogged: isLogged(),
});


export default connect(mapStateToProps)(ProtectedContent);
