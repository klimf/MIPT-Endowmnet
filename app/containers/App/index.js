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

import Footer from 'components/Footer';
import Header from '../Header';
import AuthProvider from '../AuthProvider';

import { palette } from '../../utils/constants';

const AppWrapper = styled.div`
  width:100%;
  height: 100%;
  background-color: ${palette.white};
`;

const PageWrapper = styled.div`
  display: inline-block;
  width: 100%;
  background-color: ${palette.background};
  min-height: calc(100% - 364px);
  overflow: hidden;
  padding-bottom: 48px;
  position: relative;
`;

export default class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <AppWrapper>
        <AuthProvider emitAuth />
        <Helmet
          titleTemplate="%s - MIPT"
          defaultTitle="MIPT - фонд, делаем универ лучше"
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
