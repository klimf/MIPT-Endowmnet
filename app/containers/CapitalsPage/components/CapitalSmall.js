/**
 *
 * Capital
 *
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { palette } from '../../../utils/constants';
import FlexBox from '../../../components/FlexBox/index';
import { formatMoney, media } from '../../../utils/helpers';
import Block from '../../../components/Block';

const Wrapper = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  ${(props) => props.preview && `
  width: 300px;
  height: 200px;
`}
  ${media.small`
    width: 100%;
  `}
`;

const Name = styled.h2`
  margin: 0;
  font-size: 20px;
  font-weight: bold;
`;

const Info = styled.p`
  position: relative;
  margin: 16px 0 0 0;
  color: ${palette.black};
  font-weight: 300;
  width: 100%;
  font-size: 20px;
  & b {
    font-weight: 400;
    color: ${palette.primary};
  }
`;

const More = styled.p`
  position: relative;
  width: 100%;
  margin: 16px 0 0 0;
  color: ${palette.primary};
  text-decoration: underline;
  font-size: 18px;
  font-weight: 300;
`;

function Capital(props) {
  return (
    <Wrapper preview={props.preview}>
      <Block>
        <FlexBox>
          <Name>{props.name}</Name>
          <Info>Собрано: <b>{formatMoney(props.given)}</b> ₽</Info>
          <More>Подробнее</More>
        </FlexBox>
      </Block>
    </Wrapper>
  );
}


Capital.propTypes = {
  preview: PropTypes.bool,
  name: PropTypes.string,
  given: PropTypes.number,
};

Capital.defaultProps = {
  name: 'Развитие факультета проблем физики и энергетики',
  description: 'Ежегодно МФТИ выпускает более 2.5 тысяч студентов во взрослую жизнь. Одно из главных событий университетского учебного года - церемония вручения почетных наград МФТИ и красных дипломов. ',
  collected: 1435000,
  to: '/capital/kek',
};

export default Capital;
