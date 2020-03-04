import {
  UPDATE_FAVORITES,
} from '../constants';

export const updateFavorites = () => (
  dispatch => dispatch({
    type: UPDATE_FAVORITES,
  })
)
