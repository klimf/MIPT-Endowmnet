import {
    CREATE,
    UPDATE,
    GET_ONE,
} from 'admin-on-rest';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';

const findEditorStateField = (data) => Object.keys(data).find((key) => data[key] instanceof EditorState);

export default function (restClient) {
  return (type, resource, params) => {
    if (type === CREATE || type === UPDATE) {
      const editorStateKey = findEditorStateField(params.data);
      if (editorStateKey) {
        const newContent = JSON.stringify(convertToRaw(params.data[editorStateKey].getCurrentContent()));
        const newData = Object.assign({}, params.data);
        newData[editorStateKey] = newContent;
        return restClient(type, resource, Object.assign({}, params, { data: newData }));
      }
      return restClient(type, resource, params);
    }
    if (type === GET_ONE) {
      return restClient(type, resource, params).then((response) => {
        if (response.data.content || response.data.data) {
          const editorStateField = response.data.content ? 'content' : 'data';
          try {
            const contentState = convertFromRaw(JSON.parse(response.data[editorStateField]));
            const content = EditorState.createWithContent(contentState);
            const formattedData = Object.assign({}, response.data);
            formattedData[editorStateField] = content;
            return { data: formattedData };
          } catch (e) {
            console.log(e);
            const newData = {};
            newData[editorStateField] = EditorState.createEmpty();
            return { data: Object.assign({}, response.data, newData) };
          }
        }
        return response;
      });
    }
    return restClient(type, resource, params);
  };
}

