
import { fromJS } from 'immutable';
import adminPanelReducer from '../reducer';

describe('adminPanelReducer', () => {
  it('returns the initial state', () => {
    expect(adminPanelReducer(undefined, {})).toEqual(fromJS({}));
  });
});
