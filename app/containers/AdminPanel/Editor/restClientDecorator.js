import {
    CREATE,
    UPDATE,
    GET_ONE,
} from 'admin-on-rest';
import { EditorState, convertToRaw } from 'draft-js';

const findContentField = (data) => {
  if (data.content) {
    return 'content';
  }
  if (data.data) {
    return 'data';
  }
  return false;
};

export default function (restClient) {
  return (type, resource, params) => {
    if ((type === CREATE || type === UPDATE) && findContentField(params.data)) {
      const contentKey = findContentField(params.data);
      if (typeof params.data[contentKey].map !== 'function') {
        return Promise.reject(new Error('invalid content field'));
      }
      console.log(params.data);
      const formattedContentWithEditor = params.data[contentKey].map((block) => {
        if (block.data instanceof EditorState) {
          return Object.assign({}, block, { data: convertToRaw(block.data.getCurrentContent()) });
        }
        return block;
      });
      const stringContent = JSON.stringify(formattedContentWithEditor);
      const formattedData = Object.assign({}, params.data);
      formattedData[contentKey] = stringContent;
      return restClient(type, resource, Object.assign({}, params, { data: formattedData }));
    }

    if (type === GET_ONE) {
      return restClient(type, resource, params).then((response) => {
        if (findContentField(response.data)) {
          const contentField = findContentField(response.data);
          try {
            // const contentState = convertFromRaw(JSON.parse(response.data[editorStateField]));
            // const content = EditorState.createWithContent(contentState);
            // const formattedData = Object.assign({}, response.data);
            // formattedData[editorStateField] = content;
            const parsedData = Object.assign({}, response.data);
            parsedData[contentField] = JSON.parse(response.data[contentField]);
            return { data: Object.assign({}, parsedData) };
          } catch (e) {
            console.log(e);
            const newData = {};
            newData[contentField] = [];
            return { data: Object.assign({}, response.data, newData) };
          }
        }
        return response;
      });
    }
    return restClient(type, resource, params);
  };
}

