import React from 'react';
import styled from 'styled-components';
import Title from 'components/Title';
import { palette, unit, rounded } from '../../../utils/constants';
import Overlay from '../../../components/Overlay';
import Capital, { capitalMap } from './Capital';
import Button from '../../../components/Button';


const CancelButton = (props) => (
  <Button {...props} fake expanded>
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

export const Popup = (props) => (
  <Overlay show={props.show}>
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
  show: React.PropTypes.bool.isRequired,
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
        show={this.props.capitalData || false}
      >
        { this.props.capitalData &&
            capitalComponents(this.props.capitalData).map((properties, index) =>
              <ComponentWrap
                key={index}
                onClick={() => this.onComponentClick(properties)}
                selected={this.props.selectedComponent.w === properties['data-grid'].w}
              >
                <Capital type={'preview'} editable {...properties}></Capital>
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
  capitalData: React.PropTypes.any,
  selectedComponent: React.PropTypes.any,
};


export default SetCapitalComponent;
