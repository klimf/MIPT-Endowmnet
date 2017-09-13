import { Link } from 'react-router';
import styled from 'styled-components';
import { palette, unit } from '../../utils/constants';
import { media } from '../../utils/style-utils';


const NavItem = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  font-size: ${1.2 * unit}px;
  transition: 0.2s;
  
  &:link { color: inherit; }
  &:visited { color: inherit; }
  &:active { color: inherit; }
  
  ${media.small`
    display:block;
    padding: 0;
    margin: 0 ${unit / 3}% ${2 * unit}px;
    border-bottom: 3px solid ${palette.primary};
  `}
`;

export default NavItem;
