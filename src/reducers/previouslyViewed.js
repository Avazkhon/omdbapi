import {
  GET_PREVIOUSLY_VIEWED,
} from '../constants';

import {
  createReducer,
  createRequestReducer,
} from 'utils';

const initState = {
  isFetching: false,
  data: [],
  error: null,
};

export default createReducer(initState, {
  [GET_PREVIOUSLY_VIEWED]: (_state, _action) =>
    createRequestReducer(_state, _action, {
      SEND: (state, action) => ({
        ...state,
        isFetching: true,
      }),
      SUCCESS: (state, action) => ({
        ...state,
        isFetching: false,
        data: [...state.data, {...action.response}],
      }),
      FAIL: (state, action) => ({
        ...state,
        isFetching: false,
        data: null,
      }),
    }),
});
