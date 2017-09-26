import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Button from '../../components/Button';
import { user } from './selectors';
import { SimpleIcon } from '../../components//Icon/';
import logoutIcon from '../../images/logout.svg';
import { Link } from 'react-router';
import { fetchLogout } from './actions';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  
`;

const propTypes = {
  user: React.PropTypes.any,
  fetchLogout: React.PropTypes.any,
  className: React.PropTypes.any,
};

const mapRoleToLink = {
  2: {
    link: '/admin',
    label: 'Кабинет администратора',
  },
  0: {
    link: '/',
    label: 'Личный кабинет',
  },
};

const defaultProps = {};

class AccountButton extends React.PureComponent {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }
  logout() {
    this.props.fetchLogout.start();
  }
  render() {
    const role = this.props.user.data ? this.props.user.data.role : null;
    return (
      role &&
      <Wrapper className={this.props.className}>
        <Button to={mapRoleToLink[role].link} {...this.props} >{ mapRoleToLink[role].label }</Button>
        <Button onClick={this.logout} type="border" {...this.props}>Выход</Button>
      </Wrapper>
    );
  }

}

AccountButton.propTypes = propTypes;

AccountButton.defaultProps = defaultProps;

const mapStateToProps = createStructuredSelector({
  user: user(),
});

const mapDispatchToProps = (dispatch) => ({
  fetchLogout: fetchLogout.bindTo(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountButton);
