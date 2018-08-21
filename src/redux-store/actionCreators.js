import {
  FETCH_TAGS_START,
  FETCH_TAGS_SUCCESS,
  FETCH_TAGS_FAILURE,
  SET_FILTER
} from './actionTypes';

export const fetchTagsStart = () => {
  return({type : FETCH_TAGS_START})
}

export const fetchTagsSuccess = (data) => {
  return({
    type : FETCH_TAGS_SUCCESS,
    payload : data})
}

export const fetchTagsFailure = (err) => {
  return({
    type : FETCH_TAGS_FAILURE,
    error : err
  })
}

export const setFilterString = (string) => {
  return({
    type : SET_FILTER,
    payload : string
  })
}