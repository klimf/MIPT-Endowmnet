/*
 *
 * CapitalPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import makeSelectCapitalPage from './selectors';

import img from '../../images/CapitalImage.jpg';
import face from '../../images/Face.jpg';
import face1 from '../../images/Face1.jpg';
import face2 from '../../images/Face2.jpg';
import face3 from '../../images/Face3.jpg';
import Content from '../../components/Content/index';
import { image, rounded, shadow } from '../../utils/constants';
import Space from '../../components/Space/index';
import { hideOn, media } from '../../utils/helpers';
import Quotes from '../../components/Quotes/index';
import { DonationForm } from '../../components/DonationForm/index';
import WdH from '../../components/WdH/index';
import FlexBox from '../../components/FlexBox';
import InfoText from '../../components/InfoText/index';
import Button from '../../components/Button/index';
import Title from '../../components/Title/index';
import Image from "../../components/Image/index";

const About = styled.div`
  position: relative;
  display: flex;
  ${media.small`
    flex-direction: column-reverse;
    flex-wrap:wrap;
  `}
`;

const Head = styled(FlexBox)`
  position: relative;
  height: 240px;
  ${media.medium`
    height: 300px;
  `}
  ${media.small`
    height: auto;
  `}
  ${hideOn}
`;

const Description = styled.p`
  font-size: 20px;
  margin: 0;
  height: 100%;
`;

const AboutImage = styled.div`
  min-width: 400px;
  margin: 0 0 0 24px;
  min-height: 100%;
  max-height: 400px;
  ${image}
  ${rounded}
  ${shadow}
  ${media.medium`
    min-width: 300px;
  `}
  ${media.small`
    height: 320px;
    margin: 0 0 24px 0;
    min-width: 100%;
    max-width: 100%;
  `}
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 0 0 0 48px;
  ${media.small`
    padding: 24px 0 0 0;
  `}
`;

const Name = styled.h2`
  font-size: 36px;
  margin: 0;
  ${hideOn}
  ${media.small`
    margin: 0 0 24px 0;
  `}
  ${media.medium`
    margin: 0 0 24px 0;
  `}
`;

const ShortDesc = styled.p`
  font-size: 20px;
  margin: 0;
  ${media.small`
    margin: 0 0 24px 0
  `}
`;

const InfoAction = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  & > * {
    display: inline-block;
  }
`;

const BtnFix = styled.div`
    position: relative;
    top: 4px;
`;


export class CapitalPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="CapitalPage"
          meta={[
            { name: 'description', content: 'Description of CapitalPage' },
          ]}
        />
        <Content>
          <Space size={4} />
          <Space size={2} />
          <Name noLarge>{this.props.data.name}</Name>
          <Image noMedium noLarge rounded shadow src={this.props.data.image} />
          <Head horisontal="space-between" noWrap >
            <WdH noSmall rounded shadow src={this.props.data.image} />
            <Info >
              <Name noSmall noMedium>{this.props.data.name}</Name>
              <ShortDesc>{this.props.data.shortdesc}</ShortDesc>
              <InfoAction>
                <InfoText>
                  <h2>
                    <b>Собрано:</b>
                    <i> 100 ₽</i>
                  </h2>
                </InfoText>
                <BtnFix>
                  <Button type="header">Пожертвовать</Button>
                </BtnFix>
              </InfoAction>
            </Info>
          </Head>
          <Space size={2} />
          <Title>О фонде</Title>
          <About>
            <Description>{this.props.data.description}</Description>
            <AboutImage src={this.props.data.image} />
          </About>
          <Space size={3} />
          <Quotes title="Получатели" items={this.props.data.receivers} />
          <Space size={2} />
          <DonationForm title="Помочь капиталу" />
        </Content>
      </div>
    );
  }
}

CapitalPage.defaultProps = {
  data: {
    name: 'Развитие факультета проблем физики и энергетики',
    shortdesc: 'Ежегодно МФТИ выпускает более 2.5 тысяч студентов во взрослую жизнь. Одно из главных событий университетского учебного года - церемония вручения почетных наград МФТИ и красных дипломов.',
    description: 'Ежегодно МФТИ выпускает более 2.5 тысяч студентов во взрослую жизнь. Одно из главных событий университетского учебного года - церемония вручения почетных наград МФТИ и красных дипломов.\n\n День выпускника - это ряд зрелищных мероприятий, разработанных университетом для того, чтобы ребята запомнили этот день не только умом, но и душой, и сердцем! Весь вечер для молодых людей выступают почетные приглашенные гости. Одно из главных событий университетского учебного года - церемония вручения почетных наград МФТИ и красных дипломов.\n\n День выпускника - это ряд зрелищных мероприятий, разработанных университетом для того, чтобы ребята запомнили этот день не только умом, но и душой, и сердцем! Весь вечер для молодых людей выступают почетные приглашенные гости.',
    collected: 1435000,
    image: img,
    founder: {
      name: 'Сергей Гуз',
      status: 'Зав. кафедры физики',
      quote: 'Развитие факультета проблем физики и энергетики - важная составляющая работы фонда университета МФТИ',
      image: face,
    },
    receivers: [
      {
        name: 'Сергей Гуз',
        status: 'Зав. кафедры физики',
        quote: 'Развитие факультета проблем физики и энергетики - важная составляющая работы фонда университета МФТИ',
        image: face1,
        link: '/',
      },
      {
        name: 'Сергей Гуз',
        status: 'Зав. кафедры физики',
        quote: 'Развитие факультета проблем физики и энергетики - важная составляющая работы фонда университета МФТИ',
        image: face2,
        link: '/',
      },
      {
        name: 'Сергей Гуз',
        status: 'Зав. кафедры физики',
        quote: 'Развитие факультета проблем физики и энергетики - важная составляющая работы фонда университета МФТИ',
        image: face3,
        link: '/',
      },
    ],
  },
};

CapitalPage.propTypes = {
  data: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  CapitalPage: makeSelectCapitalPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CapitalPage);
