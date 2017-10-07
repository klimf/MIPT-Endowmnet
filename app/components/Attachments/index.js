/**
*
* Attachments
*
*/

import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';
import Icon from '../Icon/index';
import { palette } from '../../utils/constants';
import FlexBox from '../FlexBox/index';
import Space from '../Space/index';


const StyledIcon = styled(Icon)`
  min-width: 42px;
  max-width: 42px;
  margin: 0 12px 0 0;
`;

const Text = styled(Link)`
  font-size: 20px;
  display: inline-block;
  color: ${palette.black};
  &:link, &:visited, &:hover, &:active {
    color: ${palette.black};
  }
`;

function Attachments(props) {
  return (
    <div>
      {props.items.map((item, index) => (
        <div>
          <Space size={2} />
          <FlexBox noWrap key={index}>
            <StyledIcon noBorder type="clip" viewBox="0 0 42 24" height="24px" />
            <Text href={item.link}>{item.text}</Text>
          </FlexBox>
        </div>
      ))}
    </div>
  );
}

Attachments.propTypes = {
  items: PropTypes.array,
};

Attachments.defaultProps = {
  items: [
    {
      text: 'Отчет исполнительного директора о деятельности фонда целевого капитала МФТИ за 2014 год',
      link: '/',
    },
    {
      text: 'Аудиторское заключение о ведении финансовой деятельности фонда целевого капитала МФТИ за 2017 год',
      link: '/',
    },
    {
      text: 'Финансовый план Фонда на 2017 год',
      link: '/',
    },
  ],
};

export default Attachments;
