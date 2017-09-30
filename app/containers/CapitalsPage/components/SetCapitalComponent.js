import React from 'react';
import styled from 'styled-components';
import Title from 'components/Title';
import { block, palette, unit, rounded } from '../../../utils/constants';
import Overlay from '../../../components/Overlay';
import Capital, { capitalMap } from './Capital';
import cancelIcon from '../../../images/cancel.svg';
import Button from '../../../components/Button';


const CancelButton = () => (
  <Button fake expanded>
    Отмена
  </Button>
);

const PopupWrap = styled.div`
    display: block;
    height: 400px;
    max-width: 720px;
    backgroud: #000;
    margin: 0 auto;
`;

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

const capitalComponents = (capitalData) => Object.keys(capitalMap).map((componentParam, index) => {
  const dataGrid = {
    w: componentParam.split(':')[0],
    h: componentParam.split(':')[1],
    id: index,
  };
  return {
    'data-grid': dataGrid,
    data: capitalData,
  };
});

export const Popup = (props) => (
  <Overlay show>
    <PopupWrap>
      <Title>{props.title}</Title>
      <CancelButton onClick={props.onCancel}></CancelButton>
      {props.children}
    </PopupWrap>
  </Overlay>
);

Popup.propTypes = {
  onCancel: React.PropTypes.any.isRequired,
  children: React.PropTypes.any,
  title: React.PropTypes.string.isRequired,
};


class SetCapitalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
    };
  }

  onComponentClick(componentParam) {
    this.setState({ selected: componentParam });
    this.props.onComponentSelect(componentParam);
  }

  render() {
    return (
      <Popup
        onCancel={this.props.onCancel}
        title={'Выберите типа блока'}
      >
        {
            capitalComponents(this.props.capitalData).map((properties, index) =>
              <ComponentWrap
                onClick={() => this.onComponentClick(properties)}
                selected={this.state.selected && this.state.selected['data-grid'].w === properties['data-grid'].w}
              >
                <Capital preview editable key={index} {...properties}></Capital>
              </ComponentWrap>
            )
        }
      </Popup>
    );
  }
}


SetCapitalComponent.propTypes = {
  onComponentSelect: React.PropTypes.any.isRequired,
  onCancel: React.PropTypes.any.isRequired,
};


export default SetCapitalComponent;
