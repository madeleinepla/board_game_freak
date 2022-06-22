import React from 'react';

class ListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.list;
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value })
  }

  handleSubmit() {
    this.props.action(this.state);
  }

  render() {
    return <div className='main-content'>
      <h1 className='list-form-title'>{this.props.formType}</h1>

      <form onSubmit={this.handleSubmit} className='list-form'>
        <table>
          <tr>
            <th colSpan="2">Step 1. Title and Description.</th>
          </tr>

          <tr>
            <th>Title:</th>
            <td>
              <input
              type="text"
              value={this.state.title}
              onChange={this.update('title')}
            />
            </td>
          </tr>

          <tr>
            <th>Description:</th>
            <td>
              <textarea
              value={this.state.improvement}
              rows="30" 
              cols="90"
              onChange={this.update('improvement')}
            />
            </td>
          </tr>

          <tr>
            <th></th>
            <td><input type="submit" value='Save &amp; Continue To Step 2' /></td>
          </tr>
        </table>
      </form>
    </div>
  }
}

export default ListForm;