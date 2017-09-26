/*
 *
 * CapitalsPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';

import Title from 'components/Title';
import Space from 'components/Space/index';
import Content from 'components/Content';

import Capital from './Capital';

import makeSelectCapitalsPage from './selectors';
import messages from './messages';

import logo from '../../images/MiptLogo.jpg';
import MainCapital from './MainCapital';

const capitals = [
  {
    name: 'Развитие факультета проблем физики и энергетики',
    description: 'Ежегодно МФТИ выпускает более 2.5 тысяч студентов во взрослую жизнь. Одно из главных событий университетского учебного года - церемония вручения почетных наград МФТИ и красных дипломов. ',
    collected: 1435000,
    to: '/capital',
  },
  {
    name: 'Развитие факультета проблем физики и энергетики',
    collected: 885000,
    to: '/capital',
  },
  {
    name: 'Развитие факультета проблем физики и энергетики',
    collected: 1391000,
    to: '/capital',
  },
  {
    name: 'Развитие факультета проблем физики и энергетики',
    collected: 2425000,
    to: '/capital',
  },
  {
    name: 'Развитие факультета проблем физики и энергетики',
    collected: 5430000,
    to: '/capital',
  },
];

const capital = {
  to: '/donate',
  name: 'Общий фонд целевого капитала фонда МФТИ',
  image: logo,
  purpose: 1000000000,
  collected: 783400000,
};


export class CapitalsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  sumCollected(array) {
    return array.reduce((result, item) => (result + item.collected), 0);
  }

  render() {
    return (
      <div>
        <Helmet
          title={'Капиталы'}
          meta={[
            { name: 'description', content: 'Капиталы фонда МФТИ' },
          ]}
        />
        <Space size={4} />
        <Title><FormattedMessage {...messages.header} /></Title>
        <Content>
          <MainCapital {...capital} />
          {capitals.map((item, index) => (
            <Capital key={index} name={item.name} collected={item.collected} to={item.to} />
          ))}
        </Content>
        <Space size={4} />
      </div>
    );
  }
}

CapitalsPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  CapitalsPage: makeSelectCapitalsPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CapitalsPage);
