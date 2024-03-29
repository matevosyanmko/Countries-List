// watcher actions
const FIND_COUNTRIES = 'FIND_COUNTRIES';
const FIND_COUNTRIES_BY_NAME = 'FIND_COUNTRIES_BY_NAME';
const FIND_COUNTRIES_BY_ALPHA = 'FIND_COUNTRIES_BY_ALPHA';
const FIND_COUNTRIES_BY_CAPITAL = 'FIND_COUNTRIES_BY_CAPITAL';
// fetch statuses
const FIND_COUNTRIES_PROCESSING = 'FIND_COUNTRIES_FETCHING';
const FIND_COUNTRIES_FETCHED = 'FIND_COUNTRIES_FETCHED';
const FIND_COUNTRIES_FAILED = 'FIND_COUNTRIES_FAILED';

export const COUNTRIES = {
  FIND_COUNTRIES,
  FIND_COUNTRIES_FAILED,
  FIND_COUNTRIES_FETCHED,
  FIND_COUNTRIES_PROCESSING,
  FIND_COUNTRIES_BY_NAME,
  FIND_COUNTRIES_BY_ALPHA,
  FIND_COUNTRIES_BY_CAPITAL
};
