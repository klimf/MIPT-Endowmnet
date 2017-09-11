import styled from 'styled-components';
import { media } from '../../utils/style-utils';
import { unit, palette } from '../../utils/constants';

const Wrapper = styled.div`
  background-color: ${palette.white};
  z-index: 100;
  position: relative;
  padding: ${2.5 * unit}px ${unit / 3}%;
  margin-bottom: ${0 * unit}px;
  transition: background-color 0.3s ease;
`;

export default Wrapper;
