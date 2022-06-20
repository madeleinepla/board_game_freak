import GameIndex from './game_index';
import { connect } from 'react-redux';
import { requestGames, requestGame } from '../../actions/game_actions';

const mapStateToProps = (state) => ({
  games: Object.values(state.entities.games)
});

const mapDispatchToProps = (dispatch) => ({
  requestGames: () => dispatch(requestGames()),
  // requestGame: id => dispatch(requestGame(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(GameIndex);
