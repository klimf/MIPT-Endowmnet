import {
    UPDATE,
    GET_ONE,
    GET_LIST,
} from 'admin-on-rest';


export default function (restClient) {
  return (type, resource, params) => {
    if (resource === 'domainOptions') {
      if (type === GET_LIST) {
        return restClient(type, resource, params).then((response) => {
          delete response.data['id']; // eslint-disable-line
          const formattedOptions = Object.keys(response.data).map((key) => ({ id: key, value: response.data[key] }));
          return Object.assign({}, response, { data: formattedOptions });
        });
      }
      if (type === GET_ONE) {
        return restClient(GET_LIST, resource, params).then((response) => {
          const formattedOptions = Object.keys(response.data).map((key) => ({ id: key, value: response.data[key] }));
          return { data: formattedOptions.find((option) => option.id === params.id) };
        });
      }
      if (type === UPDATE) {
        return restClient(GET_LIST, resource, params).then((response) => {
          const updatedField = {};
          updatedField[params.id] = params.data.value;
          const updatedOptions = Object.assign({}, response.data, updatedField);
          return restClient(UPDATE, resource, Object.assign({}, params, { id: '', data: updatedOptions }));
        });
      }
    }
    return restClient(type, resource, params);
  };
}

