export const FETCH_PRODUCTS_BEGIN = 'FETCH_PRODUCTS_BEGIN';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export function resourceFactory() {
    return dispatch => {
      dispatch(fetchProductsBegin());
      return fetch("http://localhost:8080/resonance/v1/products")
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
        dispatch(fetchProductsSuccess(json._links));
        console.log(json._links);
        return json._links;
        })
        .catch(error => dispatch(fetchProductsError(error)));
    };
  }
  
  // Handle HTTP errors since fetch won't.
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }
  export const fetchProductsBegin = () => ({
    type: FETCH_PRODUCTS_BEGIN
  });
  
  export function fetchProductsSuccess(products) {

    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload:products
    }
}
  
  export const fetchProductsError = error => ({
    type: FETCH_PRODUCTS_FAILURE,
    payload: { error }
  });