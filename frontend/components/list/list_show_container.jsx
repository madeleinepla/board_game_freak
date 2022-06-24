import { connect } from 'react-redux';
import ListShow from './list_show';
import { requestList } from '../../actions/list_actions';
import { selectList } from '../../reducers/selectors';

const mSTP = (state, { match }) => {
  const listId = parseInt(match.params.listId);
  const list = selectList(state.entities, listId);

  // debugger;
  return {
    listId,
    list
  }
}

const mDTP = dispatch => ({
  requestList: (listId) => dispatch(requestList(listId))
})

export default connect(mSTP, mDTP)(ListShow);