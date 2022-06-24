import { connect } from 'react-redux';
import ListShow from './list_show';
import { requestList } from '../../actions/list_actions';
import { selectList, selectUser } from '../../reducers/selectors';
// import { requestUsers } from '../../actions/user_actions';

const mSTP = (state, { match }) => {
  const listId = parseInt(match.params.listId);
  const list = selectList(state.entities, listId);
  // const users = Object.values(state.entities.users)
  // const author = selectUser(state.entities, list.author_id)
  // debugger;
  return {
    listId,
    list,
    // author
  }
}

const mDTP = dispatch => ({
  requestList: (listId) => dispatch(requestList(listId)),
  // requestUsers: () => dispatch(requestUsers())
})

export default connect(mSTP, mDTP)(ListShow);