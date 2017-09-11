import styled from 'styled-components';
import { palette } from '../../utils/constants';
import { hideOn, media } from '../../utils/style-utils';


const NavList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0 0 0;
  padding: 0;
  width: 100%;
  color: ${(props) => props.dark ? palette.white : palette.black};
  & > a:hover { 
    color: ${(props) => props.dark ? palette.white : palette.primary};; 
  }
  ${media.small`
    display: block;
  `}
  ${hideOn}
`;

export default NavList;
