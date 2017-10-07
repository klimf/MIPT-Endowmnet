import { createSelector } from 'reselect';

/**
 * Direct selector to the companiesPage state domain
 */
const selectCompaniesPageDomain = () => (state) => state.get('companiesPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by CompaniesPage
 */

const makeSelectCompaniesPage = () => createSelector(
  selectCompaniesPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectCompaniesPage;
export {
  selectCompaniesPageDomain,
};
