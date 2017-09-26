import styled from 'styled-components';

const Title = styled.h1`
  width: 100%;
  font-weight: 300;
  font-size: 36px;
  text-align: ${(props) => props.align || 'center'};
  ${(props) => props.noMargin && 'margin: 0;'}
`;

export default Title;
