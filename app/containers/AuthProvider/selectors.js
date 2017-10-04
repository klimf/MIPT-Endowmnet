import { createSelector } from 'reselect';
import _ from 'lodash';
import { responseStates } from '../../utils/api';


/**
 * Direct selector to the authProvider state domain
 */
const selectAuthProviderDomain = () => (state) => state.get('authProvider');
const selectUser = () => (state) => state.get('authProvider').get('user');
const selectAnyFetchStatus = () => (state, { stateSelector }) => stateSelector(state);

/**
 * Other specific selectors
 */

const isLogged = () => createSelector(
  selectUser(),
  (substate) => substate.toJS().data || false
);

const isUnauthorized = () => createSelector(
  selectAnyFetchStatus(),
  (substate) => {
    const targetState = substate.toJS();
    return Object.keys(targetState).reduce((result, stateName) => {
      const currentState = targetState[stateName] ? targetState[stateName].error || targetState[stateName] : {};
      if (_.isEqual(currentState, responseStates.UNATHORIZED)) {
        return true;
      }
      return result;
    }, false);
  }
);

const user = () => createSelector(
  selectUser(),
  (substate) => substate.toJS()
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
  user,
};
