/**
 *
 * Faces
 *
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Item from './Item';

import face from '../../images/Face.jpg';
import face1 from '../../images/Face1.jpg';
import face2 from '../../images/Face2.jpg';
import face3 from '../../images/Face3.jpg';
import Title from '../Title/index';
import Space from '../Space/index'

const Wrapper = styled.div`
  width: calc(100% + 48px);
  margin-left: -24px;
  display: flex;
  flex-wrap: wrap;
`;

function Faces(props) {
  return (
    <div>
      <Title>Крупные спонсоры</Title>
      <Space size={2} />
      <Wrapper>
        {props.items.map((item, index) => (
          <Item key={index} image={item.image} name={item.name} status={item.status} />
      ))}
      </Wrapper>
    </div>
  );
}

Faces.defaultProps = {
  items: [
    {
      image: face,
      name: 'Сергей Гуз',
      status: 'Председатель правления',
    },
    {
      image: face1,
      name: 'Дмитрий Быкадоров',
      status: 'Заместитель председателя правления',
    },
    {
      image: face2,
      name: 'Николай Кудрявцев',
      status: 'Сотрудник',
    },
    {
      image: face3,
      name: 'Юрий Алашеев',
      status: 'Сотрудник',
    },
  ],
};

Faces.propTypes = {
  items: PropTypes.array,
};

export default Faces;
