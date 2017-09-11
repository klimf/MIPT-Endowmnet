import styled from 'styled-components';
import { hideOn } from '../../utils/style-utils';
import { unit, palette } from '../../utils/constants';

const Wrapper = styled.div`
  background-color: ${(props) => props.dark ? palette.black : palette.transparent};
  z-index: 100;
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: ${6 * unit}px ${unit / 3}%;
  margin-bottom: -${0 * unit}px;
  transition: background-color 0.3s ease;
  ${hideOn}
`;

export default Wrapper;
