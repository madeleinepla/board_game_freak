import GameIndex from './game_index';
import { connect } from 'react-redux';
import { requestGames } from '../../actions/game_actions';

// const mapStateToProps = (state) => ({
//   games: Object.values(state.entities.games)
// });

function alphabetical(a, b) {
  debugger
  if (a.title < b.title) {
    return -1;
  }
  if (a.title > b.title) {
    return 1;
  }
  return 0;
}

const mapStateToProps = (state) => {
  debugger;
  return {
  games: Object.values(state.entities.games).sort(alphabetical)
}
}

const mapDispatchToProps = (dispatch) => ({
  requestGames: () => dispatch(requestGames()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GameIndex);
