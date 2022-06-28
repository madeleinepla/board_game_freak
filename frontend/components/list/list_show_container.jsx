import { connect } from 'react-redux';
import ListShow from './list_show';
import { likeList, requestList, unlikeList } from '../../actions/list_actions';
import { selectList } from '../../reducers/selectors';
import { deleteListItem } from '../../actions/list_item_actions';

const mSTP = (state, { match }) => {
  // debugger;
  const listId = parseInt(match.params.listId);
  const list = selectList(state.entities, listId);
  const currentUserId = state.session.id;

  return {
    listId,
    list,
    currentUserId
  }
}

const mDTP = dispatch => ({
  requestList: (listId) => dispatch(requestList(listId)),
  deleteListItem: (listId, listItemId) => dispatch(deleteListItem(listId, listItemId)),
  likeList: (listId) => dispatch(likeList(listId)),
  unlikeList: (listId) => dispatch(unlikeList(listId))
})

export default connect(mSTP, mDTP)(ListShow);