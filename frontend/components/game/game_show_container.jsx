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

  const getClassification = (field) => {
    if (game.classifications) {
      return game.classifications.filter(obj => obj.main_class === `${field}`).map(obj => obj.sub_class);
    } else {
      return [];
    }
  }

  // if (game.classifications) {
  //   const type = getClassification('Type');
  //   const category = getClassification('Category');
  //   const mechanisms = getClassification('Mechanisms');
  // }

  const type = getClassification('Type');
  const category = getClassification('Category');
  const mechanisms = getClassification('Mechanisms');
  // debugger;
  return {
    gameId,
    game,
    type,
    category,
    mechanisms
  }
}

const mDTP = dispatch => ({
  requestGame: (gameId) => dispatch(requestGame(gameId))
})

export default connect(mSTP, mDTP)(GameShow);