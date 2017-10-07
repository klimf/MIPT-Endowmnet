import _ from 'lodash';
import { UPLOAD } from '../actions';

export function setAttachment(type, attachment) {
  return Object.assign({}, { attachmentType: type, data: attachment });
}

export function uploadArrayAttachemtsCurry(restClient) {
  return (items, attachmentField, targetField, attachmentType) =>
      items.map((x) => {
        if (_.at(x, attachmentField)[0]) {
          const attachment = _.at(x, [attachmentField][0]);
          return restClient(UPLOAD, null, setAttachment(attachmentType, attachment.map ? attachment[0] : attachment))
                    .then((response) => {
                      const attacment = {};
                      attacment[targetField] = response.data;
                      return Object.assign({}, x, attacment);
                    });
        }
        return Promise.resolve(x);
      });
}

