/**
*
* Quotes
*
*/

import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';
import Title from 'components/Title';
import Item from './Item';
import face1 from '../../images/Face1.jpg';
import face2 from '../../images/Face2.jpg';
import face3 from '../../images/Face3.jpg';


export const StyledLink = styled(Link)`
text-decoration: none;
font-weight: 300;
`;

function Quotes(props) {
  return (

    <div>
      <Title>{props.title}</Title>
      {props.items.map((item, index) => (
        <StyledLink to={item.link}>
          <Item {...props} key={index} index={index} {...item} />
        </StyledLink>
      ))}
    </div>

  );
}

Quotes.defaultProps = {
  items: [
    {
      name: 'Сергей Гуз',
      status: 'Зав. кафедры физики',
      quote: 'Развитие факультета проблем физики и энергетики - важная составляющая работы фонда университета МФТИ',
      image: face1,
      link: '/story',
    },
    {
      name: 'Сергей Гуз',
      status: 'Зав. кафедры физики',
      quote: 'Развитие факультета проблем физики и энергетики - важная составляющая работы фонда университета МФТИ',
      image: face2,
      link: '/story',
    },
    {
      name: 'Сергей Гуз',
      status: 'Зав. кафедры физики',
      quote: 'Развитие факультета проблем физики и энергетики - важная составляющая работы фонда университета МФТИ',
      image: face3,
      link: '/story',
    },
  ],
};

Quotes.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string,
};

export default Quotes;
