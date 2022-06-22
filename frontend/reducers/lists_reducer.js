import { RECEIVE_LISTS, RECEIVE_LIST, REMOVE_LIST } from "../actions/list_actions";

const ListsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_LISTS:
      return action.lists;
    case RECEIVE_LIST:
      newState[action.list.id] = action.list;
      return newState;
    case REMOVE_LIST:
      delete newState[action.listId];
      return newState;
    default:
      return oldState;
  }
}

export default ListsReducer;