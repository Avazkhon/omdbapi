import { combineReducers } from 'redux'

import films from './films';
import film from './film';
import previouslyViewed from './previouslyViewed';
import favorites from './favorites';

const rootReducer = {
  films,
  film,
  previouslyViewed,
  favorites,
};

const createRootReducer = combineReducers({
  ...rootReducer,
})

export default createRootReducer;
