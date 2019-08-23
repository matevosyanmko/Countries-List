import { call, put, takeEvery } from 'redux-saga/effects';
import { API } from '../endpoints';
import { GET } from '../actionCreators';
import { COUNTRIES } from '../actiontypes';

const { FIND_COUNTRIES_PROCESSING, FIND_COUNTRIES_FETCHED, FIND_COUNTRIES_FAILED, FIND_COUNTRIES_BY_NAME } = COUNTRIES;

function* CountriesByNameWorker(action) {
  try {
    console.log('action in worker ', action);
    yield put({ type: FIND_COUNTRIES_PROCESSING, payload: { loaded: false } });
    const response = yield call(GET, API.ByName(action.payload));
    yield put({ type: FIND_COUNTRIES_FETCHED, payload: { data: Array.isArray(response) ? response : [], loaded: true } });
  } catch (e) {
    yield put({ type: FIND_COUNTRIES_FAILED, payload: { error: e.message, loaded: true, data: [] } });
  }
}

function* CountriesByNameWatcher() {
  yield takeEvery(FIND_COUNTRIES_BY_NAME, CountriesByNameWorker);
}

export default CountriesByNameWatcher;
