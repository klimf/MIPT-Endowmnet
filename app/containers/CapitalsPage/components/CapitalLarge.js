/**
 *
 * CapitalLarge
 *
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';

import FlexBox from 'components/FlexBox';

import Button from 'components/Button';
import logo from '../../../images/MiptLogo.jpg';
import { palette } from '../../../utils/constants';
import { formatMoney, hideOn, media, resolveStatic } from '../../../utils/helpers';
import Image from '../../../components/Image/index';
import Block from '../../../components/Block';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  ${(props) => props.preview && `
    width: 600px;
    height: 400px;
  `}
  ${media.medium`
    width: 100%;
  `}
  ${media.small`
    width: 100%;
  `}
  position: relative;
`;


const Info = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: calc(100% - 180px);
  position: relative;
  margin-left: 20px;
  height: 140px;
  ${media.small`
    width: 100%;
    height: auto;
    padding:0;
    margin-left: 0;
  `}
`;

const Description = styled.div`
  font-size: 18px;
  font-style: italic;
  opacity: .8;
  ${hideOn}
`;

const More = styled.p`
  position: relative;
  margin: 0 0 16px 0;
  display: block;
  width: 100%;
  color: ${palette.primary};
  text-decoration: underline;
  font-size: 18px;
  font-weight: 300;
`;

const Name = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  height: 60px;
  ${media.small`
  height: auto;
`}
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
  height: 140px;
  ${hideOn}
`;


const Money = styled.div`
  width: 100%;
  color: ${palette.primary};
  font-size: 20px;
`;

const CollectedLabel = styled.span`
  color: ${palette.black};
  font-weigh: 300;
`;


function CapitalLarge(props) {
  return (
    <Wrapper preview={props.preview} >
      <Block padding="40px">
        <FlexBox style={{ height: '140px' }}>
          <ImgWrapper noSmall>
            <Image style={{ height: '140px' }} rounded shadow src={props.image && resolveStatic(props.image.small)} />
          </ImgWrapper>
          <Info>
            <Name>
              {props.name}
            </Name>
            <More>
                Подробнее
              </More>
            <Money><CollectedLabel>Собрано:</CollectedLabel> { formatMoney(props.given) } ₽</Money>
          </Info>
        </FlexBox>
        <Stats horisontal="space-between">
          <Description >
            {props.description}
          </Description>
        </Stats>
        <Button to={'/donate'} expanded type="border" margin="0 0 -28px 0">Пожертвовать</Button>
      </Block>
    </Wrapper>
  );
}

CapitalLarge.propTypes = {
  preview: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.object,
  given: PropTypes.number.isRequired,
};

CapitalLarge.defaultProps = {
  name: 'Развитие факультета проблем физики и энергетики',
  collected: 5430000,
  description: 'Ежегодно МФТИ выпускает более 2.5 тысяч студентов во взрослую жизнь. Одно из главных событий университетского учебного года - церемония вручения почетных наград МФТИ и красных дипломов. ',
  to: '/capital/kek',
  image: { small: logo },
};

export default CapitalLarge;
