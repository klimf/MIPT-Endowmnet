import styled from 'styled-components';
import { hideOn } from '../../utils/helpers';

const FlexBox = styled.div`
  display: flex;
  flex-wrap: ${(props) => props.noWrap ? 'nowrap' : 'wrap'};
  justify-content: ${(props) => props.horisontal ? props.horisontal : 'auto'};
  align-items: ${(props) => props.vertical ? props.vertical : 'auto'};
  padding: ${(props) => props.padding ? props.padding : 0};
  ${hideOn}
`;

export default FlexBox;
