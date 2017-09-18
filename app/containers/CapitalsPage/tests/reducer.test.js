
import { fromJS } from 'immutable';
import capitalsPageReducer from '../reducer';

describe('capitalsPageReducer', () => {
  it('returns the initial state', () => {
    expect(capitalsPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
