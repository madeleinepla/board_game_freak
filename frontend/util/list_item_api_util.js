// export const fetchListItem = listItemId => (
//   $.ajax({
//     url: `/api/list_items/${listItemId}`,
//     method: 'GET'
//   })
// );

// export const createListItem = (listItem) => (
//   $.ajax({
//     url: '/api/list_items',
//     method: 'POST',
//     data: { listItem }
//   })
// )

// export const updateListItem = (listItem) => (
//   $.ajax({
//     url: `/api/list_items/${listItem.id}`,
//     method: 'PATCH',
//     data: { list }
//   })
// )

// export const deleteListItem = (listItemId) => (
//   $.ajax({
//     url: `/api/list_items/${listItemId}`,
//     method: 'DELETE'
//   })
// )

export const fetchListItem = (listId, listItemId) => (
  $.ajax({
    url: `/api/lists/${listId}/list_items/${listItemId}`,
    method: 'GET'
  })
);

// export const createListItem = (listId, listItem) => (
//   $.ajax({
//     url: `/api/lists/${listId}/list_items`,
//     method: 'POST',
//     data: { listItem }
//   })
// )

export const createListItem = (listId, listItem) => {
  debugger;
  return $.ajax({
    url: `/api/lists/${listId}/list_items`,
    method: 'POST',
    data: { listItem }
  })
}

export const updateListItem = (listId, listItem) => (
  $.ajax({
    url: `/api/lists/${listId}/list_items/${listItem.id}`,
    method: 'PATCH',
    data: { listItem }
  })
)

export const deleteListItem = (listId, listItemId) => (
  $.ajax({
    url: `/api/lists/${listId}/list_items/${listItemId}`,
    method: 'DELETE'
  })
)