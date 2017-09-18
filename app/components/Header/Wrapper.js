import styled from 'styled-components';
// import { media } from '../../utils/helpers';
import { unit, palette } from '../../utils/constants';

const Wrapper = styled.div`
  background-color: ${palette.white};
  position: relative;
  padding: ${2.5 * unit}px ${unit / 3}%;
  margin-bottom: ${0 * unit}px;
`;

export default Wrapper;
