import React from 'react';
import { connect } from 'react-redux';
import { requestGames } from '../../actions/game_actions';
import { updateListItem, requestListItem } from '../../actions/list_item_actions';
import ListItemForm from './list_item_form';

class EditListItemForm extends React.Component {
  componentDidMount() {
    this.props.requestListItem(this.props.listId, this.props.listItemId)
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
      match={this.props.match}
      history={this.props.history}
      />
    );
  }
}

const mSTP = (state, { match }) => {
  const listId = match.params.listId;
  const listItemId = match.params.listItemId;
  const listItem = state.entities.listItems[listItemId]
  const games = Object.values(state.entities.games).sort((a, b) => (a.title > b.title ? 1 : -1))

  // debugger;
  return {
    errors: state.errors,
    listItem: listItem,
    formType: 'Edit Item',
    games: games,
    listId,
    listItemId
  }
}

const mDTP = dispatch => ({
  action: (listId, listItem) => dispatch(updateListItem(listId, listItem)),
  requestListItem: (listId, listItemId) => dispatch(requestListItem(listId, listItemId)),
  requestGames: () => dispatch(requestGames())
})

export default connect(mSTP, mDTP)(EditListItemForm);
