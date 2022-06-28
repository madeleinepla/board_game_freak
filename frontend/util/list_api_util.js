export const fetchLists = () => (
  $.ajax({
    url: '/api/lists',
    method: 'GET'
  })
)

export const fetchList = listId => (
  $.ajax({
    url: `/api/lists/${listId}`,
    method: 'GET'
  })
);

export const createList = (list) => (
  $.ajax({
    url: '/api/lists',
    method: 'POST',
    data: { list }
  })
)

export const updateList = (list) => (
  $.ajax({
    url: `/api/lists/${list.id}`,
    method: 'PATCH',
    data: { list }
  })
)

export const deleteList = (listId) => (
  $.ajax({
    url: `/api/lists/${listId}`,
    method: 'DELETE'
  })
)

export const postLikeToList = (listId) => $.ajax({
  url: '/api/list_likes',
  method: 'POST',
  data: { listId },
});

export const deleteLikeFromList = (listId) => $.ajax({
  url: '/api/list_likes',
  method: 'DELETE',
  data: { listId },
});