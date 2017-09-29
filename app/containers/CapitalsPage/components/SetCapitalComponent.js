import React from 'react';
import styled from 'styled-components';
import { block, palette } from '../../../utils/constants';
import Overlay from '../../../components/Overlay';
import Capital, { capitalMap } from './Capital';
import Title from 'components/Title';


const PopupWrap = styled.div`
    display: block;
    height: 400px;
    max-width: 720px;
    backgroud: #000;
    margin: 0 auto;
`;

const ComponentWrap = styled.div`
    backgroud: ${palette.primary}
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
      <Title>Выбор вида блока</Title>
      {props.children}
    </PopupWrap>
  </Overlay>
);


const propTypes = {};

const defaultProps = {};

class SetCapitalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onComponentSelect(componentParam) {
    console.log(componentParam);
  }

  render() {
    return (
      <Popup>
        {
            capitalComponents(this.props.capitalData).map((properties, index) =>
              <ComponentWrap>
                <Capital preview editable key={index} {...properties}></Capital>
              </ComponentWrap>
              )
        }
      </Popup>
    );
  }
}

SetCapitalComponent.propTypes = propTypes;

SetCapitalComponent.defaultProps = defaultProps;


Popup.propTypes = {
  children: React.PropTypes.any,
};


export default SetCapitalComponent;
