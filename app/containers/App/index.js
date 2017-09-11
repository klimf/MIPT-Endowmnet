/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Header from 'components/Header';
import Footer from 'components/Footer';

import { palette, unit } from '../../utils/constants';

const AppWrapper = styled.div`
  width:100%;
  height: 100%;
  background-color: ${palette.background};
`;

const PageWrapper = styled.div`
  display: inline-block;
  width: 100%;
  height: 100%;
  min-height: calc(100% - ${30 * unit}px);
`;

export default class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <AppWrapper>
        <Helmet
          titleTemplate="%s - MIPT"
          defaultTitle="MIPT - студия, делаем сайты и мобильные приложения"
          meta={[
            {
              name: 'description',
              content: '.',
            },
          ]}
        />
        {/* add dark */}
        <Header />
        <PageWrapper>
          {React.Children.toArray(this.props.children)}
        </PageWrapper>
        <Footer />
      </AppWrapper>
    );
  }
}
