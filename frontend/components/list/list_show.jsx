import React from 'react';

class ListShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.requestList(this.props.match.params.listId)
  }

  render() {
    const { list } = this.props
    // debugger;

    let bodyParagraphs = []
    if (list.body) {
      bodyParagraphs = list.body.split("\n")
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
            <li>author username</li>
            <li>•</li>
            <li>last edited</li>
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
      </div>
    </div>
  }
}

export default ListShow;
