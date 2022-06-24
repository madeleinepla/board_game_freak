import * as ListItemApiUtil from '../util/list_item_api_util';

export const RECEIVE_LIST_ITEM = 'RECEIVE_LIST_ITEM';
export const REMOVE_LIST_ITEM = 'REMOVE_LIST_ITEM';

const receiveListItem = listItem => ({
  type: RECEIVE_LIST_ITEM,
  listItem
});

const removeListItem = listItemId => ({
  type: REMOVE_LIST_ITEM,
  listItemId
})

export const requestListItem = (listId, listItemId) => dispatch => (
  ListItemApiUtil.fetchListItem(listId, listItemId)
    .then(listItem => dispatch(receiveListItem(listItem)))
);

// export const createListItem = (listId, listItem) => dispatch => (
//   ListItemApiUtil.createListItem(listId, listItem)
//     .then(listItem => dispatch(receiveListItem(listItem)))
// )

export const createListItem = (listId, listItem) => dispatch => (
  ListItemApiUtil.createListItem(listId, listItem)
    .then(listItem => console.log(listItem))
)

export const updateListItem = (listId, listItem) => dispatch => (
  ListItemApiUtil.updateListItem(listId, listItem)
    .then(listItem => dispatch(receiveListItem(listItem)))
)

export const deleteListItem = (listId, listItemId) => dispatch => (
  ListItemApiUtil.deleteListItem(listId, listItemId)
    .then(() => dispatch(removeListItem(listItemId)))
)
