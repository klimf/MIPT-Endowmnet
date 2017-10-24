import { createSelector } from 'reselect';


/**
 * Direct selector to the newsItemPage state domain
 */
const selectNewsItemPageDomain = () => (state) => state.get('newsItemPage');
const selectNewsItem = () => (state) => state.get('newsItemPage').get('newsData');

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

const makeSelectNewsItem = () => createSelector(
  selectNewsItem(),
  (substate) => substate.toJS().data || {}
);

export default makeSelectNewsItemPage;
export {
  selectNewsItemPageDomain,
  makeSelectNewsItem,
};
