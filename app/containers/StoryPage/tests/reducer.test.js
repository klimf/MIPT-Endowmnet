
import { fromJS } from 'immutable';
import storyPageReducer from '../reducer';

describe('storyPageReducer', () => {
  it('returns the initial state', () => {
    expect(storyPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
