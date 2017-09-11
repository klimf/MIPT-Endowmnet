import styled from 'styled-components';
import { palette, unit } from '../../utils/constants';

const Locale = styled.a`
  color: ${(props) => props.dark ? palette.white : palette.black};
  cursor: pointer;
  font-size: ${1.2 * unit}px;
  padding-top: ${0.6 * unit}px;
  margin: 0 0 0 80px;
  height: ${2.4 * unit}px;
  text-decoration: none;
  border-bottom: 1.5px solid ${(props) => !props.dark ? palette.black : palette.white};
  white-space: nowrap;
  transition: 0.1s;
 
  &:hover {
  border-bottom: 1.5px solid ${palette.primary};
  }
`;

export default Locale;
