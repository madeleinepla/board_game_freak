export const fetchListItem = listId => (
  $.ajax({
    url: `/api/lists/${listId}`,
    method: 'GET'
  })
);

export const createListItem = (list) => (
  $.ajax({
    url: '/api/lists',
    method: 'POST',
    data: { list }
  })
)

export const updateListItem = (list) => (
  $.ajax({
    url: `/api/lists/${list.id}`,
    method: 'PATCH',
    data: { list }
  })
)

export const deleteListItem = (listId) => (
  $.ajax({
    url: `/api/lists/${listId}`,
    method: 'DELETE'
  })
)