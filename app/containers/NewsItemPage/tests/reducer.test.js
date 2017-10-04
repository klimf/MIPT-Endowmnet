
import { fromJS } from 'immutable';
import newsItemPageReducer from '../reducer';

describe('newsItemPageReducer', () => {
  it('returns the initial state', () => {
    expect(newsItemPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
