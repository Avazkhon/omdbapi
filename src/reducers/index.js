import { combineReducers } from 'redux'

import films from './films';
import film from './film';

const rootReducer = {
  films,
  film,
};

const createRootReducer = combineReducers({
  ...rootReducer,
})

export default createRootReducer;
