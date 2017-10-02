import { createSelector } from 'reselect';

/**
 * Direct selector to the storyPage state domain
 */
const selectStoryPageDomain = () => (state) => state.get('storyPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by StoryPage
 */

const makeSelectStoryPage = () => createSelector(
  selectStoryPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectStoryPage;
export {
  selectStoryPageDomain,
};
