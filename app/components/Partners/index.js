/**
*
* Partners
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Title from '../Title';
import { unit } from '../../utils/constants';

import corp1 from '../../images/corps/1.png';
import corp2 from '../../images/corps/2.png';
import corp3 from '../../images/corps/3.png';
import corp4 from '../../images/corps/4.png';
import corp5 from '../../images/corps/5.png';
import corp6 from '../../images/corps/6.png';
import corp7 from '../../images/corps/7.png';
import corp8 from '../../images/corps/8.png';
import corp9 from '../../images/corps/9.png';

const partners = [corp1, corp2, corp3, corp4, corp5, corp6, corp7, corp8, corp9];

const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    & img {
      margin: ${unit}px ${2 * unit}px;
      height: 60px;
      width: auto;    
      transition: 0.3s ease;
      filter: grayscale(100%) sepia(100%) hue-rotate(181deg);
      &:hover {
        filter: none;
      }
    }
`;

function Partners(props) {
  return (
    <div>
      <Title>{props.title}</Title>
      <List>
        {props.items.map((href, index) => (
          <img key={index} src={href} alt="Partner" />
        ))}
      </List>
    </div>
  );
}

Partners.defaultProps = {
  items: partners,
  title: 'Партнеры',
};

Partners.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string,
};

export default Partners;
