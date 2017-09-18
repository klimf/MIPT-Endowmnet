/**
*
* News
*
*/

import React, { PropTypes } from 'react';

import Title from 'components/Title';
import Button from 'components/Button';
import Item from './Item';

function News(props) {
  return (
    <div>
      <Title>{props.title}</Title>
      {props.items.map((item, index) => (
        <Item key={index} {...item} />
      ))}
      <Button centred type="border" to="/news">Все новости</Button>
    </div>
  );
}

News.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string,
};

export default News;
