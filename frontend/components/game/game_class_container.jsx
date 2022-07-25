import GameClass from './game_class';
import { requestGames } from '../../actions/game_actions';
import { connect } from 'react-redux';

const mSTP = (state, { match }) => {
  const games = Object.values(state.entities.games)
  let path = match.path.split("/")
  path = path[path.length - 1];
  path = path.charAt(0).toUpperCase() + path.slice(1);
  let main_class = '';
  if (path === 'Types') {
    main_class = 'Type';
  } else if (path === 'Categories') {
    main_class = 'Category';
  } else if (path === 'Mechanics') {
    main_class = 'Mechanisms';
  }
  let game_classes = [];

  games.forEach((game) => {
    game.classifications.forEach((classification) => {
      if ( classification.main_class === main_class && !game_classes.includes(classification.sub_class)) {
        game_classes.push(classification.sub_class)
      }
    })
  })
  game_classes.sort();

  return {
    games,
    path,
    game_classes
  }
}

const mDTP = (dispatch) => {
  return {
    requestGames: () => dispatch(requestGames())
  }
}

export default connect(mSTP, mDTP)(GameClass);