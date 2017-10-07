import styled, { css } from 'styled-components';
import placeholder from '../images/placeholder.png';
import { media, resolveStatic } from './helpers';

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
export const bigShadow = css`
  box-shadow: 0 ${2 * unit}px ${4 * unit}px ${palette.dark};
`;

export const rounded = css`
  border-radius: 8px;
`;
export const block = css`
  background-color: ${palette.white};
  transition: 0.3s ease;
  ${rounded}
  ${shadow}
  ${(props) => !props.noHover && `
    &:hover {
      transform: scale(1.01);
      ${bigShadow}
    }`
  } 
  
`;

export const image = css`
  background: url(${(props) => props.src ? resolveStatic(props.src) : placeholder}) center no-repeat;
  background-size: cover;
`;

export const Block = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  position: absolute;
  top: ${(props) => props.margin ? props.margin : '10px'};
  right: ${(props) => props.margin ? props.margin : '10px'};
  bottom: ${(props) => props.margin ? props.margin : '10px'};
  left: ${(props) => props.margin ? props.margin : '10px'};
  padding: ${(props) => props.padding ? props.padding : '24px'};
  ${block}
  ${media.small`
    padding: ${(props) => props.paddingSmall ? props.paddingSmall : '24px'};
  `}
`;

