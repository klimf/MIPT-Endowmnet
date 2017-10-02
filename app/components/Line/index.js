import styled from 'styled-components';
import { hideOn } from '../../utils/helpers';
import { palette } from '../../utils/constants';

const Line = styled.div`
  width:100%;
  height: 3px;
  background-color: ${palette.primary};
  ${hideOn}
`;

export default Line;
