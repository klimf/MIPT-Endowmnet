import {
    CREATE,
    UPDATE,
} from 'admin-on-rest';
import { UPLOAD } from '../../actions';
import {
    uploadArrayAttachemtsCurry,
    setAttachment,
} from '../../restClient';

export default function (restClient) {
  return (type, resource, params) => {
    if (resource === 'capitals' && (type === CREATE || type === UPDATE) && params.data) {
      let generalPromise = Promise.resolve(params.data);
      let foundersPromise = Promise.resolve(params.data.founders);
      let sponsorsPromise = Promise.resolve(params.data.sponsors);
      const arrayUpload = uploadArrayAttachemtsCurry(restClient);

      if (params.data.picture) {
        generalPromise = restClient(UPLOAD, resource, setAttachment('image', params.data.picture[0].rawFile))
        .then((response) => Object.assign({}, params.data, { image: response.data }));
      }

      if (params.data.founders) {
        foundersPromise = Promise.all(arrayUpload(params.data.founders, 'picture.file', 'image', 'image'));
      }

      if (params.data.sponsors) {
        sponsorsPromise = Promise.all(arrayUpload(params.data.sponsors, 'picture.file', 'image', 'image'));
      }

      return Promise.all([generalPromise, foundersPromise, sponsorsPromise]).then((resolves) => {
        const newData = Object.assign({}, resolves[0], { founders: resolves[1] }, { sponsors: resolves[2] });
        const newParams = Object.assign({}, params, { data: newData });
        return restClient(type, resource, newParams);
      });
    }
    return restClient(type, resource, params);
  };
}

