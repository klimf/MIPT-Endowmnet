import { Link } from 'react-router';
import styled from 'styled-components';
import { palette, unit } from '../../utils/constants';

const NavItem = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  font-size: ${1.2 * unit}px;
  border-radius: 24px;
  transition: 0.3s ease;
  
  &:link { color: inherit; }
  &:visited { color: inherit; }
  &:active { color: inherit; }
`;

export default NavItem;
