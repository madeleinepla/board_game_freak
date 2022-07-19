import * as ListCommentApiUtil from '../util/list_comment_api_util';

export const RECEIVE_LIST_COMMENTS = 'RECEIVE_LIST_COMMENTS';
export const RECEIVE_LIST_COMMENT = 'RECEIVE_LIST_COMMENT';
export const REMOVE_LIST_COMMENT = 'REMOVE_LIST_COMMENT';

const receiveListComments = comments => ({
  type: RECEIVE_LIST_COMMENTS,
  comments
});

const receiveListComment = comment => ({
  type: RECEIVE_LIST_COMMENT,
  comment
});

const removeListComment = commentId => ({
  type: REMOVE_LIST_COMMENT,
  commentId
})

export const requestListComments = () => dispatch => (
  ListCommentApiUtil.fetchListComments()
    .then(comments => dispatch(receiveListComments(comments)))
);

export const requestListComment = (commentId) => dispatch => (
  ListCommentApiUtil.fetchListComment(commentId)
    .then(comment => dispatch(receiveListComment(comment)))
);

export const createListComment = (comment) => dispatch => (
  ListCommentApiUtil.createListComment(comment)
    .then(comment => dispatch(receiveListComment(comment)))
)

export const updateListComment = (comment) => dispatch => (
  ListCommentApiUtil.updateListComment(comment)
    .then(comment => dispatch(receiveListComment(comment)))

)

export const deleteListComment = (commentId) => dispatch => (
  ListCommentApiUtil.deleteListComment(commentId)
    .then(() => dispatch(removeListComment(commentId)))
)