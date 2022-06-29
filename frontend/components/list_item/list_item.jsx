import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { useHistory } from "react-router-dom";

const ListItem = ({ order, item, author, currentUserId, deleteListItem, likeItem, unlikeItem }) => {
  const [liked, updateLike] = useState(item.liked_by_current_user);
  
  useEffect(() => {
    // debugger
    const likeBtn = document.getElementById('like-btn')
    console.log(liked)
    console.log(likeBtn)
    if (liked) {
      // likeBtn.classList.add("liked")
      // likeBtn.style.color = 'blue'
      console.log(likeBtn)
    } else {
      // likeBtn.classList.remove("liked")
      // likeBtn.style.color = 'black'
      console.log(likeBtn)
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
    if (item.liked_by_current_user) {
      likeButtonAction = () => {
        return unlikeItem(item.id)
          .then(() => updateLike(!liked))
      }
    } else {
      likeButtonAction = () => {
        return likeItem(item.id)
          .then(() => updateLike(!liked))
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
        <button onClick={likeButtonAction} id="like-btn" className={item.liked_by_current_user ? 'liked' : ''}>
          <FontAwesomeIcon icon={faThumbsUp} /> | {item.likes}
        </button>
        <button className='list-item-edit-btn'><Link to={`/lists/${item.list_id}/list_items/${item.id}/edit`}>Edit</Link></button>
        <button className='list-item-delete-btn' onClick={() => handleDelete()}>Delete</button>
      </div> :
      <div className='list-item-btns'>
          <button onClick={likeButtonAction} id="like-btn" className={item.liked_by_current_user ? 'liked' : ''}>
          <FontAwesomeIcon icon={faThumbsUp} /> | {item.likes}
        </button>
      </div>
    }
  </div>
}

export default ListItem;