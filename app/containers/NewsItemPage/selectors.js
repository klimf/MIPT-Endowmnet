import { createSelector } from 'reselect';

/**
 * Direct selector to the newsItemPage state domain
 */
const selectNewsItemPageDomain = () => (state) => state.get('newsItemPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by NewsItemPage
 */

const makeSelectNewsItemPage = () => createSelector(
  selectNewsItemPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectNewsItemPage;
export {
  selectNewsItemPageDomain,
};
