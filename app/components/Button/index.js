/**
 *
 * Button
 *
 */

import React, { PropTypes, Children } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Link } from 'react-router';

import buttonStyles from './buttonStyles';
import buttonThemes from './buttonThemes';

import { hideOn } from '../../utils/style-utils';

function Button(props) {
  const A = styled.a`${buttonStyles}`;
  const StyledLink = styled(Link)`${buttonStyles}`;

  const Wrapper = styled.div`
    margin: ${props.mtb ? props.mtb : 0}px 0;
    text-align: center;
    ${hideOn}
  `;

  // Render an anchor tag
  let button = (
    <A href={props.href} onClick={props.onClick}>
      {Children.toArray(props.children)}
    </A>
  );

  // If the Button has a handleRoute prop, we want to render a button
  if (props.to) {
    button = (
      <StyledLink to={props.to}>
        {Children.toArray(props.children)}
      </StyledLink>
    );
  }
  return (
    <Wrapper {...props} >
      <ThemeProvider theme={props.type ? buttonThemes[props.type] : buttonThemes.primary} >
        {button}
      </ThemeProvider>
    </Wrapper>
  );
}

Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  mtb: PropTypes.number,
};

export default styled(Button)`${hideOn}`;
