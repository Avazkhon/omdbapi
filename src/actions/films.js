import {
  GET_INFO_FILMS,
  GET_INFO_FILM,
  GET_PREVIOUSLY_VIEWED,
} from '../constants';


export function getFilmsInfo (data) {
  const { search, typeVideo, year, season } = data;
  const type = typeVideo ? `&type=${typeVideo}`: '';
  const y = year ? `&y=${year}`: '';
  const Season = season ? `&Season=${season}`: '';
  const endpoint = `?s=${search}${type}${y}${Season}&apikey=1977b733`
  return dispatch => dispatch({
    type: GET_INFO_FILMS,
    meta: {
      method: 'GET',
      endpoint,
    },
  });
}

export function getFilmInfo (imdbID) {
  return dispatch => dispatch({
    type: GET_INFO_FILM,
    meta: {
      method: 'GET',
      endpoint: `?i=${imdbID}&apikey=1977b733`
    }
  });
}

export function getPreviouslyViewed (imdbID) {
  return dispatch => dispatch({
    type: GET_PREVIOUSLY_VIEWED,
    meta: {
      method: 'GET',
      endpoint: `?i=${imdbID}&apikey=1977b733`
    }
  });
}
