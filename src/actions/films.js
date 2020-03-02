import { CALL_API } from '../middleware/api';
import {
  GET_INFO_FILMS_REQUEST,
  GET_INFO_FILMS_SUCCESS,
  GET_INFO_FILMS_FAIL,

  GET_INFO_FILM_REQUEST,
  GET_INFO_FILM_SUCCESS,
  GET_INFO_FILM_FAIL,
} from '../constants';


export function getFilmsInfo (data) {
  const { search, typeVideo, year } = data;
  const type = typeVideo ? `&type=${typeVideo}`: '';
  const y = year ? `&y=${year}`: '';
  const endpoint = `?s=${search}${type}${y}&apikey=1977b733`
  return dispatch => dispatch({
    [CALL_API]: {
      types: [GET_INFO_FILMS_REQUEST, GET_INFO_FILMS_SUCCESS, GET_INFO_FILMS_FAIL],
      method: 'GET',
      endpoint,
    }
  })
}

export function getFilmInfo (imdbID) {
  return dispatch => dispatch({
    [CALL_API]: {
      types: [GET_INFO_FILM_REQUEST, GET_INFO_FILM_SUCCESS, GET_INFO_FILM_FAIL],
      method: 'GET',
      endpoint: `?i=${imdbID}&apikey=1977b733`
    }
  })
}
