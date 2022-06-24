import React from 'react';
import { Link } from 'react-router-dom';

class ListItemShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.requestListItem(this.props.match.params.listItemId);
  }

  render() {
    const { listItem } = this.props
    // debugger;

    let bodyParagraphs = []
    if (listItem.body) {
      bodyParagraphs = listItem.body.split("\n")
    }

    return <div className='main-content'>
      <div className='list-item'>
        <div className='list-item-thumbnail'>
          image

        </div>

        <div className='list-item-main'>

          <div className='list-item-info'>
            <h1>
              {list.title}
            </h1>

            <div>
              <h2>Prof Pic</h2>

              <ul>
                <li>author name</li>
                <li>{listItem.author ? listItem.author.username : ''}</li>
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

          <button>Like</button>
          <button className='list-item-edit-btn'><Link to={`/list_items/${listItem.id}/edit`}>Edit</Link></button>
          <button className='list-item-delete-btn'>Delete</button>
        </div>
      </div>
    </div>
  }
}

export default ListItemShow;
