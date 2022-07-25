import CommentIndex from './comment_index';
import { connect } from 'react-redux';
import { requestListComments, deleteListComment } from '../../actions/list_comment_actions';
import { requestList } from '../../actions/list_actions';
// import { requestUsers } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  const { listId } = ownProps;
  const comments = Object.values(state.entities.listComments).filter(comment => comment.list_id === listId)

  return {
    comments,
    listId,
    currentUserId: state.session.id
  }
}

const mapDispatchToProps = (dispatch) => ({
  requestListComments: () => dispatch(requestListComments()),
  requestList: (listId) => dispatch(requestList(listId)),
  deleteListComment: (commentId) => dispatch(deleteListComment(commentId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);
