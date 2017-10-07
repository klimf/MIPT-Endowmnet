import { createSelector } from 'reselect';

/**
 * Direct selector to the sponsorsPage state domain
 */
const selectSponsorsPageDomain = () => (state) => state.get('sponsorsPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SponsorsPage
 */

const makeSelectSponsorsPage = () => createSelector(
  selectSponsorsPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectSponsorsPage;
export {
  selectSponsorsPageDomain,
};
