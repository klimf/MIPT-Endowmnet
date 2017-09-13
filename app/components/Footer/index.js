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

import Logo from '../Logo';
import Button from '../Button';
import FlexBox from '../FlexBox';
import Overlay from '../Overlay';
import Social from '../Social';
import Space from '../Space';
import Contact from './Contact';

class Footer extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper dark={this.props.dark} >
        <FlexBox noSmall horisontal="space-between" vertical="center">
          <Link to="/"><Logo /></Link>
          <Button noLarge type="border"><FormattedMessage {...messages.button1} /></Button>
          <Button noLarge type="border"><FormattedMessage {...messages.button2} /></Button>
          <Social noMedium />
        </FlexBox>
        <FlexBox noMedium noLarge horisontal="space-around" vertical="center">
          <Link to="/"><Logo /></Link>
        </FlexBox>
        <Space noLarge size={2} />
        <Social noLarge center />
        <Space noMedium noLarge size={2} />
        <FlexBox noMedium noLarge horisontal="space-between" vertical="center">
          <Button noLarge type="border"><FormattedMessage {...messages.button1} /></Button>
          <Button noLarge type="border"><FormattedMessage {...messages.button2} /></Button>
        </FlexBox>
        <Space size={2} />
        <FlexBox horisontal="space-between" vertical="center">
          <Contact title="Телефон:" value="+7 (495) 486 56 93" />
          <Contact title="E-mail:" value="mail@ef.mipt.ru" />
          <Contact title="Адрес:" value="г. Москва ул. Пушкина, 12" />
          <Button noSmall noMedium type="border"><FormattedMessage {...messages.button1} /></Button>
          <Button noSmall noMedium type="border"><FormattedMessage {...messages.button2} /></Button>
        </FlexBox>
      </Wrapper>
    );
  }
}

Footer.propTypes = {
  dark: PropTypes.bool,
};

export default Footer;
