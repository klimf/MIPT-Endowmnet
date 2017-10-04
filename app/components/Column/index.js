import styled from 'styled-components';
import { hideOn, media, padding } from '../../utils/helpers';

const unit = 8.333333333;

const Column = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  ${(props) => props.all && `
    width: ${props.all * unit}%;
  `}
  ${(props) => props.small && media.small`
    width: ${props.small * unit}%;
  `}
  ${(props) => props.medium && media.medium`
    width: ${props.medium * unit}%;
  `}
  ${(props) => props.large && media.large`
    width: ${props.large * unit}%;
  `}
  ${padding}
  ${hideOn}
`;

export default Column;
