import { RECEIVE_LIST_ITEM_COMMENTS, RECEIVE_LIST_ITEM_COMMENT, REMOVE_LIST_ITEM_COMMENT } from "../actions/list_item_comment_actions";

const ListItemCommentsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_LIST_ITEM_COMMENTS:
      return action.comments;
    case RECEIVE_LIST_ITEM_COMMENT:
      newState[action.comment.id] = action.comment;
      return newState;
    case REMOVE_LIST_ITEM_COMMENT:
      delete newState[action.commentId];
      return newState;
    default:
      return oldState;
  }
}

export default ListItemCommentsReducer;