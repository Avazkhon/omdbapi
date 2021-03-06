export const inBrowser = () => (typeof window != 'undefined');

export function createReducer(initialState, reducerMap) {
  return (state, action) => {
    if (!state) state = initialState;

    const reducer = reducerMap[action.type];

    return reducer ? reducer({ ...state}, action) : state;
  };
};

export function createRequestReducer(state, action, reducerMap) {
  const reducer = reducerMap[action.status];
  return reducer ? reducer(state, action) : state;
};


// set PreviouslyViewed to ...
export function setPVToLocalStorage (imdbID) {
  const prevData = getPVToLocalStorage() || [];
  prevData.unshift(imdbID);
  prevData.splice(5, 1);
  localStorage.setItem('PV', JSON.stringify(prevData));
}

// get PreviouslyViewed from ...
export function getPVToLocalStorage () {
  const data = localStorage.getItem('PV')
  return data && JSON.parse(data);
}

// set favorites from ...
export function setFavoritesToLocalStorage (imdbID) {
  const data = getFavoritesToLocalStorage() || [];
  data.push(imdbID);
  localStorage.setItem('favorites', JSON.stringify(data));
}

// remove favorites from ...
export function removeFavoritesToLocalStorage (imdbID) {
  const data = getFavoritesToLocalStorage() || [];
  const newData = data.filter(itm => itm !== imdbID);
  localStorage.setItem('favorites', JSON.stringify(newData));
}

// get favorites from ...
export function getFavoritesToLocalStorage () {
  const data = localStorage.getItem('favorites')
  return data && JSON.parse(data);
}
