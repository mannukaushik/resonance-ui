import data from '../utils/metamodels/soundbars';

export const FETCH_PRODUCTS_BEGIN = 'FETCH_PRODUCTS_BEGIN';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
export const schemaSet = new Set();

export function resourceFactory(apiUrl) {

  return dispatch => {
    dispatch(fetchProductsBegin());
    return fetch(apiUrl, {method: 'OPTIONS'})
      .then(handleErrors)
      .then(res => res.json())
      .then(insertSummary)
      .then(json => {
        json
          ._options
          .links
          .map((links) => {
            if ((links.method === 'GET') && (data.metamodel.rel === 'search')) {
              fetch(links.href, {method: links.method})
                .then(handleErrors)
                .then(res => res.json())
                .then(json => {
                  dispatch(fetchProductsSuccess(json._links.item.map((item) => {
                    return item.summary
                  })))
                  
                })
            }
          });
       
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
function insertSummary(json) {
  json
    ._options
    .links
    .map((fields) => {
      if (fields.rel === data.metamodel.rel) {
        schemaSet.add(fields.schema.properties);
      }
    });

  const setIterator = schemaSet[Symbol.iterator]();
  const values = setIterator
    .next()
    .value;
  var keys = Object.keys(values);
  schemaSet.clear();

  data
    .metamodel
    .properties
    .map((metamodelNames) => {
      keys
        .forEach(function (key) {
          if (key === metamodelNames.name) {
            schemaSet.add(metamodelNames.name);
          }
        });
    });
  return json;
}
export const fetchProductsBegin = () => ({type: FETCH_PRODUCTS_BEGIN});

export function fetchProductsSuccess(products) {

  return {type: FETCH_PRODUCTS_SUCCESS, payload: products}
}

export const fetchProductsError = error => ({type: FETCH_PRODUCTS_FAILURE, payload: {
    error
  }});