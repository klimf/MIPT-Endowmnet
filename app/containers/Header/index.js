/**
 *
 * Header
 *
 */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';


import { FormattedMessage } from 'react-intl';
import messages from './messages';

import Wrapper from './Wrapper';
import NavList from './NavList';
import NavItem from './NavItem';
import Icon from '../../components/Icon';

import Logo from '../../components/Logo';
import Button from '../../components/Button';
import FlexBox from '../../components/FlexBox';
import Overlay from '../../components/Overlay';
import { ProtectedContent } from '../AuthProvider';
import AccountButton from '../AuthProvider/AccountButton';

const LoginButton = () => (
  <Button onClick={this.handleMobileMenuClick} to="/sign-in" type="border" margin="9px 24px" ><FormattedMessage {...messages.enter} /></Button>
);

class Header extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      menuIsOpen: false,
    };
    this.handleMobileMenuClick = this.handleMobileMenuClick.bind(this);
  }

  handleMobileMenuClick() {
    this.setState({
      menuIsOpen: !this.state.menuIsOpen,
    });
  }


  render() {
    return (
      <Wrapper>
        <FlexBox horisontal="space-between">
          <Link to="/"><Logo /></Link>
          <FlexBox noSmall horisontal="space-between">
            <ProtectedContent
              stateSelector={(state) => state.get('authProvider').get('user')}
              UnauthorizedComponent={LoginButton}
            >
              <AccountButton onClick={this.handleMobileMenuClick} margin="9px 24px" />
            </ProtectedContent>

            <Button to="/donate" type="header" margin="9px 0"><FormattedMessage {...messages.action} /></Button>
          </FlexBox>
          <Icon noLarge noMedium type="menu" onClick={this.handleMobileMenuClick} />
        </FlexBox>
        <NavList noSmall>
          {messages.navigation.map((item, index) => (
            <NavItem key={index} to={item.link}><FormattedMessage {...item} /></NavItem>
          ))}
        </NavList>
        <Overlay noMedium noLarge show={this.state.menuIsOpen}>
          <Wrapper>
            <FlexBox horisontal="space-between">
              <Link to="/" onClick={this.handleMobileMenuClick}><Logo /></Link>
              <Icon type="close" onClick={this.handleMobileMenuClick} />
            </FlexBox>
          </Wrapper>
          <NavList>
            {messages.navigation.map((item, index) => (
              <NavItem onClick={this.handleMobileMenuClick} key={index} to={item.link}><FormattedMessage {...item} /></NavItem>
            ))}
          </NavList>
          <FlexBox horisontal="space-between" padding="0 4%">
            <Button to="/donate" type="header" onClick={this.handleMobileMenuClick} ><FormattedMessage {...messages.action} /></Button>
            <ProtectedContent
              stateSelector={(state) => state.get('authProvider').get('user')}
              UnauthorizedComponent={LoginButton}
            >
              <AccountButton onClick={this.handleMobileMenuClick} margin="9px 24px 9px 0" />
            </ProtectedContent>
          </FlexBox>
        </Overlay>
      </Wrapper>
    );
  }
}

// Container.propTypes = {
//   theme: {
//     color: PropTypes.string,
//   },
// };

Header.propTypes = {
  dark: PropTypes.bool,
};

export default Header;
