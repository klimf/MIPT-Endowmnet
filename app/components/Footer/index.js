/**
 *
 * Footer
 *
 */

import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import Wrapper from './Wrapper';
import Locale from './Locale';

import Logo from '../Logo';
import Social from '../Social';

class Footer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper dark={this.props.dark} >
        <Link to="/"><Logo dark={this.props.dark} /></Link>
        <Social dark={this.props.dark} noSmall />
        <Locale dark={this.props.dark}><FormattedMessage {...messages.button} /></Locale>
      </Wrapper>
    );
  }
}

Footer.propTypes = {
  dark: PropTypes.bool,
};

export default Footer;
