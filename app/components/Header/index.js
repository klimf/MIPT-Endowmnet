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
import HideOn from '../HideOn';

class Header extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      menuIsOpen: false,
    };
  }

  render() {
    return (
      <Wrapper dark={this.props.dark} >
        <Link to="/"><Logo dark={this.props.dark} /></Link>
        <NavList dark={this.props.dark} noSmall>
          {messages.navigation.map((item, index) => (
            <NavItem key={index} to={messages.navigation[index].link}><FormattedMessage {...messages.navigation[index]} /></NavItem>
          ))}
        </NavList>
        <HideOn small>
          <Button to="/" type={this.props.dark ? 'white' : 'black'}><FormattedMessage {...messages.button} /></Button>
        </HideOn>
        <HideOn medium large>
          <MenuIcon dark={this.props.dark} />
          {this.state.menuIsOpen && (
            <NavList dark={this.props.dark} noSmall>
              {messages.navigation.map((item, index) => (
                <NavItem key={index} to={messages.navigation[index].link}><FormattedMessage {...messages.navigation[index]} /></NavItem>
              ))}
            </NavList>
          )}
        </HideOn>
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
