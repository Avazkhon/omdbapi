import {
  UPDATE_FAVORITES,
  GET_FAVORITES,
} from '../constants';

export const updateFavorites = () => (
  dispatch => dispatch({
    type: UPDATE_FAVORITES,
  })
);

export function getFaVorites (imdbID) {
  return dispatch => dispatch({
    type: GET_FAVORITES,
    meta: {
      method: 'GET',
      endpoint: `?i=${imdbID}&apikey=1977b733`
    }
  });
};
