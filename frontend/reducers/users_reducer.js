import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const UsersReducer =  (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  // debugger;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState[action.currentUser.id] = action.currentUser
      return newState
    default:
      return oldState;
  }
}

export default UsersReducer;