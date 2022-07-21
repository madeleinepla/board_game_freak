import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.comment;
    // this.state = {
    //   id: props.comment.id,
    //   user_id: props.comment.user_id,
    //   list_id: props.comment.list_id,
    //   body: props.comment.body

    // }
    this.collapsed = true;
    this.idTag = "tag";

    if (props.actionType == 'create') {
      this.idTag = `${props.actionType}-${props.listId}`
      this.collapsed = true;
    } else {
      this.idTag = `${props.actionType}-${props.comment.id}`
      this.collapsed = false;
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleExpand = this.handleExpand.bind(this)
    this.handleCollapse = this.handleCollapse.bind(this)
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value })
  }

  handleExpand() {
    // debugger
    if (!this.props.currentUserId) {
      this.props.history.push('/login')
    }
    this.collapsed = false
    const area = document.getElementById(`comment-form-text-area-${this.idTag}`)
    area.value = this.state.body;
    area.rows = '8';
    const btns = document.getElementById(`comment-form-btns-${this.idTag}`)
    btns.style.display = "block"
  }

  handleCollapse(e) {
    e.preventDefault();
    if (this.props.actionType == "create") {
      this.collapsed = true
      const area = document.getElementById(`comment-form-text-area-${this.idTag}`)
      area.value = 'Say something nice.'
      area.rows = '1';
      const btns = document.getElementById(`comment-form-btns-${this.idTag}`)
      btns.style.display = "none"
    } else {
      const comment = document.getElementById(`comment-${this.props.comment.id}`)
      comment.classList.remove("comment-form-show");
      comment.classList.add("comment-form-hidden");
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    // debugger
    this.handleCollapse(e);
    this.setState({ body: '' })
    this.props.action(this.state)
      // .then(()=> this.setState({ body: '' }))
      .then(() => (this.props.requestComments()))
  }

  render() {
    return <div className='comment-form'>
      <h2 className='comment-form-prof-pic'>Prof Pic</h2>

      <form onSubmit={this.handleSubmit} className='comment-form-input'>
        {
          this.collapsed ?
          <textarea
            id={`comment-form-text-area-${this.idTag}`}
            className='comment-form-text-area'
            value='Say something nice.'
            rows="1"
            cols="150"
            onClick={this.handleExpand}
            onChange={this.update('body')}
          /> :
            <textarea
              id={`comment-form-text-area-${this.idTag}`}
              className='comment-form-text-area'
              value={this.state.body}
              rows="8"
              cols="150"
              onChange={this.update('body')}
            />

        }
        <div 
          id={`comment-form-btns-${this.idTag}`} 
          className="comment-form-btns" 
          style={this.props.actionType == "create" ? { display: 'none' } : { display: 'block' }}>
            <input className='comment-submit-btn' type="submit" value='Post'/>
            <button onClick={this.handleCollapse}>Cancel</button>
        </div>
      </form>
    </div>
  }
}

export default CommentForm;