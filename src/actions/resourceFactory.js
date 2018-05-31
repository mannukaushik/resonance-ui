import data from '../utils/metamodels/soundbars';

export const FETCH_PRODUCTS_BEGIN = 'FETCH_PRODUCTS_BEGIN';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export function resourceFactory(apiUrl) {

  return dispatch => {
    dispatch(fetchProductsBegin());
    return fetch(apiUrl, { method: 'OPTIONS' })
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchProductsSuccess(json._options.links.map((links) => {
          if ((links.method === 'GET') && (data.metamodel.rel === 'search')) {
            fetch(links.href)
              .then(handleErrors)
              .then(res => res.json())
              .then(json => {
                 dispatch(fetchProductsSuccess(json._links.item.map((item)=>item.summary))
              )
          }
        )}})));
        return json._links.item;
      })
      .catch(error => dispatch(fetchProductsError(error)));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
export const fetchProductsBegin = () => ({ type: FETCH_PRODUCTS_BEGIN });

export function fetchProductsSuccess(products) {

  return { type: FETCH_PRODUCTS_SUCCESS, payload: products }
}

export const fetchProductsError = error => ({
  type: FETCH_PRODUCTS_FAILURE, payload: {
    error
  }
});