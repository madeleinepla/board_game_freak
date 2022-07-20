import React from 'react';
import EditCommentForm from './edit_comment_form';
// import { Link } from 'react-router-dom';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
    this.editCommentHandler = this.editCommentHandler.bind(this)
  }

  componentDidMount() {
    // debugger;
    this.props.requestListComments();
  }

  editCommentHandler(commentId) {
    const comment = document.getElementById(`comment-${commentId}`)
    comment.classList.remove("comment-form-hidden");
    comment.classList.add("comment-form-show");
    // const area = document.getElementById('comment-form-text-area')
    // area.value = this.state.body;
    // area.rows = '8';
    // const btns = document.getElementById('comment-form-btns')
    // btns.style.display = "block"
  }

  render() {
    let { comments } = this.props;
    // debugger;
    return (
      <div>
        <div className='comment-index'>

          <ul className='list-comments'>
            {
              comments.map((comment, i) => {
                let postDate = new Date(comment.created_at)
                let now = new Date(Date.now());
                let yesterday = new Date();
                yesterday.setDate(yesterday.getDate() - 1);

                // debugger;
                if (postDate.toDateString() == now.toDateString()) {
                  postDate = 'Today';
                } else if (postDate.toDateString() == yesterday.toDateString()) {
                  postDate = 'Yesterday';
                } else {
                  postDate = postDate.toDateString().split(" ").slice(1, 3).join(" ");
                }

                return <div key={i}>
                  <li  className='single-comment'>
                    <div className='comment-thumbnail'>
                      prof pic
                    </div>
  
                    <div className='comment-body'>
                      <ul>
                        <li>{comment.user.username}</li>
                        <li>•</li>
                        <li>{postDate}</li>
                      </ul>
                      <p>{comment.body}</p>
                      <div>
                        <button onClick={() => this.editCommentHandler(comment.id)}>
                          Edit
                        </button>
                        <button onClick={() => this.props.deleteListComment(comment.id)}>Delete</button>
                      </div>
                    </div>
                  </li>

                  <div id={`comment-${comment.id}`} className="comment-form-hidden">
                    <EditCommentForm
                      commentId={comment.id}
                    />
                  </div>
                </div>
              })
            }



          </ul>
        </div>
      </div>
    )
  }
}

export default CommentIndex;
