/**
*
* Partners
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Title from '../Title';
import Button from '../Button';
import Space from '../Space';
import { unit } from '../../utils/constants';

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
      <Space size={2} />
      <Button centred type="border" to="/partners">Все спонсоры</Button>
    </div>
  );
}

Partners.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string,
};

export default Partners;
