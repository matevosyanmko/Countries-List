import { call, put, takeEvery } from 'redux-saga/effects';
import { API } from '../endpoints';
import { GET } from '../actionCreators';
import { COUNTRIES } from '../actiontypes';
const { FIND_COUNTRIES_PROCESSING, FIND_COUNTRIES_FETCHED, FIND_COUNTRIES_FAILED, FIND_COUNTRIES } = COUNTRIES;

function* CountriesWorker() {
  try {
    yield put({ type: FIND_COUNTRIES_PROCESSING, payload: { loaded: false } });
    const response = yield call(GET, API.All);
    console.clear();
    console.log(response);
    yield put({ type: FIND_COUNTRIES_FETCHED, payload: { data: response, loaded: true } });
  } catch (e) {
    yield put({ type: FIND_COUNTRIES_FAILED, payload: { error: e.message, loaded: true } });
  }
}

function* CountriesWatcher() {
  yield takeEvery(FIND_COUNTRIES, CountriesWorker);
}

export default CountriesWatcher;
