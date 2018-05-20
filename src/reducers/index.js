
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import apiReducer from './apiReducer'

export default combineReducers({
    routing: routerReducer,
    apiReducer
  })