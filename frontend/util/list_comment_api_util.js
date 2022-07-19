export const fetchListComments = () => (
  $.ajax({
    url: '/api/list_comments',
    method: 'GET'
  })
)

export const fetchListComment = commentId => (
  $.ajax({
    url: `/api/list_comments/${commentId}`,
    method: 'GET'
  })
);

export const createListComment = (comment) => (
  $.ajax({
    url: '/api/list_comments',
    method: 'POST',
    data: { comment }
  })
)

export const updateListComment = (comment) => (
  $.ajax({
    url: `/api/list_comments/${comment.id}`,
    method: 'PATCH',
    data: { comment }
  })
)

export const deleteListComment = (commentId) => (
  $.ajax({
    url: `/api/list_comments/${commentId}`,
    method: 'DELETE'
  })
)