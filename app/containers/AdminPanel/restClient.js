import {
  GET_LIST,
  GET_ONE,
  GET_MANY,
  GET_MANY_REFERENCE,
  CREATE,
  UPDATE,
  DELETE,
  fetchUtils,
} from 'admin-on-rest';
import { createReducer } from 'redux-act';
import { fromJS } from 'immutable';

import api, { responseValidation, responseConstants } from '../../utils/api';

const requestReducer = createReducer({
  [GET_ONE]: (params) =>
    params.set('resource', `${params.get('resource')}/${params.id}`),
  [CREATE]: (params) =>
    params.set('method', 'post'),
  [UPDATE]: (params) => params.set('resource', `${params.get('resource')}/${params.id}`)
    .set('method', 'put'),
  [DELETE]: (params) => params.set('resource', `${params.get('resource')}/${params.id}`)
    .set('method', 'delete'),
}, null);

const responseFormatReducer = (res) => res ? res.data : null;

const createRequest = (type, resource, params) => {
  const rawParams = fromJS({
    resource,
    params,
    method: 'get',
  });

  const requrestAction = {
    type,
  };

  const requestParams = requestReducer(rawParams, requrestAction);

  if (!requestParams) {
    throw new Error(`Unsupported fetch action type ${type}`);
  }
  return requestParams;
};

const formatResponse = (response, type, resource, params) => {
  if (responseValidation(response) !== responseConstants.SUCCESS) {
    return Promise.reject(new Error('api request error'));
  }
  const responseData = responseFormatReducer(response);
  if (!responseData) {
    return Promise.reject(new Error('invalid response body'));
  }
  return Promise.resolve(responseData);
};


export default (showNotification) =>
  (type, resource, params) => {
    const requestParams = createRequest(type, resource, params).toJS();
    console.log(requestParams);
    api.request({
      method: requestParams.method,
      url: requestParams.resource,
      data: requestParams.params.data || null,
      params: Object.assign(
        requestParams.params.query || {},
        requestParams.params.pagination || {},
        requestParams.params.sort || {},
        requestParams.params.filter || {}
      ),
    })
      .then((response) => formatResponse(response, type, resource, params))
      .catch((e) => {
        console.log(e.message);
        return Promise.reject(e);
      });
  };
