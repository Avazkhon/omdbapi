import {
  UPDATE_FAVORITES,
  GET_FAVORITES,
} from '../constants';

import {
  createReducer,
  createRequestReducer,
  getFavoritesToLocalStorage,
} from 'utils';

const initState = {
  isFetching: false,
  data: null,
  filmsData: [],
  error: null,
};

export default createReducer(initState, {
  [UPDATE_FAVORITES]: (state, action) => {
    return {
      ...state,
      data: getFavoritesToLocalStorage(),
    };
  },
  [GET_FAVORITES]: (_state, _action) =>
    createRequestReducer(_state, _action, {
      SEND: (state, action) => ({
        ...state,
        isFetching: true,
      }),
      SUCCESS: (state, action) => ({
        ...state,
        isFetching: false,
        filmsData: [...state.filmsData, {...action.response}],
      }),
      FAIL: (state, action) => ({
        ...state,
        isFetching: false,
        data: null,
      }),
    }),
})
