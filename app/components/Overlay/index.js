import styled from 'styled-components';
import { palette } from '../../utils/constants';
import { hideOn } from '../../utils/helpers';

const Overlay = styled.div`
  position: fixed;
  z-index: 1500;
  top:0;
  right:0;
  bottom:0;
  left:0;
  min-height: 100%;
  overflow: auto;
  background: ${(props) => props.background ? palette.background : palette.white};
  pointer-events: ${(props) => props.show ? 'auto' : 'none'};
  opacity: ${(props) => props.show ? '100' : '0'};
  transition: 0.3s ease;
  align-items: center;
  ${hideOn}
`;

export default Overlay;
