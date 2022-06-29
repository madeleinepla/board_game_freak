import { connect } from 'react-redux';
import ListShow from './list_show';
import { deleteList, likeList, requestList, unlikeList } from '../../actions/list_actions';
import { selectList } from '../../reducers/selectors';
import { deleteListItem, likeItem, unlikeItem } from '../../actions/list_item_actions';

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
  deleteList: (listId) => dispatch(deleteList(listId)),
  likeList: (listId) => dispatch(likeList(listId)),
  unlikeList: (listId) => dispatch(unlikeList(listId)),
  deleteListItem: (listId, listItemId) => dispatch(deleteListItem(listId, listItemId)),
  likeItem: (listItemId) => dispatch(likeItem(listItemId)),
  unlikeItem: (listItemId) => dispatch(unlikeItem(listItemId)),
})

export default connect(mSTP, mDTP)(ListShow);