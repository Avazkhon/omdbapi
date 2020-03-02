import { combineReducers } from 'redux'

import films from './films';
import film from './film';
import previouslyViewed from './previouslyViewed';

const rootReducer = {
  films,
  film,
  previouslyViewed,
};

const createRootReducer = combineReducers({
  ...rootReducer,
})

export default createRootReducer;
