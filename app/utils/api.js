import axios from 'axios';
import { fromJS } from 'immutable';
import { createAction, createReducer } from 'redux-act';

export default axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: true,
});

export class FetchAction {
  constructor(resource, method, prePare = (data) => data) {
    this.resource = resource;
    this.method = method;
    this.prePare = prePare;
    this.types = {
      start: `${this.resource}_START`,
      success: `${this.resource}_SUCCESS`,
      failed: `${this.resource}_FAILED`,
    };
    this.start = createAction(this.types.start);
    this.success = createAction(this.types.success, this.prePare);
    this.failed = createAction(this.types.failed, this.convertError);
  }
  convertError(err) {
    return err.data ? { message: err.error || err.message || err.errors, code: err.code } : { message: 'empty', code: err.code };
  }
}

export function fetchReducerFactory(Action, onSuccess = (state) => state, initialState = fromJS({ data: null, pending: false, error: false })) {
  return createReducer({
    [Action.start]: (state, payload) => state.set('pending', true).set('req', payload || null),
    [Action.success]: (state, payload) => state.set('pending', false).set('data', payload || null),
    [Action.failed]: (state, payload) => state.set('pending', false).set('error', payload || null),
  }, initialState);
}
