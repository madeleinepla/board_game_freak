import * as ListApiUtil from '../util/list_api_util';

export const RECEIVE_LISTS = 'RECEIVE_LISTS';
export const RECEIVE_LIST = 'RECEIVE_LIST';
export const REMOVE_LIST = 'REMOVE_LIST';

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
    .then(list => dispatch(receiveList(list)))
)

export const updateList = (list) => dispatch => (
  ListApiUtil.updateList(list)
    .then(list => dispatch(receiveList(list)))
)

export const deleteList = (listId) => dispatch => (
  ListApiUtil.deleteList(listId)
    .then(() => dispatch(removeList(listId)))
)
