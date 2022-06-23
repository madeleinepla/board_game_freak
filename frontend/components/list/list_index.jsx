import React from 'react';
import { Link } from 'react-router-dom';

class ListIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestLists();
    this.props.requestUsers();
  }

  render() {
    const { lists, users } = this.props;
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
                postDate = postDate.toDateString().split(" ").slice(1,3).join(" ");
                let author = users[list.author_id -1];

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
                      <li>{author ? author.username : ''}</li>
                      <li>•</li>
                      <li>? likes</li>
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
