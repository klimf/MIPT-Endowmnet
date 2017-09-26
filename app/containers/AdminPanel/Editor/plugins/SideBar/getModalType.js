import {
  EmbedModal,
  LinkModal,
} from 'draft-js-modal-plugin';

const getModalByType = (type) => {
  if (type === 'link') { return LinkModal; }
  if (type === 'embed') { return EmbedModal; }
  return undefined;
};

export default getModalByType;
