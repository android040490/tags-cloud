import * as R from 'ramda';

export const getTagById = (state, id) => R.prop(id, state.tags.entities)

export const getTags = (state) => {
     const tags = R.map( id => getTagById(state, id), state.tags.ids);
     return tags
}

export const getLoadingTags = (state) => state.tags.loading

const stringContains = (item, state) => (item.label.toLowerCase().indexOf(state.tags.filterString.toLowerCase()) == -1) ? false : true

export const getFilteredTags = (state) => {
    const tags = getTags(state).filter(item => stringContains(item, state))
    return tags
}

export const getParamItemId = (props) => props.params.itemId
