import { css } from 'styled-components';

export const modalStyles = css`
.modalWrapper {
  white-space: nowrap;
  background: #fff;
  box-shadow: 0 1px 18px 0 rgba(0, 0, 0, 0.3);
}

.modalInput {
  background-color: transparent;
  border: none;
  color: #181818 !important;
  font-size: 15px;
  height: auto;
  line-height: 1.2;
  margin: 0;
  padding: 16px;
  width: 270px;
}

.modalInput:focus {
  outline: none;
}

.modalButton {
  padding: 0;
  cursor: pointer;
  border: 0;
  height: 46px;
  width: 46px;
  background: transparent;
  padding-right: 16px;
  color: #ccc;
}

.modalButton:hover {
  color: #9d1d20;
}

.modalButtonWrapper {
  display: inline-block;
  vertical-align: bottom;
}
`;
