import { createSelector } from 'reselect';

/**
 * Direct selector to the genericPage state domain
 */
const selectGenericPageDomain = () => (state) => state.get('genericPage');
const selectCurrentPage = () => (state) => state.get('genericPage').get('currentPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by GenericPage
 */

const makeSelectGenericPage = () => createSelector(
  selectGenericPageDomain(),
  (substate) => substate.toJS()
);

const makeSelectCurrentPage = () => createSelector(
  selectCurrentPage(),
  (substate) => substate.toJS()
);

export default makeSelectGenericPage;
export {
  selectGenericPageDomain,
  makeSelectCurrentPage,
};
