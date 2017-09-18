import styled from 'styled-components';
import { hideOn } from '../../utils/helpers';
import { unit } from '../../utils/constants';

const Space = styled.div`
  width:100%;
  height: ${(props) => props.size * unit}px;
  ${hideOn}
`;

export default Space;
