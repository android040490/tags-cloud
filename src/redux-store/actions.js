
import * as Api from 'api';
import * as Actions from './actionCreators';

export const fetchTags = () => ( dispatch ) => {
  dispatch(Actions.fetchTagsStart());

  Api.fetchTags()
    .then( resp => {
      dispatch(Actions.fetchTagsSuccess(resp.data))
    })
    .catch(err => {
      dispatch(Actions.fetchTagsFailure(err))
  })
  
}

export const setFilter = ( string ) => (dispatch) => {
  dispatch(Actions.setFilterString(string))
}
