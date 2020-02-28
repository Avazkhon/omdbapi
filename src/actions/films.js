import { CALL_API } from '../middleware/api';
import {
  GET_INFO_FILMS_REQUEST,
  GET_INFO_FILMS_SUCCESS,
  GET_INFO_FILMS_FAIL,
} from '../constants';


export function getFilmsInfo (data) {
  return dispatch => dispatch({
    [CALL_API]: {
      types: [GET_INFO_FILMS_REQUEST, GET_INFO_FILMS_SUCCESS, GET_INFO_FILMS_FAIL],
      method: 'GET',
      endpoint: '?t=joker&apikey=1977b733'
    }
  })
}
