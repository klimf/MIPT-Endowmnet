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
  convertError({ data, status }) {
    return { message: data.error || data.message || data.errors || data || 'no data', code: status || 0 };
  }
  bindTo(dispatch) {
    this.success = this.success.bindTo(dispatch);
    this.start = this.start.bindTo(dispatch);
    this.failed = this.failed.bindTo(dispatch);
    return this;
  }
}

export function fetchReducerFactory(Action, onSuccess = (state) => state, initState) {
  const initialState = fromJS(Object.assign({ data: null, pending: false, error: false }, initState));
  return createReducer({
    [Action.start]: (state, payload) => state.set('pending', true).set('req', payload || null).set('status', 'pending'),
    [Action.success]: (state, payload) => state.set('pending', false).set('data', payload || null).set('status', 'success'),
    [Action.failed]: (state, payload) => state.set('pending', false).set('error', payload || null).set('status', 'failed'),
  }, initialState);
}

export const responseStates = {
  UNATHORIZED: { data: 'unauthorized', status: 401 },
};
