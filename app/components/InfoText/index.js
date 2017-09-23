import styled from 'styled-components';
import FlexBox from '../FlexBox';
import { palette } from '../../utils/constants';
import { hideOn, media } from '../../utils/helpers';

const InfoText = styled(FlexBox)`
  position:relative;
  flex-wrap: nowrap;
  height:36px;
  & h2 {
    font-size: 36px;
    font-weight: 300;
    margin: 0;
  }
  & b {
    font-size: 24px;
    font-weight: 300;
  }
  & i {
    font-style: normal;
    color: ${palette.primary};
  }
  ${hideOn}
  ${media.small`
    flex-flow: row;
    flex-wrap: wrap;
  `}
`;

export default InfoText;
