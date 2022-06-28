import { connect } from 'react-redux';
import { createListItem } from '../../actions/list_item_actions';
import { requestGames } from '../../actions/game_actions';
import ListItemForm from './list_item_form';

const mSTP = (state, { match }) => {
  // debugger;
  return {
    errors: state.errors,
    listItem: {
      title: '',
      body: '',
      list_id: parseInt(match.params.listId),
      game_id: ''
    },
    formType: 'Add Item',
    games: Object.values(state.entities.games)
  }
}

const mDTP = dispatch => ({
  action: (listId, listItem) => dispatch(createListItem(listId, listItem)),
  requestGames: () => dispatch(requestGames()),
})

export default connect(mSTP, mDTP)(ListItemForm);