/**
*
* ListBlock
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { block, palette } from '../../utils/constants';

const ListWrapper = styled.div`
  width: 100%;
  font-size: 20px;
  overflow: hidden;
  margin-bottom: 24px;
  ${block}
  & div {
  text-align: center;
    background-color: ${palette.primary};
    padding: 16px 12px 12px 12px;
    color: ${palette.white};
  }
  & ul {
    list-style: none;
    padding: 6px 24px 0 48px;
  }
  & li {
    position: relative;
    margin-bottom: 24px;
  }
  & li:after {
    position: absolute;
    content: " ";
    top: 4px;
    left: -24px;
    width: 12px;
    height: 12px;
    border-radius: 6px;
    background-color: ${palette.primary};
  }
`;

function ListBlock(props) {
  return (
    <ListWrapper>
      <div>{props.title}</div>
      <ul>
        {props.list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </ListWrapper>
  );
}

ListBlock.defaultProps = {
  title: 'Попечительский Совет',
  list: [
    'Определение и назначение целей использования дохода от целевого капитала',
    'Контроль исполнения бюджета',
    'Контроль и согласование отчетов органов управления Фонда',
    'Привлечение новых доноров фонда',
  ],
};

ListBlock.propTypes = {
  title: PropTypes.string,
  list: PropTypes.array,
};

export default ListBlock;
