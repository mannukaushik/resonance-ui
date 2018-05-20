import { FETCH_PRODUCTS_BEGIN, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE } from '../actions/resourceFactory';

const initialState = {
    items: [],
    loading: false,
    error: null
}
export default function apiReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_PRODUCTS_BEGIN:
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case FETCH_PRODUCTS_SUCCESS:
        return {
          ...state,
          loading: false,
          items: action.payload.item
        };
  
      case FETCH_PRODUCTS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          items: []
        };
  
      default:
        return state;
    }
  }