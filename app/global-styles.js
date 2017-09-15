import { injectGlobal } from 'styled-components';

import fontLightEOT from './fonts/PFDinTextPro-Light.eot';
import fontLightTTF from './fonts/PFDinTextPro-Light.ttf';
import fontLightWOFF from './fonts/PFDinTextPro-Light.woff';
import fontRegularEOT from './fonts/PFDinTextPro-Regular.eot';
import fontRegularTTF from './fonts/PFDinTextPro-Regular.ttf';
import fontRegularWOFF from './fonts/PFDinTextPro-Regular.woff';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  @font-face {
    font-family: 'PF DinText Pro';
    src: url('${fontRegularEOT}');
    src: local('PFDinTextPro-Regular'),
    url('${fontRegularEOT}?#iefix') format('embedded-opentype'),
    url('${fontRegularWOFF}') format('woff'),
    url('${fontRegularTTF}') format('truetype');
    font-weight: 400;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'PF DinText Pro';
    src: url('${fontLightEOT}');
    src: local('PFDinTextPro-Light'),
    url('${fontLightEOT}?#iefix') format('embedded-opentype'),
    url('${fontLightWOFF}') format('woff'),
    url('${fontLightTTF}') format('truetype');
    font-weight: 300;
    font-style: normal;
  }


  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 400;
  }
  
  body.fontLoaded {
    font-family: 'PF DinText Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    line-height: 150%;
  }

  #app {
    height: 100%;
    min-width: 100%;
  }
  
  h1, h2, h3, h4, p {
    line-height: 100%;
    font-weight: 400;
  }
`;
