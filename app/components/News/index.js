/**
*
* News
*
*/

import React, { PropTypes } from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import Title from 'components/Title';
import Item from './Item';
import messages from './messages';

import img1 from '../../images/Bitmap1.jpg';
import img2 from '../../images/Bitmap2.jpg';
import img3 from '../../images/Bitmap3.jpg';

const news = [
  {
    title: 'Заголовок новости',
    description: 'Краткое описание этой новости. Краткое описание этой новости. Краткое описание этой новости. Краткое описание этой новости. ',
    image: img1,
    link: '/',
  },
  {
    title: 'Заголовок новости',
    description: 'Краткое описание этой новости. Краткое описание этой новости. Краткое описание Краткое описание Краткое описание этой новости. Краткое описание этой новости. ',
    image: img2,
    link: '/',
  },
  {
    title: 'Заголовок новости',
    description: 'Краткое описание этой новости. Краткое описание этой новости. Краткое описание этой новости. Краткое описание этой новости. ',
    image: img3,
    link: '/',
    date: '14',
    month: 'Сентября',
  },
];

function News() {
  return (
    <div>
      <Title><FormattedMessage {...messages.header} /></Title>
      {news.map((item, index) => (
        <Item key={index} {...item} />
      ))}
    </div>
  );
}

News.propTypes = {
  // news: PropTypes.object,
};

export default News;
