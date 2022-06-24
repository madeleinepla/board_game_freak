import { connect } from 'react-redux';
import { createListItem } from '../../actions/list_item_actions';
import ListItemForm from './list_item_form';

const mSTP = (state, { match }) => {
  // debugger;
  return {
    listItem: {
      title: '',
      body: '',
      list_id: parseInt(match.params.listId),
      game_id: 1
    },
    formType: 'Add Item'
  }
}

const mDTP = dispatch => ({
  action: (listId, listItem) => dispatch(createListItem(listId, listItem))
})

export default connect(mSTP, mDTP)(ListItemForm);