import 'isomorphic-fetch';

function callApi(endpoint, method, data) {
  let requestOptions = {
    method: method,
    credentials: 'same-origin',
    headers: {
      Accept: 'application/json',
    },
  };

  if (data) {
    requestOptions.headers['Content-Type'] = 'application/json';
    requestOptions.body = JSON.stringify(data);
  }

  return fetch('http://www.omdbapi.com/'+endpoint, requestOptions)
    .then(response => {
      const { status, ok } = response;

      if (ok && method === 'DELETE') {
        return {};
      }

      return response.json().then(json => {
        if (!ok) {
          throw { json, status };

        } else {
          return { json, status };
        }
      });
    });
}

export const CALL_API = Symbol('Call API');

export default store => next => action => {
  if (!action) {
    return;
  }

  const callAPI = action[CALL_API];

  if (typeof callAPI === 'undefined') {
    return next(action);
  }

  let { endpoint } = callAPI;
  const { types, method, data } = callAPI;

  if (typeof endpoint === 'function') {
    endpoint = endpoint(store.getState());
  }

  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.');
  }

  if (typeof method !== 'string') {
    throw new Error('Specify a string method.');
  }

  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.');
  }

  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.');
  }

  function actionWith(actionData) {
    const finalAction = Object.assign({}, action, actionData);
    delete finalAction[CALL_API];
    return finalAction;
  }

  const [requestType, successType, failureType] = types;


  return callApi(endpoint, method, data).then(
    response => {
      return next(actionWith({
        type: successType,
        response: response.json
      }));
    },

    error => {
      if (error.status === 403 || error.status === 401) {
        console.log('is not login');
      }

      return next(actionWith({
        type: failureType,
        error: error.json || 'Something bad happened'
      }));
    });
};
