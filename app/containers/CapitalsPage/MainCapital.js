/**
 *
 * MainCapital
 *
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';

import FlexBox from 'components/FlexBox';
import Space from 'components/Space';
import Button from 'components/Button';

import { Block, palette } from '../../utils/constants';
import { formatMoney, hideOn, media } from '../../utils/helpers';

const Wrapper = styled.div`
  position: relative;
  float: left;
  display: inline-block;
  width: 66.666666%;
  height: 400px;
  ${media.medium`
    width: 100%;
  `}
  ${media.small`
    width: 100%;
    height: 300px;
  `}
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${palette.black};
`;

const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 24px 0;
  width: calc(100% - 180px);
  position: relative;
  height: 140px;
  ${media.small`
    width: 100%;
    height: auto;
    padding:0;
  `}
`;

const More = styled.p`
  position: relative;
  margin: 0 0 16px 0;
  color: ${palette.primary};
  text-decoration: underline;
  font-size: 18px;
  font-weight: 300;
`;

const Name = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: 300;
`;

const Stats = styled(FlexBox)`
  position:relative;
  width: 100%;
  flex-wrap: nowrap;
  & h2 {
    font-size: 24px;
    font-weight: 300;
    margin: 0;
  }
  & b {
    font-size: 20px;
    font-weight: 300;
  }
  & i {
    font-style: normal;
    color: ${palette.primary};
  }
  ${hideOn}
`;

const ImgWrapper = styled.div`
  display: inline-block;
  width: 140px;
  ${hideOn}
`;

const Image = styled.div`
  position:relative;
  width: 100%;
  padding: 50% 0;
  border-radius: 50%;
  overflow: hidden;
  background-color: ${palette.primary};
  background-size: cover;
  background-position: center;
`;

const Bar = styled.div`
  position:relative;
  width: ${(props) => props.progress ? props.progress : '100'}%;
  background-color: ${(props) => props.progress ? palette.primary : palette.disabled};
  margin: 0;
  padding: 0;
  height: 24px;
  border-radius: 12px;
`;

const HideableH2 = styled.h2`${hideOn}`;

const InLine = styled.div`display: inline-block; white-space: nowrap;`;

function MainCapital(props) {
  return (
    <Wrapper>
      <StyledLink to={props.to}>
        <Block padding="40px">
          <FlexBox horisontal="space-between">
            <ImgWrapper noSmall>
              <Image style={{ backgroundImage: `url(${props.image})` }} />
            </ImgWrapper>
            <Info>
              <Name>
                {props.name}
              </Name>
              <More>
                Подробнее
              </More>
            </Info>
          </FlexBox>
          <Stats horisontal="space-between">
            <HideableH2 noSmall>
              <b>Цель:</b> <InLine><i>{formatMoney(props.purpose)}</i> ₽</InLine>
            </HideableH2>
            <h2>
              <b>Осталось:</b> <InLine>{formatMoney(props.purpose - props.collected)} ₽</InLine>
            </h2>
          </Stats>
          <Bar>
            <Bar progress={78} />
          </Bar>
          <Button fake expanded type="border" margin="0 0 -28px 0">Пожертвовать в общий фонд</Button>
        </Block>
      </StyledLink>
    </Wrapper>
  );
}

MainCapital.propTypes = {
  to: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  purpose: PropTypes.number,
  collected: PropTypes.number,
};

export default MainCapital;
