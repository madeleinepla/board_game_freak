import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { useHistory } from "react-router-dom";

const ListItem = ({ order, item, author, currentUserId, deleteListItem, likeItem, unlikeItem }) => {
  debugger;
  const [liked, updateLike] = useState(item.liked_by_current_user);
  const [likes, updateLikes] = useState(item.likes)
  debugger;
  useEffect(() => {
    // debugger
    const likeBtn = document.getElementById(`like-btn-${item.id}`)
    if (liked) {
      likeBtn.classList.add("liked");
    } else {
      likeBtn.classList.remove("liked");
    }
    
    // debugger
  },[liked]);

  let bodyParagraphs = []
  if (item.body) {
    bodyParagraphs = item.body.split("\n")
  }

  let history = useHistory();

  // debugger;
  let likeButtonAction;
  if (currentUserId) {
    if (liked) {
      likeButtonAction = () => {
        unlikeItem(item.id)
        updateLike(!liked)
        updateLikes(likes - 1)
      }
    } else {
      likeButtonAction = () => {
        likeItem(item.id)
        updateLike(!liked)
        updateLikes(likes + 1)
      }
    }
  } else {
    likeButtonAction = () => history.push('/login')
  }

  const handleDelete = () => {
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
          <button onClick={likeButtonAction} id={`like-btn-${item.id}`} className={item.liked_by_current_user ? 'liked' : ''}>
          <FontAwesomeIcon icon={faThumbsUp} /> | {likes}
        </button>
        <button className='list-item-edit-btn'><Link to={`/lists/${item.list_id}/list_items/${item.id}/edit`}>Edit</Link></button>
        <button className='list-item-delete-btn' onClick={() => handleDelete()}>Delete</button>
      </div> :
      <div className='list-item-btns'>
          <button onClick={likeButtonAction} id={`like-btn-${item.id}`} className={item.liked_by_current_user ? 'liked' : ''}>
          <FontAwesomeIcon icon={faThumbsUp} /> | {likes}
        </button>
      </div>
    }
  </div>
}

export default ListItem;