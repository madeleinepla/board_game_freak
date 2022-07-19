export const fetchListItemComments = () => (
  $.ajax({
    url: '/api/list_item_comments',
    method: 'GET'
  })
)

export const fetchListItemComment = commentId => (
  $.ajax({
    url: `/api/list_item_comments/${commentId}`,
    method: 'GET'
  })
);

export const createListItemComment = (comment) => (
  $.ajax({
    url: '/api/list_item_comments',
    method: 'POST',
    data: { comment }
  })
)

export const deleteListItemComment = (commentId) => (
  $.ajax({
    url: `/api/list_item_comments/${commentId}`,
    method: 'DELETE'
  })
)