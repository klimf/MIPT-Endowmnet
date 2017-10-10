/**
 *
 * NewsItem
 *
 */

import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import { block, palette, unit, image } from '../../utils/constants';
import { hideOn, media, formatDateWithMonth } from '../../utils/helpers';


const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position:relative;
  width: 100%;
  margin: ${3 * unit}px 0;
  padding: 0 ${2 * unit}px;
  overflow: hidden;
  ${block}
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 300;
`;

const TextBlock = styled.div`
  margin: 10px 10px 10px 180px;
  ${media.small`
    margin: 280px 10px 10px 10px;
  `}
`;

const Title = styled.h2`
  color: ${palette.primary};
  font-size: 24px;
`;

const Description = styled.p`
  color: ${palette.black};
  font-size: 20px;
`;

const Date = styled.h2`
  width: 280px;
  text-align: right;
  color: ${palette.black};
  font-size: 24px;
  margin: 10px;
  padding-top: 8px;
  & b{
    color: ${palette.primary};
    font-weight: 300;
    font-size: 36px;
  }
  ${media.small`
    margin-top: 280px;
  `}
  ${hideOn}
`;

const Image = styled.div`
  position:absolute;
  width: 180px;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: ${palette.primary};
  border-radius: 8px 0 0 8px;
  ${image}
  ${media.small`
    width: 100%;
    height: 280px;
    bottom: auto;
    border-radius: 8px 8px 0 0;
`}
`;

function Item(props) {
  const date = formatDateWithMonth(props.date);
  return (
    <StyledLink to={props.link}>
      <Wrapper>
        <Image src={props.image.small} />
        <TextBlock>
          <Title>{props.name}</Title>
          <Description>{props.description}</Description>
        </TextBlock>
        {date &&
          <Date noAll={!date}><b>{date.day} </b>{date.month}</Date>
        }
      </Wrapper>
    </StyledLink>
  );
}

Item.propTypes = {
  link: PropTypes.string,
  name: PropTypes.string.isRequired,
  date: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.object.isRequired,
};

export default Item;
