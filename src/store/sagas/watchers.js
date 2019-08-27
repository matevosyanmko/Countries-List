import { takeEvery } from 'redux-saga/effects';
import { COUNTRIES } from '../actiontypes';
import { Workers } from './workers';
const { FIND_COUNTRIES_BY_ALPHA, FIND_COUNTRIES_BY_CAPITAL, FIND_COUNTRIES_BY_NAME, FIND_COUNTRIES } = COUNTRIES;

function* Countries() {
  yield takeEvery(FIND_COUNTRIES, Workers.UniversalWorker);
}

function* CountriesByName() {
  yield takeEvery(FIND_COUNTRIES_BY_NAME, Workers.UniversalWorker);
}

function* CountriesByCapital() {
  yield takeEvery(FIND_COUNTRIES_BY_CAPITAL, Workers.UniversalWorker);
}

function* CountriesByAlpha() {
  yield takeEvery(FIND_COUNTRIES_BY_ALPHA, Workers.UniversalWorker);
}


export const Watchers = {
  Countries,
  CountriesByName,
  CountriesByAlpha,
  CountriesByCapital
};
