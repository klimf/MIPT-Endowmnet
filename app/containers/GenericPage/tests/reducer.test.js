
import { fromJS } from 'immutable';
import genericPageReducer from '../reducer';

describe('genericPageReducer', () => {
  it('returns the initial state', () => {
    expect(genericPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
