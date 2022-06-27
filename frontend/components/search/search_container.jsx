import Search from './search'
import { connect } from 'react-redux';
import { requestGames } from '../../actions/game_actions';

const mapStateToProps = (state) => {
  const games = Object.values(state.entities.games)
  debugger;
  return {
    games
  }
}

const mapDispatchToProps = (dispatch) => ({
  requestGames: () => dispatch(requestGames()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
