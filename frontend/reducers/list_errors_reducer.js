import { RECEIVE_LIST_ERRORS } from '../actions/list_actions';

export default (oldState = [], action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_LIST_ERRORS:
      return action.errors
    default:
      return oldState;
  }
}