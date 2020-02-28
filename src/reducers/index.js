import { combineReducers } from 'redux'

import films from './films';

const rootReducer = {
  films
};

const createRootReducer = combineReducers({
  ...rootReducer,
})

export default createRootReducer;
