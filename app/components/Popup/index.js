import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import Overlay from '../Overlay';
import Title from '../Title';
import { media } from '../../utils/helpers';
import Space from '../Space/index';

const CancelButton = (props) => (
  <Button {...props} fake expanded>
      Отмена
    </Button>
  );

const PopupWrap = styled.div`
      display: block;
      height: 400px;
      width: 960px;
      margin: 0 auto;
      ${media.medium`
        width: 100%;
      `}
  `;

const Popup = (props) => (
  <Overlay show={props.show}>
    <PopupWrap>
      <Space size={4} />
      <Title>{props.title}</Title>
      <Space size={1} />
      <CancelButton type="noHover" onClick={props.onCancel} />
      <Space size={1} />
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
