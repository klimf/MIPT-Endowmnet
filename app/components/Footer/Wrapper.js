import styled from 'styled-components';
import { hideOn } from '../../utils/helpers';
import { unit, palette } from '../../utils/constants';

const Wrapper = styled.div`
  background-color: ${palette.white};
  position: relative;
  padding: ${2.5 * unit}px ${unit / 3}%;
`;

export default Wrapper;
