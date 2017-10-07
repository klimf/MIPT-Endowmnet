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
import { ProtectedContent } from '../AuthProvider';


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
    this.onLayoutChange = this.onLayoutChange.bind(this);
  }

  componentWillMount = () => {
    this.props.fetchCapitalsGrid.start();
    this.props.fetchCapitals.start();
  }


  onLayoutChange(current, allLayouts) {
    if (allLayouts.lg) {
      this.props.capitalsGridChange(allLayouts.lg);
    }
  }


  toggleEditable() {
    if (this.state.editable) {
      this.props.fetchCapitalsGridUpdate.start(this.props.CapitalsPage.capitalsGrid.grid);
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
        <ProtectedContent
          stateSelector={(state) => state.get('authProvider').get('user')}
        >
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
        </ProtectedContent>
        <Title><FormattedMessage {...messages.header} /></Title>
        <Content>
          <GridLayout
            layouts={{ lg: this.props.capitalsGrid.map((x) => x['data-grid']) }}
            style={this.state.editable ? editableGridStyle : {}}
            breakpoints={{ lg: 900, md: 340, sm: 768 }}
            cols={{ lg: 6, md: 1, sm: 1 }}
            rowHeight={200}
            isDraggable={this.state.editable}
            isResizable={false}
            onLayoutChange={this.onLayoutChange}
          >
            { this.props.capitalsGrid.map((v) => (
              <Capital
                key={v.data.id}
                type={this.state.editable ? 'editable' : 'link'}
                onBlockEditStart={this.props.startSelectCapitalComponent}
                onBlockDeleteStart={this.props.deleteCapitalBlock}
                {...v}
              />
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
  fetchCapitalsGridUpdate: PropTypes.object,
  CapitalsPage: PropTypes.object,
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

