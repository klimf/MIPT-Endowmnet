
import { fromJS } from 'immutable';
import storiesPageReducer from '../reducer';

describe('storiesPageReducer', () => {
  it('returns the initial state', () => {
    expect(storiesPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
