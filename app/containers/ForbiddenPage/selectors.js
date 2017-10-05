import { createSelector } from 'reselect';

/**
 * Direct selector to the forbiddenPage state domain
 */
const selectForbiddenPageDomain = () => (state) => state.get('forbiddenPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ForbiddenPage
 */

const makeSelectForbiddenPage = () => createSelector(
  selectForbiddenPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectForbiddenPage;
export {
  selectForbiddenPageDomain,
};
