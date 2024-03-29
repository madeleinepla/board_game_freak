import { connect } from 'react-redux';
import GameShow from './game_show';
import { rateGame, requestGame, unrateGame, updateRateGame } from '../../actions/game_actions';
import { selectGame } from '../../reducers/selectors';

// const mSTP = (state, ownProps) => ({
//   game: state.entities.games[ownProps.match.params.gameId]
// })


const mSTP = (state, { match }) => {
  const gameId = parseInt(match.params.gameId);
  const game = selectGame(state.entities, gameId);

  const getClassification = (field) => {
    if (game.classifications) {
      return game.classifications.filter(obj => obj.main_class === `${field}`).map(obj => obj.sub_class);
    } else {
      return [];
    }
  }

  const type = getClassification('Type');
  const category = getClassification('Category');
  const mechanisms = getClassification('Mechanisms');

  return {
    gameId,
    game,
    type,
    category,
    mechanisms,
    currentUserId: state.session.id,
    rating: {
      userId: state.session.id,
      gameId: gameId,
      score: ""
    }
  }
}

const mDTP = dispatch => ({
  requestGame: (gameId) => dispatch(requestGame(gameId)),
  rateGame: (rating) => dispatch(rateGame(rating)),
  updateRateGame: (rating) => dispatch(updateRateGame(rating)),
  unrateGame: (ratingId) => dispatch(unrateGame(ratingId))
})

export default connect(mSTP, mDTP)(GameShow);