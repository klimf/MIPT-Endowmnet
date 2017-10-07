/*
 *
 * StoryPage
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { createStructuredSelector } from 'reselect';

import makeSelectStoryPage from './selectors';
import QuoteItem from '../../components/Quotes/Item';
import Content from '../../components/Content/index';
import Title from '../../components/Title/index';

import face1 from '../../images/Face1.jpg';
import img1 from '../../images/CapitalImage.jpg';

import Space from '../../components/Space/index';
import ImgDesc from '../../components/ImgDesc/index';
import Attachments from '../../components/Attachments/index';

const data = {
  title: 'Сергей Гуз о своем жизненном пути',
  description: 'Ежегодно МФТИ выпускает более 2.5 тысяч студентов во взрослую жизнь. Одно из главных событий университетского учебного года - церемония вручения почетных наград МФТИ и красных дипломов.\n\n День выпускника - это ряд зрелищных мероприятий, разработанных университетом для того, чтобы ребята запомнили этот день не только умом, но и душой, и сердцем! Весь вечер для молодых людей выступают почетные приглашенные гости. Одно из главных событий университетского учебного года - церемония вручения почетных наград МФТИ и красных дипломов.\n\n День выпускника - это ряд зрелищных мероприятий, разработанных университетом для того, чтобы ребята запомнили этот день не только умом, но и душой, и сердцем! Весь вечер для молодых людей выступают почетные приглашенные гости.',
  name: 'Сергей Гуз',
  status: 'Зав. кафедры физики',
  quote: 'Развитие факультета проблем физики и энергетики - важная составляющая работы фонда университета МФТИ',
  face: face1,
  image: img1,
};

export class StoryPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet
          title="StoryPage"
          meta={[
            { name: 'description', content: 'Description of StoryPage' },
          ]}
        />
        <Content>
          <Space size={4} />
          <Title>{data.title}</Title>
          <QuoteItem noMore quote={data.quote} image={data.face} name={data.name} status={data.status} />
          <Space size={2} />
          <ImgDesc image={data.image} description={data.description} />
          <Space size={2} />
          <Title>Документы</Title>
          <Attachments />
        </Content>
      </div>
    );
  }
}

StoryPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  StoryPage: makeSelectStoryPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StoryPage);
