import { RECEIVE_LIST_COMMENTS, RECEIVE_LIST_COMMENT, REMOVE_LIST_COMMENT } from "../actions/list_comment_actions";

const ListCommentsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_LIST_COMMENTS:
      return action.comments;
    case RECEIVE_LIST_COMMENT:
      newState[action.comment.id] = action.comment;
      return newState;
    case REMOVE_LIST_COMMENT:
      delete newState[action.commentId];
      return newState;
    default:
      return oldState;
  }
}

export default ListCommentsReducer;