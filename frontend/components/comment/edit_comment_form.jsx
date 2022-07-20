import React from 'react';
import { connect } from 'react-redux';
import { requestListComment, requestListComments, updateListComment } from '../../actions/list_comment_actions';
import CommentForm from './comment_form';

class EditCommentForm extends React.Component {
  componentDidMount() {
    this.props.requestListComment(this.props.commentId)
  }

  render() {
    const { action, comment, actionType, currentUserId, requestComments } = this.props;
    // debugger;

    if (!comment) return null;
    return (
      <CommentForm
        action={action}
        comment={comment}
        actionType={actionType}
        currentUserId={currentUserId}
        requestComments={requestComments}
      />
    );
  }
}

const mSTP = (state, ownProps) => {
  // debugger
  return {
    comment: state.entities.listComments[ownProps.commentId],
    commentId: ownProps.commentId,
    actionType: "edit",
    currentUserId: state.session.id,
  }
}

const mDTP = dispatch => ({
  action: comment => dispatch(updateListComment(comment)),
  requestListComment: (commentId) => dispatch(requestListComment(commentId)),
  requestComments: () => dispatch(requestListComments())
})

export default connect(mSTP, mDTP)(EditCommentForm);
