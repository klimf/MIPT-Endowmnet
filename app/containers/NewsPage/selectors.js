import { createSelector } from 'reselect';

/**
 * Direct selector to the newsPage state domain
 */
const selectNewsPageDomain = () => (state) => state.get('newsPage').get('news');

/**
 * Other specific selectors
 */


/**
 * Default selector used by NewsPage
 */

const makeSelectNewsPage = () => createSelector(
  selectNewsPageDomain(),
  (substate) => {
    const news = substate.toJS().data;
    return news || [];
  }
);

export default makeSelectNewsPage;
export {
  makeSelectNewsPage,
  selectNewsPageDomain,
};
