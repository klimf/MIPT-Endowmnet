import React from 'react';
import styled from 'styled-components';
import { block, card } from '../../utils/constants';
import { media } from '../../utils/helpers';
import Title from '../Title';

const Block = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  position: absolute;
  top: 10px;
  right: 10px;
  bottom: 10px;
  left: 10px;
  padding: ${(props) => props.padding ? props.padding : '24px'};
  ${block}
  ${media.small`
    padding: ${(props) => props.paddingSmall ? props.paddingSmall : '24px'};
  `}
`;

const RelativeBlock = styled.div`
  padding: ${(props) => props.padding ? props.padding : '24px'};
  position: relative;
  ${card}
  margin: ${(props) => props.margin || '0px'}
  ${media.small`
    padding: ${(props) => props.paddingSmall ? props.paddingSmall : '24px'};
  `}
`;

export const LabeledBlock = ({ children, title, className, titleAlign }) => (
  <RelativeBlock className={className}>
    <Title align={titleAlign}>{ title }</Title>
    {children}
  </RelativeBlock>
);

LabeledBlock.propTypes = {
  children: React.PropTypes.any,
  title: React.PropTypes.string.isRequired,
  className: React.PropTypes.any,
  titleAlign: React.PropTypes.string,
};

export default Block;
