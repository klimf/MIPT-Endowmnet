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
import makeSelectNewsItemPage, { makeSelectNewsItem } from './selectors';
import { fetchNewsData } from './actions';
import Image from '../../components/FullImage';

import img from '../../images/CapitalImage.jpg';
import { palette } from '../../utils/constants';
import Content from '../../components/Content/index';
import Space from '../../components/Space/index';
import FlexBox from '../../components/FlexBox/index';
import Line from '../../components/Line/index';
import { formatDateWithMonth, resolveStatic } from '../../utils/helpers';
import contentResolver from '../../components/ComponentResolver';


const Title = styled.h1`
  margin: 24px 0;
  font-size: 36px;
  font-weight: 400;
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

  componentWillMount() {
    this.props.fetchNewsData.start({ id: this.props.routeParams.id });
  }

  render() {
    return (
      <div>
        <Helmet
          title={this.props.newsItem.name}
          meta={[
            { name: 'description', content: this.props.newsItem.description },
            { name: 'og:url', content: window.location.href },
            { name: 'og:type', content: 'website' },
            { name: 'og:title', content: this.props.newsItem.name },
            { name: 'og:description', content: this.props.newsItem.description },
            { name: 'og:image', content: resolveStatic(this.props.newsItem.image ? this.props.newsItem.image.small : null) },
          ]}
        />
        <Content>
          <FlexBox horisontal="space-between">
            <Space size={4} />
            <Title>{this.props.newsItem.name}</Title>
            {this.props.newsItem.date &&
              <Date>
                <h2>{`${formatDateWithMonth(this.props.newsItem.date).day}`}</h2>
                <p>{formatDateWithMonth(this.props.newsItem.date).month}</p>
              </Date>
            }
          </FlexBox>
          <Description>
            {this.props.newsItem.description}
          </Description>
          <Space size={2} />
          <Line />
          <Space size={2} />
          <Image src={this.props.newsItem.image && this.props.newsItem.image.original} />
          {this.props.newsItem.content &&
           contentResolver(this.props.newsItem.content)
          }
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
  newsItem: PropTypes.object,
  fetchNewsData: PropTypes.object,
  routeParams: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  NewsItemPage: makeSelectNewsItemPage(),
  newsItem: makeSelectNewsItem(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchNewsData: fetchNewsData.bindTo(dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsItemPage);
