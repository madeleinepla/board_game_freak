import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import ListItemCommentContainer from '../comment/list_item_comment_container';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {liked: this.props.item.liked}
  }
  
  render() {
    const { author, item, currentUserId, deleteListItem, history, likeItem, order, unlikeItem } = this.props;

    // debugger;
    let bodyParagraphs = []
    if (item.body) {
      bodyParagraphs = item.body.split("\n")
    }

    let likeButtonAction;
    if (currentUserId) {
      if (item.liked_by_current_user) {
        likeButtonAction = () => {
          unlikeItem(item.id)
            .then(() => this.props.requestList(this.props.item.list_id)) 
        }
      } else {
        likeButtonAction = () => {
          likeItem(item.id)
            .then(() => this.props.requestList(this.props.item.list_id)) 
        }
      }
    } else {
      likeButtonAction = () => history.push('/login')
    }

    const handleDelete = () => {
      deleteListItem(item.list_id, item.id)
        .then(() => this.props.requestList(this.props.item.list_id))
    }

    // debugger;
    return <div>
      <div className='list-item'>
        <div className='list-item-thumbnail'>
          <img
            src={item.game.header_img}
          />
        </div>

        <div className='list-item-main'>

          <div className='list-item-info'>
            <h1>
              {order + 1}. {item.title}
            </h1>

            <div>
              <h2 className='list-item-prof-pic'>Prof Pic</h2>

              <ul>
                <li>
                  <Link to={`/users/${author.id}`}>{author.username}</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className='list-item-body'>
            {
              bodyParagraphs.map((para, i) => {
                return <div key={i}>
                  <p key={i}>{para}<br /></p>
                </div>
              })
            }
          </div>

        </div>
      </div>
      {
        author.id === currentUserId ?
        <div className='list-item-btns'>
          <button onClick={likeButtonAction} id={`like-btn-${item.id}`} className={item.liked_by_current_user ? 'liked' : ''}>
            <FontAwesomeIcon icon={faThumbsUp} /> | {item.likes}
          </button>

          <button className='list-item-edit-btn'><Link to={`/lists/${item.list_id}/list_items/${item.id}/edit`}>Edit</Link></button>
          
          <button className='list-item-delete-btn' onClick={() => handleDelete()}>Delete</button>
        </div> :
        <div className='list-item-btns'>
          <button onClick={likeButtonAction} id={`like-btn-${item.id}`} className={item.liked_by_current_user ? 'liked' : ''}>
            <FontAwesomeIcon icon={faThumbsUp} /> | {item.likes}
          </button>
        </div>
      }
    </div>
  }
}

export default ListItem;
