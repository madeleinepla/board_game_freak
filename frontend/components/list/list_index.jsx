import React from 'react';
import { Link } from 'react-router-dom';

class ListIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestLists();
  }

  render() {
    const { lists } = this.props;
    // debugger;
    return (
      <div className='main-content'>
        <div className='list-index'>
          <h1>FreakLists</h1>
          <button className='list-new-btn'><Link to={'/lists/new'}>+ Create FreakList</Link></button>
          
          <ul className='list-listings'>
            {
              lists.map((list, i) => {
                // debugger;
                return <li key={i} className='list-listing'>
                  <div className='list-listing-thumbnail'>
                    image
                  </div>

                  <div className='list-listing-info'>
                    <h2>{list.title}</h2>
                    <ul>
                      <li>author</li>
                      <li>•</li>
                      <li>likes</li>
                      <li>•</li>
                      <li>time posted</li>
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
