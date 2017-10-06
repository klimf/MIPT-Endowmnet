import { UPLOAD } from '../actions';

export function setAttachment(type, attachment) {
  return Object.assign({}, { setAttachmentType: type, data: attachment });
}

export function uploadArrayAttachemtsCurry(restClient) {
  return (items, attachmentField, targetField, attachmentType) =>
      items.map((x) => {
        if (x[attachmentField]) {
          return restClient(UPLOAD, null, setAttachment(attachmentType, x[attachmentField]))
                    .then((response) => {
                      const attacment = {};
                      attacment[targetField] = response.data;
                      return Object.assign({}, x, attacment);
                    });
        }
        return Promise.resolve(x);
      });
}

