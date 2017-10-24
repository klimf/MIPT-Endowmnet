import { createSelector } from 'reselect';

/**
 * Direct selector to the StoriesPage state domain
 */
const selectStoriesPageDomain = () => (state) => state.get('storiesPage').get('Stories');

/**
 * Other specific selectors
 */


/**
 * Default selector used by StoriesPage
 */

const makeSelectStoriesPage = () => createSelector(
  selectStoriesPageDomain(),
  (substate) => {
    const Stories = substate.toJS().data;
    return Stories || [];
  }
);

export default makeSelectStoriesPage;
export {
  makeSelectStoriesPage,
  selectStoriesPageDomain,
};
