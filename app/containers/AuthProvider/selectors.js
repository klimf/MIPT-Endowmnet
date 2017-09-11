import { createSelector } from 'reselect';
import { responseStates } from '../../utils/api';


/**
 * Direct selector to the authProvider state domain
 */
const selectAuthProviderDomain = () => (state) => state.get('authProvider');

/**
 * Other specific selectors
 */

const isLogged = () => createSelector(
  selectAuthProviderDomain(),
  (substate) => substate.toJS().user.data && true
);

const isUnauthorized = () => createSelector(
  selectAuthProviderDomain(),
  (substate) => substate.toJS().user.error === responseStates.UNATHORIZED
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
  isLogged,
  isUnauthorized,
};
