import { connect } from 'react-redux';
import UserShow from './user_show';
import { requestUser } from '../../actions/user_actions';

const mSTP = (state, { match }) => {
  const userId = match.params.userId
  const user = state.entities.users[userId]
  debugger;
  return {
    user: user,
    currentUserId: state.session.id,
  }
}

const mDTP = dispatch => ({
  requestUser: (userId) => dispatch(requestUser(userId))
})

export default connect(mSTP, mDTP)(UserShow);