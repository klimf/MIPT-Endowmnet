import { createSelector } from 'reselect';

/**
 * Direct selector to the capitalPage state domain
 */
const selectCapitalPageDomain = () => (state) => state.get('capitalPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by CapitalPage
 */

const makeSelectCapitalPage = () => createSelector(
  selectCapitalPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectCapitalPage;
export {
  selectCapitalPageDomain,
};
