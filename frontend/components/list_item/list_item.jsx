import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { useHistory } from "react-router-dom";

const ListItem = ({ order, item, author, currentUserId, deleteListItem, likeItem, unlikeItem }) => {
  let bodyParagraphs = []
  if (item.body) {
    bodyParagraphs = item.body.split("\n")
  }

  let history = useHistory();

  // debugger;
  let likeButtonAction;
  if (currentUserId) {
    if (item.liked_by_current_user) {
      // debugger;
      likeButtonAction = () => {
        return unlikeItem(item.id)
          .then(() => (history.go(0)))
      }
    } else {
      likeButtonAction = () => {
        return likeItem(item.id)
          .then(() => (history.go(0)))
      }
    }
  } else {
    likeButtonAction = () => history.push('/login')
  }

  const handleDelete = () => {
    // deleteListItem(item.list_id, item.id);
    // history.go(0)
    deleteListItem(item.list_id, item.id)
      .then(() => (history.go(0)))
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
              <li>{author.username}</li>
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
        <button onClick={likeButtonAction} className={item.liked_by_current_user ? 'liked' : ''}>
          <FontAwesomeIcon icon={faThumbsUp} /> | {item.likes}
        </button>
        <button className='list-item-edit-btn'><Link to={`/lists/${item.list_id}/list_items/${item.id}/edit`}>Edit</Link></button>
        <button className='list-item-delete-btn' onClick={() => handleDelete()}>Delete</button>
      </div> :
      <div className='list-item-btns'>
        <button onClick={likeButtonAction} className={item.liked_by_current_user ? 'liked' : ''}>
          <FontAwesomeIcon icon={faThumbsUp} /> | {item.likes}
        </button>
      </div>
    }
  </div>
}

export default ListItem;