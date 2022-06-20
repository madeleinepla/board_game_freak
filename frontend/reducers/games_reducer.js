import { RECEIVE_GAMES, RECEIVE_GAME } from "../actions/game_actions";

const GamesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_GAMES:
      return action.games;
    case RECEIVE_GAME:
      // debugger;
      // newState[action.game.id] = action.game;
      // return newState;
      return action.game;
    default:
      return oldState;
  }
}

export default GamesReducer;