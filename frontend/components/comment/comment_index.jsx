import React from 'react';
// import { Link } from 'react-router-dom';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // debugger;
    this.props.requestListComments();
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

                return <li key={i} className='single-comment'>
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
                      <button onClick={() => this.props.deleteListComment(comment.id)}>Delete</button>
                    </div>
                  </div>
                </li>
              })
            }

          </ul>
        </div>
      </div>
    )
  }
}

export default CommentIndex;
