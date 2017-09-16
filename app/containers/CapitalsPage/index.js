/*
 *
 * CapitalsPage
 *
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';

import Title from 'components/Title';
import Space from 'components/Space/index';
import Content from 'components/Content';
import FlexBox from 'components/FlexBox';

import Capital from './Capital';

import makeSelectCapitalsPage from './selectors';
import messages from './messages';
import { palette, Block } from '../../utils/constants';
import { formatMoney, hideOn, media } from '../../utils/helpers';

const capitals = [
  {
    name: 'Развитие факультета проблем физики и энергетики',
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

const purpose = 1000000000;
const collected = 783400000;

const MainCapital = styled.div`
  position: relative;
  float: left;
  display: inline-block;
  width: 66.666666%;
  height: 400px;
`;

const Info = styled(FlexBox)`
  position:relative;
  width: 100%;
  flex-wrap: nowrap;
  & h2 {
    font-size: 24px;
    font-weight: 300;
    margin: 0;
  }
  & b {
    font-size: 20px;
    font-weight: 300;
  }
  & i {
    font-style: normal;
    color: ${palette.primary};
  }
  ${hideOn}
`;

const InLine = styled.div`display: inline-block; white-space: nowrap;`;

export class CapitalsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
  }
  summCollected(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i += 1) {
      sum += array[i].collected;
    }
    return sum;
  }


  render() {
    return (
      <div>
        <Helmet
          title="Капиталы"
          meta={[
            { name: 'description', content: 'Капиталы фонда МФТИ' },
          ]}
        />
        <Space size={4} />
        <Title><FormattedMessage {...messages.header} /></Title>
        <Content>
          <MainCapital>
            <Block>
              <FormattedMessage {...messages.mainCapital} />

              <Info noSmall horisontal="space-between">
                <h2>
                  <b>Цель:</b> <InLine>{formatMoney(purpose)} ₽</InLine>
                </h2>
                <h2>
                  <b>Осталось:</b> <InLine><i>{formatMoney(purpose - collected)}</i> ₽</InLine>
                </h2>
              </Info>
            </Block>
          </MainCapital>
          {capitals.map((item, index) => (
            <Capital key={index} title={item.title} collected={item.collected} to={item.link} />
          ))}
        </Content>
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
