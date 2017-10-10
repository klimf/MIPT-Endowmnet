/**
*
* News
*
*/

import React, { PropTypes } from 'react';

import Title from 'components/Title';
import Item from './Item';

import img1 from '../../images/Bitmap1.jpg';
import img2 from '../../images/Bitmap2.jpg';
import img3 from '../../images/Bitmap3.jpg';

function News(props) {
  return (
    <div>
      <Title>{props.title}</Title>
      {props.items.map((item, index) => (
        <Item key={index} {...item} />
      ))}
    </div>
  );
}

News.defaultProps = {
  items: [
    {
      name: 'Заголовок новости',
      description: 'Краткое описание этой новости. Краткое описание этой новости. Краткое описание этой новости. Краткое описание этой новости. ',
      image: { small: img1 },
      link: '/newsitem',
      local: true,
    },
    {
      name: 'Заголовок новости',
      description: 'Краткое описание этой новости. Краткое описание этой новости. Краткое описание Краткое описание Краткое описание этой новости. Краткое описание этой новости. ',
      image: { small: img2 },
      link: '/newsitem',
      local: true,
    },
    {
      name: 'Заголовок новости',
      description: 'Краткое описание этой новости. Краткое описание этой новости. Краткое описание этой новости. Краткое описание этой новости. ',
      image: { small: img3 },
      link: '/newsitem',
      local: true,
    },
  ],
};

News.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string,
};

export default News;
export { default as NewsItem } from './Item';
