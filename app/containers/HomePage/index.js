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
import Helmet from 'react-helmet';

import Content from 'components/Content';
import Masthead from 'components/Masthead';
import Space from 'components/Space';
import Image from 'components/Image';
import Title from 'components/Title';
import News from 'components/News';
import Quotes from 'components/Quotes';
import Partners from 'components/Partners';

import howML from '../../images/how.png';
import howS from '../../images/how_mobile.png';


import corp1 from '../../images/corps/1.png';
import corp2 from '../../images/corps/2.png';
import corp3 from '../../images/corps/3.png';
import corp4 from '../../images/corps/4.png';
import corp5 from '../../images/corps/5.png';
import corp6 from '../../images/corps/6.png';
import corp7 from '../../images/corps/7.png';
import corp8 from '../../images/corps/8.png';
import corp9 from '../../images/corps/9.png';

const partners = [corp1, corp2, corp3, corp4, corp5, corp6, corp7, corp8, corp9];

const purpose = 1000000000;
const collected = 783400000;


export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet />
        <Content>
          <Space size={5} />
          <Masthead purpose={purpose} collected={collected} />
          <Space size={5} />
          <Title>Как это работает?</Title>
          <Image src={howML} noSmall />
          <Image src={howS} noMedium noLarge />
          <Space size={5} />
          <News title="Последние новости и мероприятия" />
          <Space size={5} />
          <Quotes title="Почетные спонсоры" />
          <Space size={2} />
          <Partners items={partners} title="Партнеры" />
          <Space size={5} />
        </Content>
      </div>
    );
  }
}
