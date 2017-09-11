import styled from 'styled-components';
import { palette } from '../../utils/constants';
import { hideOn } from '../../utils/style-utils';


const NavList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0 0 0;
  padding: 0;
  width: 100%;
  color: ${(props) => props.dark ? palette.white : palette.black};
  ${hideOn}
  & > a:hover { 
    color: ${(props) => props.dark ? palette.white : palette.primary};; 
    background-color: ${palette.light};
  }
`;

export default NavList;
