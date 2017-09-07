import { css } from 'styled-components';

// const sizes = {
//   extra: 1920,
//   large: 1280,
//   medium: 1024,
//   small: 640,
// };

export const media = {
  small: (...args) => css`
    @media (max-width: 39.999em) {
      ${css(...args)}
    }`,
  medium: (...args) => css`
    @media (min-width: 40em) and (max-width: 63.999em) {
      ${css(...args)}
    }`,
  large: (...args) => css`
    @media (min-width: 64em) {
      ${css(...args)}
    }`,
};


export const hideOn = css`
  ${media.small`
     ${(props) => props.noSmall && 'display: none'};
  `}
  ${media.medium`
     ${(props) => props.noMedium && 'display: none'};
  `}
  ${media.large`
     ${(props) => props.noLarge && 'display: none'};
  `}
`;

// // iterate through the sizes and create a media template
// export const media = Object.keys(sizes).reduce((accumulator, label) => {
//   // use em in breakpoints to work properly cross-browser and support users
//   // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
//   const emSize = sizes[label] / 16;
//   // eslint-disable-next-line no-param-reassign
//   accumulator[label] = (...args) => css`
//     @media (max-width: ${emSize}em) {
//       ${css(...args)}
//     }
//   `;
//   return accumulator;
// }, {});
