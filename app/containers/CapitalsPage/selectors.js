import { createSelector } from 'reselect';

/**
 * Direct selector to the capitalsPage state domain
 */
const selectCapitalsPageDomain = () => (state) => state.get('capitalsPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by CapitalsPage
 */

const makeSelectCapitalsPage = () => createSelector(
  selectCapitalsPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectCapitalsPage;
export {
  selectCapitalsPageDomain,
};
