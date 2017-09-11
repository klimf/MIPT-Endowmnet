import { createSelector } from 'reselect';

/**
 * Direct selector to the authProvider state domain
 */
const selectAuthProviderDomain = () => (state) => state.get('authProvider');

/**
 * Other specific selectors
 */

const IsLogged = () => createSelector(
  selectAuthProviderDomain(),
  (substate) => substate.toJS().user.data && true
 );

/**
 * Default selector used by AuthProvider
 */

const makeSelectAuthProvider = () => createSelector(
  selectAuthProviderDomain(),
  (substate) => substate.toJS()
);


export default makeSelectAuthProvider;
export {
  selectAuthProviderDomain,
  IsLogged,
};
