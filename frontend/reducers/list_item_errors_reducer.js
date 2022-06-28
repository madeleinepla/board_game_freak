import { RECEIVE_LIST_ITEM_ERRORS } from '../actions/list_item_actions';

export default (oldState = [], action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_LIST_ITEM_ERRORS:
      return action.errors
    default:
      return oldState;
  }
}