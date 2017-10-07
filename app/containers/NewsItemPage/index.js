/*
 *
 * NewsItemPage
 *
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import makeSelectNewsItemPage from './selectors';
import ImgDesc from '../../components/ImgDesc/index';

import img from '../../images/CapitalImage.jpg';
import { palette } from '../../utils/constants';
import Content from '../../components/Content/index';
import Space from '../../components/Space/index';
import FlexBox from '../../components/FlexBox/index';
import Line from '../../components/Line/index';

const Title = styled.h1`
  margin: 24px 0;
  font-size: 36px;
  font-weight: 300;
  display: inline-block;
`;
const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
`;
const Date = styled.div`
  margin: 24px 0;
  display: inline-block;
  & p {
    display: inline-block;
    font-size: 20px;
    margin: 0;
    text-transform: uppercase;
    color: ${palette.black};
  }
  & h2 {
    display: inline-block;
    font-size: 36px;
    margin: 0;
    color: ${palette.primary};
  }
`;

export class NewsItemPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="NewsItemPage"
          meta={[
            { name: 'description', content: 'Description of NewsItemPage' },
          ]}
        />
        <Content>
          <FlexBox horisontal="space-between">
            <Space size={4} />
            <Title>{this.props.data.title}</Title>
            <Date>
              <h2>31 </h2>
              <p>сентября</p>
            </Date>
          </FlexBox>
          <Description>
            {this.props.data.shortdesc}
          </Description>
          <Space size={2} />
          <Line />
          <Space size={2} />
          <ImgDesc image={this.props.data.image} description={this.props.data.description} />
        </Content>
      </div>
    );
  }
}

NewsItemPage.defaultProps = {
  data: {
    title: 'Развитие факультета проблем физики и энергетики',
    shortdesc: 'Ежегодно МФТИ выпускает более 2.5 тысяч студентов во взрослую жизнь. Одно из главных событий университетского учебного года - церемония вручения почетных наград МФТИ и красных дипломов.',
    description: 'Ежегодно МФТИ выпускает более 2.5 тысяч студентов во взрослую жизнь. Одно из главных событий университетского учебного года - церемония вручения почетных наград МФТИ и красных дипломов.\n\n День выпускника - это ряд зрелищных мероприятий, разработанных университетом для того, чтобы ребята запомнили этот день не только умом, но и душой, и сердцем! Весь вечер для молодых людей выступают почетные приглашенные гости. Одно из главных событий университетского учебного года - церемония вручения почетных наград МФТИ и красных дипломов.\n\n День выпускника - это ряд зрелищных мероприятий, разработанных университетом для того, чтобы ребята запомнили этот день не только умом, но и душой, и сердцем! Весь вечер для молодых людей выступают почетные приглашенные гости.',
    image: img,
    date: 24,
    month: 'сентябрь',
  },
};
NewsItemPage.propTypes = {
  data: PropTypes.object,
  // dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  NewsItemPage: makeSelectNewsItemPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsItemPage);
