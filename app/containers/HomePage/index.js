/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import Helmet from 'react-helmet';
import Button from 'components/Button';
import Content from 'components/Content';
import Masthead from 'components/Masthead';
import messages from './messages';


export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet />
        <Content>
          <Masthead />
          <br />
          <Button>Lol</Button>
          <br />
          <Button type="border">LolLolLolLol</Button>
          <h1>
            <FormattedMessage {...messages.header} />
          </h1>
        </Content>
      </div>
    );
  }
}
