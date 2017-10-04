/**
 *
 * NegPadding
 *
 */

import React, { PropTypes, Children } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: calc(100% + ${(props) => props.padding && props.padding * 2}px);
  margin-left: -${(props) => props.padding && props.padding}px;
`;

function NegPadding(props) {
  return (
    <Wrapper padding={props.padding}>
      {Children.toArray(props.children)}
    </Wrapper>
  );
}

NegPadding.defaultProps = {
  padding: 0,
};

NegPadding.propTypes = {
  children: PropTypes.node.isRequired,
  padding: PropTypes.number,
};

export default NegPadding;
