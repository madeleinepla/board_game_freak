import GameIndex from './game_index';
import { connect } from 'react-redux';
import { requestGames } from '../../actions/game_actions';

// const mapStateToProps = (state) => ({
//   games: Object.values(state.entities.games)
// });

const mapStateToProps = (state) => {
  return {
  games: Object.values(state.entities.games)
}
}

const mapDispatchToProps = (dispatch) => ({
  requestGames: () => dispatch(requestGames()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GameIndex);
