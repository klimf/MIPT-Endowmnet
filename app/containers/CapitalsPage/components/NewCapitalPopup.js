import React from 'react';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { palette, unit, rounded } from '../../../utils/constants';
import Popup from '../../../components/Popup';
import {
  startSelectCapitalComponent,
  startAddNewCapitalBlock,
  cancelAddNewCapitalBlock,
} from '../actions';
import {
  makeSelectCurrentPopup,
  notAddedCapitals,
} from '../selectors';
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

class NewCapitalPopup extends React.PureComponent { // eslint-disable-line

  render() {
    return (
      <Popup
        onCancel={this.props.cancelAddNewCapitalBlock}
        title={'Выберите капитал для добавления'}
        show={this.props.show}
      >
        { this.props.notAddedCapitals &&
            this.props.notAddedCapitals.map((capital, index) =>
              <ComponentWrap
                key={index}
                onClick={() => this.props.startSelectCapitalComponent(capital)}
              >
                {capital.name}
              </ComponentWrap>
            )
        }
      </Popup>
    );
  }
}

NewCapitalPopup.propTypes = {
  startSelectCapitalComponent: React.PropTypes.func,
  cancelAddNewCapitalBlock: React.PropTypes.func,
  show: React.PropTypes.bool,
  notAddedCapitals: React.PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  show: makeSelectCurrentPopup(constants.NEW_CAPITAL_POPUP),
  notAddedCapitals: notAddedCapitals(),
});

const mapDispatchToProps = (dispatch) => ({
  startSelectCapitalComponent: startSelectCapitalComponent.bindTo(dispatch),
  startAddNewCapitalBlock: startAddNewCapitalBlock.bindTo(dispatch),
  cancelAddNewCapitalBlock: cancelAddNewCapitalBlock.bindTo(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewCapitalPopup);

