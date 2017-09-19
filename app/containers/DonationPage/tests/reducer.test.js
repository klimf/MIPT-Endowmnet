
import { fromJS } from 'immutable';
import donationPageReducer from '../reducer';

describe('donationPageReducer', () => {
  it('returns the initial state', () => {
    expect(donationPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
