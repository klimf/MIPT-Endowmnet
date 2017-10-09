import {
  GET_LIST,
  GET_ONE,
  CREATE,
  UPDATE,
  DELETE,
} from 'admin-on-rest';
import { createReducer } from 'redux-act';
import { fromJS } from 'immutable';
import { UPLOAD } from '../actions';

import api from '../../../utils/api';

const makeFileBody = (body) => {
  const formData = new FormData();
  formData.append('file', body);
  return formData;
};

const requestReducer = createReducer({
  [GET_LIST]: (request) => request,
  [GET_ONE]: (request, params) =>
    request.set('url', `${request.get('url')}/${params.id}`),
  [CREATE]: (request) =>
    request.set('method', 'post'),
  [UPDATE]: (request, params) => request
    .set('url', `${request.get('url')}/${params.id}`)
    .set('method', 'put'),
  [DELETE]: (request, params) => request
  .set('url', `${request.get('url')}/${params.id}`)
  .set('method', 'delete'),
  [UPLOAD]: (request, params) => request
    .set('url', `/${params.attachmentType}`)
    .set('method', 'post')
    .set('body', makeFileBody(request.get('body'))),
}, null);

const formatResponse = (response, requestType) => {
  switch (requestType) {
    case GET_LIST:
      if (response.total && response.page && response.docs) {
        return { data: response, total: response.total };
      }
      return { data: response, total: 1000000 };
    default:
      return { data: response };
  }
};

const resolveQuery = (params) => Object.assign(
  params.query || {},
  params.pagination || {},
  params.sort || {},
  params.filter || {}
);

const createRequest = (type, resource, params) => {
  const rawParams = fromJS({
    url: `/${resource}`,
    query: resolveQuery(params),
    method: 'get',
    body: params.data,
  });


  const requrestAction = {
    type,
    payload: params,
  };

  const requestParams = requestReducer(rawParams, requrestAction);

  if (!requestParams) {
    throw new Error(`Unsupported fetch action type ${type}`);
  }
  return requestParams;
};


export default (type, resource, params) => {
  const { method, url, query, body } = createRequest(type, resource, params).toJS();
  return api[method](url, method === 'get' || method === 'delete' ? query : body, query)
      .then((response) => formatResponse(response, type))
      .catch((e) => {
        console.log(e);
        return Promise.reject(e);
      });
};
