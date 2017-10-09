import {
    CREATE,
    UPDATE,
    GET_ONE,
} from 'admin-on-rest';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';


export default function (restClient) {
  return (type, resource, params) => {
    if ((type === CREATE || type === UPDATE) && params.data.content && params.data.content instanceof EditorState) {
      const newContent = JSON.stringify(convertToRaw(params.data.content.getCurrentContent()));
      const newData = Object.assign({}, params.data, { content: newContent });
      return restClient(type, resource, Object.assign({}, params, { data: newData }));
    }
    if (type === GET_ONE && (resource === 'pages' || resource === 'news')) {
      return restClient(type, resource, params).then((response) => {
        if (response.data.content) {
          const content = EditorState.createWithContent(convertFromRaw(response.data.content));
          return { data: Object.assign({}, response.data, { content }) };
        }
        return response;
      });
    }
    return restClient(type, resource, params);
  };
}

