import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Button from '../../components/Button';
import { makeUserSelector } from './selectors';
import { fetchLogout } from './actions';
import { ADMIN_ROLE } from './constants';

const Wrapper = styled.div`
  display: flex;
  
`;

const propTypes = {
  user: React.PropTypes.any,
  fetchLogout: React.PropTypes.any,
  className: React.PropTypes.any,
};

const mapRoleToLink = {
  [ADMIN_ROLE]: {
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
    const role = this.props.user ? this.props.user.role : null;
    return (
      role ?
        <Wrapper className={this.props.className}>
          <Button type="header" to={mapRoleToLink[role].link} {...this.props} >{ mapRoleToLink[role].label }</Button>
          <Button onClick={this.logout} type="border" {...this.props}>Выход</Button>
        </Wrapper>
      : null
    );
  }

}

AccountButton.propTypes = propTypes;

AccountButton.defaultProps = defaultProps;

const mapStateToProps = createStructuredSelector({
  user: makeUserSelector(),
});

const mapDispatchToProps = (dispatch) => ({
  fetchLogout: fetchLogout.bindTo(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountButton);
