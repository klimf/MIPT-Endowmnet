/*
 *
 * CapitalsPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { bindAll } from 'redux-act';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import styled from 'styled-components';
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
import ComponentSetPopup from './components/SetCapitalComponent';
import {
  fetchCapitalsGrid,
  fetchCapitals,
  fetchCapitalsGridUpdate,
  deleteCapitalBlock,
  startSelectCapitalComponent,
  startAddNewCapitalBlock,
  capitalsGridChange,
} from './actions';
import FlexBox from '../../components/FlexBox';
import NewCapitalPopup from './components/NewCapitalPopup';

const capitals = [
    { id: '555555', x: 0, y: 0, w: 4, h: 2 },
    { id: '123213123', x: 5, y: 0, w: 2, h: 1 },
    { id: '14214123', x: 5, y: 1, w: 2, h: 1 },
    { id: '333333', x: 5, y: 0, w: 3, h: 2 },
    { id: 'a23231', x: 5, y: 1, w: 3, h: 2 },
];

const capitalsData = [
  { id: '555555',
    name: 'Развитие adsadasd проблем физики и энергетики',
    description: 'Ежегодно МФТИ выпускает более 2.5 тысяч студентов во взрослую жизнь. Одно из главных событий университетского учебного года - церемония вручения почетных наград МФТИ и красных дипломов. ',
    collected: 1435000,
    to: '/capital/kek' },
  { id: '123213123',
    name: 'asdadasdфакультета проблем физики и энергетики',
    description: 'Ежегодно МФТИ выпускает более 2.5 тысяч студентов во взрослую жизнь. Одно из главных событий университетского учебного года - церемония вручения почетных наград МФТИ и красных дипломов. ',
    collected: 1435000,
    to: '/capital/kek' },
  { id: '14214123',
    name: 'Рalsdadasd физики и энергетики',
    description: 'Еa;lsdsal;dl;ч студентов во взрослую жизнь. Одно из главных событий университетского учебного года - церемония вручения почетных наград МФТИ и красных дипломов. ',
    collected: 21322,
    to: '/capital/kek' },
  { id: '333333',
    name: 'Развитие факультета проблем физики и энергетики',
    description: 'Ежегодно МФТИ выпускает более 2.5 тысяч студентов во взрослую жизнь. Одно из главных событий университетского учебного года - церемония вручения почетных наград МФТИ и красных дипломов. ',
    collected: 33333 },
  { id: 'a23231',
    name: 'Развитие факультета проблем физики и энергетики',
    description: 'Ежегодно МФТИ выпускает более 2.5 тысяч студентов во взрослую жизнь. Одно из главных событий университетского учебного года - церемония вручения почетных наград МФТИ и красных дипломов. ',
    collected: 1435000,
    to: '/capital/kek' },
  { id: '1219990',
    name: 'Развитие факультета проблем физики и энергетики',
    description: 'Ежегодно МФТИ выпускает более 2.5 тысяч студентов во взрослую жизнь. Одно из главных событий университетского учебного года - церемония вручения почетных наград МФТИ и красных дипломов. ',
    collected: 1435000,
    to: '/capital/kek' },
  { id: 'a2323----001',
    name: 'Развитие факультета проблем физики и энергетики',
    description: 'Ежегодно МФТИ выпускает более 2.5 тысяч студентов во взрослую жизнь. Одно из главных событий университетского учебного года - церемония вручения почетных наград МФТИ и красных дипломов. ',
    collected: 1435000,
    to: '/capital/kek' },
  { id: '9328398000',
    name: 'Развитие факультета проблем физики и энергетики',
    description: 'Ежегодно МФТИ выпускает более 2.5 тысяч студентов во взрослую жизнь. Одно из главных событий университетского учебного года - церемония вручения почетных наград МФТИ и красных дипломов. ',
    collected: 1435000,
    to: '/capital/kek' },
];


const editableGridStyle = {
  border: '1px dotted #000',
};

const ToolBarWrap = styled(Content)`
  padding: 0px 50px;
`;

const GridLayout = WidthProvider(Responsive);

export class CapitalsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      editable: false,
    };
    this.toggleEditable = this.toggleEditable.bind(this);
  }

  componentWillMount = () => {
    this.props.fetchCapitalsGrid.success(capitals);
    this.props.fetchCapitals.success(capitalsData);
  }


  toggleEditable() {
    if (this.state.editable) {
      this.props.fetchCapitalsGridUpdate.start();
    }
    this.setState({ editable: !this.state.editable });
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
        <ToolBarWrap>
          <FlexBox
            horisontal={'space-between'}
            vertical={'center'}
          >
            <Button onClick={this.toggleEditable}>{!this.state.editable ? 'Редактировать' : 'Сохранить'}</Button>
            { this.state.editable &&
              <Button onClick={this.props.startAddNewCapitalBlock}>Добавить</Button>
            }


          </FlexBox>
        </ToolBarWrap>
        <Title><FormattedMessage {...messages.header} /></Title>
        <Content>
          <GridLayout
            layouts={{ lg: this.props.capitalsGrid.map((x) => x['data-grid']) }}
            style={this.state.editable ? editableGridStyle : {}}
            breakpoints={{ lg: 1200, md: 900, sm: 768 }}
            cols={{ lg: 6, md: 6, sm: 1, xs: 1, xxs: 1 }}
            rowHeight={200}
            isDraggable={this.state.editable}
            isResizable={false}
            onLayoutChange={this.props.capitalsGridChange}
          >
            { this.props.capitalsGrid.map((v) => (
              <Capital
                key={v.data.id}
                type={this.state.editable ? 'editable' : 'link'}
                onBlockEditStart={this.props.startSelectCapitalComponent}
                onBlockDeleteStart={this.props.deleteCapitalBlock}
                {...v}
              ></Capital>
            ))}
          </GridLayout>
        </Content>
        <Space size={4} />
        <ComponentSetPopup></ComponentSetPopup>
        <NewCapitalPopup></NewCapitalPopup>
      </div>
    );
  }
}

CapitalsPage.propTypes = {
  capitalsGrid: PropTypes.array,
  startSelectCapitalComponent: React.PropTypes.func,
  deleteCapitalBlock: React.PropTypes.func,
  fetchCapitals: PropTypes.object,
  fetchCapitalsGrid: PropTypes.object,
  startAddNewCapitalBlock: PropTypes.func,
  capitalsGridChange: PropTypes.func,
  fetchCapitalsGridUpdate: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  CapitalsPage: makeSelectCapitalsPage(),
  capitalsGrid: makeSelectCapitalsGrid(),
});

function mapDispatchToProps(dispatch) {
  return bindAll({
    fetchCapitalsGrid,
    fetchCapitals,
    fetchCapitalsGridUpdate,
    deleteCapitalBlock,
    startSelectCapitalComponent,
    startAddNewCapitalBlock,
    capitalsGridChange,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CapitalsPage);

