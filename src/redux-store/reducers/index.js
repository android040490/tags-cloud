import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import tags from './tags';

export const reducers = combineReducers({
  routing: routerReducer,
  tags
})
