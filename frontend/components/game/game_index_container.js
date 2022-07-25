import GameIndex from './game_index';
import { connect } from 'react-redux';
import { requestGames } from '../../actions/game_actions';

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

  return {
    games
  }
}

const mapDispatchToProps = (dispatch) => ({
  requestGames: () => dispatch(requestGames()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GameIndex);
