import React from 'react';
import { Link, Routes, Route, useNavigate, Redirect } from 'react-router-dom';

class ListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.list;
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.errors.list = []
    this.props.action(this.state)
      // .then(() => (this.props.history.push(`/lists/mylists`)))
      .then(() => {
        if(this.props.formType === 'Create Freaklist') {
          return this.props.history.push(`/lists/mylists`)
        } else {
          return this.props.history.push(`/lists/${this.props.list.id}`)
        }
      })
  }

  renderErrors() {
    // debugger;
    return (
      <ul>
        {this.props.errors.list.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    // debugger;
    return <div className='main-content'>
      <h1 className='list-form-title'>{this.props.formType}</h1>


      <form onSubmit={this.handleSubmit} className='list-form'>
        <h2 className='list-form-err'>{this.renderErrors()}</h2> 
        {/* {this.props.errors.list = []} */}

        <table>
          <tbody>
            <tr>
              <th colSpan="2">Step 1. Title and Description.</th>
            </tr>

            <tr>
              <td>Title:</td>
              <td>
                <input
                type="text"
                value={this.state.title}
                onChange={this.update('title')}
              />
              </td>
            </tr>

            <tr>
              <td>Description:</td>
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
              <td><input type="submit" value='Save &amp; Continue To Step 2' /></td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  }
}

export default ListForm;