export const selectGame = ({ games }, gameId) => {
  return games[gameId] || { game: [] };
};