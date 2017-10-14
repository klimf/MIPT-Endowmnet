import { createSelector } from 'reselect';

/**
 * Direct selector to the genericPage state domain
 */
const selectNavItems = () => (state) => state.get('Header').get('nav');

/**
 * Other specific selectors
 */


/**
 * Default selector used by GenericPage
 */

const makeSelectNavItems = () => createSelector(
  selectNavItems(),
  (substate) => substate.toJS().data || []
);


export default makeSelectNavItems;
export {
  makeSelectNavItems,
  selectNavItems,
};

