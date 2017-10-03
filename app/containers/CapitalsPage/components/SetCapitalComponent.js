import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';
import { bindAll } from 'redux-act';
import { connect } from 'react-redux';
import { palette, unit, rounded } from '../../../utils/constants';
import Capital, { capitalMap } from './Capital';
import Popup from '../../../components/Popup';
import makeSelectDomain, {
  makeSelectCurrentPopup,
} from '../selectors';
import {
  setCapitalComponent,
  saveCapitalConfiguration,
  cancelCapitalComponentSelection,
} from '../actions';
import * as constants from '../constants';

const ComponentWrap = styled.div`
    background: ${palette.dark};
    ${(props) => props.selected && `background: ${palette.primary} !important;`}
    padding: ${unit}px;
    margin-bottom: ${unit}px;
    ${rounded};
    position: relative;
    transition: .3s all ease-in-out;
    &:hover {
      cursor: pointer;
      background: ${palette.gray};
    }
    &:after {
      content: ${(props) => props.sizeProperty};
      position: absolute;
    }
`;

const capitalComponents = (capitalData) => Object.keys(capitalMap).map((componentParam) => {
  const dataGrid = {
    w: parseInt(componentParam.split(':')[0], 0),
    h: parseInt(componentParam.split(':')[1], 0),
  };
  return {
    'data-grid': dataGrid,
    data: capitalData,
  };
});


class SetCapitalComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.onComponentClick = this.onComponentClick.bind(this);
  }

  onComponentClick(componentParam) {
    this.setState({ selected: componentParam });
    this.props.setCapitalComponent(componentParam['data-grid']);
    this.props.saveCapitalConfiguration();
  }

  render() {
    return (
      <Popup
        onCancel={this.props.cancelCapitalComponentSelection}
        title={'Выберите типа блока'}
        show={this.props.show}
      >
        { this.props.CapitalsPage.capitalsGrid.configureCapital &&
            capitalComponents(this.props.CapitalsPage.capitalsGrid.configureCapital).map((properties, index) =>
            (<ComponentWrap
              key={index}
              onClick={() => this.onComponentClick(properties)}
              selected={this.props.CapitalsPage.capitalsGrid.selectedGridComponent.w === properties['data-grid'].w}
            >
              <Capital type={'preview'} editable {...properties}></Capital>
            </ComponentWrap>)

            )
        }
      </Popup>
    );
  }
}


SetCapitalComponent.propTypes = {
  saveCapitalConfiguration: PropTypes.func,
  setCapitalComponent: PropTypes.func,
  cancelCapitalComponentSelection: PropTypes.func,
  show: PropTypes.bool,
  capitalsGrid: PropTypes.object,
  CapitalsPage: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  show: makeSelectCurrentPopup(constants.SELECT_BLOCK_POPUP),
  CapitalsPage: makeSelectDomain(),
});

const mapDispatchToProps = (dispatch) => bindAll(
  { setCapitalComponent,
    saveCapitalConfiguration,
    cancelCapitalComponentSelection,
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SetCapitalComponent);
