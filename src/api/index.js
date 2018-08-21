import listTags from './mockdata';

export const fetchTags = () => {
    return new Promise( resolve => {
        resolve(listTags)
    })
}