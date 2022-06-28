import React from 'react';
import { Link } from 'react-router-dom';
// import ListItemShowContainer from '../list_item/list_item_show_container';
import ListItem from '../list_item/list_item'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-regular-svg-icons';

class ListShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.requestList(this.props.match.params.listId);
  }

  render() {
    const { list, currentUserId, deleteListItem, likeList, unlikeList } = this.props
    // debugger;

    if (!(list.body && list.list_items)) return null;

    let bodyParagraphs = []
    if (list.body) {
      bodyParagraphs = list.body.split("\n")
    }

    let editDate = new Date(list.updated_at)
    let now = new Date(Date.now());
    let yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    if (editDate.toDateString() == now.toDateString()) {
      editDate = 'Today';
    } else if (editDate.toDateString() == yesterday.toDateString()) {
      editDate = 'Yesterday';
    } else {
      editDate = editDate.toDateString().split(" ").slice(1, 3).join(" ");
    }

    let likeButtonAction;
    if (list.liked_by_current_user) {
      likeButtonAction = () => unlikeList(list.id);
    } else {
      likeButtonAction = () => likeList(list.id);
    }

    return <div className='main-content'>
      <div className='list-show-header'>
        <div className='list-show-header-thumbnail'>
          image

        </div>

        <div className='list-show-header-info'>
          <h1>
            {list.title}
          </h1>
          <ul>
            {/* <li>author name</li> */}
            <li>{ list.author ? list.author.username : ''}</li>
            <li>•</li>
            <li>Edited {editDate}</li>
          </ul>
        </div>

      </div>
      
      <div className='list-show-body'>
        {
          bodyParagraphs.map((para, i) => {
            return <div key={i}>
              <p key={i}>{para}<br /></p>
            </div>
          })
        }

        {
          list.author.id === currentUserId ?
          <div className='list-btns'>
            <button onClick={likeButtonAction} className={list.liked_by_current_user ? 'liked' : ''}>
              <FontAwesomeIcon icon={faThumbsUp} /> | {list.likes}
            </button>
            <button className='list-edit-btn'><Link to={`/lists/${list.id}/edit`}>Edit Description</Link></button>
            <button className='list-item-new-btn'><Link to={`/lists/${list.id}/list_items/new`}>+ Add Item</Link></button>
          </div> :
          <div className='list-btns'>
            <button onClick={likeButtonAction} className={list.liked_by_current_user ? 'liked' : ''}>
              <FontAwesomeIcon icon={faThumbsUp} /> | {list.likes}
            </button>
          </div>
        }
        
      </div>

      {
        list.list_items.map((item, i) => {
          return <ListItem 
            key={i}
            order={i} 
            item={item} 
            author={list.author} 
            currentUserId={currentUserId} 
            deleteListItem={deleteListItem}
          />
        })
      }
    </div>
  }
}

export default ListShow;
