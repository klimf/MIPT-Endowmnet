import styled from 'styled-components';
import { hideOn } from '../../utils/style-utils';

const FlexBox = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: ${(props) => props.horisontal};
  align-items: ${(props) => props.vertical};
  ${hideOn}
`;

export default FlexBox;
