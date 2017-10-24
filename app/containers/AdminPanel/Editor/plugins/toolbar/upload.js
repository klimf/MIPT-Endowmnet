import restClient, { setAttachment } from '../../../restClient';
import { UPLOAD } from '../../../actions';
import { resolveStatic } from '../../../../../utils/helpers';

/**
 * uploaders for wysisyg editor toolbar
 */
// TODO: move resolve static to image randering in editor
export const uploadImage = (file) =>
    restClient(UPLOAD, null, setAttachment('image', file))
    .then((response) => {
      const image = { data: { link: resolveStatic(response.data.original) } };
      return image;
    });
