import {
  GET_INFO_FILM_REQUEST,
  GET_INFO_FILM_SUCCESS,
  GET_INFO_FILM_FAIL,
} from '../constants'

const initState = {
  isFetching: false,
  data: null,
  error: null,
};

export default function films(state = initState, action) {

  if (action.type === GET_INFO_FILM_REQUEST) {
    return {
      ...state,
      isFetching: true,
    }
  }
  if (action.type === GET_INFO_FILM_SUCCESS) {
    return {
      ...state,
      error: null,
      isFetching: false,
      data: action.response,
    }
  }
  if (action.type === GET_INFO_FILM_FAIL) {
    return {
      ...state,
      data: null,
      isFetching: false,
      error: action.error,
    }
  }

  return state;
}
