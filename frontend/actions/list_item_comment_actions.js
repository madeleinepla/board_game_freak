import * as ListItemCommentApiUtil from '../util/list_item_comment_api_util';

export const RECEIVE_LIST_ITEM_COMMENTS = 'RECEIVE_LIST_ITEM_COMMENTS';
export const RECEIVE_LIST_ITEM_COMMENT = 'RECEIVE_LIST_ITEM_COMMENT';
export const REMOVE_LIST_ITEM_COMMENT = 'REMOVE_LIST_ITEM_COMMENT';

const receiveListItemComments = comments => ({
  type: RECEIVE_LIST_ITEM_COMMENTS,
  comments
});

const receiveListItemComment = comment => ({
  type: RECEIVE_LIST_ITEM_COMMENT,
  comment
});

const removeListItemComment = commentId => ({
  type: REMOVE_LIST_ITEM_COMMENT,
  commentId
})

export const requestListItemComments = () => dispatch => (
  ListItemCommentApiUtil.fetchListItemComments()
    .then(comments => dispatch(receiveListItemComments(comments)))
);

export const requestListItemComment = (commentId) => dispatch => (
  ListItemCommentApiUtil.fetchListItemComment(commentId)
    .then(comment => dispatch(receiveListItemComment(comment)))
);

export const createListItemComment = (comment) => dispatch => (
  ListItemCommentApiUtil.createListItemComment(comment)
    .then(comment => dispatch(receiveListItemComment(comment)))
)

export const deleteListItemComment = (commentId) => dispatch => (
  ListItemCommentApiUtil.deleteListItemComment(commentId)
    .then(() => dispatch(removeListItemComment(commentId)))
)