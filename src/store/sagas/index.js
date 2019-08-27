import { Watchers } from './watchers';
import { all } from 'redux-saga/effects';

const { Countries, CountriesByAlpha, CountriesByCapital, CountriesByName } = Watchers;

export default function* rootSaga() {
  yield all([Countries(), CountriesByName(), CountriesByAlpha(), CountriesByCapital()]);
}
