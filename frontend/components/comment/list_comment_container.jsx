import { connect } from 'react-redux';
import { createListComment, requestListComments } from '../../actions/list_comment_actions';
import CommentForm from './comment_form';

const mSTP = (state, ownProps) => {
  // debugger
  return {
    comment: {
      body: '',
      user_id: state.session.id,
      list_id: ownProps.listId
    },
    currentUserId: state.session.id,
    actionType: "create"
  }
}

const mDTP = dispatch => ({
  action: comment => dispatch(createListComment(comment)),
  requestComments: () => dispatch(requestListComments())
})

export default connect(mSTP, mDTP)(CommentForm);