
import { fromJS } from 'immutable';
import sponsorsPageReducer from '../reducer';

describe('sponsorsPageReducer', () => {
  it('returns the initial state', () => {
    expect(sponsorsPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
