import { connect } from 'react-redux';
import { createListItemComment, requestListItemComments } from '../../actions/list_item_comment_actions';
import CommentForm from './comment_form';

const mSTP = (state, ownProps) => {
  return {
    comment: {
      body: '',
      user_id: state.session.id,
      list_item_id: ownProps.listItemId
    }
  }
}

const mDTP = dispatch => ({
  action: comment => dispatch(createListItemComment(comment)),
  requestComments: () => dispatch(requestListItemComments())
})

export default connect(mSTP, mDTP)(CommentForm);