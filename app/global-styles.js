import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  // body.fontLoaded {
  //   font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  // }

  body {
    font-family: 'PF DinText Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    line-height: 140%
  }

  #app {
    height: 100%;
    min-width: 100%;
  }
`;
