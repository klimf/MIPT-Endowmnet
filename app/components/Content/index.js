import styled from 'styled-components';
import { hideOn, media } from '../../utils/helpers';
import { unit } from '../../utils/constants';

const Content = styled.div`
  max-width: 64em;
  margin: 0 auto;
  padding: 0 ${unit / 3}%;
  ${hideOn}
  ${media.large`padding: 0 ${3.2 * unit}px;`}
`;

export default Content;
