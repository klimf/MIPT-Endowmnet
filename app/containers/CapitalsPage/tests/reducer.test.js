
import { fromJS } from 'immutable';
import { capitalsGridReducer } from '../reducer';
import * as actions from '../actions';

let state = {};
describe('capitalsPageReducer', () => {
  it('returns the initial state', () => {
    state = capitalsGridReducer(undefined, {});
    expect(state).toEqual(fromJS({
      configureCapital: null,
      selectedGridComponent: null,
      editable: false,
      grid: [] }));
  });

  it('start changing capitalComponent', () => {
    const capitalToConfigure = {
      id: 'someId',
      name: 'some name',
      isNew: false,
    };

    state = capitalsGridReducer(state, actions.startSelectCapitalComponent(capitalToConfigure));
    expect(state).toEqual(fromJS({
      configureCapital: capitalToConfigure,
      selectedGridComponent: null,
      editable: false,
      grid: [] }));
  });
});
