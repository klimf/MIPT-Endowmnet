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
import MenuIcon from './MenuIcon';

import Logo from '../Logo';
import Button from '../Button';
import FlexBox from '../FlexBox';

class Header extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      menuIsOpen: false,
    };
    this.handleMobileMenuClick = this.handleMobileMenuClick.bind(this);
  }

  handleMobileMenuClick() {
    this.setState(this.state.menuIsOpen ? {menuIsOpen: false} : {menuIsOpen: true});
  }

  render() {
    return (
      <Wrapper>
        <FlexBox horisontal="space-between">
          <Link to="/"><Logo /></Link>
          <FlexBox vertical="center">
            <Button to="/" type="header" mtb={9}><FormattedMessage {...messages.button} /></Button>
            {/*<MenuIcon onClick={this.handleMobileMenuClick} noMedium noLarge />*/}
          </FlexBox>
        </FlexBox>
        <NavList noSmall>
          {messages.navigation.map((item, index) => (
            <NavItem key={index} to={messages.navigation[index].link}><FormattedMessage {...messages.navigation[index]} /></NavItem>
          ))}
        </NavList>
        {/* */}
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
