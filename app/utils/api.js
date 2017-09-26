import axios from 'axios';
import { fromJS } from 'immutable';
import { createAction, createReducer } from 'redux-act';
import config from './config';

axios.defaults.baseURL = config.API_ADRESS;
axios.defaults.withCredentials = true;
export default {
  get: (url, params) => request(url, { method: 'GET', params }),
  post: (url, data) => request(url, { method: 'POST', body: data }),
  put: (url, data) => request(url, { method: 'PUT', body: data }),
  delete: (url) => request(url, { method: 'DELETE' }),
  request: ({ url, ...options }) => request(url, options),
};
// FIXME: fix error body interpolation
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
    return { data: data ? data.error || data.message || data.errors || data : 'no data', status: status || 0 };
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

export function catchNetworkError(data) {
  if (data.request && data.request.status === 0) {
    return responseStates.NETWORK_ERROR;
  }
  return data;
}


export const responseStates = {
  UNATHORIZED: { data: 'unauthorized', status: 401 },
  NETWORK_ERROR: { data: 'network error', status: 600 },
};

export const responseConstants = {
  UNATHORIZED: 'UNATHORIZED',
  NETWORK_ERROR: 'NETWORK_ERROR',
  SUCCESS: 'SUCCESS',
};

export const responseMapStatuses = {
  200: responseConstants.SUCCESS,
  304: responseConstants.SUCCESS,
  401: responseConstants.UNATHORIZED,
};

export const responseValidation = (res) => responseMapStatuses[res.status];

function resolveParams(query) {
  const haveQuery = (query && query !== {});
  if (haveQuery) {
    return Object.keys(query).map((key) => `${key}=${query[key]}`).join('&&');
  }
  return '';
}

function request(url, { method = 'GET', body = null, params = {} }) {
  const requestUrl = config.API_ADRESS + url + resolveParams(params);
  let headers = {};
  let bodyToSend = null;

  if (body && (body instanceof FormData)) {
    headers = { 'Content-Type': 'application/form-data' };
    bodyToSend = body;
  } else if (body) {
    bodyToSend = JSON.stringify(body);
    headers = { 'Content-Type': 'application/json' };
  }
  return fetch(requestUrl, {
    credentials: 'include',
    method,
    headers,
    body: bodyToSend || undefined,
  })
  .then((res) => {
    if (responseMapStatuses[res.status] === responseConstants.SUCCESS) {
      return res.json ? res.json() : res.text();
    }
    const errPromise = res.json ? res.json() : res.text();
    return errPromise.then((data) => {
      const error = new Error(res.statusText);
      error.data = data;
      error.status = res.status;
      return Promise.reject(error);
    });
  });
}
