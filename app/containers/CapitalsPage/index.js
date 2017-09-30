/*
 *
 * CapitalsPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import Title from 'components/Title';
import Space from 'components/Space/index';
import { Responsive, WidthProvider } from 'react-grid-layout';
import Content from 'components/Content';
import makeSelectCapitalsPage, { makeSelectCapitalsGrid } from './selectors';
import messages from './messages';
import Capital from './components/Capital';
import Button from '../../components/Button';
import Popup from './components/SetCapitalComponent';

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
    { id: 'f', x: 5, y: 0, w: 2, h: 1 },
    { id: 'g', x: 5, y: 1, w: 2, h: 1 },
  ],
};

const capitalsData = [
  { id: 'a' },
  { id: 'b' },
  { id: 'c' },
  { id: 'f' },
  { id: 'g' },
];

const mapCapitals = (data, layout) => data.map((item) => ({
  data: item,
  'data-grid': layout.find((grid) => grid.id === item.id),
}));

const editableGridStyle = {
  border: '1px dotted #000',
};

const GridLayout = WidthProvider(Responsive);

export class CapitalsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      editable: false,
    };
    this.toggleEditable = this.toggleEditable.bind(this);
    this.capitals = mapCapitals(capitalsData, capitals.lg);
  }

  toggleEditable() {
    this.setState({ editable: !this.state.editable });
  }

  startSelectCapitalComponent(capitalData) {
    return capitalData;
  }

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
          <Button onClick={this.toggleEditable}>{!this.state.editable ? 'Редактировать' : 'Сохранить'}</Button>
          <GridLayout
            layouts={capitals}
            style={this.state.editable && editableGridStyle}
            breakpoints={{ lg: 1024, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: 6, md: 6, sm: 6, xs: 1, xxs: 3 }}
            rowHeight={200}
            isDraggable={this.state.editable}
            isResizable={false}
            onLayoutChange={(layout) => console.log(layout)}
          >
            { this.capitals.map((v) => (
              <Capital
                key={v.data.id}
                editable={this.state.editable}
                {...v}
              ></Capital>
            ))}
          </GridLayout>
        </Content>
        <Space size={4} />
        <Popup capitalData={capitalsData[0]}></Popup>
      </div>
    );
  }
}

CapitalsPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  CapitalsPage: makeSelectCapitalsPage(),
  capitalsGrid: makeSelectCapitalsGrid(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CapitalsPage);
