import * as R from 'ramda';

import { 
  FETCH_TAGS_START,
  FETCH_TAGS_SUCCESS,
  FETCH_TAGS_FAILURE,
  SET_FILTER } from '../actionTypes.js';

const initialState = {
  ids : [],
  entities : {},
  filterString : '',
  loading : false
}

export default function tags( state = initialState, { type , payload } ){
  switch (type){

    case FETCH_TAGS_START : 
      return {
        ...state,
        loading: true
      }

    case FETCH_TAGS_SUCCESS :
      let entities = R.indexBy(R.prop('id'), payload);
      let ids = R.keys(entities);
      return {
        ...state,
        ids,
        entities,
        loading : false
        }

    case SET_FILTER : 
      return {
        ...state,
        filterString : payload
      }
    
    default:
      return state
  }
}