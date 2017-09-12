import styled from 'styled-components';
import { hideOn } from '../../utils/style-utils';
import { unit, palette } from '../../utils/constants';

const Wrapper = styled.div`
  background-color: ${palette.white};
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: ${6 * unit}px ${unit / 3}%;
  ${hideOn}
`;

export default Wrapper;
