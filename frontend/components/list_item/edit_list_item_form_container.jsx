import React from 'react';
import { connect } from 'react-redux';
import { requestGames } from '../../actions/game_actions';
import { updateListItem } from '../../actions/list_item_actions';
import { requestList } from '../../actions/list_actions';
import ListItemForm from './list_item_form';

class EditListItemForm extends React.Component {
  componentDidMount() {
    this.props.requestList(this.props.match.params.listId)
  }

  render() {
    const { errors, listItem, formType, games, action, requestGames } = this.props;
    // debugger;

    if (!listItem) return null;
    return (
      <ListItemForm
      errors={errors}
      listItem={listItem}
      formType={formType}
      games={games}
      action={action}
      requestGames={requestGames}
      />
    );
  }
}

const mSTP = (state, { match }) => {
  const listId = match.params.listId;
  const listItemId = match.params.listItemId;
  const listItem = '';
  debugger;
  return {
    errors: state.errors,
    listItem: state.entities.lists[listId],
    formType: 'Edit Item',
    listId,
    listItemId
  }
}

const mDTP = dispatch => ({
  action: (listId, listItem) => dispatch(updateListItem(listId, listItem)),
  requestList: (listId) => dispatch(requestList(listId)),
  requestGames: () => dispatch(requestGames)
})

export default connect(mSTP, mDTP)(EditListItemForm);
