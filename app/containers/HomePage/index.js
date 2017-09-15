/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import Helmet from 'react-helmet';
import Content from 'components/Content';
import Masthead from 'components/Masthead';
import Space from 'components/Space';
import Image from 'components/Image';
import Title from 'components/Title';
import News from 'components/News';
import messages from './messages';
import howML from '../../images/how.png';
import howS from '../../images/how_mobile.png';


export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet />
        <Content>
          <Space size={5} />
          <Masthead purpose={783400000} collected={1000000000} />
          <Space size={5} />
          <Title>Как это работает?</Title>
          <Image src={howML} noSmall />
          <Image src={howS} noMedium noLarge />
          <Space size={5} />
          <News />
          <Space size={5} />
          <h1>
            <FormattedMessage {...messages.header} />
          </h1>
        </Content>
      </div>
    );
  }
}
