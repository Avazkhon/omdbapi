import {
  UPDATE_FAVORITES,
} from '../constants';

import {
  createReducer,
  getFavoritesToLocalStorage,
} from 'utils';

const initState = {
  isFetching: false,
  data: null,
  error: null,
};

export default createReducer(initState, {
  [UPDATE_FAVORITES]: (state, action) => {
    return {
      ...state,
      data: getFavoritesToLocalStorage(),
    };
  },
})
