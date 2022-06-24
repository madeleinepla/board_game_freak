import React from 'react';
import { Link } from 'react-router-dom';

class ListShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    // this.props.requestUsers();
    // debugger;
    this.props.requestList(this.props.match.params.listId);
  }

  render() {
    // const { list, author } = this.props
    const { list } = this.props
    // debugger;

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
            <li>author name</li>
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

        <button className='list-edit-btn'><Link to={`/lists/${list.id}/edit`}>Edit Description</Link></button>
        <button className='list-item-new-btn'><Link to={`/lists/${list.id}/list_items/new`}>+ Add Item</Link></button>
      </div>

      
      
      <p>List item 1</p>
      <p>List item 2</p>
      <p>List item 3</p>
    </div>
  }
}

export default ListShow;
