import styled, { css } from 'styled-components';

export const palette = {
  accent: '#B84646',
  primary: '#4674B8',
  secondary: '#C1CFE4',
  background: '#F8F8F8',
  disabled: '#D8D8D8',
  gray: '#979797',
  white: '#FFFFFF',
  black: '#31353E',
  light: 'rgba(255, 255, 255, 0.2)',
  dark: 'rgba(0, 0, 0, 0.07)',
  transparent: 'transparent',
};

export const unit = 12;

export const shadow = css`
  box-shadow: 0 ${unit}px ${2 * unit}px ${palette.dark};
`;

export const block = css`
  background-color: ${palette.white};
  border-radius: 8px;
  ${shadow}
`;

export const Block = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  bottom: 10px;
  left: 10px;
  padding: ${(props) => props.padding ? props.padding : '24px'};
  ${block}
`;
