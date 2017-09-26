
import { fromJS } from 'immutable';
import capitalPageReducer from '../reducer';

describe('capitalPageReducer', () => {
  it('returns the initial state', () => {
    expect(capitalPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
