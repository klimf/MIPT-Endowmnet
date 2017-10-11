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
import { bindAll } from 'redux-act';
import scrollToComponent from 'react-scroll-to-component';

import makeSelectCapitalPage, { makeSelectCurrentCapital } from './selectors';
import * as actions from './actions';
import img from '../../images/CapitalImage.jpg';
import face from '../../images/Face.jpg';
import face1 from '../../images/Face1.jpg';
import face2 from '../../images/Face2.jpg';
import face3 from '../../images/Face3.jpg';
import Content from '../../components/Content/index';
import Space from '../../components/Space/index';
import { hideOn, media, formatMoney } from '../../utils/helpers';
import Quotes from '../../components/Quotes/index';
import { DonationForm } from '../../components/DonationForm/index';
import WdH from '../../components/WdH/index';
import FlexBox from '../../components/FlexBox';
import InfoText from '../../components/InfoText/index';
import Button from '../../components/Button/index';
import Title from '../../components/Title/index';
import Image from '../../components/FullImage/index';
import componentResolver from '../../components/ComponentResolver';


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

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 0 0 0 48px;
  width: 100%;
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

  componentWillMount() {
    this.props.fetchCapital.start({ capitalName: this.props.routeParams.capitalName });
  }

  goToDonation() {
    scrollToComponent(this.donationForm);
  }

  render() {
    return (
      <div>
        {this.props.capital.data &&
        <Helmet
          title={this.props.capital.data.name}
          meta={[
            { name: 'description', content: this.props.capital.data.description },
          ]}
        />
      }
        { this.props.capital.data &&
        <Content>
          <Space size={6} />
          <Name noLarge>{this.props.capital.data.name}</Name>
          <Image noMedium noLarge rounded shadow src={this.props.capital.data.image && this.props.capital.data.image.small} />
          <Head horisontal="space-between" noWrap >
            <WdH noSmall rounded shadow image={this.props.capital.data.image && this.props.capital.data.image.small} />
            <Info >
              <Name noSmall noMedium>{this.props.capital.data.name}</Name>
              <ShortDesc>{this.props.capital.data.description}</ShortDesc>
              <InfoAction>
                <InfoText>
                  <h2>
                    <b>Собрано: </b>
                    <i>{formatMoney(this.props.capital.data.given)} ₽</i>
                  </h2>
                </InfoText>
                <BtnFix>
                  <Button type="header">Пожертвовать</Button>
                </BtnFix>
              </InfoAction>
            </Info>
          </Head>
          <Space size={2} />
          <Title>О капитале</Title>
          {this.props.capital.data.content &&
            componentResolver(this.props.capital.data.content)
          }

          <Space size={3} />
          <Quotes title="Основатели" left noMore items={this.props.capital.data.founders || []} />
          <Space size={3} />
          <Quotes title="Получатели" right noMore items={this.props.capital.data.receivers || []} />
          <Space size={2} />
          <DonationForm ref={(e) => (this.donationForm = e)} title="Пополнить капитал" />
        </Content>
      }
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
    founders: [{
      name: 'Сергей Гуз',
      status: 'Зав. кафедры физики',
      quote: 'Развитие факультета проблем физики и энергетики - важная составляющая работы фонда университета МФТИ',
      image: face,
    }, {
      name: 'Сергей Гуз',
      status: 'Зав. кафедры физики',
      quote: 'Развитие факультета проблем физики и энергетики - важная составляющая работы фонда университета МФТИ',
      image: face,
    }],
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
  capital: PropTypes.any,
  fetchCapital: PropTypes.any,
  routeParams: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  CapitalPage: makeSelectCapitalPage(),
  capital: makeSelectCurrentCapital(),
});

function mapDispatchToProps(dispatch) {
  return bindAll(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CapitalPage);
