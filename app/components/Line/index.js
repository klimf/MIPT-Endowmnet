import styled from 'styled-components';
import { hideOn } from '../../utils/helpers';
import { palette } from '../../utils/constants';

const Line = styled.div`
  border-radius: 1.5px;
  background-color: ${(props) => props.color ? palette[props.color] : palette.primary};
  ${(props) => props.absolute ? 'position: absolute;' : 'width:100%; height: 3px;'}
  ${(props) => props.top && 'top: 0; left: 0; width:100%; height: 3px;'}
  ${(props) => props.right && 'right: 0; top: 0; height:100%; width: 3px;'}
  ${(props) => props.bottom && 'bottom: 0; left: 0; width:100%; height: 3px;'}
  ${(props) => props.left && 'left: 0; top: 0; height:100%; width: 3px;'}
  ${hideOn}
`;

export default Line;
