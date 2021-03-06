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
import Space from '../Space/index';

export const Wrapper = styled.div`
  width: calc(100% + 48px);
  margin-left: -24px;
  display: flex;
  flex-wrap: wrap;
`;

function Faces(props) {
  return (
    <div>
      <Title noAll={props.title}>{props.title}</Title>
      <Space size={2} />
      <Wrapper>
        {props.items.map((item, index) => (
          <Item key={index} {...item} />
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
      local: true,
    },
    {
      image: face1,
      name: 'Дмитрий Быкадоров',
      status: 'Заместитель председателя правления',
      local: true,
    },
    {
      image: face2,
      name: 'Николай Кудрявцев',
      status: 'Сотрудник',
      local: true,
    },
    {
      image: face3,
      name: 'Юрий Алашеев',
      status: 'Сотрудник',
      local: true,
    },
  ],
  title: 'Крупные спонсоры',
};

Faces.propTypes = {
  items: PropTypes.array,
  title: PropTypes.string,
};

export default Faces;
