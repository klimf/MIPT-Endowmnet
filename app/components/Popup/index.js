import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import Overlay from '../Overlay';
import Title from '../Title';

const CancelButton = (props) => (
  <Button {...props} fake expanded>
      Отмена
    </Button>
  );

const PopupWrap = styled.div`
      display: block;
      height: 400px;
      max-width: 960px;
      backgroud: #000;
      margin: 0 auto;
  `;

const Popup = (props) => (
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

export default Popup;
