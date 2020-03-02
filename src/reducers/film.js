import {
  GET_INFO_FILM,
} from '../constants';

import {
  createReducer,
  createRequestReducer,
} from 'utils';

const initState = {
  isFetching: false,
  data: null,
  error: null,
};

export default createReducer(initState, {
  [GET_INFO_FILM]: (_state, _action) =>
    createRequestReducer(_state, _action, {
      SEND: (state, action) => ({
        ...state,
        isFetching: true,
      }),
      SUCCESS: (state, action) => ({
        ...state,
        isFetching: false,
        data: action.response,
      }),
      FAIL: (state, action) => ({
        ...state,
        isFetching: false,
        data: null,
      }),
    }),
});
