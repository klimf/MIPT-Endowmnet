import { css } from 'styled-components';
import { unit } from '../../utils/constants';
import { media } from '../../utils/style-utils';

const defaultStyle = css`
  min-width: 100px;
  height: ${3 * unit}px;
  display: inline-block;
  box-sizing: border-box;
  padding: ${0.5 * unit}px ${1.5 * unit}px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-radius: ${2 * unit}px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-size: ${1 * unit}px;
  font-weight: 500;
  border: 3px solid ${(props) => props.theme.borderColor};
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  box-shadow: ${(props) => props.theme.shadow};
  transition: 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.bgColorHover};
    color: ${(props) => props.theme.textColorHover};
    border: 3px solid ${(props) => props.theme.borderColorHover};
    box-shadow: ${(props) => props.theme.shadowHover};
    transform: ${(props) => props.theme.transformHover};
  }
  
  ${media.small`
    &:hover {
      box-shadow: ${(props) => props.theme.shadow};
      transform: none;
    }
  `}
`;

// defaultStyle.defaultProps = {
//   theme: {
//     bgColor: palette.transparent,
//     borderColor: palette.black,
//     textColor: palette.black,
//     shadow: 'none',
//     bgColorHover: palette.black,
//     textColorHover: palette.white,
//     borderColorHover: palette.black,
//     shadowHover: 'none',
//   },
// };

export default defaultStyle;
