import {
    CREATE,
    UPDATE,
} from 'admin-on-rest';
import { UPLOAD } from '../actions';
import {
    setAttachment,
} from './';

export default function (restClient) {
  return (type, resource, params) => {
    if ((type === CREATE || type === UPDATE) && params.data.picture) {
      const uploadPromise = restClient(UPLOAD, resource, setAttachment('image', params.data.picture[0].rawFile))
        .then((response) => Object.assign({}, params.data, { image: response.data }));
      return uploadPromise.then((data) => restClient(type, resource, Object.assign({}, params, { data })));
    }

    return restClient(type, resource, params);
  };
}

