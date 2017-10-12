import styled from 'styled-components';
import { palette, block } from '../../utils/constants';


export const Navigation = styled.div`
${block}
display: flex;
flex-wrap: wrap;
justify-content: space-around;
min-height: 42px;
overflow: hidden;
border-radius: 21px;
`;

const isThatPage = (props) => (props.href === location.href || props.href === location.pathname);

export const NavItem = styled.a`
text-decoration: none;
background-color: ${(props) => isThatPage(props) ? palette.primary : palette.transparent};
color: ${(props) => isThatPage(props) ? palette.white : palette.black};
cursor: pointer;
font-size: 20px;
flex-grow: 1;
text-align: center;
padding: 11px 24px 0;
min-height: 42px;
transition: 0.3s ease;
border-left: 1px solid ${palette.dark};
&:hover {
  background-color: ${(props) => isThatPage(props) ? palette.primary : palette.dark};
}
`;
