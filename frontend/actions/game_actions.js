import * as GameApiUtil from '../util/game_api_util';

export const RECEIVE_GAMES = 'RECEIVE_GAMES';
export const RECEIVE_GAME = 'RECEIVE_GAME';


export const receiveGames = games => ({
  type: RECEIVE_GAMES,
  games
});

const receiveGame = game => ({
  type: RECEIVE_GAME,
  game
});

export const requestGames = () => dispatch => (
  GameApiUtil.fetchGames()
    .then(games => dispatch(receiveGames(games)))
);

export const requestGame = (gameId) => dispatch => (
  GameApiUtil.fetchGame(gameId)
    .then(game => dispatch(receiveGame(game)))
);

export const rateGame = (rating) => dispatch => (
  GameApiUtil.postRatingToGame(rating)
    .then(game => dispatch(receiveGame(game)))
)

export const unlikeList = (listId) => dispatch => (
  ListApiUtil.deleteLikeFromList(listId)
    .then(list => dispatch(receiveList(list)))
)
