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
import Image from 'components/FullImage';
import Title from 'components/Title';
import News from 'components/News';
import Quotes from 'components/Quotes';
import Partners from 'components/Partners';
import Button from 'components/Button';

import howML from '../../images/how.png';
import howS from '../../images/how_mobile.png';


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
          <Space size={1} />
          <Button centred type="border" to="/news">Все новости</Button>
          <Space size={5} />
          <Quotes title="Почетные спонсоры" />
          <Space size={1} />
          <Button centred type="border" to="/stories">Все истории</Button>
          <Space size={2} />
          <Partners />
          <Space size={2} />
          <Button centred type="border" to="/sponsors">Все спонсоры</Button>
          <Space size={5} />
        </Content>
      </div>
    );
  }
}
