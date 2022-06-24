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

export const requestListItem = (listItemId) => dispatch => (
  ListItemApiUtil.fetchListItem(listItemId)
    .then(listItem => dispatch(receiveListItem(listItem)))
);

export const createListItem = (listItem) => dispatch => (
  ListItemApiUtil.createListItem(listItem)
    .then(listItem => dispatch(receiveListItem(listItem)))
)

export const updateListItem = (listItem) => dispatch => (
  ListItemApiUtil.updateListItem(listItem)
    .then(listItem => dispatch(receiveListItem(listItem)))
)

export const deleteListItem = (listItemId) => dispatch => (
  ListItemApiUtil.deleteListItem(listItemId)
    .then(() => dispatch(removeListItem(listItemId)))
)
