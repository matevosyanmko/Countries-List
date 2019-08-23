import CountriesWatcher from './countries';
import CountriesByNameWatcher from './countriesByName';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([CountriesWatcher(), CountriesByNameWatcher()]);
}
