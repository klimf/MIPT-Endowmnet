import {
  GET_LIST,
  GET_ONE,
} from 'admin-on-rest';


export default function (restClient) {
  return (type, resource, params) => {
    if (resource === 'pages') {
      if (type === GET_LIST) {
        return restClient(type, 'pages/tree', params).then((response) => {
          const formattedTree = Object.assign({}, response.data, { id: 1 });
          return Object.assign({}, response, { data: [formattedTree] });
        });
      }
      if (type === GET_ONE) {
        return restClient(type, 'pages', params).then((response) => {
          const newData = Object.assign({}, response.data, { id: response.data.url });
          console.log(newData);
          return { data: newData };
        });
      }
    }
    return restClient(type, resource, params);
  };
}

