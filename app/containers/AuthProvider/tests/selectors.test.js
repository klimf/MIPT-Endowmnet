import { fromJS } from 'immutable';
import { fetchReducerFactory, FetchAction, responseStates } from '../../../utils/api';
import { isUnauthorized } from '../selectors';

// const selector = makeSelectAuthProviderDomain();

describe('makeSelectAuthProviderDomain', () => {
  it('Expect to have unit tests specified', () => {
    const action = new FetchAction('FetchSomeUser');
    const reducer = fetchReducerFactory(action);
    const state1 = fromJS({
      someState: reducer(fromJS({}), action.failed(responseStates.UNATHORIZED)),
    });
    const state2 = fromJS({
      someState: reducer(fromJS({}), action.success({})),
    });
    const stateSelector = (state) => state.get('someState');
    const unauth = isUnauthorized()(state1, { stateSelector });
    const auth = isUnauthorized()(state2, { stateSelector });
    expect(unauth).toEqual(true);
    expect(auth).toEqual(false);
  });
});

