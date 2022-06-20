export const fetchGames = () => (
  $.ajax({
    url: '/api/games',
    method: 'GET'
  })
)

export const fetchGame = gameId => (
  $.ajax({
    url: `/api/games/${gameId}`,
    method: 'GET'
  })
);
