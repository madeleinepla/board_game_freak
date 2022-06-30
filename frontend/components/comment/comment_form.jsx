import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    // this.state = props.comment;
    this.state = props.comment;
    this.collapsed = true;
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleExpand = this.handleExpand.bind(this)
    this.handleCollapse = this.handleCollapse.bind(this)
  }

  // componentDidMount() {
  //   debugger;
  //   this.props.requestList(this.props.listId)
  // }

  update(field) {
    return e => this.setState({ [field]: e.target.value })
  }

  handleExpand() {
    this.collapsed = false
    const area = document.getElementById('comment-form-text-area')
    area.value = this.state.body;
    area.rows = '8';
    const btns = document.getElementById('comment-form-btns')
    btns.style.display = "block"
  }

  handleCollapse(e) {
    e.preventDefault();
    this.collapsed = true
    const area = document.getElementById('comment-form-text-area')
    area.value = 'Say something nice.'
    area.rows = '1';
    const btns = document.getElementById('comment-form-btns')
    btns.style.display = "none"
  }

  handleSubmit(e) {
    e.preventDefault();
    this.handleCollapse(e);
    this.props.action(this.state)
      .then(() => (this.props.requestListComments()))
  }

  render() {
    return <div className='comment-form'>
      <h2 className='comment-form-prof-pic'>Prof Pic</h2>

      <form onSubmit={this.handleSubmit} className='comment-form-input'>
        {
          this.collapsed ?
          <textarea
            id='comment-form-text-area'
            value='Say something nice.'
            rows="1"
            cols="150"
            onClick={this.handleExpand}
            onChange={this.update('body')}
          /> :
            <textarea
              id='comment-form-text-area'
              value={this.state.body}
              rows="8"
              cols="150"
              onChange={this.update('body')}
            />

        }
        <div id='comment-form-btns' style={{display: 'none'}}>
          <input type="submit" value='Post' />
          <button onClick={this.handleCollapse}>Cancel</button>
        </div>
      </form>
    </div>
  }
}

export default CommentForm;