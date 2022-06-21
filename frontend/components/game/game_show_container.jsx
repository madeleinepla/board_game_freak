import { connect } from 'react-redux';
import GameShow from './game_show';
import { requestGame } from '../../actions/game_actions';
import { selectGame } from '../../reducers/selectors';

// const mSTP = (state, ownProps) => ({
//   game: state.entities.games[ownProps.match.params.gameId]
// })

const mSTP = (state, { match }) => {
  const gameId = parseInt(match.params.gameId);
  const game = selectGame(state.entities, gameId);
  // debugger;
  return {
    gameId,
    game
  }
}

const mDTP = dispatch => ({
  requestGame: (gameId) => dispatch(requestGame(gameId))
})

export default connect(mSTP, mDTP)(GameShow);