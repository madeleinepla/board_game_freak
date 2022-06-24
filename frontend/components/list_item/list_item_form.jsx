import React from 'react';
// import { Link, Routes, Route, useNavigate, Redirect } from 'react-router-dom';

class ListItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.listItem;
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
    this.props.history.push('/lists');

  }

  render() {
    debugger;
    return <div className='main-content'>
      <h1 className='list-item-form-title'>{this.props.formType}</h1>

      <form onSubmit={this.handleSubmit} className='list-item-form'>
        <table>
          <tbody>
            <tr>
              <td>Enter Board Game:</td>
              <td>
                <input
                  type="text"
                  value={this.state.title}
                  onChange={this.update('title')}
                />
              </td>
            </tr>

            <tr>
              <td>Comments:</td>
              <td>
                <textarea
                  value={this.state.body}
                  rows="30"
                  cols="90"
                  onChange={this.update('body')}
                />
              </td>
            </tr>

            <tr>
              <th></th>
              <td><input type="submit" value='Save' /></td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  }
}

export default ListItemForm;