import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { palette, unit } from '../../utils/constants';

const Wrapper = styled.div`
  margin: ${1.5 * unit}px 0;
`;
const Text = styled.h3`
  font-weight: ${(props) => props.light ? '300' : '400'};
  font-size: ${1.5 * unit}px;
  margin: 0 ${1.5 * unit}px 0 0;
`;

function Contact(props) {
  return (
    <Wrapper>
      <Text>{props.title}</Text>
      <Text light>{props.value}</Text>
    </Wrapper>
  );
}

Contact.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
};

export default Contact;
