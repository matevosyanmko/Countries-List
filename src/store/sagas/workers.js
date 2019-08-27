import { call, put } from 'redux-saga/effects';
import { GET } from '../actionCreators';
import { COUNTRIES } from '../actiontypes';
const { FIND_COUNTRIES_PROCESSING, FIND_COUNTRIES_FETCHED, FIND_COUNTRIES_FAILED } = COUNTRIES;


function* UniversalWorker(action) {
  const { payload, api } = action;

  try {
    yield put({ type: FIND_COUNTRIES_PROCESSING, payload: { loaded: false } });
    const response = yield call(GET, payload ? api(payload) : api);
    yield put({ type: FIND_COUNTRIES_FETCHED, payload: { data: Array.isArray(response) ? response : response.status !== 404 ? [response] : [], loaded: true } });
  }
  catch (e) {
    yield put({ type: FIND_COUNTRIES_FAILED, payload: { error: e.message, loaded: true, data: [] } });
  }

}


export const Workers = { UniversalWorker };
