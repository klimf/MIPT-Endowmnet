/**
*
* Table
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { palette, shadow } from '../../utils/constants';
import { formatMoney } from '../../utils/helpers';
import Title from '../Title/index';

const Wrapper = styled.div`
  width: 100%;
  border-radius: 8px;
  overflow-y: auto;
  ${shadow}
`;
const StyledTable = styled.table`
  overflow: hidden;
  border-radius: 8px;
  min-width: calc(63.9em - 8%);
  & td {
    height: 36px;
    font-size: 20px;
    padding-left: 24px;
  }
  & tr:nth-child(2n) {
    background-color: ${palette.background};
  }
  & tr:nth-child(2n+1) {
    background-color: ${palette.white};
  }
  & th {
    height: 36px;
    padding-left: 24px;
    font-size: 20px;
    background-color: ${palette.primary};
    font-weight: 400;
    color: ${palette.white};
    text-align: left;
  }
`;

function Table(props) {
  return (
    <div>
      <Title>Благотворители</Title>
      <Wrapper>
        <StyledTable>
          <thead>
            <tr>
              <th>Имя</th>
              <th>Проект</th>
              <th>Сумма</th>
              <th>Время</th>
            </tr>
          </thead>
          <tbody>
            {props.data && props.data.map((item, index) =>
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.project}</td>
                <td>${formatMoney(item.value)} ₽</td>
                <td>{item.date}</td>
              </tr>
          )}
          </tbody>
        </StyledTable>
      </Wrapper>
    </div>
  );
}

Table.defaultProps = {
  data: [
    {
      name: 'Александр Жуков',
      project: 'Сбор сретств на дело',
      value: 500,
      date: '1.03.2017',
    },
    {
      name: 'Александр Жуков',
      project: 'Сбор сретств на дело',
      value: 500,
      date: '1.03.2017',
    },
    {
      name: 'Александр Жуков',
      project: 'Сбор сретств на дело',
      value: 500,
      date: '1.03.2017',
    },
    {
      name: 'Александр Жуков',
      project: 'Сбор сретств на дело',
      value: 500,
      date: '1.03.2017',
    },
    {
      name: 'Александр Жуков',
      project: 'Сбор сретств на дело',
      value: 500,
      date: '1.03.2017',
    },
  ],
};

Table.propTypes = {
  data: PropTypes.array,
};

export default Table;
