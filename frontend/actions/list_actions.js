import * as ListApiUtil from '../util/list_api_util';

export const RECEIVE_LISTS = 'RECEIVE_LISTS';
export const RECEIVE_LIST = 'RECEIVE_LIST';
export const REMOVE_LIST = 'REMOVE_LIST';
export const RECEIVE_LIST_ERRORS = 'RECEIVE_LIST_ERRORS';

const receiveLists = lists => ({
  type: RECEIVE_LISTS,
  lists
});

const receiveList = list => ({
  type: RECEIVE_LIST,
  list
});

const removeList = listId => ({
  type: REMOVE_LIST,
  listId
})

const receiveErrors = (errors) => ({
  type: RECEIVE_LIST_ERRORS,
  errors
});

export const requestLists = () => dispatch => (
  ListApiUtil.fetchLists()
    .then(lists => dispatch(receiveLists(lists)))
);

export const requestList = (listId) => dispatch => (
  ListApiUtil.fetchList(listId)
    .then(list => dispatch(receiveList(list)))
);

export const createList = (list) => dispatch => (
  ListApiUtil.createList(list)
    .then(list => (dispatch(receiveList(list))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
)

export const updateList = (list) => dispatch => (
  ListApiUtil.updateList(list)
    .then(list => dispatch(receiveList(list)))
)

export const deleteList = (listId) => dispatch => (
  ListApiUtil.deleteList(listId)
    .then(() => dispatch(removeList(listId)))
)

export const likeList = (listId) => dispatch => (
  ListApiUtil.postLikeToList(listId)
    .then(list => dispatch(receiveSingleChirp(list)))
)

export const unlikeList = (listId) => dispatch => (
  ListApiUtil.deleteLikeFromList(listId)
    .then(list => dispatch(receiveSingleChirp(list)))
)