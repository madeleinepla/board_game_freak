import { connect } from 'react-redux';
import GameShow from './game_show';
import { requestGame } from '../../actions/game_actions';

// const mSTP = (state, ownProps) => ({
//   report: state.games[ownProps.match.params.gameId]
// })

const mSTP = (state, ownProps) => {
  return {
    game: state.entities.games[ownProps.match.params.gameId]
  }
}

const mDTP = dispatch => ({
  requestGame: (gameId) => dispatch(requestGame(gameId))
})

export default connect(mSTP, mDTP)(GameShow);