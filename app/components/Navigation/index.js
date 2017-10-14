import styled from 'styled-components';
import { Link } from 'react-router';
import { palette, block, unit } from '../../utils/constants';

export const Navigation = styled.div`
${block}
display: flex;
margin-top: ${unit * 4}px;
flex-wrap: wrap;
justify-content: space-around;
min-height: 42px;
overflow: hidden;
border-radius: 21px;
`;

const isThatPage = (props) => (props.href === location.href || props.href === location.pathname);

export const NavItem = styled(Link)`
text-decoration: none;
background-color: ${(props) => isThatPage(props) ? palette.primary : palette.transparent};
color: ${(props) => isThatPage(props) ? palette.white : palette.primary};
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
