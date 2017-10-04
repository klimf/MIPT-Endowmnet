import styled from 'styled-components';
import { hideOn } from '../../utils/helpers';

const FlexBox = styled.div`
  display: flex;
  width: ${(props) => props.expanded ? '100%' : 'auto'};
  flex-wrap: ${(props) => props.noWrap ? 'nowrap' : 'wrap'};
  justify-content: ${(props) => props.horisontal ? props.horisontal : 'normal'};
  align-items: ${(props) => props.vertical ? props.vertical : 'normal'};
  padding: ${(props) => props.padding ? props.padding : 0};
  margin: ${(props) => props.margin ? props.margin : 0};
  ${hideOn}
`;

export default FlexBox;
