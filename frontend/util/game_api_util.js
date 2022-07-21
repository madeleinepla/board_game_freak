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

export const postRatingToGame = (rating) => $.ajax({
  url: '/api/ratings',
  method: 'POST',
  data: { rating },
});

export const updateRatingToGame = (rating) => $.ajax({
  url: `/api/ratings/${rating.id}`,
  method: 'PATCH',
  data: { rating },
});

export const deleteRatingFromGame = (ratingId) => $.ajax({
  url: `/api/ratings/${ratingId}`,
  method: 'DELETE',
});
