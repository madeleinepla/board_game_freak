import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';

const ListItem = ({ order, item, author, currentUserId, deleteListItem }) => {
  let bodyParagraphs = []
  if (item.body) {
    bodyParagraphs = item.body.split("\n")
  }

  const handleClick = () => {
    deleteListItem(item.list_id, item.id);
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
        <button><FontAwesomeIcon icon={faThumbsUp} /> likes</button>
        <button className='list-item-edit-btn'><Link to={`/list_items/${item.id}/edit`}>Edit</Link></button>
        <button className='list-item-delete-btn' onClick={() => handleClick()}>Delete</button>
      </div> :
        <div className='list-item-btns'>
        <button><FontAwesomeIcon icon={faThumbsUp} /> likes</button>
      </div>
    }
  </div>
}

export default ListItem;