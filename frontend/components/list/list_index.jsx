import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';

class ListIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestLists();
    // this.props.requestUsers();
  }

  render() {
    const { lists } = this.props;
    // debugger;
    return (
      <div className='main-content'>
        <div className='list-index'>
          <h1>FreakLists</h1>
          <button className='list-new-btn'><Link to={'/lists/new'}>+ Create FreakList</Link></button>
          
          <ul className='list-listings'>
            {
              lists.map((list, i) => {
                let postDate = new Date(list.created_at)
                let now = new Date(Date.now());
                let yesterday = new Date();
                yesterday.setDate(yesterday.getDate() - 1);

                // debugger;
                if (postDate.toDateString() == now.toDateString()) {
                  postDate = 'Today';
                } else if (postDate.toDateString() == yesterday.toDateString()) {
                  postDate = 'Yesterday';
                } else {
                  postDate = postDate.toDateString().split(" ").slice(1,3).join(" ");
                }

                // debugger;
                return <li key={i} className='list-listing'>
                  <div className='list-listing-thumbnail'>
                    <Link to={`/lists/${list.id}`}>
                      image
                    </Link>
                  </div>

                  <div className='list-listing-info'>
                    <h2><Link to={`/lists/${list.id}`}>{list.title}</Link></h2>
                    <ul>
                      <li>{list.author.username}</li>
                      <li>•</li>
                      <li><FontAwesomeIcon icon={faThumbsUp} /> likes</li>
                      <li>•</li>
                      <li>{postDate}</li>
                    </ul>
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

export default ListIndex;
