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

import { hideOn } from '../../utils/helpers';

function Button(props) {
  const A = styled.a`${buttonStyles}`;
  const StyledLink = styled(Link)`${buttonStyles}`;
  const StyledDiv = styled.div`${buttonStyles}`;
  const StyledButton = styled.button`${buttonStyles}`;

  const Wrapper = styled.div`
    margin: ${props.margin ? props.margin : '0'};
    text-align: ${props.centred ? 'center' : 'left'};
    ${props.expanded && 'width:100%;'}
    & > * {
      ${props.expanded && 'width:100%;'}
    }
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
  if (props.fake) {
    button = (
      <StyledDiv >
        {Children.toArray(props.children)}
      </StyledDiv>
    );
  }
  if (props.submit) {
    button = (
      <StyledButton type="submit">
        { Children.toArray(props.children) }
      </StyledButton>
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
  margin: PropTypes.string,
  centred: PropTypes.bool,
  expanded: PropTypes.bool,
  fake: PropTypes.bool,
  submit: PropTypes.bool,
};

export default styled(Button)`${hideOn}`;
