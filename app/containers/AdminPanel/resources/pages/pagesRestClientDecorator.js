import {
  GET_LIST,
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
    }
    return restClient(type, resource, params);
  };
}

