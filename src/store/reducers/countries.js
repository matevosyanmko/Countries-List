const initialstate = { data: [], loaded: false, error: false };

export default (state = initialstate, action) => ({ ...state, ...action.payload });
