import GameIndex from './game_index';
import { connect } from 'react-redux';
import { requestGames } from '../../actions/game_actions';

// function alphabetical(a, b) {
//   debugger
//   if (a.title < b.title) {
//     return -1;
//   }
//   if (a.title > b.title) {
//     return 1;
//   }
//   return 0;
// }

const mapStateToProps = (state, ownProps) => {
  let filterBy = ownProps.location.search
    
  let games = Object.values(state.entities.games)

  if (filterBy !== '') {
    filterBy = filterBy
      .slice(1)
      .split("-")
      .join(" ")

    games = games.filter((game) => {
      return game.classifications.some((classification) => {
        return classification.sub_class === filterBy;
      })
    })
  }
  // debugger;
  return {
    games
  }
}

const mapDispatchToProps = (dispatch) => ({
  requestGames: () => dispatch(requestGames()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GameIndex);
