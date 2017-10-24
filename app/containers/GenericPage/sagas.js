import { take, call, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import * as actions from './actions';
import api from '../../utils/api';
// Individual exports for testing
export function* defaultSaga() {
  // See example in containers/HomePage/sagas.js
}

export function* getPage() {
  while (true) {
    try {
      const action = yield take(actions.fetchPage.types.start);
      const pageAddress = action.payload.replace('/p/', '');
      const pageAdressArr = pageAddress.split('/');
      const page = yield call(() => api.get(`/pages/${pageAddress}`));

      if (pageAdressArr.length > 1) {
        const parentAdress = pageAdressArr.slice(pageAdressArr.length - 2, pageAdressArr.length - 1);
        const parentPage = yield call(() => api.get(`/pages/${parentAdress}`));
        const navigation = JSON.parse(parentPage.content).find((block) => block.type === 'navigation');
        if (navigation) {
          const oldPageContent = JSON.parse(page.content);

          oldPageContent.unshift(navigation);
          const newPageContent = JSON.stringify(oldPageContent);
          page.content = newPageContent;
        }
      }

      yield put(actions.fetchPage.success(page));
    } catch (e) {
      if (e.status === 404) {
        yield put(push('/404'));
      }
      yield put(actions.fetchPage.failed(e));
    }
  }
}


// All sagas to be loaded
export default [
  getPage,
];
