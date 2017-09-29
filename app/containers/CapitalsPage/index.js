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
import CapitalSmall from './components/CapitalSmall';
import makeSelectCapitalsPage from './selectors';
import messages from './messages';
import CapitalLarge from './components/CapitalLarge';
import CapitalMedium from './components/CapitalMedium';
import Capital from './components/Capital';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { Responsive, WidthProvider } from 'react-grid-layout';

const capitals = {
  lg: [
  { id: 'a', x: 0, y: 0, w: 4, h: 2, minW: 2 },
  { id: 'b', x: 5, y: 0, w: 2, h: 1, minW: 2 },
  { id: 'c', x: 5, y: 1, w: 2, h: 1, minW: 2 },
    { id: 'f', x: 5, y: 0, w: 3, h: 2, minW: 2 },
    { id: 'g', x: 5, y: 1, w: 3, h: 2, minW: 2 },
  ],
  md: [
    { id: 'a', x: 0, y: 0, w: 4, h: 2, minW: 2 },
    { id: 'b', x: 5, y: 0, w: 2, h: 1, minW: 2 },
    { id: 'c', x: 5, y: 1, w: 2, h: 1, minW: 2 },
    { id: 'f', x: 5, y: 0, w: 2, h: 1, minW: 2 },
    { id: 'g', x: 5, y: 1, w: 2, h: 1, minW: 2 },
  ],
  sm: [
    { id: 'a', x: 0, y: 0, w: 4, h: 2 },
    { id: 'b', x: 5, y: 0, w: 2, h: 1 },
    { id: 'c', x: 5, y: 1, w: 2, h: 1 },
    { id: 'f', x: 5, y: 0, w: 2, h: 1,},
    { id: 'g', x: 5, y: 1, w: 2, h: 1, },
  ],
};
WidthProvider.measureBeforeMount = true;
const GridLayout = WidthProvider(Responsive);
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
          <GridLayout
            breakpoints={{ lg: 1024, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: 6, md: 6, sm: 6, xs: 1, xxs: 3 }}
            rowHeight={200}
            onLayoutChange={(layout) => console.log(layout)}
          >
            { capitals.lg.map((v) => (
              <Capital
                key={v.id}x
                data-grid={{ x: v.x, y: v.y, h: v.h, w: v.w }}
              ></Capital>
            ))}
          </GridLayout>
        </Content>
        {/* <MainCapital {...capital} />
          {capitals.map((item, index) => (
            <Capital key={index} name={item.name} collected={item.collected} to={item.to} />
          )) }
          <CapitalMedium {...capital}></CapitalMedium>
          <CapitalMedium {...capital}></CapitalMedium> */}
        {/* <CapitalLarge></CapitalLarge>
          <CapitalSmall></CapitalSmall>
          <CapitalSmall></CapitalSmall>
          <CapitalMedium></CapitalMedium>
          <CapitalMedium></CapitalMedium> */}
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
