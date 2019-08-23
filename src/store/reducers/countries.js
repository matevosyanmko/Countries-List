const FIND_COUNTRIES_PROCESSING = 'FIND_COUNTRIES_FETCHING';
const FIND_COUNTRIES_FETCHED = 'FIND_COUNTRIES_FETCHED';
const FIND_COUNTRIES_FAILED = 'FIND_COUNTRIES_FAILED';

const initialstate = {
  data: [],
  loaded: false,
  error: false,
};
export default (state = initialstate, action) => {
  console.log(action);
  return { ...state, ...action.payload };
};
