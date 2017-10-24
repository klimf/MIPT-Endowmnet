import { createSelector } from 'reselect';


/**
 * Direct selector to the StoriesItemPage state domain
 */
const selectStoriesItemPageDomain = () => (state) => state.get('StoryPage');
const selectStoriesItem = () => (state) => state.get('storyPage').get('StoriesData');

/**
 * Other specific selectors
 */


/**
 * Default selector used by StoriesItemPage
 */

const makeSelectStoriesItemPage = () => createSelector(
  selectStoriesItemPageDomain(),
  (substate) => substate.toJS()
);

const makeSelectStoriesItem = () => createSelector(
  selectStoriesItem(),
  (substate) => substate.toJS().data || {}
);

export default makeSelectStoriesItemPage;
export {
  selectStoriesItemPageDomain,
  makeSelectStoriesItem,
};
