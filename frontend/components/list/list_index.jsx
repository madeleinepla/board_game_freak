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
  }

  render() {
    const { lists, orderBy } = this.props;
    // debugger;
    return (
      <div className='main-content'>
        <div className='list-index'>
          <h1>{orderBy} FreakLists</h1>
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

                return <li key={i} className='list-listing'>
                  <div >
                    <Link className='list-listing-thumbnail' to={`/lists/${list.id}`}>
                      {
                        list.list_items.map((list_item, i) => {
                          if(i < 3 && list_item.game) {
                            let thumbnailImg = list.list_items[i].game.header_img
                            return <div key={i} className='list-listing-thumbnail-sub'>
                              <img src={thumbnailImg} alt="" />
                            </div>
                          }
                        })
                      }
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
