import { connect } from 'react-redux';
import { requestList } from '../../actions/list_actions';
import { createListComment, requestListComments } from '../../actions/list_comment_actions';
import CommentForm from './comment_form';

const mSTP = (state, ownProps) => {
  return {
    comment: {
      body: '',
      user_id: state.session.id,
      list_id: ownProps.listId
    }
  }
}

const mDTP = dispatch => ({
  action: comment => dispatch(createListComment(comment)),
  requestListComments: () => dispatch(requestListComments())
})

export default connect(mSTP, mDTP)(CommentForm);