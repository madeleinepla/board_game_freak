import ListIndex from './list_index';
import { connect } from 'react-redux';
import { requestLists } from '../../actions/list_actions';
// import { requestUsers } from '../../actions/user_actions';

const mapStateToProps = (state) => {
  // debugger
  return {
    lists: Object.values(state.entities.lists),
    // users: Object.values(state.entities.users)
  }
}

const mapDispatchToProps = (dispatch) => ({
  requestLists: () => dispatch(requestLists()),
  // requestUsers: () => dispatch(requestUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(ListIndex);
