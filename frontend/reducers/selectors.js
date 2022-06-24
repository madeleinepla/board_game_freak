export const selectGame = ({ games }, gameId) => {
  return games[gameId] || { game: [] };
};

export const selectList = ({ lists }, listId) => {
  return lists[listId] || { list: [] };
};

export const selectUser = ({ users }, userId) => {
  return users[userId] || { user: [] };
};
