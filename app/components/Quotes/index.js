/**
*
* Quotes
*
*/

import React, { PropTypes } from 'react';

import Title from 'components/Title';
import Button from 'components/Button';
import Item from './Item';

function Quotes(props) {
  return (
    <div>
      <Title>{props.title}</Title>
      {props.items.map((item, index) => (
        <Item key={index} index={index} {...item} />
      ))}
      <Button centred type="border" to="/news">Все новости</Button>
    </div>
  );
}

Quotes.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string,
};

export default Quotes;
