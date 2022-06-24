import { connect } from 'react-redux';
import { createListItem } from '../../actions/list_item_actions';
import ListItemForm from './list_item_form';

const mSTP = state => {
  debugger;
  return {
    listItem: {
      title: '',
      body: '',
      list_id: '',
      game_id: ''
    },
    formType: 'Add Item'
  }
}

const mDTP = dispatch => ({
  action: listItem => dispatch(createListItem(listItem))
})

export default connect(mSTP, mDTP)(ListItemForm);