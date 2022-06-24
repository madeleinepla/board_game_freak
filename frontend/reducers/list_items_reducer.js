import { RECEIVE_LIST_ITEM, REMOVE_LIST_ITEM } from "../actions/list_item_actions";

const ListItemsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_LIST_ITEM:
      newState[action.listItem.id] = action.listItem;
      return newState;
    case REMOVE_LIST_ITEM:
      delete newState[action.listItemId];
      return newState;
    default:
      return oldState;
  }
}

export default ListItemsReducer;