import { createSelector } from 'reselect';

/**
 * Direct selector to the storiesPage state domain
 */
const selectStoriesPageDomain = () => (state) => state.get('storiesPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by StoriesPage
 */

const makeSelectStoriesPage = () => createSelector(
  selectStoriesPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectStoriesPage;
export {
  selectStoriesPageDomain,
};
