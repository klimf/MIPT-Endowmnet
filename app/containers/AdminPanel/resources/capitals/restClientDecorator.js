import {
    CREATE,
    UPDATE,
} from 'admin-on-rest';
import {
    uploadArrayAttachemtsCurry,
} from '../../restClient';

export default function (restClient) {
  return (type, resource, params) => {
    if (resource === 'capitals' && (type === CREATE || type === UPDATE) && params.data) {
      let foundersPromise = Promise.resolve(params.data.founders);
      let sponsorsPromise = Promise.resolve(params.data.sponsors);
      const arrayUpload = uploadArrayAttachemtsCurry(restClient);


      if (params.data.founders) {
        foundersPromise = Promise.all(arrayUpload(params.data.founders, 'picture.file', 'image', 'image'));
      }

      if (params.data.sponsors) {
        sponsorsPromise = Promise.all(arrayUpload(params.data.sponsors, 'picture.file', 'image', 'image'));
      }

      return Promise.all([foundersPromise, sponsorsPromise]).then((resolves) => {
        const newData = Object.assign({}, params.data, { founders: resolves[0] }, { sponsors: resolves[1] });
        const newParams = Object.assign({}, params, { data: newData });
        return restClient(type, resource, newParams);
      });
    }
    return restClient(type, resource, params);
  };
}

